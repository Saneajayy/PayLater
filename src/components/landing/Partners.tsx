export default function Partners() {
  const partners = ['Tata Capital', 'DSP Finance', 'KFintech', 'Bajaj Finserv', 'CAMS', 'DigiLocker'];
  
  return (
    <div className="px-4 sm:px-5 lg:px-10 lg:my-24 my-12 bg-white flex items-center justify-center font-sans border-y border-gray-100 py-20">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-[1fr_1.2fr] gap-10 sm:gap-12 lg:gap-24 items-center">
        <div className="flex flex-col items-start space-y-6 sm:space-y-8">
          <div className="inline-flex items-center px-5 py-2 bg-gray-50 border border-gray-200">
            <span className="text-sm font-semibold text-gray-700 tracking-wide uppercase">Trusted by The Best</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-black tracking-tight leading-[1.1]">
            <span className="text-gray-500 italic font-normal">Our Valued </span><br/>
            <span className="bg-gradient-to-r from-[#6C28D9] to-[#a203d5] bg-clip-text text-transparent font-bold">Partners</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-500 leading-relaxed max-w-lg font-medium">
            Collaborating with pioneers in payments technology, finance, and digital commerce.
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6">
          {partners.map((partner, idx) => (
            <div key={idx} className="bg-gray-50 h-28 sm:h-32 w-full flex items-center justify-center p-6 hover:bg-gray-100 transition-all border border-gray-100 group">
              <span className="font-bold text-gray-400 uppercase tracking-widest text-sm text-center group-hover:text-gray-600 transition-colors">{partner}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
