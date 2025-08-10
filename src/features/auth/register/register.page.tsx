import { useCreateAccount } from "@/features/auth/api";
import { AuthForm } from "@/features/auth/components";
import DashboardAuthPage from "@/features/auth/components/layout/dashboard-auth-layout";
import { UserCredentials } from "@/types/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export function RegisterPage() {
  const navigate = useNavigate();
  const { mutate, isPending, error } = useCreateAccount();

  function onSubmit(values: UserCredentials) {
    mutate(
      {
        username: values.username || null,
        email: values.email,
        password: values.password,
      },
      {
        onSuccess: () => {
          toast.success("You have successfully registered!");
          // Navigate to login (or auto-login and go to /app if you prefer)
          navigate("/login");
        },
        onError: (err: Error) => {
          toast.error(err.message);
        },
      }
    );
  }

  return (
    <DashboardAuthPage type="register">
      <AuthForm
        type="Register"
        onSubmit={onSubmit}
        isSubmitting={isPending}
        submitError={error?.message}
      />
    </DashboardAuthPage>
  );
}
