import { ProductSummary, FaqType, TestimonialType } from '@/types';
import { Suspense } from 'react';
import { ProductGridSkeleton } from '@/components/Skeletons';
import HomeClient from '@/components/HomeClient';

async function getProducts() {
  const res = await fetch(`${process.env.VERCEL_URL ? 'https://'+process.env.VERCEL_URL : 'http://localhost:3000'}/api/products`, { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to fetch products');
  return res.json() as Promise<ProductSummary[]>;
}

async function getFaqs() {
  const res = await fetch(`${process.env.VERCEL_URL ? 'https://'+process.env.VERCEL_URL : 'http://localhost:3000'}/api/faqs`, { cache: 'no-store' });
  if (!res.ok) return [];
  return res.json() as Promise<FaqType[]>;
}

async function getTestimonials() {
  const res = await fetch(`${process.env.VERCEL_URL ? 'https://'+process.env.VERCEL_URL : 'http://localhost:3000'}/api/testimonials`, { cache: 'no-store' });
  if (!res.ok) return [];
  return res.json() as Promise<TestimonialType[]>;
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
