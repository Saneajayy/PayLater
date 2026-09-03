'use client';

import { useState } from 'react';
import { IndianRupee, PieChart } from 'lucide-react';

import { ProductSummary } from '@/types';

export default function HeroCalculator({ products = [] }: { products?: ProductSummary[] }) {
  // Dynamically calculate limits from the database products to avoid hardcoding
  const minLimit = products.length > 0 ? Math.min(...products.map(p => p.price)) : 10000;
  const maxLimit = products.length > 0 ? Math.max(...products.map(p => p.mrp)) : 500000;

  const [amount, setAmount] = useState<number>(minLimit);
  const [tenure, setTenure] = useState<number>(12);

  const emi = Math.round(amount / tenure);
  const requiredLien = Math.round(amount * 1.25);

  const tenures = [3, 6, 9, 12];

  return (
    <div className="mt-12 max-w-6xl w-full mx-auto px-4 z-10 relative">
      <div className="relative bg-white backdrop-blur-xl border border-[#6C28D9] p-5 md:p-6 rounded-2xl shadow-[0_20px_50px_-12px_rgba(108,40,217,0.15)] overflow-hidden">
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
            
            {/* Column 1: Amount */}
            <div className="flex flex-col justify-center">
              <div>
                <div className="flex justify-between items-end mb-4">
                  <label className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Purchase Amount</label>
                  <div className="text-3xl font-extrabold text-gray-900">
                    ₹{amount.toLocaleString('en-IN')}
                  </div>
                </div>
                <input 
                  type="range" 
                  min={minLimit} 
                  max={maxLimit} 
                  step="1000"
                  value={amount} 
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full h-2 bg-purple-100 rounded-lg appearance-none cursor-pointer accent-[#6C28D9]"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-2 font-medium">
                  <span>₹{minLimit.toLocaleString('en-IN')}</span>
                  <span>₹{maxLimit.toLocaleString('en-IN')}</span>
                </div>
              </div>
            </div>

            {/* Column 2: Tenure */}
            <div className="flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-gray-100 pt-6 lg:pt-0 lg:pl-6">
              <label className="text-sm font-semibold text-gray-600 uppercase tracking-wider block mb-3">Tenure (Months)</label>
              <div className="flex gap-2">
                {tenures.map(t => (
                  <button 
                    key={t}
                    onClick={() => setTenure(t)}
                    className={`flex-1 py-2.5 rounded-lg font-bold text-sm transition-all ${tenure === t ? 'bg-[#6C28D9] text-white shadow-lg shadow-purple-500/30' : 'bg-gray-50 text-gray-600 hover:bg-gray-100 border border-gray-200'}`}
                  >
                    {t} mo
                  </button>
                ))}
              </div>
            </div>

            {/* Column 3: Results */}
            <div className="bg-[#0a0a0a] rounded-xl p-5 text-white flex flex-col justify-between shadow-inner relative overflow-hidden h-full">
              <div className="relative z-10 flex flex-col h-full justify-center">
                <div className="flex justify-between items-center mb-3">
                  <p className="text-gray-400 text-sm font-medium">Monthly EMI</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-white">
                      ₹{emi.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>
                
                <div className="space-y-2 border-t border-white/10 pt-3">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2 text-gray-300">
                      <PieChart className="w-4 h-4 text-purple-400" />
                      <span className="text-xs">Interest Rate</span>
                    </div>
                    <span className="font-bold text-green-400 bg-green-400/10 px-2 py-0.5 rounded text-xs">0% p.a.</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2 text-gray-300">
                      <IndianRupee className="w-4 h-4 text-purple-400" />
                      <span className="text-xs">Lien Required</span>
                    </div>
                    <span className="font-bold text-white text-sm">₹{requiredLien.toLocaleString('en-IN')}</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
  );
}
