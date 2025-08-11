import { Loader } from "@/components";
import EmptyState from "@/components/empty-state/empty-state";
import { CreateProductDialog } from "@/features/products/components";
import { ProductsTable } from "@/features/products/components/products-table/products-table";
import { useProducts } from "@/features/products/products.api";

export function ProductsPage() {
  const { data: products, isLoading } = useProducts();

  if (isLoading) {
    return (
      <div className="flex w-full items-center justify-center">
        <Loader size="xl" />
      </div>
    );
  }

  if (!products) {
    return <EmptyState message="No products available" />;
  }

  return (
    <div>
      {/* PRODUCTS LIST */}
      <CreateProductDialog />
      <ProductsTable />
    </div>
  );
}
