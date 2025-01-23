import { createSession } from "@/features/auth/api";
import { AuthForm } from "@/features/auth/components";
import DashboardAuthPage from "@/features/auth/components/layout/dashboard-auth-layout";
import { UserCredentials } from "@/types/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export function LoginPage() {
  const navigate = useNavigate();

  async function onSubmit(values: UserCredentials) {
    try {
      // Show loading toast
      toast.loading("Authenticating...");

      // Attempt to create a session
      await createSession(values.email, values.password);

      // On success, navigate to the app and show success toast
      toast.success("You have successfully logged in!");
      navigate("/app");
    } catch (error) {
      // Handle errors and show appropriate toast message
      console.error("Login error:", error);
      toast.error(
        "Failed to log in. Please check your credentials and try again."
      );
    } finally {
      // Dismiss the loading toast
      toast.dismiss();
    }
  }

  return (
    <DashboardAuthPage type="login">
      <AuthForm onSubmit={onSubmit} type="Login" />
    </DashboardAuthPage>
  );
}
