import {
  productSummarySchema,
  ProductSummaryType,
} from "@/features/home/home.types";
import { fetchData } from "@/lib/fetch";
import { useQuery } from "@tanstack/react-query";

/**
 *
 * Get products summary
 */
export async function getProductsSummary(): Promise<ProductSummaryType | null> {
  const data = await fetchData("products/summary");
  const result = productSummarySchema.safeParse(data);
  if (result.success) return result.data;
  return null;
}
export function useGetProductsSummaryQuery() {
  return useQuery({
    queryKey: ["products/summary"],
    queryFn: getProductsSummary,
  });
}
export function useGetProductsSummary() {
  const { data } = useGetProductsSummaryQuery();
  return data;
}
