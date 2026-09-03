import { notFound } from 'next/navigation';
import ProductDetailClient from './ProductDetailClient';
import { ProductWithVariants } from '@/types';
import { Suspense } from 'react';
import { ProductDetailSkeleton } from '@/components/Skeletons';

import prisma from '@/lib/prisma';

async function getProduct(slug: string): Promise<ProductWithVariants | null> {
  const product = await prisma.product.findUnique({
    where: { slug },
    include: {
      variants: {
        include: {
          emiPlans: {
            orderBy: { tenureMonths: 'asc' }
          }
        }
      }
    }
  });

  return (product as unknown) as ProductWithVariants | null;
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
