import { Zap, TrendingUp, RefreshCw, ShieldCheck, Tag, Shield } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    { icon: Zap, title: 'Instant approvals', desc: 'Get your eligible credit limit in minutes with a fully digital onboarding process—no branch visits, no waiting.' },
    { icon: TrendingUp, title: 'Continue getting returns', desc: 'Your mutual funds remain invested and continue compounding while you borrow' },
    { icon: RefreshCw, title: 'Zero Downpayment', desc: 'No downpayment for purchasing any of the products' },
    { icon: ShieldCheck, title: '0% interest', desc: 'Get your favourite products on No-cost-EMIs' },
    { icon: Tag, title: 'Zero Foreclosure charges', desc: 'Close your loan anytime by just paying the outstanding amount' },
    { icon: Shield, title: 'Long EMI tenures', desc: 'Select EMI tenures from 3 months to 10 years without any cibil check' },
  ];

  return (
    <section className="py-16 px-4 md:px-6 lg:py-24 bg-gray-50/50 text-[#121212]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14 space-y-6">
          <div className="inline-flex items-center justify-center px-5 py-2 border border-gray-200 bg-white">
            <span className="text-sm font-semibold text-gray-700 tracking-wide uppercase">Key Benefits</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 lg:gap-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl leading-[1.1] tracking-tight max-w-3xl">
              <span className="text-gray-500 italic font-normal">The</span><span className="font-bold text-black"> Smartest way</span> <span className="text-gray-500 italic font-normal"> to </span><br />
              <span className="bg-gradient-to-r from-[#6C28D9] to-[#a203d5] bg-clip-text text-transparent font-bold">Spend </span><span className="text-gray-500 italic font-normal"> &amp; </span>
              <span className="bg-gradient-to-r from-[#6C28D9] to-[#a203d5] bg-clip-text text-transparent font-bold">Keep Earning</span>
            </h2>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <div key={idx} className="p-8 border border-gray-200 bg-white hover:border-[#6C28D9]/40 transition-all duration-300 flex flex-col items-start h-full group">
                <div className="w-16 h-16 bg-[#d9c0ff]/20 flex items-center justify-center mb-8 group-hover:bg-[#6C28D9] transition-colors duration-300">
                  <Icon className="w-8 h-8 text-[#6C28D9] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-[#6C28D9] transition-colors duration-300">{benefit.title}</h3>
                <p className="text-gray-600 text-lg leading-snug font-medium">{benefit.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
