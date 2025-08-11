import { DashboardLayout } from "@/components/layouts/dashboard-layout";
import { RequireAuth } from "@/components/layouts/require-auth-layout";
import { NotFoundPage } from "@/components/not-found/not-found";
import { Spinner } from "@/components/ui/spinner";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

// Lazy-loaded pages
const LoginPage = lazy(() => import("@/app/auth/login-page"));
const RegisterPage = lazy(() => import("@/app/auth/register-page"));
const HomePage = lazy(() => import("@/app/dashboard/home-page"));
const ProductsPage = lazy(() => import("@/app/dashboard/products-page"));
const EditProductPage = lazy(() => import("@/app/dashboard/edit-product-page"));
const SchedulePage = lazy(() => import("@/app/dashboard/schedule-page"));

function Suspended({ children }: { children: React.ReactNode }) {
  return (
    <Suspense
      fallback={
        <div className="flex h-dvh items-center justify-center">
          <Spinner size="lg" />
        </div>
      }
    >
      {children}
    </Suspense>
  );
}

export function RoutesProvider() {
  return (
    <Routes>
      {/* PUBLIC ROUTES */}
      <Route path="/" element={<LoginPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      {/* PROTECTED ROUTES */}
      <Route
        path="/app"
        element={
          <RequireAuth>
            <DashboardLayout />
          </RequireAuth>
        }
      >
        <Route
          index
          element={
            <Suspended>
              <HomePage />
            </Suspended>
          }
        />
        <Route path="products">
          <Route
            index
            element={
              <Suspended>
                <ProductsPage />
              </Suspended>
            }
          />
          <Route
            path=":id"
            element={
              <Suspended>
                <EditProductPage />
              </Suspended>
            }
          />
        </Route>
        <Route
          path="schedule"
          element={
            <Suspended>
              <SchedulePage />
            </Suspended>
          }
        />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
