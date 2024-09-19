export type ProductFilters = {
  category?: "first" | "second" | "third";
  maxPrice?: number;
  search?: string;
};

export type Product = {
  id: number;
  name: string;
  category: "first" | "second" | "third";
  price: number;
  image: string;
};
