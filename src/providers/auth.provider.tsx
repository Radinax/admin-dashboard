import { useCurrentUser } from "@/api/auth";
import { CurrentUser } from "@/types/auth";
import { PropsWithChildren, createContext } from "react";
import { useNavigate } from "react-router-dom";

type AuthContextProps = {
  currentUser?: CurrentUser | null;
};

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export default function AuthProvider({ children }: PropsWithChildren) {
  const currentUser = useCurrentUser();
  const navigate = useNavigate();

  console.log({ currentUser });

  if (!currentUser) {
    navigate("/login");
  }

  return <AuthContext.Provider value={{ currentUser }}>{children}</AuthContext.Provider>;
}
