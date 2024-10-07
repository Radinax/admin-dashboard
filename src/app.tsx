import { Loader } from "@/components";
import { ErrorBoundaryFallback } from "@/components/error-boundary-fallback/error-boundary-fallback";
import { DashboardLayout } from "@/components/layouts/dashboard-layout";
import { queryClient } from "@/lib/query-client";
import AuthProvider from "@/providers/auth.provider";
import HomeRoute from "@/routes/private/home/home";
import ProductsRoute from "@/routes/private/products/products";
import ProfileRoute from "@/routes/private/profile/profile";
import Landing from "@/routes/public/landing/landing";
import Login from "@/routes/public/login/login";
import Register from "@/routes/public/register/register";
import { QueryClientProvider } from "@tanstack/react-query";
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
        <QueryClientProvider client={queryClient}>
          <Router>
            <AuthProvider>
              <Routes>
                <Route path="/" element={<Landing />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/register" element={<Register />}></Route>
                <Route path="/app" element={<DashboardLayout />}>
                  <Route path="" element={<HomeRoute />} />
                  <Route path="profile" element={<ProfileRoute />} />
                  <Route path="products" element={<ProductsRoute />} />
                </Route>
              </Routes>
            </AuthProvider>
          </Router>
        </QueryClientProvider>
      </ErrorBoundary>
    </Suspense>
  );
}
