import { createSession } from "@/features/auth/api";
import { AuthForm } from "@/features/auth/components";
import { UserCredentials } from "@/types/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export function LoginPage() {
  const navigate = useNavigate();

  function onSubmit(values: UserCredentials) {
    const op = createSession(values.email, values.password);
    console.log({ values });
    toast.promise(op, {
      success: () => {
        navigate("/app");
        return "You successfully logged in";
      },
      error: (error: unknown) => {
        console.log({ error });
        return "Something went wrong while authenticating";
      },
      loading: "Authenticating...",
    });
  }
  return (
    <div className="flex w-full h-screen justify-center items-center">
      <div className="flex flex-col items-center gap-4">
        <AuthForm onSubmit={onSubmit} type="Login" />
      </div>
    </div>
  );
}
