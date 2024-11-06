import { DefaultOptions, QueryClient, UseMutationOptions } from "@tanstack/react-query";

export const queryConfig = {
  queries: {
    // Avoid re-fetch when focus
    refetchOnWindowFocus: false,
    // If it fails once, it wont try again
    retry: false,
    // Time it refetches
    staleTime: 1000 * 60,
  },
} satisfies DefaultOptions;

// Create a client
export const queryClient = new QueryClient({
  defaultOptions: queryConfig,
});

// POST/DELETE/PATCH config
export type MutationConfig<MutationFnType extends (...args: any) => Promise<any>> = UseMutationOptions<
  ApiFnReturnType<MutationFnType>,
  Error,
  Parameters<MutationFnType>[0]
>;

export type ApiFnReturnType<FnType extends (...args: any) => Promise<any>> = Awaited<ReturnType<FnType>>;

export type QueryConfig<T extends (...args: any[]) => any> = Omit<ReturnType<T>, "queryKey" | "queryFn">;
