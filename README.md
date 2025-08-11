# Admin Dashboard

A modern and responsive admin dashboard built with React and TypeScript, featuring a beautiful UI powered by Tailwind CSS and Shadcn/UI components.

## Features

- 🔐 **Authentication System**: Secure login and registration with JWT
- 📊 **Dashboard Overview**: Key metrics and statistics at a glance
- 📦 **Product Management**:
  - Create, edit, and delete products
  - Categorized by type (Electronics, Clothing, Furniture, Food)
  - Real-time form validation with Zod
  - Structured data management with TypeScript
- 🎨 **Modern UI/UX**:
  - Built with Shadcn/UI components
  - Consistent design language
  - Smooth transitions and animations
- 🚀 **Performance**:
  - Built with Bun for lightning-fast development
  - React Query for efficient data fetching
  - Optimized API calls with caching
- 📱 **Responsive Design**: Optimized for all screen sizes
- 🌙 **Dark Mode**: Built-in dark mode support

## Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Runtime**: Bun
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/UI
- **State Management**: React Query + Zustand
- **Form Handling**: React Hook Form + Zod
- **HTTP Client**: Ky
- **Notifications**: Sonner
- **Icons**: Lucide React

## Getting Started

### Prerequisites

Make sure you have [Bun](https://bun.sh) installed on your machine.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Radinax/admin-dashboard.git
   cd admin-dashboard
   ```

2. Install dependencies:

   ```bash
   bun install
   ```

3. Create a `.env` file in the root directory and add your environment variables:

   ```env
   VITE_API_URL=your_api_url_here
   ```

4. Start the development server:
   ```bash
   bun run dev
   ```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
bun run build
```

### Run Tests

```bash
bun test
```

## Project Structure

```
src/
├── app/                             # 🧭 Main app routing (logical grouping, not SSR)
│   ├── auth/
│   │   ├── LoginPage.tsx            # → /login
│   │   └── RegisterPage.tsx         # → /register
│   └── dashboard/
│       ├── HomePage.tsx             # → /app (dashboard home)
│       ├── ProductsPage.tsx         # → /app/products
│       ├── EditProductPage.tsx      # → /app/products/:id
│       └── SchedulePage.tsx         # → /app/schedule
│
├── components/                      # 🧩 Reusable UI components
│   ├── ui/                          # ← shadcn/ui or custom primitives
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── form.tsx
│   │   ├── sheet.tsx
│   │   ├── sidebar.tsx
│   │   ├── skeleton.tsx
│   │   ├── spinner.tsx
│   │   └── ...
│   │
│   ├── auth/
│   │   └── AuthForm.tsx             # Shared login/register form
│   │
│   ├── layouts/
│   │   ├── DashboardLayout.tsx      # Sidebar + main content
│   │   └── RequireAuth.tsx          # Auth guard wrapper
│   │
│   ├── sidebar/
│   │   ├── AppSidebar.tsx
│   │   ├── AppSidebarTrigger.tsx
│   │   └── AppSidebarSkeleton.tsx
│   │
│   ├── empty-state/
│   │   └── EmptyState.tsx
│   │
│   ├── loader/
│   │   └── Loader.tsx
│   │
│   ├── not-found/
│   │   └── NotFoundPage.tsx
│   │
│   ├── error-boundary-fallback/
│   │   └── ErrorBoundaryFallback.tsx
│   │
│   └── products/
│       ├── ProductsTable.tsx
│       ├── ProductFilter.tsx
│       ├── ProductForm.tsx
│       └── CreateProductDialog.tsx
│
├── features/                        # 🏗️ Feature domains (API, types, logic)
│   ├── auth/
│   │   ├── api/
│   │   │   └── auth.api.ts          # createSession, createAccount, etc.
│   │   ├── types/
│   │   │   └── auth.types.ts        # Zod schemas, CurrentUser, etc.
│   │   └── utils/
│   │       └── index.ts
│   │
│   ├── products/
│   │   ├── api/
│   │   │   └── products.api.ts
│   │   ├── types/
│   │   │   └── products.types.ts
│   │   └── utils/
│   │       └── useProductFilters.ts
│   │
│   └── home/
│       ├── api/
│       │   └── home.api.ts
│       └── types/
│           └── home.types.ts
│
├── lib/                             # 🔧 Core utilities & configs
│   ├── api/
│   │   ├── client.ts                # ky instance
│   │   └── fetch.ts                 # typed fetch wrapper
│   ├── query-client.ts              # React Query client
│   ├── routes.ts                    # ROUTES.login, etc.
│   └── utils.ts                     # cn, format, etc.
│
├── providers/                       # 🏭 Global context providers
│   └── AppProvider.tsx              # Combines Auth, Query, Toast, Router
│
├── hooks/                           # 🔗 Shared custom hooks
│   ├── useDebounce.ts
│   └── useMobile.ts
│
├── types/                           # 📦 Global types (if not in features)
│   └── index.ts
│
├── mock/                            # 🧪 Mock data (for dev/testing)
│   └── products.mock.ts
│
├── assets/                          # 🖼️ Static assets
│   └── vite.svg
│
├── main.tsx                         # 🚀 Entry point
└── index.html                       # 🧱 HTML shell
```

## Features in Detail

### Product Management

The product management system includes:

- **Types**: Electronics, Clothing, Furniture, Food
- **Categories**:
  - Electronics: Smartphones, Laptops, Accessories
  - Clothing: Shirts, Pants, Shoes
  - Furniture: Tables, Chairs, Sofas
  - Food: Snacks, Beverages, Meals
- **Validation**: Comprehensive form validation using Zod
- **Real-time Updates**: Immediate UI updates using React Query
- **Type Safety**: Full TypeScript support with centralized type definitions

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📚 Related Resources

- [Backend Repository](https://github.com/Radinax/admin-dashboard-api)
- [Blog Post: Creating a Backend with Bun and Hono](https://adrian-beria-blog.netlify.app/blog/69_creating-a-backend-with-bun-and-hono/)

---

**Built with ❤️ by [Adrian Beria](https://github.com/Radinax)**
