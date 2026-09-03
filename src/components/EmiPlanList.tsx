'use client';
import { EmiPlan } from '@prisma/client';
import EmiPlanCard from './EmiPlanCard';
import { ShieldCheck } from 'lucide-react';

interface Props {
  plans: EmiPlan[];
  selectedPlanId: string | null;
  onSelectPlan: (id: string) => void;
}

export default function EmiPlanList({ plans, selectedPlanId, onSelectPlan }: Props) {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-2 bg-accent-green/5 p-4 border border-accent-green/20">
        <ShieldCheck className="w-6 h-6 text-accent-green" />
        <h3 className="font-semibold text-primary">EMI plans backed by mutual funds</h3>
      </div>
      <div 
        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        role="radiogroup"
        aria-label="EMI Plans"
      >
        {plans.map((plan) => (
          <EmiPlanCard
            key={plan.id}
            plan={plan}
            isSelected={selectedPlanId === plan.id}
            onSelect={() => onSelectPlan(plan.id)}
          />
        ))}
      </div>
    </div>
  );
}
