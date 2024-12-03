import { allowedTypes, Product } from "@/types/products";

export const products: Product[] = [
  {
    id: 1,
    name: "Bluetooth Headphones",
    type: allowedTypes[0], // electronics
    price: 79.99,
    description: "Wireless Bluetooth headphones with superior sound quality.",
  },
  {
    id: 2,
    name: "Men's T-Shirt",
    type: allowedTypes[1], // clothing
    price: 19.99,
    description: "Comfortable cotton t-shirt available in various colors.",
  },
  {
    id: 3,
    name: "Wooden Dining Table",
    type: allowedTypes[2], // furniture
    price: 499.99,
    description: "Spacious wooden dining table perfect for family gatherings.",
  },
  {
    id: 4,
    name: "Organic Granola Bars",
    type: allowedTypes[3], // food
    price: 12.5,
    description:
      "Healthy organic granola bars, perfect for on-the-go snacking.",
  },
  {
    id: 5,
    name: "Smart LED TV",
    type: allowedTypes[0], // electronics
    price: 899.99,
    description: "Ultra HD Smart LED TV with streaming capabilities.",
  },
];
