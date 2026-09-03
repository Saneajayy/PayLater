'use client';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FaqType } from '@/types';

export default function FAQs({ faqs }: { faqs: FaqType[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <div id="faqs" className="bg-gray-50/50 py-16 lg:py-24 border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center lg:mb-16 mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl leading-[1.1] font-semibold tracking-tight text-black max-w-3xl mt-4">
            <span className="text-gray-500 italic font-normal">Frequently Asked </span>
            <span className="bg-gradient-to-r from-[#6C28D9] to-[#a203d5] bg-clip-text text-transparent font-bold pb-1 pr-1">Questions</span>
          </h2>
        </div>
        
        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx} 
                className={`border border-gray-200 bg-white overflow-hidden rounded-md transition-all duration-300 ${isOpen ? ' border-[#6C28D9]/30' : 'hover:border-gray-300'}`}
              >
                <button 
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
                >
                  <span className={`font-semibold text-lg transition-colors pr-8 ${isOpen ? 'text-[#6C28D9]' : 'text-gray-900'}`}>
                    {faq.question}
                  </span>
                  <ChevronDown className={`w-5 h-5 flex-shrink-0 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#6C28D9]' : ''}`} />
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out`}
                  style={{ maxHeight: isOpen ? '200px' : '0px', opacity: isOpen ? 1 : 0 }}
                >
                  <p className="px-6 pb-6 text-gray-600 leading-snug font-medium">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
