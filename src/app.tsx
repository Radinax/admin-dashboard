import { Loader } from "@/components";
import { ErrorBoundaryFallback } from "@/components/error-boundary-fallback/error-boundary-fallback";
import { DashboardLayout } from "@/components/layouts/dashboard-layout";
import HomeRoute from "@/routes/private/home/home";
import Landing from "@/routes/public/landing/landing";
import Login from "@/routes/public/login/login";
import Register from "@/routes/public/register/register";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Toaster } from "sonner";

/**
 *
 * username: admin
 * email: admin@admin.com
 * pass: Admin345678.
 */
export default function App() {
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
        <Router>
          <Routes>
            <Route path="/" element={<Landing />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/app" element={<DashboardLayout />}>
              <Route path="" element={<HomeRoute />} />
            </Route>
          </Routes>
        </Router>
      </ErrorBoundary>
    </Suspense>
  );
}
