// api/auth.ts
import { api } from "@/lib/client";
import { fetchData } from "@/lib/fetch";
import {
  LoginData,
  SignupData,
  CurrentUser,
  currentUserSchema,
  loginSchema,
  signupSchema,
} from "@/types/auth";
import { HttpStatusCode } from "@/utils/http-status";
import { useMutation, useQuery } from "@tanstack/react-query";
import { HTTPError } from "ky";
import { z } from "zod";

/**
 * Register a new user
 */
export async function createAccount(
  data: SignupData
): Promise<{ id: string; username: string; email: string }> {
  try {
    signupSchema.parse(data); // Validate before request

    const result = await api.post("signup", { json: data }).json<{
      user?: { id: string; username: string; email: string };
      error?: string;
    }>();

    if (result.user) return result.user;

    throw new Error(result.error || "Failed to create account");
  } catch (error) {
    if (error instanceof HTTPError) {
      let message = "Failed to create account";
      try {
        const body = await error.response.json<{ error?: string }>();
        message = body.error || message;
      } catch {
        message = await error.response.text();
      }
      throw new Error(message);
    }

    if (error instanceof z.ZodError) {
      throw new Error(
        `Validation failed: ${error.errors.map((e) => e.message).join(", ")}`
      );
    }

    throw new Error("Could not connect to the server. Please try again.");
  }
}

export function useCreateAccount() {
  return useMutation({
    mutationKey: ["auth", "signup"],
    mutationFn: createAccount,
    onSuccess: (user) => {
      console.log("Account created:", user);
    },
    onError: (error: Error) => {
      console.error("Signup failed:", error.message);
    },
  });
}

/**
 * Log in and create session
 */
export async function createSession(
  data: LoginData
): Promise<{ id: string; username: string; email: string }> {
  try {
    loginSchema.parse(data);

    const result = await api.post("signin", { json: data }).json<{
      user?: { id: string; username: string; email: string };
      error?: string;
    }>();

    if (result.user) return result.user;

    throw new Error(result.error || "Invalid credentials");
  } catch (error) {
    if (error instanceof HTTPError) {
      let message = "Invalid credentials";
      try {
        const body = await error.response.json<{ error?: string }>();
        message = body.error || message;
      } catch {
        message = await error.response.text();
      }
      throw new Error(message);
    }

    throw new Error("Could not connect to the server. Please try again.");
  }
}

export function useCreateSession() {
  return useMutation({
    mutationKey: ["auth", "signin"],
    mutationFn: createSession,
    onError: (error: Error) => {
      console.error("Login failed:", error.message);
    },
    onSuccess: (data) => {
      console.log("Logged in:", data);
    },
  });
}

/**
 * Sign out
 */
export async function deleteSession() {
  try {
    const response = await api.post("signout");
    if (!response.ok) {
      const message = await response.text();
      throw new Error(`Failed to sign out: ${message}`);
    }
  } catch (error) {
    if (error instanceof HTTPError) {
      const message = await error.response.text();
      throw new Error(`HTTP error during sign-out: ${message}`);
    }
    throw new Error("Could not delete session. Network error.");
  }
}

/**
 * Get current user
 */
export async function getCurrentUser(): Promise<CurrentUser | null> {
  try {
    const data = await fetchData<CurrentUser>("me", currentUserSchema);
    return data;
  } catch (error) {
    if (error instanceof HTTPError) {
      if (
        error.response.status === HttpStatusCode.Unauthorized ||
        error.response.status === HttpStatusCode.Forbidden
      ) {
        return null;
      }
      console.debug("Failed to fetch current user:", error);
      throw error;
    }
    console.error("Network error fetching current user:", error);
    throw error;
  }
}

export function useMeQuery() {
  return useQuery({
    queryKey: ["auth", "me"],
    queryFn: getCurrentUser,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
    retry: false,
  });
}

export function useCurrentUser() {
  const { data } = useMeQuery();
  return data;
}
