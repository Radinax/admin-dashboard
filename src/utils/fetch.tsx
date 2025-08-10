import { Suspense, useEffect, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { z } from "zod";

/**
 * // Initial Naive Idea (Candidate's starting point, you point out the issues)
const fetchFeaturedProperties = async () => {
  const res = await fetch('/api/featured-properties');
  const data = await res.json();
  return data;
};

const fetchRecentListings = async () => {
  const res = await fetch('/api/recent-listings');
  const data = await res.json();
  return data;
};

const DashboardPage = () => {
  // How would you fetch these?
  // ...
  return (
    <div>
    </div>
  );
};
*/

const PropertySchema = z.object({
  id: z.string(),
  title: z.string(),
  price: z.number(),
  location: z.string(),
  imageUrl: z.string().url(),
});
const FeaturedPropertySchema = z.object({
  featured: z.array(PropertySchema),
});
const RecentListingSchema = z.object({
  recentListing: z.array(PropertySchema),
});

export type Property = z.infer<typeof PropertySchema>;

const getFeaturedProperties = () =>
  fetchAndValidate("/api/featured-properties", FeaturedPropertySchema);
const getRecentListing = () =>
  fetchAndValidate("/api/recent-listings", RecentListingSchema);

const fetchAndValidate = async <T,>(
  url: string,
  schema: Zod.Schema<T>
): Promise<T> => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Failed to fetch ${url}: ${res.statusText}`);
  }
  const data = await res.json();
  const result = schema.safeParse(data);
  if (!result.success) {
    throw new Error(`Data validation failed for ${url}: ${result.error}`);
  }
  return result.data;
};

export const useDebounce = <T,>(value: T, delay: number): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

export const ClientDashboardPage = async ({
  onSelect,
}: {
  onSelect: (id: string) => void;
}) => {
  const [featureData, setFeatureData] =
    useState<z.infer<typeof FeaturedPropertySchema>>();
  const [recentData, setRecentData] =
    useState<z.infer<typeof RecentListingSchema>>();
  const [id, setId] = useState<string | null>(null);
  const debouncedId = useDebounce(id, 500);

  useEffect(() => {
    Promise.all([getRecentListing(), getFeaturedProperties()])
      .then(([recent, featured]) => {
        setFeatureData(featured);
        setRecentData(recent);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    if (debouncedId && onSelect) {
      onSelect(debouncedId);
    }
  }, [debouncedId, onSelect]);

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const id = e.target.value;
    setId(id);
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ErrorBoundary
        FallbackComponent={({ error }) => <div>There was an error {error}</div>}
      >
        <div>
          <div>
            <h1>Featured</h1>
            <div>
              {featureData?.featured.map((f) => (
                <span key={f.id}>{f.title}</span>
              ))}
            </div>
          </div>
          <div>
            <h1>Recent</h1>
            <div>
              {recentData?.recentListing.map((r) => (
                <span key={r.id}>{r.title}</span>
              ))}
            </div>
          </div>
          <select onChange={onChange}>
            <option value="" disabled>
              Select a property type
            </option>
            {featureData?.featured.map((f) => (
              <option key={f.id} value={f.id}>
                {f.title} - ${f.price} ({f.location})
              </option>
            ))}
          </select>
        </div>
      </ErrorBoundary>
    </Suspense>
  );
};
