import EmptyState from "@/components/empty-state/empty-state";
import Row from "@/components/row/row.component";
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
          products.map((product, i) => {
            return <Row key={`${product.name + i}`} name={product.name} price={product.price} type={product.type} />;
          })
        ) : (
          <EmptyState message="No products available" />
        )}
      </div>
      <CreateProductDialog />
    </div>
  );
}
