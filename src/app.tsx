import Landing from "@/routes/public/landing/landing";
import Login from "@/routes/public/login/login";
import Register from "@/routes/public/register/register";
import { Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Toaster } from "sonner";

export default function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Toaster />
      <Router>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </Router>
    </Suspense>
  );
}
