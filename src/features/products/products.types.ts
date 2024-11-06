import { z } from "zod";

// Define allowed product types
export const allowedTypes = ["electronics", "clothing", "furniture", "food"] as const;
export type ProductType = (typeof allowedTypes)[number];

export type ProductFilters = {
  category?: "first" | "second" | "third";
  maxPrice?: number;
  search?: string;
};

export const ProductSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Name is required" })
    .trim()
    .max(100, { message: "Name must not exceed 100 characters" }),
  type: z.enum(allowedTypes),
  price: z
    .number()
    .positive({ message: "Price must be a positive number" })
    .max(10000, { message: "Price must not exceed 10,000" }),
  description: z.string().optional(),
});
export const ProductsSchema = ProductSchema.array();

// Type inference for TypeScript
export type Product = z.infer<typeof ProductSchema>;

export type ProductId = {
  productId: string;
};
