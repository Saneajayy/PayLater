import { EmiPlan } from '@prisma/client';
import { CheckCircle2 } from 'lucide-react';

interface Props {
  plan: EmiPlan;
  isSelected: boolean;
  onSelect: () => void;
}

export default function EmiPlanCard({ plan, isSelected, onSelect }: Props) {
  const isZeroPercent = plan.interestRate === 0;

  return (
    <div 
      role="radio"
      aria-checked={isSelected}
      tabIndex={0}
      onClick={onSelect}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect();
        }
      }}
      className={`relative p-5 border-2 cursor-pointer transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
        isSelected ? 'border-primary bg-primary/5' : 'border-border hover:border-gray-300 bg-white'
      }`}
    >
      {isSelected && (
        <div className="absolute top-4 right-4 text-primary">
          <CheckCircle2 className="w-6 h-6 fill-primary text-white" />
        </div>
      )}
      
      <div className="flex flex-col gap-1.5 pr-10">
        <div className="flex items-baseline gap-1">
          <span className="text-2xl font-bold tabular-nums text-primary">₹{plan.monthlyAmount.toLocaleString('en-IN')}</span>
          <span className="text-gray-500 font-medium">/mo</span>
        </div>
        
        <div className="text-sm font-medium text-gray-700">
          for {plan.tenureMonths} months
        </div>
        
        <div className="flex flex-wrap gap-2 mt-2">
          <span className={`text-xs font-bold px-2.5 py-1 ${
            isZeroPercent ? 'bg-accent-green/10 text-accent-green' : 'bg-accent-amber/10 text-accent-amber'
          }`}>
            {isZeroPercent ? '0% interest' : `${plan.interestRate}% interest`}
          </span>
          {plan.cashback > 0 && (
            <span className="text-xs font-bold px-2.5 py-1 bg-accent-green/10 text-accent-green">
              ₹{plan.cashback.toLocaleString('en-IN')} Cashback
            </span>
          )}
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-200/60 text-xs text-gray-500 font-semibold uppercase tracking-wider">
          Total Payable: <span className="tabular-nums">₹{plan.totalPayable.toLocaleString('en-IN')}</span>
        </div>
      </div>
    </div>
  );
}
