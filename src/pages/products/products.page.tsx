import EmptyState from "@/components/empty-state/empty-state";
import { CreateProductDialog } from "@/pages/products";
import { Product } from "@/types/products";

export type ProductsPageProps = {
  products?: Product[] | null;
};

export function ProductsPage({ products }: ProductsPageProps) {
  return (
    <div>
      {/* PRODUCTS LIST */}
      <div>
        {products ? (
          products.map((product) => {
            return <div key={product.name}>{product.name}</div>;
          })
        ) : (
          <EmptyState message="No products available" />
        )}
      </div>
      <CreateProductDialog />
    </div>
  );
}
