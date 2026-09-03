import { z } from 'zod';

export const orderSchema = z.object({
  variantId: z.string(),
  emiPlanId: z.string(),
  customerName: z.string().min(2, "Name must be at least 2 characters"),
  customerPhone: z.string().regex(/^[0-9]{10}$/, "Phone number must be exactly 10 digits"),
});
