import { z } from "zod";

export const formSchema = z.object({
  username: z
    .string()
    .min(3, "Username must be at least 3 characters long")
    .max(20, "Username must not exceed 20 characters")
    .regex(
      /^[a-zA-Z0-9_]+$/,
      "Username can only contain letters, numbers, and underscores"
    )
    .optional(),

  email: z.string().email("Invalid email address"), // Validates email format

  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(/[\W_]/, "Password must contain at least one special character"),
});

export type UserCredentials = z.infer<typeof formSchema>;

export const currentUserSchema = z.object({
  username: z.string(),
  email: z.string().email("Invalid email address"),
  sessionId: z.string(),
});

export type CurrentUser = z.infer<typeof currentUserSchema>;
