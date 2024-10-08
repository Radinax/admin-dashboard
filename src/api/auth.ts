import { api } from "@/lib/client";
import { fetchData } from "@/lib/fetch";
import { CurrentUser, currentUserSchema } from "@/types/auth";
import { HttpStatusCode } from "@/utils/http-status";
import { useQuery } from "@tanstack/react-query";
import { HTTPError } from "ky";

/**
 *
 * @param username
 * @param password
 * @param email
 * @returns
 */
export async function createAccount(username: string, password: string, email: string) {
  const response = await api.post("signup", {
    json: { username, password, email },
  });

  if (response.status !== (HttpStatusCode.Created as number)) {
    throw new Error("Could not create account");
  }

  return response;
}

/**
 *
 * @param email
 * @param password
 */
export async function createSession(email: string, password: string) {
  try {
    const response = await api.post("signin", {
      json: { email, password },
    });

    // Check for successful response status
    if (response.status !== (HttpStatusCode.Created as number)) {
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
  const data = await fetchData("me");
  const result = currentUserSchema.safeParse(data);
  if (result.success) return result.data;
  return null;
}
export function useMeQuery() {
  return useQuery({
    queryKey: ["users/me"],
    queryFn: getCurrentUser,
  });
}
export function useCurrentUser() {
  const { data } = useMeQuery();
  console.log({ data });
  return data;
}
