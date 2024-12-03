import {
  Product,
  ProductId,
  ProductSchema,
  ProductsSchema,
} from "@/features/products/products.types";
import { api } from "@/lib/client";
import { fetchData } from "@/lib/fetch";
import { MutationConfig, QueryConfig, queryClient } from "@/lib/query-client";
import { HttpStatusCode } from "@/utils/http-status";
import { queryOptions, useMutation, useQuery } from "@tanstack/react-query";

export async function createProduct({ ...products }: Product) {
  const response = await api.post("products/create", {
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

// Define fetcher
export async function fetchProducts(): Promise<Product[]> {
  const data = await fetchData("products");
  const result = ProductsSchema.safeParse(data);
  if (!result.success) {
    throw new Error("Failed to validate product data");
  }
  return result.data;
}
// Define query options for products
export const getProductsQueryOptions = () => {
  return queryOptions({
    queryKey: ["get-products"],
    queryFn: fetchProducts,
  });
};
type UseProductsOptions = {
  queryConfig?: QueryConfig<typeof getProductsQueryOptions>;
};
// Custom hook to get all products
export function useProducts({ queryConfig }: UseProductsOptions = {}) {
  return useQuery({
    ...getProductsQueryOptions(),
    ...queryConfig,
  });
}

/**
 *  GET PRODUCT BY ID
 */

// Define fetcher
export async function fetchProductById({
  productId,
}: ProductId): Promise<Product | null> {
  const data = await fetchData(`products/${productId}`);
  const result = ProductSchema.safeParse(data);
  if (result.success) return result.data;
  return null;
}
// Define query options to get product by id
export function getProductByIdQueryOptions(productId: string) {
  return queryOptions({
    queryKey: [`get-product/${productId}`],
    queryFn: () => fetchProductById({ productId }),
  });
}
type UseProductByIdOptions = {
  productId: string;
  queryConfig?: QueryConfig<typeof getProductByIdQueryOptions>;
};
// Custom hook to get product by id
export function useProductById({
  queryConfig,
  productId,
}: UseProductByIdOptions) {
  return useQuery({
    ...getProductByIdQueryOptions(productId),
    ...queryConfig,
  });
}

/**
 * DELETE PRODUCT
 */
export async function deleteProductById({ productId }: ProductId) {
  try {
    await api.delete(`products/${productId}`);
  } catch (error) {
    console.error("Failed to delete product:", error);
    throw new Error("Could not delete product. Please try again later.");
  }
}
type UseDeleteConfigOptions = {
  mutationConfig?: MutationConfig<typeof deleteProductById>;
};
export const useDeleteProductById = ({
  mutationConfig,
}: UseDeleteConfigOptions = {}) => {
  const { onSuccess, onError, ...restConfig } = mutationConfig || {};

  return useMutation({
    onSuccess: (...args) => {
      queryClient.invalidateQueries({
        // Fetch the get all products query again after mutation
        queryKey: getProductsQueryOptions().queryKey,
      });
      onSuccess?.(...args);
    },
    onError: (error, variables, context) => {
      console.error("Deletion error:", error);
      onError?.(error, variables, context);
    },
    ...restConfig,
    mutationFn: deleteProductById,
  });
};
