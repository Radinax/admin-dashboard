import { api } from "@/lib/client";
import { HttpStatusCode } from "@/utils/http-status";
import { useQuery } from "@tanstack/react-query";
import { HTTPError } from "ky";
import { CreateProduct, Product } from "../products.types";

/**
 * Create a new product
 */
export async function createProduct(productData: CreateProduct) {
  try {
    const response = await api.post("products", { json: productData });
    return await response.json<Product>();
  } catch (error) {
    if (error instanceof HTTPError) {
      if (error.response.status === HttpStatusCode.Conflict) {
        throw new Error("Product already exists");
      }
    }
    throw error;
  }
}

/**
 * Get all products
 */
export async function getProducts(): Promise<Product[]> {
  try {
    const response = await api.get("products");
    return await response.json<Product[]>();
  } catch (error) {
    if (error instanceof HTTPError) {
      if (error.response.status === HttpStatusCode.NotFound) {
        return [];
      }
    }
    throw error;
  }
}

/**
 * Get a product by ID
 */
export async function getProduct(id: string): Promise<Product | null> {
  try {
    const response = await api.get(`products/${id}`);
    return await response.json<Product>();
  } catch (error) {
    if (error instanceof HTTPError) {
      if (error.response.status === HttpStatusCode.NotFound) {
        return null;
      }
    }
    throw error;
  }
}

/**
 * Update a product
 */
export async function updateProduct(id: string, productData: Partial<Product>) {
  try {
    const response = await api.put(`products/${id}`, { json: productData });
    return await response.json<Product>();
  } catch (error) {
    if (error instanceof HTTPError) {
      if (error.response.status === HttpStatusCode.NotFound) {
        throw new Error("Product not found");
      }
    }
    throw error;
  }
}

/**
 * Delete a product
 */
export async function deleteProduct(id: string) {
  try {
    await api.delete(`products/${id}`);
  } catch (error) {
    if (error instanceof HTTPError) {
      if (error.response.status === HttpStatusCode.NotFound) {
        throw new Error("Product not found");
      }
    }
    throw error;
  }
}

/**
 * React Query hook for fetching products
 */
export function useProducts() {
  return useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
}

/**
 * React Query hook for fetching a single product
 */
export function useProduct(id: string) {
  return useQuery({
    queryKey: ["products", id],
    queryFn: () => getProduct(id),
  });
}
