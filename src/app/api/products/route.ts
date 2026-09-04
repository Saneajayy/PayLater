import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const products = await prisma.product.findMany({
      include: {
        variants: {
          include: {
            emiPlans: true
          }
        }
      }
    });

    const formattedProducts = products.map((p) => {
      const defaultVariant = p.variants.find(v => v.isDefault) || p.variants[0];
      
      let startingEmi = Infinity;
      let totalEmiPlans = 0;
      
      p.variants.forEach(v => {
        totalEmiPlans += v.emiPlans.length;
        v.emiPlans.forEach(plan => {
          if (plan.monthlyAmount < startingEmi) startingEmi = plan.monthlyAmount;
        });
      });
      
      const uniqueColors = Array.from(new Set(p.variants.map(v => v.colorHex)));
      
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
        startingEmi: startingEmi === Infinity ? 0 : startingEmi,
        colors: uniqueColors,
        totalEmiPlans
      };
    });

    return NextResponse.json(formattedProducts);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
  }
}
