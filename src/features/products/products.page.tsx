import EmptyState from "@/components/empty-state/empty-state";
import { CreateProductDialog, Row } from "@/features/products/components";
import { useProducts } from "@/features/products/products.api";

export function ProductsPage() {
  const { data: products } = useProducts();
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
