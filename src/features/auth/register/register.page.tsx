import { useCreateAccount } from "@/features/auth/api";
import { AuthForm } from "@/features/auth/components";
import DashboardAuthPage from "@/features/auth/components/layout/dashboard-auth-layout";
import { SignupData } from "@/types/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export function RegisterPage() {
  const navigate = useNavigate();
  const { mutate, isPending, error } = useCreateAccount();

  function onSubmit(values: SignupData) {
    mutate(values, {
      onSuccess: () => {
        toast.success("You have successfully registered!");
        navigate("/login");
      },
      onError: (err: Error) => {
        toast.error(err.message);
      },
    });
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
