import { DashboardLayout } from "@/components/layouts/dashboard-layout";
import { LoginPage as Login, RegisterPage as Register } from "@/features/auth";
import { HomePage as Home } from "@/features/home";
import { ProductsPage as Products } from "@/features/products";
import { Route, Routes } from "react-router-dom";

export function RoutesProvider() {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/app" element={<DashboardLayout />}>
        <Route path="" element={<Home />} />
        <Route path="products" element={<Products />} />
      </Route>
    </Routes>
  );
}
