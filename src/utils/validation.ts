import { z } from "zod";

export const signupValidation = z.object({
  name: z.string().min(1, { message: "Invalid first name or last name" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(1)
    .refine(
      (val) =>
        z
          .string()
          .refine(() => true)
          .safeParse(val).success && require("validator").isStrongPassword(val),
      {
        message: "Enter a strong password"
      }
    ),
  panchayatCode: z
    .string()
    .trim()
    .length(10, { message: "Panchayat code must be exactly 10 digits" })
    .regex(/^\d{10}$/, { message: "Panchayat code must contain only digits" })
});

export const updateUserValidation = z
  .object({
    currentPassword: z
      .string()
      .min(1, { message: "Current password is required" }),
    name: z.string().min(1, { message: "Invalid name" }).optional(),
    password: z
      .string()
      .min(1)
      .refine(
        (val) =>
          z
            .string()
            .refine(() => true)
            .safeParse(val).success &&
          require("validator").isStrongPassword(val),
        {
          message: "Enter a strong password"
        }
      )
      .optional()
  })
  .refine((data) => data.name || data.password, {
    message: "At least one field (name or password) must be provided"
  });
