// Testing file for data fetching and caching with Suspense in React
import { Suspense, useEffect, useState } from "react";
import { z } from "zod";

export const fetchData = async <T,>(
  url: string,
  schema: z.ZodSchema<T>
): Promise<T> => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
  }
  const data = await response.json();
  const result = schema.safeParse(data);
  if (!result.success) {
    throw new Error(`Data validation failed for ${url}: ${result.error}`);
  }
  return result.data;
};

const cache = new Map<string, any>();

export const useSuspenseData = async <T,>(
  key: string,
  fetcher: () => Promise<T>
) => {
  if (cache.has(key)) {
    const cached = cache.get(key);
    if (cached.data) return cached.data;
    if (cached.error) throw cached.error;
    if (cached.promise) throw cached.promise;
  }

  const promise = fetcher().then(
    (data) => cache.set(key, { data }),
    (error) => cache.set(key, { error })
  );

  cache.set(key, { promise });
  throw promise;
};

const DataSchema = z.array(
  z.object({
    id: z.string(),
    name: z.string(),
    value: z.number(),
  })
);

export type DataType = z.infer<typeof DataSchema>;

export const getData = () => fetchData("/api/data", DataSchema);

export const Page = () => {
  const [data, setData] = useState<DataType>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    const loadedData = async () => {
      try {
        const result = await getData();
        setData(result);
        setError(null);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };
    loadedData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Title</h1>
      <p>{data.map((d) => d.name)}</p>
    </div>
  );
};

export const PageWithSuspense = () => {
  const data = useSuspenseData("dataKey", getData);
  return (
    <div>
      <h1>Title</h1>
      <p>{JSON.stringify(data)}</p>
    </div>
  );
};

export const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PageWithSuspense />
    </Suspense>
  );
};
