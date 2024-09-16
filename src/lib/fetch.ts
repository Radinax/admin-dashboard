import { api } from "@/lib/client";

export async function fetchData<T>(endpoint: string): Promise<T> {
  const response = await api.get(endpoint);
  return await response.json<T>();
}

export type QueryOptions<T extends (...args: unknown[]) => unknown> = Omit<ReturnType<T>, "queryKey" | "queryFn">;
