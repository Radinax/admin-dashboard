import { DefaultOptions, QueryClient } from "@tanstack/react-query";

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
