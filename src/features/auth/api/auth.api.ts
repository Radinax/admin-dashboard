import { api } from "@/lib/client";
import { fetchData } from "@/lib/fetch";
import { CurrentUser, currentUserSchema } from "@/types/auth";
import { HttpStatusCode } from "@/utils/http-status";
import { useMutation, useQuery } from "@tanstack/react-query";
import { HTTPError } from "ky";

/**
 *
 * @param username
 * @param password
 * @param email
 * @returns
 */
export async function createAccount(
  username: string | null,
  email: string,
  password: string
): Promise<{ id: string; username: string; email: string }> {
  try {
    const result = await api
      .post("signup", {
        json: { username, email, password },
      })
      .json<{
        user?: { id: string; username: string; email: string };
        error?: string;
      }>();

    if (result.user) {
      return result.user;
    }

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

    throw new Error("Could not connect to the server. Please try again.");
  }
}
export function useCreateAccount() {
  return useMutation({
    mutationKey: ["signup"],
    mutationFn: ({
      username,
      email,
      password,
    }: {
      username: string | null;
      email: string;
      password: string;
    }) => createAccount(username, email, password),
    onSuccess: (user) => {
      console.log("Account created:", user);
    },
    onError: (error: Error) => {
      console.error("Signup failed:", error.message);
    },
  });
}

export type CreateSessionData = {
  email: string;
  password: string;
};
export type UserSession = {
  id: string;
  username: string;
  email: string;
};
/**
 *
 * @param email
 * @param password
 */
export async function createSession(data: CreateSessionData) {
  try {
    const session = await api
      .post("signin", { json: data })
      .json<UserSession>();
    return session;
  } catch (error) {
    if (error instanceof HTTPError) {
      let message = "Invalid credentials";
      try {
        const body = await error.response.json<{ error?: string }>();
        message = body.error || message;
      } catch {
        // fallback if not JSON
        message = await error.response.text();
      }
      throw new Error(message);
    }

    // Network or unexpected error
    throw new Error("Could not connect to the server. Please try again.");
  }
}
export function useCreateSession() {
  return useMutation({
    mutationKey: ["auth", "createSession"],
    mutationFn: createSession,
    onError: (error: Error) => {
      console.error("Error creating session:", error);
    },
    onSuccess: (data) => {
      console.log("Session created successfully:", data);
    },
  });
}

/**
 * Delete user session
 */
export async function deleteSession() {
  try {
    const response = await api.post("signout");

    // Check for successful response status
    if (response.status !== (HttpStatusCode.OK as number)) {
      throw new Error(`Unexpected response status: ${response.status}`);
    }
  } catch (error) {
    // Handle specific error types if necessary
    if (error instanceof HTTPError) {
      const errorMessage = await error.response.text();
      throw new Error(`HTTP error: ${errorMessage}`);
    } else {
      // Re-throw other errors
      throw new Error(`Could not create session`);
    }
  }
}

/**
 *
 * Get current user session
 */
export async function getCurrentUser(): Promise<CurrentUser | null> {
  try {
    const data = await fetchData<CurrentUser>("me", currentUserSchema);
    return data;
  } catch (error) {
    console.debug("Failed to fetch current user:", error);
    return null;
  }
}
export function useMeQuery() {
  return useQuery({
    queryKey: ["users", "me"],
    queryFn: getCurrentUser,
  });
}
export function useCurrentUser() {
  const { data } = useMeQuery();
  return data;
}
