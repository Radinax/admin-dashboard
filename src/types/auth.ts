// types/auth.ts
import { z } from "zod";

// ---------------------
// Shared Primitives
// ---------------------

export const emailSchema = z.string().email("Invalid email address");

export const passwordSchema = z
  .string()
  .min(8, "Password must be at least 8 characters long")
  .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
  .regex(/[a-z]/, "Password must contain at least one lowercase letter")
  .regex(/[0-9]/, "Password must contain at least one number")
  .regex(/[\W_]/, "Password must contain at least one special character");

export const usernameSchema = z
  .string()
  .min(3, "Username must be at least 3 characters long")
  .max(20, "Username must not exceed 20 characters")
  .regex(
    /^[a-zA-Z0-9_]+$/,
    "Username can only contain letters, numbers, and underscores"
  );

// ---------------------
// Login Schema
// ---------------------

export const loginSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});

export type LoginData = z.infer<typeof loginSchema>;

// ---------------------
// Signup Schema
// ---------------------

export const signupSchema = z.object({
  username: usernameSchema.optional(),
  email: emailSchema,
  password: passwordSchema,
});

export type SignupData = z.infer<typeof signupSchema>;

// ---------------------
// Current User
// ---------------------

export const currentUserSchema = z.object({
  id: z.string().uuid().optional(),
  username: z.string(),
  email: z.string().email("Invalid email address"),
  sessionId: z.string(),
});

export type CurrentUser = z.infer<typeof currentUserSchema>;
