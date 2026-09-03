export function ProductGridSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div key={i} className="flex flex-col bg-white overflow-hidden border border-gray-100 animate-pulse h-[380px]">
          <div className="w-full aspect-square bg-gray-200"></div>
          <div className="p-5 flex flex-col gap-3 flex-grow">
            <div className="w-16 h-4 bg-gray-200 "></div>
            <div className="w-full h-5 bg-gray-200  mt-1"></div>
            <div className="w-2/3 h-5 bg-gray-200 "></div>
            <div className="mt-auto pt-4 flex flex-col gap-2">
              <div className="w-1/2 h-6 bg-gray-200 "></div>
              <div className="w-2/3 h-4 bg-gray-200 "></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function ProductDetailSkeleton() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 animate-pulse">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left column - Image */}
        <div className="lg:w-1/2 flex flex-col gap-4">
          <div className="w-full aspect-square bg-gray-200"></div>
          <div className="flex gap-4 justify-center">
            <div className="w-20 h-20 bg-gray-200"></div>
            <div className="w-20 h-20 bg-gray-200"></div>
          </div>
        </div>

        {/* Right column - Content */}
        <div className="lg:w-1/2 flex flex-col gap-6">
          <div className="w-1/4 h-6 bg-gray-200 "></div>
          <div className="w-3/4 h-10 bg-gray-200 "></div>
          
          <div className="w-1/3 h-12 bg-gray-200  mt-4"></div>
          
          <div className="pt-6 border-t border-gray-100">
            <div className="w-1/4 h-6 bg-gray-200  mb-4"></div>
            <div className="flex gap-3">
              <div className="w-10 h-10 bg-gray-200"></div>
              <div className="w-10 h-10 bg-gray-200"></div>
            </div>
          </div>

          <div className="pt-6 border-t border-gray-100 flex flex-col gap-4">
            <div className="w-1/2 h-6 bg-gray-200 "></div>
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="w-full h-24 bg-gray-200"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
