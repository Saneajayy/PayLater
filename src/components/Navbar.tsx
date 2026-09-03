'use client';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-4 left-0 right-0 z-50 mx-auto max-w-5xl px-4">
      <div className="relative flex items-center justify-between px-6 py-3 transition-all duration-300 border border-gray-200 bg-white/95 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <Link href="/">
            <img src="/R.png" alt="1FI Logo" className="h-10 w-auto object-contain cursor-pointer" />
          </Link>
        </div>
        
        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-8">
          <Link href="/" className="text-sm font-semibold text-gray-700 hover:text-[#6C28D9] transition-colors">Home</Link>
          <Link href="/#shop" className="text-sm font-semibold text-gray-700 hover:text-[#6C28D9] transition-colors">Catalog</Link>
          <Link href="/#how-it-works" className="text-sm font-semibold text-gray-700 hover:text-[#6C28D9] transition-colors">How it works</Link>
          <Link href="/#reviews" className="text-sm font-semibold text-gray-700 hover:text-[#6C28D9] transition-colors">Reviews</Link>
          <Link href="/#faqs" className="text-sm font-semibold text-gray-700 hover:text-[#6C28D9] transition-colors">FAQs</Link>
        </div>

        <div className="hidden md:flex items-center">
          
        </div>

        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2 text-gray-700 hover:bg-gray-100 transition-colors">
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden mt-2 p-5 bg-white border border-gray-200 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-semibold text-gray-700 hover:text-[#6C28D9] transition-colors">Home</Link>
          <Link href="/#shop" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-semibold text-gray-700 hover:text-[#6C28D9] transition-colors">Catalog</Link>
          <Link href="/#how-it-works" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-semibold text-gray-700 hover:text-[#6C28D9] transition-colors">How it works</Link>
          <Link href="/#reviews" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-semibold text-gray-700 hover:text-[#6C28D9] transition-colors">Reviews</Link>
          <Link href="/#faqs" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-semibold text-gray-700 hover:text-[#6C28D9] transition-colors">FAQs</Link>
        </div>
      )}
    </header>
  );
}
