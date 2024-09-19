import { useDebounce } from "@/hooks/use-debounce";
import { useProductFilters } from "@/hooks/use-product-filters";
import { ProductFilters } from "@/types/products";
import { useEffect, useState } from "react";

export default function ProductListFilters() {
  const { search, category, maxPrice, setFilters } = useProductFilters();

  const [localSearch, setLocalSearch] = useState<ProductFilters["search"]>(search);
  const debouncedSearch = useDebounce(localSearch);

  useEffect(() => {
    setFilters({ search: debouncedSearch });
  }, [debouncedSearch]);

  return (
    <div className="flex flex-row gap-2">
      <input
        type="text"
        value={localSearch}
        onChange={(e) => setLocalSearch(e.target.value)}
        placeholder="Search products"
      />
      <select value={category} onChange={(e) => setFilters({ category: e.target.value as ProductFilters["category"] })}>
        <option value="first">First</option>
        <option value="second">Second</option>
        <option value="third">Third</option>
      </select>
      <select
        value={maxPrice}
        onChange={(e) =>
          setFilters({
            maxPrice: e.target.value ? parseInt(e.target.value) : undefined,
          })
        }
      >
        <option value="100">100</option>
        <option value="500">500</option>
        <option value="1000">1000</option>
      </select>
    </div>
  );
}
