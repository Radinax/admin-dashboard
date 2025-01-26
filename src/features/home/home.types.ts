import { z } from "zod";

export const productSummarySchema = z.object({
  averagePrice: z.number(),
  highestPrice: z.number(),
  lowestPrice: z.number(),
  count: z.number(),
});

export type ProductSummaryType = z.infer<typeof productSummarySchema>;
