import Link from 'next/link';
import { ProductSummary } from '@/types';
import { Star } from 'lucide-react';

export default function ProductCard({ product }: { product: ProductSummary }) {
  let displayImage = product.promoImage || product.image;

  return (
    <Link href={`/products/${product.slug}`} className="group flex flex-col bg-white overflow-hidden rounded-md transition-all duration-300 border border-gray-100 h-full">
      <div className="relative h-64 w-full bg-gray-50/50 flex items-center justify-center overflow-hidden border-b border-gray-100">
        {product.isNew && (
          <span className="absolute top-4 left-4 bg-primary text-white text-[10px] font-bold px-2 py-1  uppercase tracking-wider z-10">
            New
          </span>
        )}
        <img
          src={displayImage}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-5 flex flex-col gap-2 flex-grow">
        <div className="flex items-center gap-1 text-sm text-gray-500">
          <Star className="w-4 h-4 fill-accent-amber text-accent-amber" />
          <span className="font-medium">{product.rating}</span>
        </div>
        <h3 className="font-semibold text-lg leading-tight line-clamp-2 text-primary">{product.name}</h3>
        <div className="mt-auto pt-4 flex flex-col gap-1">
          <div className="flex items-center flex-wrap gap-2">
            <span className="text-xl font-bold tabular-nums text-primary">₹{product.price.toLocaleString('en-IN')}</span>
            <span className="text-sm text-gray-400 line-through tabular-nums">₹{product.mrp.toLocaleString('en-IN')}</span>
            {product.discountPercent > 0 && (
              <span className="text-xs font-medium text-accent-green bg-accent-green/10 px-1.5 py-0.5 ">
                {product.discountPercent}% OFF
              </span>
            )}
          </div>
          {product.startingEmi > 0 && (
            <p className="text-sm font-medium text-accent-green">
              Starting from ₹{product.startingEmi.toLocaleString('en-IN')}/mo
            </p>
          )}
          
          <div className="mt-4 w-full bg-[#6C28D9] group-hover:bg-[#8852e1] text-white text-sm font-semibold py-2.5 rounded flex items-center justify-center transition-colors">
            View EMI Options
          </div>
        </div>
      </div>
    </Link>
  );
}
