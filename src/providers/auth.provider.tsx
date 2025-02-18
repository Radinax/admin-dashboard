import { useCurrentUser } from "@/features/auth/api";
import { CurrentUser } from "@/types/auth";
import { PropsWithChildren, createContext } from "react";

type AuthContextProps = {
  currentUser?: CurrentUser | null;
};

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export default function AuthProvider({ children }: PropsWithChildren) {
  const currentUser = useCurrentUser();

  console.log({ currentUser });

  if (!currentUser) {
    console.log("Failed to get user");
  }

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
}
