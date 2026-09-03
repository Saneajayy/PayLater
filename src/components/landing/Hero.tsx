import { Sparkles, ArrowUpRight, Search } from 'lucide-react';
import Link from 'next/link';
import HeroCalculator from './HeroCalculator';
import { ProductSummary } from '@/types';

export default function Hero({ products = [] }: { products?: ProductSummary[] }) {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-[#6C28D9]/10 via-[#d8b4fe]/10 to-white pt-24 pb-20 flex flex-col items-center text-center">
      <div className="mt-10 mb-2 inline-flex items-center border border-gray-200 bg-white/60 px-1 py-1 backdrop-blur-sm">
        <span className="flex items-center gap-1.5 bg-white px-3 py-1 text-xs font-semibold text-purple-900 border border-gray-100">
          <Sparkles className="h-3 w-3 fill-purple-900" />
          New
        </span>
        <span className="px-3 text-xs font-medium text-black">No-cost EMIs backed by mutual funds</span>
      </div>

      <h1 className="mt-2 mx-auto max-w-5xl px-4 text-4xl font-medium tracking-tight text-black sm:text-5xl md:text-6xl lg:text-7xl leading-[0.95]">
        <span className="font-semibold inline-block">Shop today</span> <br />
        <span className="font-light italic text-gray-500 inline-block">Pay later</span> <span className="font-semibold inline-block">using</span> <br />
        <span className="bg-gradient-to-r from-[#6C28D9] to-[#a203d5] bg-clip-text text-transparent font-bold inline-block">mutual funds.</span>
      </h1>

      <div className="mt-12 flex flex-wrap items-center justify-center gap-4 px-4">
        <Link href="#shop" className="flex items-center font-semibold py-4 text-lg bg-[#6C28D9] px-10 text-white transition-all hover:bg-[#8852e1]">
          Start Shopping <Search className="ml-2 h-5 w-5" />
        </Link>
      </div>

      <p className="mt-8 text-sm lg:text-lg text-gray-500 leading-snug px-4 max-w-2xl mb-8">
        <span className="inline-block">No <span className="font-bold text-gray-900">credit</span> score required.</span> No <span className="font-bold text-gray-900">interest.</span><br />
        Fully backed by your <span className="font-bold text-gray-900">investments</span>.
      </p>

      <HeroCalculator products={products} />
    </div>
  );
}
