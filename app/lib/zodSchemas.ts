import { z } from "zod";
export const productSchema = z.object({
  name: z.string(),
  description: z.string(),
  status: z.enum(["draft", "published", "archived"]),
  price: z.number().refine((val) => val % 1 !== 0, {
    message: "Price must be a floating-point number.",
  }),
  images: z.array(z.string()).min(1, "At least one image is required"),
  category: z.enum(["men", "women", "kids"]),
  isFeatured: z.boolean().optional(),
});