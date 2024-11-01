import { Loader } from "@/components";
import { ErrorBoundaryFallback } from "@/components/error-boundary-fallback/error-boundary-fallback";
import { queryClient } from "@/lib/query-client";
import AuthProvider from "@/providers/auth.provider";
import { RoutesProvider } from "@/providers/routes-provider";
import { QueryClientProvider } from "@tanstack/react-query";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter as Router } from "react-router-dom";
import { Toaster } from "sonner";

/**
 *
 * username: admin
 * email: admin@admin.com
 * pass: Admin345678.
 */
export default function AppProvider() {
  return (
    <Suspense
      fallback={
        <div className="flex h-screen w-screen items-center justify-center">
          <Loader size="xl" />
        </div>
      }
    >
      <ErrorBoundary FallbackComponent={ErrorBoundaryFallback}>
        <Toaster />
        <QueryClientProvider client={queryClient}>
          <Router>
            <AuthProvider>
              <RoutesProvider />
            </AuthProvider>
          </Router>
        </QueryClientProvider>
      </ErrorBoundary>
    </Suspense>
  );
}
