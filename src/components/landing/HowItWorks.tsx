export default function HowItWorks() {
  const steps = [
    { num: '01', title: 'Choose product & payment plan', desc: 'Select EMI tenures from 3 months to 10 years for your favourite devices' },
    { num: '02', title: 'Check your eligibility', desc: 'Get your eligibility checked within 10 seconds using your PAN and mobile number' },
    { num: '03', title: 'Pledge mutual funds', desc: 'Pledge your mutual funds seamlessly and securely via CAMS, KFin, or MFCentral' },
    { num: '04', title: 'Complete your purchase', desc: 'Have your device delivered, repay the amount at your own terms' },
  ];

  return (
    <div className="bg-white lg:px-10 px-5 w-full pt-16 lg:py-24 text-[#121212] flex justify-center items-center">
      <div className="max-w-7xl w-full">
        <div className="flex flex-col items-center text-center lg:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl leading-[1.1] font-semibold tracking-tight text-black max-w-3xl">
            <span className="text-gray-500 italic font-normal">Shop using </span>mutual funds<br />
            <span className="text-gray-500 italic font-normal">in</span> <span className="bg-gradient-to-r from-[#6C28D9] to-[#a203d5] bg-clip-text text-transparent font-bold">4 easy steps</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-12 border-t border-l border-gray-200/60">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col border-r border-b border-gray-200/60 py-12 px-8 relative group hover:bg-purple-50/50 transition-colors duration-300">
              <div className="mb-6">
                <span className="text-5xl lg:text-6xl font-light tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-[#be7def] to-[#6C28D9] opacity-90 leading-none">
                  {step.num}.
                </span>
              </div>
              <div className="text-xl font-bold mb-3">
                <span className="text-gray-900 group-hover:text-[#6C28D9] transition-colors">{step.title}</span>
              </div>
              <p className="text-base text-gray-600 leading-snug font-medium">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
