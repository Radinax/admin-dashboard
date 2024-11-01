import { Link } from "@/components";
import { createAccount } from "@/features/auth/api";
import { AuthForm } from "@/features/auth/components";
import { UserCredentials } from "@/types/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export function RegisterPage() {
  const navigate = useNavigate();

  function onSubmit(values: UserCredentials) {
    const op = createAccount(values.username || values.email, values.email, values.password);
    console.log({ values });
    toast.promise(op, {
      success: () => {
        navigate("/login");
        return "You successfully register";
      },
      error: (error: unknown) => {
        console.log({ error });
        return "Something went wrong while registering";
      },
      loading: "Registering...",
    });
  }
  return (
    <div className="flex flex-col items-center gap-4">
      <AuthForm onSubmit={onSubmit} type="Register" />
      <Link className="underline text-xs" to="/register">
        Click to login
      </Link>
    </div>
  );
}
