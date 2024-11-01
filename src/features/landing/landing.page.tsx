import { Link } from "@/components";

export function LandingPage() {
  return (
    <div className="flex flex-col m-14 justify-center items-center">
      <div className="py-8">
        <h1>Landing page</h1>
      </div>
      <div className="py-8">
        <p>
          Welcome to the landing page of the application, you can Register if you don't have an account, if you do,
          please Login
        </p>
      </div>
      <div className="flex gap-4">
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </div>
  );
}
