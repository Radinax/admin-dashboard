# React + TypeScript + Vite + CSR

API: https://github.com/Radinax/admin-dashboard-api

Dashboard with custom auth using shadcn components.

# Install

```bash
bun install
```

# To run

```bash
bun run dev
```

# File Structure

The structure follows a feature based pattern where each feature would have its own associated api, components, pages and routes.

src/
┣ components/
┃ ┣ empty-state/
┃ ┃ ┗ empty-state.tsx
┃ ┣ error-boundary-fallback/
┃ ┃ ┗ error-boundary-fallback.tsx
┃ ┣ layouts/
┃ ┃ ┗ dashboard-layout.tsx
┃ ┣ link/
┃ ┃ ┗ link.tsx
┃ ┣ loader/
┃ ┃ ┗ loader.tsx
┃ ┣ product-filter/
┃ ┃ ┗ product-filter.component.tsx
┃ ┣ sidebar/
┃ ┃ ┣ app-sidebar-nav-user.tsx
┃ ┃ ┗ app-sidebar.tsx
┃ ┣ ui/
┃ ┃ ┣ avatar.tsx
┃ ┃ ┣ button.tsx
┃ ┃ ┣ card.tsx
┃ ┃ ┣ dialog.tsx
┃ ┃ ┣ form.tsx
┃ ┃ ┣ input.tsx
┃ ┃ ┣ label.tsx
┃ ┃ ┣ separator.tsx
┃ ┃ ┣ sheet.tsx
┃ ┃ ┣ sidebar.tsx
┃ ┃ ┣ skeleton.tsx
┃ ┃ ┣ table.tsx
┃ ┃ ┗ tooltip.tsx
┃ ┗ index.ts
┣ features/
┃ ┣ auth/
┃ ┃ ┣ api/
┃ ┃ ┃ ┣ auth.api.ts
┃ ┃ ┃ ┗ index.ts
┃ ┃ ┣ components/
┃ ┃ ┃ ┣ auth-form/
┃ ┃ ┃ ┃ ┗ auth-form.tsx
┃ ┃ ┃ ┗ index.ts
┃ ┃ ┣ login/
┃ ┃ ┃ ┗ login.page.tsx
┃ ┃ ┣ register/
┃ ┃ ┃ ┗ register.page.tsx
┃ ┃ ┣ auth.types.ts
┃ ┃ ┗ index.ts
┃ ┣ home/
┃ ┃ ┣ home.page.tsx
┃ ┃ ┗ index.ts
┃ ┣ landing/
┃ ┃ ┣ index.ts
┃ ┃ ┗ landing.page.tsx
┃ ┗ products/
┃ ┣ components/
┃ ┃ ┃ ┣ create-product-dialog/
┃ ┃ ┃ ┃ ┗ create-product-dialog.tsx
┃ ┃ ┃ ┣ products-table/
┃ ┃ ┃ ┃ ┗ products-table.tsx
┃ ┃ ┃ ┣ row/
┃ ┃ ┃ ┃ ┗ row.component.tsx
┃ ┃ ┃ ┗ index.ts
┃ ┣ index.ts
┃ ┣ products.api.ts
┃ ┣ products.page.tsx
┃ ┗ products.types.ts
┣ hooks/
┃ ┣ use-debounce.ts
┃ ┣ use-mobile.tsx
┃ ┗ use-product-filters.ts
┣ lib/
┃ ┣ client.ts
┃ ┣ env.ts
┃ ┣ fetch.ts
┃ ┣ query-client.ts
┃ ┗ utils.ts
┣ mock/
┃ ┣ products.api.ts
┃ ┗ products.ts
┣ providers/
┃ ┣ app-provider.tsx
┃ ┣ auth.provider.tsx
┃ ┗ routes-provider.tsx
┣ types/
┃ ┣ auth.ts
┃ ┗ products.ts
┣ utils/
┃ ┣ find-unique-char.ts
┃ ┗ http-status.ts
┣ index.css
┣ main.tsx
┣ test-utils.tsx
┗ vite-env.d.ts
