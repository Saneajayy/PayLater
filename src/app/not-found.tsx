import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center bg-background">
      <h2 className="text-5xl font-black text-primary mb-4 tracking-tighter">404</h2>
      <p className="text-xl font-bold text-gray-800 mb-2">Product Not Found</p>
      <p className="text-gray-500 mb-8 max-w-md font-medium">The page or product you're looking for doesn't exist or has been moved.</p>
      <Link href="/" className="px-8 py-3.5 bg-primary text-white font-bold hover:bg-primary/90 transition-all">
        Return Home
      </Link>
    </div>
  );
}
