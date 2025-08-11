import { useMeQuery } from "@/features/auth/api";
import { CurrentUser } from "@/types/auth";
import { PropsWithChildren, createContext, useContext } from "react";

type AuthContextType = {
  currentUser: CurrentUser | null | undefined; // undefined = loading, null = not logged in
  isLoading: boolean;
  isError: boolean;
  isAuthenticated: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

export function AuthProvider({ children }: PropsWithChildren) {
  const { data: currentUser, isLoading, isError } = useMeQuery();

  const isAuthenticated = !!currentUser;

  // Optional: Silence logs in production
  if (process.env.NODE_ENV === "development") {
    console.log("[AuthProvider] isLoading:", isLoading, "user:", currentUser);
  }

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        isLoading,
        isError,
        isAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
