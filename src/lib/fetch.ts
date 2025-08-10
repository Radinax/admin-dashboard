import { api } from "@/lib/client";
import { HTTPError } from "ky";
import { ZodSchema } from "zod";

export const fetchData = async <T>(
  url: string,
  schema: ZodSchema<T>
): Promise<T> => {
  let data: unknown;
  try {
    data = await api(url).json();
  } catch (error) {
    if (error instanceof HTTPError) {
      throw new Error(`Failed to fetch ${url}: ${error.response.statusText}`);
    }
    throw new Error(
      `Network or JSON parse error while fetching ${url}: ${error}`
    );
  }

  const result = schema.safeParse(data);
  if (!result.success) {
    throw new Error(
      `Data validation failed for ${url}: ${result.error.message}`
    );
  }

  return result.data;
};

export type QueryOptions<T extends (...args: unknown[]) => unknown> = Omit<
  ReturnType<T>,
  "queryKey" | "queryFn"
>;
