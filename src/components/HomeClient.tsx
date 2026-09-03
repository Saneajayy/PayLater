'use client';
import { useState, useMemo } from 'react';
import ProductCard from '@/components/ProductCard';
import { ProductSummary, FaqType, TestimonialType } from '@/types';
import { Search, ShoppingBag } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Hero from './landing/Hero';
import HowItWorks from './landing/HowItWorks';
import Testimonials from './landing/Testimonials';
import FAQs from './landing/FAQs';

interface Props {
  initialProducts: ProductSummary[];
  brands: string[];
  faqs: FaqType[];
  testimonials: TestimonialType[];
}

export default function HomeClient({ initialProducts, brands, faqs, testimonials }: Props) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBrand, setSelectedBrand] = useState<string>('All Brands');

  const filteredProducts = useMemo(() => {
    return initialProducts.filter(p => {
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesBrand = selectedBrand === 'All Brands' || p.brand === selectedBrand;
      return matchesSearch && matchesBrand;
    });
  }, [initialProducts, searchQuery, selectedBrand]);

  return (
    <>
      <Navbar />
      
      <Hero products={initialProducts} />
      <div id="how-it-works"><HowItWorks /></div>

      <div id="shop" className="bg-white border-t border-gray-100 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-6 text-center items-center">
            <h2 className="text-4xl md:text-5xl font-black text-black tracking-tight leading-normal py-1">
              Start Shopping <span className="bg-gradient-to-r from-[#6C28D9] to-[#a203d5] bg-clip-text text-transparent italic font-bold pr-2 pb-1">Smarter</span>
            </h2>
            
            <div className="w-full max-w-2xl relative mt-6">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search smartphones, gadgets..." 
                className="w-full pl-14 pr-6 py-4 bg-gray-50/50 border-2 border-gray-200 text-lg font-medium focus:outline-none focus:ring-0 focus:border-[#6C28D9] focus:bg-white transition-all placeholder:text-gray-400"
              />
            </div>
            
            <div className="flex gap-3 overflow-x-auto pb-4 mt-6 w-full justify-start md:justify-center" style={{ scrollbarWidth: 'none' }}>
              <button 
                onClick={() => setSelectedBrand('All Brands')}
                className={`px-6 py-3 rounded-md text-sm font-bold whitespace-nowrap transition-all ${selectedBrand === 'All Brands' ? 'bg-[#6C28D9] text-white ' : 'bg-gray-50 border border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-100'}`}
              >
                All Brands
              </button>
              {brands.map(brand => (
                <button 
                  key={brand} 
                  onClick={() => setSelectedBrand(brand)}
                  className={`px-6 py-3 rounded-md text-sm font-bold whitespace-nowrap transition-all ${selectedBrand === brand ? 'bg-[#6C28D9] text-white ' : 'bg-gray-50 border border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-100'}`}
                >
                  {brand}
                </button>
              ))}
            </div>
          </div>
          
          {filteredProducts.length === 0 ? (
            <div className="text-center py-32 text-gray-500 font-medium bg-gray-50/50 border border-gray-100 flex flex-col items-center gap-4">
              <ShoppingBag className="w-12 h-12 text-gray-300" />
              <p className="text-lg">No products match your search.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pt-4">
              {filteredProducts.map(product => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
      
      <Testimonials testimonials={testimonials} />
      <FAQs faqs={faqs} />
    </>
  );
}
