'use client';
import { useState } from 'react';
import { ProductWithVariants } from '@/types';
import VariantSelector from '@/components/VariantSelector';
import PriceBlock from '@/components/PriceBlock';
import EmiPlanList from '@/components/EmiPlanList';
import ProceedBar from '@/components/ProceedBar';
import TrustBadges from '@/components/TrustBadges';
import { Star, ChevronLeft } from 'lucide-react';
import Link from 'next/link';

export default function ProductDetailClient({ product }: { product: ProductWithVariants }) {
  const defaultVariant = product.variants.find(v => v.isDefault) || product.variants[0];
  const [selectedVariantId, setSelectedVariantId] = useState<string>(defaultVariant.id);
  
  const [selectedPlanId, setSelectedPlanId] = useState<string | null>(null);

  const selectedVariant = product.variants.find(v => v.id === selectedVariantId) || defaultVariant;
  const emiPlans = selectedVariant.emiPlans;
  
  const activePlan = emiPlans.find(p => p.id === selectedPlanId) || emiPlans[0];
  
  if (selectedPlanId !== activePlan?.id && activePlan) {
    setSelectedPlanId(activePlan.id);
  }

  return (
    <div className="bg-background min-h-screen pb-24 md:pb-12">
      <header className="bg-white border-b border-gray-100 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center gap-4">
          <Link href="/" className="p-2 -ml-2 hover:bg-gray-100 text-gray-500 transition-colors">
            <ChevronLeft className="w-6 h-6" />
          </Link>
          <div className="font-bold text-lg text-primary truncate">{product.name}</div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column - Images */}
          <div className="lg:w-1/2 flex flex-col gap-6 lg:sticky lg:top-24 h-fit">
            <div className="w-full aspect-square bg-white flex items-center justify-center border border-gray-100 relative overflow-hidden">
              {product.isNew && (
                <span className="absolute top-6 left-6 bg-primary text-white text-xs font-bold px-3 py-1.5 uppercase tracking-wider z-10">
                  New
                </span>
              )}
              <img 
                key={selectedVariant.imageUrl} 
                src={selectedVariant.imageUrl} 
                alt={product.name}
                className="w-full h-full object-cover animate-in fade-in duration-500 mix-blend-multiply"
              />
            </div>
            
            {/* Gallery Thumbnails */}
            {selectedVariant.gallery.length > 0 && (
              <div className="flex gap-4 overflow-x-auto pb-2 hide-scrollbar">
                {selectedVariant.gallery.map((img, i) => (
                  <button key={i} className={`w-20 h-20 border-2 overflow-hidden flex-shrink-0 transition-all ${i === 0 ? 'border-primary ' : 'border-gray-200 hover:border-gray-300'}`}>
                    <img src={img} alt="Gallery thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column - Content */}
          <div className="lg:w-1/2 flex flex-col gap-8">
            <div className="flex flex-col gap-3 border-b border-gray-100 pb-8">
              <div className="flex items-center gap-2 text-sm text-gray-600 font-medium bg-white border border-gray-200 w-fit px-3.5 py-1.5 mb-2">
                <Star className="w-4 h-4 fill-accent-amber text-accent-amber" />
                <span className="text-primary font-bold">{product.rating}</span>
                <span>({product.reviewCount} reviews)</span>
              </div>
              
              <h1 className="text-3xl lg:text-4xl font-black text-primary tracking-tight leading-tight">
                {product.name}
              </h1>
              
              <PriceBlock mrp={selectedVariant.mrp} price={selectedVariant.price} />

              <p className="text-gray-600 mt-4 leading-relaxed text-sm md:text-base">
                {product.description}
              </p>
            </div>

            <VariantSelector 
              variants={product.variants}
              selectedVariantId={selectedVariantId}
              onSelectVariant={setSelectedVariantId}
            />

            <div className="pt-6 border-t border-gray-100">
              <h3 className="font-bold text-xl text-primary mb-5">Specifications</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 text-sm">
                {Object.entries(product.specs as Record<string, string>).map(([key, val]) => (
                  <div key={key} className="flex flex-col gap-1 p-3 bg-white border border-gray-100">
                    <span className="text-gray-500 font-medium text-xs uppercase tracking-wider">{key}</span>
                    <span className="text-primary font-bold">{val}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8 border-t border-gray-100">
              <EmiPlanList 
                plans={emiPlans}
                selectedPlanId={selectedPlanId || activePlan?.id || null}
                onSelectPlan={setSelectedPlanId}
              />
            </div>

            <TrustBadges />
          </div>
        </div>
      </main>

      <ProceedBar 
        plan={activePlan} 
        variantId={selectedVariant.id} 
        productName={product.name}
        variantPrice={selectedVariant.price}
        variantImage={selectedVariant.imageUrl}
      />
    </div>
  );
}
