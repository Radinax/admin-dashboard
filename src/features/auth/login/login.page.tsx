import { createSession } from "@/features/auth/api";
import { AuthForm } from "@/features/auth/components";
import DashboardAuthPage from "@/features/auth/components/layout/dashboard-auth-layout";
import { UserCredentials } from "@/types/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export function LoginPage() {
  let navigate = useNavigate();

  async function onSubmit(values: UserCredentials) {
    const promise = createSession(values.email, values.password);
    toast.promise(promise, {
      loading: "Authenticating...",
      success: () => {
        navigate("/app");
        return "You have successfully logged in!";
      },
      error: "Failed to log in. Please check your credentials and try again.",
    });
  }

  return (
    <DashboardAuthPage type="login">
      <AuthForm onSubmit={onSubmit} type="Login" />
    </DashboardAuthPage>
  );
}
