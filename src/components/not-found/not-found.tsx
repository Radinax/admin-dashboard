// features/errors/NotFoundPage.tsx
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center gap-8 px-4 text-center">
      {/* Icon & Title */}
      <div className="flex flex-col items-center gap-4">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted">
          <span className="text-4xl font-bold text-muted-foreground">
            4️⃣0️⃣4️⃣
          </span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Page Not Found
        </h1>
        <p className="max-w-md text-lg text-muted-foreground">
          Sorry, we couldn't find the page you're looking for. It might have
          been removed, renamed, or never existed.
        </p>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-3">
        <Button asChild size="lg" variant="default">
          <Link to="/app">
            <Home className="mr-2 h-5 w-5" />
            Go to Dashboard
          </Link>
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link to="/">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Login
          </Link>
        </Button>
      </div>

      {/* Optional: Decorative background blob (subtle) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 flex select-none justify-center overflow-hidden opacity-20 dark:opacity-10"
      >
        <div className="h-96 w-96 rounded-full bg-gradient-radial from-primary to-transparent blur-3xl"></div>
      </div>
    </div>
  );
}
