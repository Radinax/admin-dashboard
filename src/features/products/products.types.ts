import { z } from "zod";

// Define allowed product types
export const allowedTypes = ["electronics", "clothing", "furniture", "food"] as const;
export const allowedCategories = [
  "smartphones",
  "laptops",
  "accessories",
  "shirts",
  "pants",
  "shoes",
  "tables",
  "chairs",
  "sofas",
  "snacks",
  "beverages",
  "meals",
] as const;

export type ProductType = (typeof allowedTypes)[number];
export type ProductCategory = (typeof allowedCategories)[number];

export type ProductFilters = {
  category?: ProductCategory;
  maxPrice?: number;
  search?: string;
};

export const ProductSchema = z.object({
  id: z.string(),
  name: z
    .string()
    .min(3, { message: "Name must be at least 3 characters" })
    .trim()
    .max(100, { message: "Name must not exceed 100 characters" }),
  type: z.enum(allowedTypes, {
    errorMap: () => ({ message: "Please select a valid type" }),
  }),
  price: z
    .number()
    .positive({ message: "Price must be a positive number" })
    .max(10000, { message: "Price must not exceed 10,000" }),
  description: z.string().min(10, { message: "Description must be at least 10 characters" }),
  category: z.enum(allowedCategories, {
    errorMap: () => ({ message: "Please select a valid category" }),
  }),
  stock: z.number().int().nonnegative({ message: "Stock must be zero or positive" }),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});

export const CreateProductSchema = ProductSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const ProductsSchema = ProductSchema.array();

// Type inference for TypeScript
export type Product = z.infer<typeof ProductSchema>;
export type CreateProduct = z.infer<typeof CreateProductSchema>;
export type ProductId = {
  productId: string;
};
