import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const products = await prisma.product.findMany({
      include: {
        variants: {
          where: { isDefault: true },
          include: {
            emiPlans: true
          }
        }
      }
    });

    const formattedProducts = products.map((p) => {
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
        promoImage: p.promoImage || '',
        mrp: defaultVariant?.mrp || 0,
        price: defaultVariant?.price || 0,
        discountPercent,
        rating: p.rating,
        isNew: p.isNew,
        startingEmi: startingEmi === Infinity ? 0 : startingEmi
      };
    });

    return NextResponse.json(formattedProducts);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
  }
}
