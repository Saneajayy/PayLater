import { notFound } from 'next/navigation';
import ProductDetailClient from './ProductDetailClient';
import { ProductWithVariants } from '@/types';
import { Suspense } from 'react';
import { ProductDetailSkeleton } from '@/components/Skeletons';

async function getProduct(slug: string) {
  const res = await fetch(`${process.env.VERCEL_URL ? 'https://'+process.env.VERCEL_URL : 'http://localhost:3000'}/api/products/${slug}`, { cache: 'no-store' });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error('Failed to fetch product');
  return res.json() as Promise<ProductWithVariants>;
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = await getProduct(slug);

  if (!product) {
    notFound();
  }

  return (
    <Suspense fallback={<ProductDetailSkeleton />}>
      <ProductDetailClient product={product} />
    </Suspense>
  );
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = await getProduct(slug);
  if (!product) return { title: 'Product Not Found' };
  
  return {
    title: `${product.name} | PayLater Store`,
    description: product.description,
    openGraph: {
      images: [product.variants[0]?.imageUrl]
    }
  };
}
