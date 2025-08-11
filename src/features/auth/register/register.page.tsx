import { useCreateAccount } from "@/features/auth/api";
import { AuthForm } from "@/features/auth/components";
import DashboardAuthPage from "@/features/auth/components/layout/dashboard-auth-layout";
import { ROUTES } from "@/lib/routes";
import { SignupData } from "@/types/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

function RegisterPage() {
  const navigate = useNavigate();
  const { mutate, isPending, error } = useCreateAccount();

  function onSubmit(values: SignupData) {
    mutate(values, {
      onSuccess: () => {
        toast.success("You have successfully registered!");
        navigate(ROUTES.login);
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

export default RegisterPage;
