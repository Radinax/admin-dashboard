import { AuthForm } from "@/components/auth/auth-form";
import { useCreateSession } from "@/features/auth/api";
import DashboardAuthPage from "@/features/auth/components/layout/dashboard-auth-layout";
import { ROUTES } from "@/lib/routes";
import { LoginData } from "@/types/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

function LoginPage() {
  let navigate = useNavigate();
  const { mutate, isPending, error } = useCreateSession();

  async function onSubmit(values: LoginData) {
    mutate(values, {
      onSuccess: () => {
        toast.success("Login successful");
        navigate(ROUTES.home);
      },
      onError: (err: Error) => {
        toast.error(`Login failed: ${err.message}`);
      },
    });
  }

  return (
    <DashboardAuthPage type="login">
      <AuthForm
        type="Login"
        onSubmit={onSubmit}
        isSubmitting={isPending}
        submitError={error?.message}
      />
    </DashboardAuthPage>
  );
}

export default LoginPage;
