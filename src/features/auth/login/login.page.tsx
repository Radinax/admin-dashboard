import { useCreateSession } from "@/features/auth/api";
import { AuthForm } from "@/features/auth/components";
import DashboardAuthPage from "@/features/auth/components/layout/dashboard-auth-layout";
import { UserCredentials } from "@/types/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export function LoginPage() {
  let navigate = useNavigate();
  const { mutate, isPending, error } = useCreateSession();

  async function onSubmit(values: UserCredentials) {
    mutate(values, {
      onSuccess: () => {
        toast.success("Login successful");
        navigate("/app");
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
