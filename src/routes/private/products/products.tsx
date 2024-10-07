import { ProductsPage, useProducts } from "@/pages/products";

export default function ProductsRoute() {
  const { data } = useProducts();
  return (
    <div>
      <h1>Products</h1>
      <ProductsPage products={data} />
    </div>
  );
}
