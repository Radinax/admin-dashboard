import { createAccount } from "@/api/auth";
import { Link } from "@/components";
import { RegisterForm } from "@/pages/register";
import { UserCredentials } from "@/types/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export default function Register() {
  const navigate = useNavigate();

  function onSubmit(values: UserCredentials) {
    const op = createAccount(values.username, values.email, values.password);
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
      <RegisterForm onSubmit={onSubmit} />
      <Link className="underline text-xs" to="/register">
        Click to login
      </Link>
    </div>
  );
}
