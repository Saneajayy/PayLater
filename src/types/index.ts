import { Product, Variant, EmiPlan } from '@prisma/client';

export type ProductWithVariants = Product & {
  variants: (Variant & {
    emiPlans: EmiPlan[]
  })[]
};

export type ProductSummary = {
  slug: string;
  name: string;
  brand: string;
  image: string;
  promoImage?: string;
  mrp: number;
  price: number;
  discountPercent: number;
  rating: number;
  isNew: boolean;
  startingEmi: number;
};

export interface FaqType {
  id: string;
  question: string;
  answer: string;
}

export interface TestimonialType {
  id: string;
  name: string;
  avatar: string;
  text: string;
}
