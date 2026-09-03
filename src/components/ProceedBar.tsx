'use client';
import { EmiPlan } from '@prisma/client';
import { useState } from 'react';
import ConfirmationModal from './ConfirmationModal';

interface Props {
  plan: EmiPlan | null;
  variantId: string;
}

export default function ProceedBar({ plan, variantId }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!plan) return null;

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex-col hidden md:flex">
            <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">Selected Plan</span>
            <div className="flex items-baseline gap-1.5">
              <span className="text-2xl font-bold text-primary tabular-nums">₹{plan.monthlyAmount.toLocaleString('en-IN')}</span>
              <span className="text-sm font-medium text-gray-500">/mo</span>
            </div>
          </div>
          
          <div className="flex flex-col md:hidden">
            <div className="flex items-baseline gap-1">
              <span className="text-xl font-bold text-primary tabular-nums">₹{plan.monthlyAmount.toLocaleString('en-IN')}</span>
              <span className="text-sm font-medium text-gray-500">/mo</span>
            </div>
            <span className="text-xs font-bold text-accent-green uppercase tracking-wide">Mutual fund backed</span>
          </div>

          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex-1 md:flex-none bg-primary text-white px-10 py-3.5 font-bold text-lg hover:bg-primary/90 transition-all active:scale-[0.98]"
          >
            Proceed
          </button>
        </div>
      </div>
      
      <ConfirmationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        plan={plan}
        variantId={variantId}
      />
    </>
  );
}
