import { ShieldCheck, Truck, RefreshCw } from 'lucide-react';

export default function TrustBadges() {
  return (
    <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-200">
      <div className="flex flex-col items-center text-center gap-2">
        <div className="w-12 h-12 bg-gray-50 flex items-center justify-center text-primary">
          <Truck className="w-6 h-6" />
        </div>
        <span className="text-xs font-medium text-gray-600">Free Delivery</span>
      </div>
      <div className="flex flex-col items-center text-center gap-2">
        <div className="w-12 h-12 bg-gray-50 flex items-center justify-center text-primary">
          <ShieldCheck className="w-6 h-6" />
        </div>
        <span className="text-xs font-medium text-gray-600">Secure Transaction</span>
      </div>
      <div className="flex flex-col items-center text-center gap-2">
        <div className="w-12 h-12 bg-gray-50 flex items-center justify-center text-primary">
          <RefreshCw className="w-6 h-6" />
        </div>
        <span className="text-xs font-medium text-gray-600">7-Day Replacement</span>
      </div>
    </div>
  );
}
