import { createSession } from "@/api/auth";
import { Link } from "@/components";
import { LoginForm } from "@/pages/login";
import { UserCredentials } from "@/types/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export default function Login() {
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
    <div className="flex flex-col items-center gap-4">
      <LoginForm onSubmit={onSubmit} />
      <Link className="underline text-xs" to="/register">
        Click to register account
      </Link>
    </div>
  );
}
