import express, { Request, Response } from "express";
import bcrypt from "bcrypt";
import { prisma } from "@lib/prisma";
import validator from "validator";

import { RequestVerification } from "../../services/requestCode/requestCodeToVerify";
import { userAuth } from "../../middleware/auth";
import { signupValidation, updateUserValidation } from "../../utils/validation";
import { sseService } from "../../services/sseService";
import TokenService from "../../services/tokenService";
import dotenv from "dotenv";
import { createSessionId } from "../../utils/session";
dotenv.config();

const authRouter = express.Router();

interface RequestWithUser extends Request {
  user?: {
    id: string;
    email: string;
    name: string;
    role: string;
    isVerifiedEmail: boolean;
    sessionId: string;
  } | null;
}

authRouter.post("/signup", async (req: Request, res: Response) => {
  try {
    // await signupValidation(req);
    const result = await signupValidation.safeParse(req.body);
    if (!result.success) {
      res.status(400).json({
        message: "Invalid Input",
        errors: result.error.format(),
        code: "VALIDATION_ERROR",
        success: false
      });
      return;
    }
    const { name, email, password } = req.body;
    const role = "viewer";
    const existingUser = await prisma.user.findUnique({
      where: { email },
      select: { id: true }
    });

    if (existingUser) {
      res.status(409).json({
        message: `User already exists with this email : ${email}`,
        code: "INVALID"
      });
    }
    const passwordHash = await bcrypt.hash(password, 10);
    const verificationCode = Math.floor(
      100000 + Math.random() * 900000
    ).toString();

    const user = await prisma.user.create({
      data: {
        name: name,
        password: passwordHash,
        email: email,
        role: role,
        verificationCode,
        verificationExpires: new Date(Date.now() + 10 * 60 * 1000)
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true
      }
    });
    try {
      const serviceFor = "emailService";
      const emailResult = await RequestVerification(
        email,
        name,
        verificationCode,
        serviceFor
      );

      res.status(201).json({
        message:
          "Please verify your account by entering the code sent to you email : " +
          email,
        success: true,
        data: user
      });
      return;
    } catch (emailError) {
      console.error("Email verification error:", emailError);
      res.status(201).json({
        success: true,
        message:
          "Account created successfully, but verification email could not be sent. Please contact support.",
        code: "EMAIL_SEND_FAILED",
        data: user
      });
      return;
    }
  } catch (err) {
    console.error("ERROR :", err);
    res.status(500).json({
      message: "Error Sign up, Please try again later",
      code: "SIGNUP_FAILED",
      success: false
    });
  }
});

authRouter.post("/signin", async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    if (!validator.isEmail(email)) {
      res.status(401).json({
        success: false,
        message: "Invalid Credentials",
        code: "INVALID_CREDENTIALS"
      });
      return;
    }
    const user = await prisma.user.findUnique({
      where: { email },
      select: {
        name: true,
        email: true,
        password: true,
        id: true,
        isVerifiedEmail: true,
        isAdminVerifiedUser: true,
        role: true
      }
    });
    if (!user) {
      res.status(401).json({
        success: false,
        message: "Invalid Credentials",
        code: "INVALID_CREDENTIALS"
      });
      return;
    }

    if (!user.isVerifiedEmail) {
      res.status(403).json({
        success: false,
        message: "Please verify your email address before Signing In",
        code: "USER_NOT_VERIFIED"
      });
      return;
    }
    if (!user.isAdminVerifiedUser) {
      res.status(403).json({
        success: false,
        message: "Contact Admin to verify your account and Sign In",
        code: "USER_NOT_VERIFIED_BY_ADMIN"
      });
      return;
    }
    const isValidPassword = await bcrypt.compare(password, user?.password);
    if (!isValidPassword) {
      res.status(401).json({
        success: false,
        message: "Invalid Credentials",
        code: "INVALID_CREDENTIALS"
      });
      return;
    }

    const existingSessions = await prisma.session.findMany({
      where: {
        userId: user.id,
        expiresAt: { gt: new Date() } // Only active sessions
      }
    });

    if (existingSessions.length > 0) {
      // console.log(
      //   `User ${user.email} logging in from new device. Terminating ${existingSessions.length} existing session(s).`
      // );
      // IMPORTANT: Send logout message to other devices BEFORE deleting sessions

      // Send logout message to all existing sessions
      existingSessions.forEach((session) => {
        const logoutMessage = {
          type: "force-logout" as const,
          reason: "new-device-login",
          sessionId: session.id,
          message:
            "You have been logged out because you signed in from another location.",
          timestamp: new Date().toISOString()
        };
        try {
          sseService.sendToUserExceptSession(
            user.id,
            session.id,
            logoutMessage
          );
        } catch (sseError) {
          console.error("Failed to send SSE logout message:", sseError);
        }
      });

      // Small delay to ensure message is sent before deleting sessions
      await new Promise((resolve) => setTimeout(resolve, 100));
      // Delete all existing sessions
      await prisma.session.deleteMany({
        where: { userId: user.id }
      });
    }

    // await prisma.session.deleteMany({ where: { userId: user.id } });
    const sessionId = createSessionId();
    const expiresAt = new Date(Date.now() + 1000 * 60 * 60 * 12);

    await prisma.session.create({
      data: {
        id: sessionId,
        userId: user.id,
        userAgent: req.headers["user-agent"] || "Unknown",
        ipAddress: req.ip || "Unknown",
        expiresAt
      }
    });
    const token = TokenService.generateToken({
      id: user.id,
      sessionId: sessionId
    });
    // console.log("Token : ", token);
    res.cookie("token", token, {
      maxAge: 12 * 60 * 60 * 1000,
      httpOnly: true,
      secure: true,
      sameSite: "strict"
    });

    res.status(200).json({
      success: true,
      data: {
        id: user.id,
        name: user.name,
        email: user.email,
        isVerifiedEmail: user.isVerifiedEmail,
        isAdminVerifiedUser: user.isAdminVerifiedUser,
        role: user.role,
        sessionId
      },
      message: "Signin successful",
      code: "SIGNIN_SUCCESSFULL"
    });

    return;
  } catch (err) {
    // Type guard for error handling
    const error = err as any;

    // Check for specific error types
    if (error?.code === "ENOTFOUND" || error?.code === "ECONNREFUSED") {
      res.status(503).json({
        success: false,
        message:
          "Network connectivity issue. Please check your connection and try again.",
        code: "NETWORK_ERROR"
      });
      return;
    }

    if (error?.code === "ETIMEDOUT") {
      res.status(504).json({
        success: false,
        message: "Request timed out. Please try again later.",
        code: "TIMEOUT_ERROR"
      });
      return;
    }

    // Check if it's a Prisma error
    if (error?.code?.startsWith("P")) {
      res.status(503).json({
        success: false,
        message:
          "Database service temporarily unavailable. Please try again later.",
        code: "DATABASE_ERROR"
      });
      return;
    }
    res.status(500).json({
      success: false,
      message: "Sign In Failed, Internal server error",
      code: "SIGNIN_FAILED"
    });
  }
});

//request verify email
authRouter.post(
  "/request-verify-email",
  async (req: Request, res: Response) => {
    try {
      const { email } = req.body;

      if (!email || typeof email !== "string") {
        res.status(400).json({
          message: "Email is required",
          code: "EMAIL_MISSING_FIELD"
        });
        return;
      }

      if (!validator.isEmail(email)) {
        res.status(400).json({
          success: false,
          message: "Please enter a valid email address",
          code: "INVALID_EMAIL"
        });
        return;
      }

      // Find the user
      const user = await prisma.user.findUnique({
        where: { email },
        select: {
          id: true,
          name: true,
          email: true,
          isVerifiedEmail: true,
          isAdminVerifiedUser: true
        }
      });

      if (!user) {
        res.status(200).json({
          success: true,
          message:
            "If your email exists in our system, a verification code has been sent.",
          code: "VERIFICATION_CODE_REQUESTED"
        });
        return;
      }

      if (user.isVerifiedEmail) {
        res.status(400).json({
          success: false,
          message: "Email is already verified",
          code: "EMAIL_ALREADY_VERIFIED"
        });
        return;
      }
      if (!user.isAdminVerifiedUser) {
        res.status(403).json({
          success: false,
          message: "Contact Admin to verify your account",
          code: "USER_NOT_VERIFIED_BY_ADMIN"
        });
        return;
      }

      // Generate a new verification code
      const verificationCode = Math.floor(
        100000 + Math.random() * 900000
      ).toString();

      // Update the user with new verification code
      await prisma.user.update({
        where: { email },
        data: {
          verificationCode,
          verificationExpires: new Date(Date.now() + 10 * 60 * 1000) // 10 minutes
        }
      });

      try {
        // Send the email
        const serviceFor = "emailService";
        const emailResult = await RequestVerification(
          email,
          user.name,
          verificationCode,
          serviceFor
        );

        if (!emailResult.success) {
          console.error(
            "Failed to send verification email:",
            emailResult.message
          );
          res.status(500).json({
            success: false,
            message:
              "Failed to send verification email. Please try again later.",
            code: "EMAIL_SEND_FAILED"
          });
          return;
        }

        res.status(200).json({
          message: "Verification code has been sent to your email",
          success: true,
          code: "VERIFICATION_CODE_SENT"
        });
        return;
      } catch (emailError) {
        console.error("Email service error:", emailError);
        res.status(500).json({
          success: false,
          message: "Failed to send verification code. Please try again later.",
          code: "EMAIL_SEND_FAILED"
        });
        return;
      }
    } catch (err) {
      const errorId = Math.random().toString(36).substring(2, 9);
      res.status(500).json({
        message: "Internal server error",
        success: false,
        code: "INTERNAL_SERVER_ERROR",
        errorId,
        ...(process.env.NODE_ENV !== "production" && {
          details: err instanceof Error ? err.message : "Unknown error"
        })
      });
      return;
    }
  }
);

//verify email
authRouter.post("/verify-email", async (req: Request, res: Response) => {
  const { email, code } = req.body;

  if (!email || !code) {
    res.status(400).json({
      message: "Email and code are required",
      code: "EMAIL&CODE_REQUIRED"
    });
    return;
  }

  try {
    const user = await prisma.user.findUnique({
      where: { email },
      select: {
        id: true,
        isVerifiedEmail: true,
        isAdminVerifiedUser: true,
        verificationCode: true,
        verificationExpires: true,
        name: true
      }
    });

    if (!user) {
      res.status(404).json({
        message: "User not found",
        code: "USER_NOT_FOUND"
      });
      return;
    }
    if (user.isVerifiedEmail) {
      res.status(200).json({
        message: "Email is already verified",
        code: "EMAIL_ALREADY_VERIFIED"
      });
      return;
    }

    if (!user.verificationCode) {
      res.status(400).json({
        message:
          "Verification code is missing, Try again requesting code to verify email",
        code: "VERIFICATION_CODE_MISSING"
      });
      return;
    }

    if (!user.verificationExpires) {
      res.status(400).json({
        message:
          "Verification expiry time is missing, please go to verify email page to request code again",
        code: "VERIFICATION_EXPIRY_MISSING"
      });
      return;
    }

    if (user.verificationExpires < new Date()) {
      res.status(400).json({
        message: "Verification code has expired",
        code: "VERIFICATION_CODE_EXPIRED"
      });
      return;
    }

    if (user.verificationCode !== code) {
      res.status(400).json({
        message: "Invalid verification code",
        code: "INVALID_VERIFICATION_CODE"
      });
      return;
    }
    await prisma.user.update({
      where: { email },
      data: {
        isVerifiedEmail: true,
        verificationCode: null,
        verificationExpires: null
      }
    });
    res.status(200).json({
      success: true,
      message:
        "Email verified successfully, Now contact admin to verify your account and Sign in",
      code: "EMAIL_VERIFIED"
    });
    return;
  } catch (err) {
    // console.log("Verification err : ", err);
    res.status(500).json({
      message: "Email Verification Failed due to internal server error",
      success: false,
      code: "EMAIL_VERIFICATION_FAILED"
    });
  }
});

//resend-code
authRouter.post("/resend-code", async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    if (!email || typeof email !== "string") {
      res.status(400).json({
        message: "Email is required",
        code: "EMAIL_MISSING_FIELD"
      });
      return;
    }
    if (!validator.isEmail(email)) {
      res.status(400).json({
        success: false,
        message: "Please enter a valid email address",
        code: "INVALID_EMAIL"
      });
      return;
    }

    // Find the user
    const user = await prisma.user.findUnique({
      where: { email },
      select: {
        id: true,
        name: true,
        email: true,
        isVerifiedEmail: true,
        isAdminVerifiedUser: true
      }
    });

    if (!user) {
      res.status(200).json({
        success: true,
        message:
          "If your email exists in our system, a verification code has been sent.",
        code: "VERIFICATION_CODE_REQUESTED"
      });
      return;
    }

    if (user.isVerifiedEmail) {
      res.status(400).json({
        success: false,
        message: "Email is already verified",
        code: "EMAIL_ALREADY_VERIFIED"
      });
      return;
    }
    if (!user.isAdminVerifiedUser) {
      res.status(403).json({
        success: false,
        message: "Contact Admin to verify your account",
        code: "USER_NOT_VERIFIED_BY_ADMIN"
      });
      return;
    }

    // Generate a new verification code
    const verificationCode = Math.floor(
      100000 + Math.random() * 900000
    ).toString();

    // Update the user with new verification code
    await prisma.user.update({
      where: { email },
      data: {
        verificationCode,
        verificationExpires: new Date(Date.now() + 10 * 60 * 1000) // 10 minutes
      }
    });

    try {
      // Send the email
      const serviceFor = "emailService";
      // SendVerification function need to be implemented
      const emailResult = await RequestVerification(
        email,
        user.name,
        verificationCode,
        serviceFor
      );
      if (!emailResult.success) {
        console.error(
          "Failed to send verification email:",
          emailResult.message
        );
        res.status(500).json({
          success: false,
          message: "Failed to send verification email. Please try again later.",
          code: "EMAIL_SEND_FAILED"
        });
        return;
      }
      res.status(200).json({
        message: "Verification code has been sent to your email",
        success: true,
        code: "VERIFICATION_CODE_SENT"
      });
      return;
    } catch (emailError) {
      console.error("Email service error:", emailError);
      res.status(500).json({
        success: false,
        message: "Failed to send verification code. Please try again later.",
        code: "EMAIL_SEND_FAILED"
      });
      return;
    }
  } catch (err) {
    const errorId = Math.random().toString(36).substring(2, 9);
    res.status(500).json({
      message: "Internal server error",
      success: false,
      code: "INTERNAL_SERVER_ERROR",
      errorId,
      ...(process.env.NODE_ENV !== "production" && {
        details: err instanceof Error ? err.message : "Unknown error"
      })
    });
    return;
  }
});

//forgot-password-request-code
authRouter.post("/forgot-password", async (req: Request, res: Response) => {
  const { email } = req.body;
  // console.log("email : ", email);
  try {
    if (!email || typeof email !== "string") {
      res.status(400).json({
        message: "Email is required",
        code: "EMAIL_MISSING_FIELD",
        success: false
      });
      return;
    }
    if (!validator.isEmail(email)) {
      res.status(400).json({
        message: "Invalid email address",
        code: "INVALID_EMAIL",
        success: false
      });
      return;
    }

    const user = await prisma.user.findUnique({
      where: { email },
      select: { isVerifiedEmail: true, name: true, isAdminVerifiedUser: true }
    });
    if (!user) {
      res.status(200).json({
        success: true,
        message:
          "If your email exists in our system, a verification code has been sent.",
        code: "VERIFICATION_CODE_REQUESTED"
      });
      return;
    }
    if (!user.isVerifiedEmail) {
      res.json({
        message:
          "Please verify your email address before resetting your password",
        code: "EMAIL_NOT_VERIFIED",
        success: false
      });
      return;
    }
    if (!user.isAdminVerifiedUser) {
      res.status(403).json({
        success: false,
        message: "Contact Admin to verify your account",
        code: "USER_NOT_VERIFIED_BY_ADMIN"
      });
      return;
    }
    const verificationCode = Math.floor(
      100000 + Math.random() * 900000
    ).toString();

    await prisma.user.update({
      where: { email },
      data: {
        verificationCode: verificationCode,
        verificationExpires: new Date(Date.now() + 10 * 60 * 1000)
      }
    });

    try {
      const serviceFor = "passwordService";
      const emailResult = await RequestVerification(
        email,
        user.name,
        verificationCode,
        serviceFor
      );

      // console.log("EMAIL RESULT : ", emailResult);

      if (!emailResult.success) {
        res.status(500).json({
          message:
            "Failed to send forgot password code to your email, Please try again later",
          code: "EMAIL_SEND_FAILED",
          success: false
        });
        return;
      }

      res.status(200).json({
        message: "A password reset code has been sent to your email",
        success: true,
        code: "RESET_CODE_SENT"
      });
      return;
    } catch (emailError) {
      console.error("Email service error:", emailError);
      res.status(500).json({
        success: false,
        message: "Failed to send password reset email. Please try again later.",
        code: "EMAIL_SEND_FAILED"
      });
      return;
    }
  } catch (err) {
    res.status(500).json({
      message: "Internal server error, please try again later",
      success: false,
      code: "INTERNAL_SERVER_ERROR"
    });
  }
});

//verify code and add new password
authRouter.post(
  "/forget-password-verify-code",
  async (req: Request, res: Response) => {
    const { email, code, newPassword } = req.body;

    try {
      if (!email) {
        res.status(400).json({
          message: "Email is required",
          success: false,
          code: "EMAIL_REQUIRED"
        });
        return;
      } else if (!code) {
        res.status(400).json({
          message: "Code is required",
          success: false,
          code: "CODE_REQUIRED"
        });
        return;
      } else if (!newPassword) {
        res.status(400).json({
          message: "New password is missing",
          success: false,
          code: "NEW_PASSWORD_REQUIRED"
        });
      }

      if (!validator.isEmail(email)) {
        res.status(400).json({
          message: "Invalid Credentials",
          success: false,
          code: "INVALID_CREDENTIALS"
        });
        return;
      }
      const user = await prisma.user.findUnique({
        where: { email },
        select: { verificationCode: true, verificationExpires: true }
      });

      if (!user) {
        res.status(400).json({
          success: false,
          message:
            "If your email exists in our system, a verification code has been sent.",
          code: "VERIFICATION_CODE_REQUESTED"
        });
        return;
      }

      if (!user.verificationCode) {
        res.status(400).json({
          message: "Verification code is missing",
          code: "VERIFICATION_CODE_MISSING"
        });
        return;
      }

      if (!user.verificationExpires) {
        res.status(400).json({
          message: "Verification expiry time is missing",
          code: "VERIFICATION_EXPIRY_MISSING"
        });
        return;
      }

      if (user.verificationExpires < new Date()) {
        // console.log("Expires At:", user.verificationExpires);
        // console.log("Current Time:", new Date());
        // console.log("Has Expired:", user.verificationExpires < new Date());
        res.status(400).json({
          message: "Verification code has expired",
          code: "VERIFICATION_CODE_EXPIRED"
        });
        return;
      }

      if (user.verificationCode !== code) {
        res.status(400).json({
          message: "Invalid verification code",
          code: "INVALID_VERIFICATION_CODE"
        });
        return;
      }

      if (!validator.isStrongPassword(newPassword)) {
        res.json({
          message: "Enter a strong password",
          success: false,
          code: "WEAK_REQUIRED"
        });
        return;
      }
      const passwordHash = await bcrypt.hash(newPassword, 10);
      await prisma.user.update({
        where: { email },
        data: {
          password: passwordHash,
          verificationCode: null,
          verificationExpires: null
        }
      });
      res.status(200).json({
        success: true,
        message: "Password updated successfully, you can sign in now.",
        code: "PASSWORD_UPDATED"
      });
      return;
    } catch (err) {
      res.status(500).json({
        message: "Internal server error, please try again later",
        success: false,
        code: "INTERNAL_SERVER_ERROR"
      });
    }
  }
);

// Admin user verification endpoint
authRouter.post(
  "/admin/verify-user",
  userAuth,
  async (req: Request, res: Response) => {
    try {
      // The userAuth middleware should have attached the user info to req
      const user = (req as RequestWithUser).user;

      if (!user) {
        res.status(401).json({
          success: false,
          message: "Authentication required",
          code: "UNAUTHORIZED"
        });
        return;
      }

      // Check if the requesting user is an admin
      if (user.role !== "admin") {
        res.status(403).json({
          success: false,
          message: "Access denied. Admin privileges required",
          code: "FORBIDDEN"
        });
        return;
      }

      const { email, userVerification } = req.body;

      // Validate required fields
      if (!email || typeof userVerification !== "boolean") {
        res.status(400).json({
          success: false,
          message: "Email and userVerification (boolean) are required",
          code: "VALIDATION_ERROR"
        });
        return;
      }

      // Validate email format
      if (!validator.isEmail(email)) {
        res.status(400).json({
          success: false,
          message: "Invalid email format",
          code: "INVALID_EMAIL"
        });
        return;
      }

      // Find the user to be verified/unverified
      const targetUser = await prisma.user.findUnique({
        where: { email },
        select: {
          id: true,
          name: true,
          email: true,
          role: true,
          isVerifiedEmail: true,
          isAdminVerifiedUser: true
        }
      });

      if (!targetUser) {
        res.status(404).json({
          success: false,
          message: `User not found with email: ${email}`,
          code: "USER_NOT_FOUND"
        });
        return;
      }

      // Prevent admin from modifying their own verification status
      if (targetUser.email === user.email) {
        res.status(400).json({
          success: false,
          message: "Cannot modify your own verification status",
          code: "SELF_MODIFICATION_DENIED"
        });
        return;
      }

      // Check if the user's email is verified first
      if (!targetUser.isVerifiedEmail) {
        res.status(400).json({
          success: false,
          message:
            "User must verify their email address first before admin verification",
          code: "EMAIL_NOT_VERIFIED"
        });
        return;
      }

      // Check if the verification status is already the same
      if (targetUser.isAdminVerifiedUser === userVerification) {
        res.status(400).json({
          success: false,
          message: `User is already ${userVerification ? "verified" : "unverified"} by admin`,
          code: "NO_CHANGE_REQUIRED"
        });
        return;
      }

      // Update the user's admin verification status
      const updatedUser = await prisma.user.update({
        where: { email },
        data: {
          isAdminVerifiedUser: userVerification,
          updateAt: new Date()
        },
        select: {
          id: true,
          name: true,
          email: true,
          role: true,
          isVerifiedEmail: true,
          isAdminVerifiedUser: true,
          createdAt: true,
          updateAt: true
        }
      });

      // If unverifying user, terminate all their active sessions
      if (!userVerification) {
        const activeSessions = await prisma.session.findMany({
          where: {
            userId: updatedUser.id,
            expiresAt: { gt: new Date() }
          }
        });

        if (activeSessions.length > 0) {
          // Send logout message to all active sessions
          activeSessions.forEach((session) => {
            const logoutMessage = {
              type: "force-logout" as const,
              reason: "admin-unverified",
              sessionId: session.id,
              message:
                "Your account has been unverified by an administrator. Please contact support.",
              timestamp: new Date().toISOString()
            };
            try {
              sseService.sendToUserExceptSession(
                updatedUser.id,
                session.id,
                logoutMessage
              );
            } catch (sseError) {
              console.error("Failed to send SSE logout message:", sseError);
            }
          });

          // Small delay to ensure message is sent before deleting sessions
          await new Promise((resolve) => setTimeout(resolve, 100));

          // Delete all active sessions
          await prisma.session.deleteMany({
            where: { userId: updatedUser.id }
          });
        }
      }

      const action = userVerification ? "verified" : "unverified";
      const actionPast = userVerification ? "verified" : "unverified";

      res.status(200).json({
        success: true,
        message: `User ${updatedUser.name} (${updatedUser.email}) has been ${actionPast} successfully`,
        code: "USER_VERIFICATION_SUCCESS",
        data: {
          user: updatedUser,
          action: action,
          verifiedBy: {
            id: user.id,
            email: user.email,
            name: user.name
          },
          timestamp: new Date().toISOString()
        }
      });
    } catch (err) {
      console.error("Admin user verification error:", err);

      // Type guard for error handling
      const error = err as any;

      // Check for specific error types
      if (error?.code === "ENOTFOUND" || error?.code === "ECONNREFUSED") {
        res.status(503).json({
          success: false,
          message:
            "Network connectivity issue. Please check your connection and try again.",
          code: "NETWORK_ERROR"
        });
        return;
      }

      if (error?.code === "ETIMEDOUT") {
        res.status(504).json({
          success: false,
          message: "Request timed out. Please try again later.",
          code: "TIMEOUT_ERROR"
        });
        return;
      }

      // Check if it's a Prisma error
      if (error?.code?.startsWith("P")) {
        res.status(503).json({
          success: false,
          message:
            "Database service temporarily unavailable. Please try again later.",
          code: "DATABASE_ERROR"
        });
        return;
      }

      res.status(500).json({
        success: false,
        message: "Failed to update user verification status",
        code: "VERIFICATION_UPDATE_FAILED"
      });
    }
  }
);

//get viewers
authRouter.get(
  "/admin/get-all-viewers",
  userAuth,
  async (req: Request, res: Response) => {
    try {
      // The userAuth middleware should have attached the user info to req
      const user = (req as RequestWithUser).user;

      if (!user) {
        res.status(401).json({
          success: false,
          message: "Authentication required",
          code: "UNAUTHORIZED"
        });
        return;
      }

      // Check if the requesting user is an admin
      if (user.role !== "admin") {
        res.status(403).json({
          success: false,
          message: "Access denied. Admin privileges required",
          code: "FORBIDDEN"
        });
        return;
      }

      const allViewers = await prisma.user.findMany({
        where: {
          role: "viewer"
        },
        select: {
          name: true,
          email: true,
          isVerifiedEmail: true,
          isAdminVerifiedUser: true,
          createdAt: true
        }
      });

      res.status(200).json({
        success: true,
        message: "",
        code: "VIEWERS_FETCH_SUCCESS",
        data: allViewers
      });
    } catch (err) {
      console.error("Admin user verification error:", err);

      // Type guard for error handling
      const error = err as any;

      // Check for specific error types
      if (error?.code === "ENOTFOUND" || error?.code === "ECONNREFUSED") {
        res.status(503).json({
          success: false,
          message:
            "Network connectivity issue. Please check your connection and try again.",
          code: "NETWORK_ERROR"
        });
        return;
      }

      if (error?.code === "ETIMEDOUT") {
        res.status(504).json({
          success: false,
          message: "Request timed out. Please try again later.",
          code: "TIMEOUT_ERROR"
        });
        return;
      }

      // Check if it's a Prisma error
      if (error?.code?.startsWith("P")) {
        res.status(503).json({
          success: false,
          message:
            "Database service temporarily unavailable. Please try again later.",
          code: "DATABASE_ERROR"
        });
        return;
      }

      res.status(500).json({
        success: false,
        message: "Failed to update user verification status",
        code: "VERIFICATION_UPDATE_FAILED"
      });
    }
  }
);

authRouter.get("/get-me", userAuth, async (req: Request, res: Response) => {
  try {
    // The userAuth middleware should have attached the user info to req
    // Assuming it adds req.user with at least the user ID
    const user = (req as RequestWithUser).user;

    if (!user) {
      res.status(401).json({
        success: false,
        message: "Unauthorized",
        code: "UNAUTHORIZED"
      });
      return;
    }

    const loggedInuser = await prisma.user.findUnique({
      where: { id: user.id },
      select: {
        id: true,
        name: true,
        email: true,
        isVerifiedEmail: true,
        isAdminVerifiedUser: true,
        role: true
      }
    });

    if (!loggedInuser) {
      res.status(404).json({
        success: false,
        message: "User not found",
        code: "USER_NOT_FOUND"
      });
      return;
    }

    res.status(200).json({
      success: true,
      data: {
        id: loggedInuser.id,
        name: loggedInuser.name,
        email: loggedInuser.email,
        isVerified: loggedInuser.isVerifiedEmail,
        isAdminVerifiedUser: loggedInuser.isAdminVerifiedUser,
        role: loggedInuser.role
      },
      message: "User retrieved successfully",
      code: "USER_RETRIEVED"
    });
  } catch (err) {
    console.error("Get user error:", err);
    res.status(500).json({
      success: false,
      message: "Failed to retrieve user, Internal server error",
      code: "GET_USER_FAILED"
    });
  }
});

//Logout
authRouter.post("/logout", userAuth, async (req: Request, res: Response) => {
  try {
    const user = (req as RequestWithUser).user;
    // console.log("USEr : ", user);
    if (!user || !user.sessionId) {
      res.status(400).json({
        success: false,
        message: "Session ID missing or unauthorized",
        code: "UNAUTHORIZED"
      });
      return;
    }

    // Delete session (with safe fallback)
    try {
      await prisma.session.delete({
        where: { id: user.sessionId }
      });
    } catch (error: any) {
      if (error.code === "P2025") {
        console.warn("Session already deleted.");
      } else {
        throw error;
      }
    }

    // Remove SSE connection (already guarded internally)
    sseService.removeConnection(user.id, user.sessionId);

    // Clear auth cookie
    res.clearCookie("token", {
      httpOnly: true,
      secure: true,
      sameSite: "strict"
    });

    res.status(200).json({
      success: true,
      message: "Logout successful",
      code: "LOGOUT_SUCCESSFUL"
    });
  } catch (err) {
    console.error("Logout Error:", err);
    res.status(500).json({
      success: false,
      message: "Logout failed, internal server error",
      code: "LOGOUT_FAILED"
    });
  }
});

//update user
authRouter.put(
  "/update-profile",
  userAuth,
  async (req: Request, res: Response) => {
    try {
      // Validate input using Zod
      const result = updateUserValidation.safeParse(req.body);
      if (!result.success) {
        res.status(400).json({
          message: "Invalid Input",
          errors: result.error.format(),
          code: "VALIDATION_ERROR",
          success: false
        });
        return;
      }

      // Get user ID from the authenticated user (assuming userAuth middleware adds user to req)
      const userId = (req as any).user?.id; // Adjust based on your auth middleware structure

      if (!userId) {
        res.status(401).json({
          message: "User not authenticated",
          code: "UNAUTHORIZED",
          success: false
        });
        return;
      }

      // Check if user exists and get current password hash
      const existingUser = await prisma.user.findUnique({
        where: { id: userId },
        select: { id: true, name: true, email: true, password: true }
      });

      if (!existingUser) {
        res.status(404).json({
          message: "User not found",
          code: "USER_NOT_FOUND",
          success: false
        });
        return;
      }

      const { currentPassword, name, password } = req.body;

      // Verify current password
      const isCurrentPasswordValid = await bcrypt.compare(
        currentPassword,
        existingUser.password
      );
      if (!isCurrentPasswordValid) {
        res.status(401).json({
          message: "Current password is incorrect",
          code: "INVALID_PASSWORD",
          success: false
        });
        return;
      }

      // Prepare update data
      const updateData: any = {};

      if (name) {
        updateData.name = name;
      }

      if (password) {
        // Hash the new password
        updateData.password = await bcrypt.hash(password, 10);
      }

      // Update user in database
      const updatedUser = await prisma.user.update({
        where: { id: userId },
        data: updateData,
        select: {
          id: true,
          name: true,
          email: true,
          role: true
        }
      });

      res.status(200).json({
        message: "User profile updated successfully",
        success: true,
        data: updatedUser
      });
      return;
    } catch (err) {
      console.error("ERROR :", err);
      res.status(500).json({
        message: "Error updating profile, Please try again later",
        code: "UPDATE_FAILED",
        success: false
      });
    }
  }
);

export default authRouter;
