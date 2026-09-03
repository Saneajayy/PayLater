import React from 'react';
import { Star } from 'lucide-react';
import { TestimonialType } from '@/types';

export default function Testimonials({ testimonials }: { testimonials: TestimonialType[] }) {
  if (!testimonials || testimonials.length === 0) return null;

  return (
    <div id="reviews" className="py-16 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-black mb-4">
            <span className="text-gray-500 italic font-normal pr-2">Why People </span>
            <span className="bg-gradient-to-r from-[#6C28D9] to-[#a203d5] bg-clip-text text-transparent font-bold">Love Us</span>
          </h2>
        </div>

        {/* Marquee Container with fade effect */}
        <div 
          className="relative flex overflow-x-hidden w-full group" 
          style={{ 
            maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', 
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' 
          }}
        >
          <div className="flex animate-marquee gap-6 py-4 px-4 items-center w-max group-hover:[animation-play-state:paused]">
            {/* First Set */}
            {testimonials.map((t, idx) => (
              <div key={`t1-${idx}`} className="w-[300px] md:w-[350px] shrink-0 bg-gray-50/50 p-6 rounded-md border border-gray-100 flex flex-col gap-4 h-[220px]">
                <div className="flex items-center gap-4">
                  <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full bg-gray-100" />
                  <div className="flex flex-col">
                    <span className="font-bold text-gray-900 text-sm">{t.name}</span>
                    <div className="flex items-center gap-1 mt-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">{t.text}</p>
              </div>
            ))}
            {/* Duplicate Set for smooth infinite scroll */}
            {testimonials.map((t, idx) => (
              <div key={`t2-${idx}`} className="w-[300px] md:w-[350px] shrink-0 bg-gray-50/50 p-6 rounded-md border border-gray-100 flex flex-col gap-4 h-[220px]">
                <div className="flex items-center gap-4">
                  <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full bg-gray-100" />
                  <div className="flex flex-col">
                    <span className="font-bold text-gray-900 text-sm">{t.name}</span>
                    <div className="flex items-center gap-1 mt-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">{t.text}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Second Marquee row (reverse direction) */}
        <div 
          className="relative flex overflow-x-hidden w-full mt-2 group hidden md:flex" 
          style={{ 
            maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', 
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' 
          }}
        >
          <div className="flex animate-marquee-reverse gap-6 py-4 px-4 items-center w-max group-hover:[animation-play-state:paused]">
            {/* Start from middle for variation */}
            {[...testimonials.slice(4), ...testimonials.slice(0, 4)].map((t, idx) => (
              <div key={`t3-${idx}`} className="w-[300px] md:w-[350px] shrink-0 bg-gray-50/50 p-6 rounded-md border border-gray-100 flex flex-col gap-4 h-[220px]">
                <div className="flex items-center gap-4">
                  <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full bg-gray-100" />
                  <div className="flex flex-col">
                    <span className="font-bold text-gray-900 text-sm">{t.name}</span>
                    <div className="flex items-center gap-1 mt-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">{t.text}</p>
              </div>
            ))}
            {[...testimonials.slice(4), ...testimonials.slice(0, 4)].map((t, idx) => (
              <div key={`t4-${idx}`} className="w-[300px] md:w-[350px] shrink-0 bg-gray-50/50 p-6 rounded-md border border-gray-100 flex flex-col gap-4 h-[220px]">
                <div className="flex items-center gap-4">
                  <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full bg-gray-100" />
                  <div className="flex flex-col">
                    <span className="font-bold text-gray-900 text-sm">{t.name}</span>
                    <div className="flex items-center gap-1 mt-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
