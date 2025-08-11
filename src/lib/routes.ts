// lib/routes.ts
export const ROUTES = {
  login: "/login",
  register: "/register",
  home: "/app",
  products: "/app/products",
  productEdit: (id: string | number) => `/app/products/${id}`,
  schedule: "/app/schedule",
} as const;
