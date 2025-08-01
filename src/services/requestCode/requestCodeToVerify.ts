import { VerificationEmail } from "../../emails/verificationEmail";
import { resend } from "../../lib/resend";

export const RequestVerification = async (
  email: string,
  name: string,
  verifyCode: string,
  serviceFor: string
) => {
  try {
    console.log("DATA : ", email, name, verifyCode, serviceFor);

    const response = await resend.emails.send({
      from:
        serviceFor === "emailService"
          ? "NREGA  <no-reply@nregafiles.com>"
          : "NREGA - Reset your password <no-reply@nregafiles.com>",
      to: [email],
      subject:
        serviceFor === "emailService"
          ? "NREGA - Verify your email address"
          : "NREGA - Your Password Reset Code",
      react: VerificationEmail({ name, code: verifyCode, serviceFor })
    });

    // Optional: Log/send response for monitoring
    console.log("Resend response:", response);

    if ("error" in response && response.error) {
      console.error("Resend error:", response.error);
      throw new Error(response.error.message);
    }

    return {
      success: true,
      status: 200,
      message:
        serviceFor === "emailService"
          ? "Verification email sent successfully"
          : "Verfication code sent to you"
    };
  } catch (error: any) {
    // Log detailed error for internal monitoring
    console.error("Email sending failed:", error);

    return {
      success: false,
      status: 500,
      message: "Failed to send verification email"
    };
  }
};
