import { ProductSummary, FaqType, TestimonialType } from '@/types';
import { Suspense } from 'react';
import { ProductGridSkeleton } from '@/components/Skeletons';
import HomeClient from '@/components/HomeClient';

import prisma from '@/lib/prisma';

async function getProducts(): Promise<ProductSummary[]> {
  const products = await prisma.product.findMany({
    include: {
      variants: {
        where: { isDefault: true },
        include: { emiPlans: true }
      }
    }
  });

  return products.map((p) => {
    const defaultVariant = p.variants[0];
    const startingEmi = defaultVariant?.emiPlans.reduce((min, plan) => 
      plan.monthlyAmount < min ? plan.monthlyAmount : min, Infinity
    ) || 0;
    
    let discountPercent = 0;
    if (defaultVariant && defaultVariant.mrp > 0) {
       discountPercent = Math.round(((defaultVariant.mrp - defaultVariant.price) / defaultVariant.mrp) * 100);
    }

    return {
      slug: p.slug,
      name: p.name,
      brand: p.brand,
      image: defaultVariant?.imageUrl || '',
      promoImage: (p as any).promoImage || '',
      mrp: defaultVariant?.mrp || 0,
      price: defaultVariant?.price || 0,
      discountPercent,
      rating: p.rating,
      isNew: p.isNew,
      startingEmi: startingEmi === Infinity ? 0 : startingEmi
    };
  });
}

async function getFaqs(): Promise<FaqType[]> {
  const faqs = await prisma.fAQ.findMany({ orderBy: { createdAt: 'asc' } });
  return faqs.map(f => ({
    id: f.id,
    question: f.question,
    answer: f.answer
  }));
}

async function getTestimonials(): Promise<TestimonialType[]> {
  const test = await prisma.testimonial.findMany({ orderBy: { createdAt: 'asc' } });
  return test.map(t => ({
    id: t.id,
    name: t.name,
    avatar: t.avatar,
    text: t.text
  }));
}

export default async function Home() {
  const [products, faqs, testimonials] = await Promise.all([
    getProducts(),
    getFaqs(),
    getTestimonials()
  ]);
  const brands = Array.from(new Set(products.map(p => p.brand)));

  return (
    <main className="min-h-screen bg-background pb-20">
      <Suspense fallback={<ProductGridSkeleton />}>
        <HomeClient initialProducts={products} brands={brands} faqs={faqs} testimonials={testimonials} />
      </Suspense>
    </main>
  );
}
