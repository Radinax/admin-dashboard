import { api } from "@/lib/client";
import { fetchData } from "@/lib/fetch";
import { Product, ProductsSchema } from "@/types/products";
import { HttpStatusCode } from "@/utils/http-status";
import { useQuery } from "@tanstack/react-query";

export async function createProduct({ ...products }: Product) {
  const response = await api.post("product/create", {
    json: { ...products },
  });

  if (response.status !== (HttpStatusCode.Created as number)) {
    throw new Error("Could not create product");
  }

  return response;
}

/**
 *  GET ALL PRODUCTS
 */
export async function getProducts(): Promise<Product[] | null> {
  const data = await fetchData("products");
  const result = ProductsSchema.safeParse(data);

  if (result.success) return result.data;
  return null;
}
export function useProducts() {
  return useQuery({
    queryKey: ["get-products"],
    queryFn: getProducts,
  });
}
