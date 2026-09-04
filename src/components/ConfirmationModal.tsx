'use client';
import { useState } from 'react';
import { X, CheckCircle2, Loader2 } from 'lucide-react';
import { EmiPlan } from '@prisma/client';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  plan: EmiPlan | null;
  variantId: string;
}

export default function ConfirmationModal({ isOpen, onClose, plan, variantId }: Props) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen || !plan) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          variantId,
          emiPlanId: plan.id,
          customerName: name,
          customerPhone: phone
        })
      });

      const data = await res.json();
      
      if (!res.ok) {
        throw new Error(data.error || 'Failed to place order');
      }

      setStatus('success');
    } catch (err: any) {
      setStatus('error');
      setErrorMessage(err.message);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
      <div className="bg-white w-full max-w-md overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between p-5 border-b border-gray-100">
          <h2 className="text-lg font-bold text-primary">Confirm EMI Application</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 text-gray-500 transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {status === 'success' ? (
          <div className="p-8 flex flex-col items-center text-center gap-5">
            <div className="w-20 h-20 bg-accent-green/10 flex items-center justify-center mb-2">
              <CheckCircle2 className="w-12 h-12 text-accent-green" />
            </div>
            <h3 className="text-2xl font-bold text-primary">Application Started!</h3>
            <p className="text-gray-600 leading-relaxed">Your EMI application for <span className="font-bold tabular-nums">₹{plan.monthlyAmount.toLocaleString('en-IN')}/mo</span> has been initiated successfully.</p>
            <button 
              onClick={onClose}
              className="mt-6 w-full py-4 bg-primary text-white font-bold text-lg hover:bg-primary/90 transition-colors"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-6">
            <div className="bg-gray-50 p-5 flex flex-col gap-2 border border-gray-200/60">
              <span className="text-sm text-gray-500 font-semibold tracking-wide uppercase">Selected Plan</span>
              <div className="flex flex-col gap-1">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-2xl font-bold text-primary tabular-nums">₹{plan.monthlyAmount.toLocaleString('en-IN')}</span>
                  <span className="text-sm font-medium text-gray-600">/mo for {plan.tenureMonths} months</span>
                </div>
                <div className="flex items-center gap-3 text-sm mt-1">
                  <span className="font-medium text-gray-600">Interest: {plan.interestRate}% p.a.</span>
                  {plan.cashback > 0 && (
                    <span className="font-bold text-accent-green">₹{plan.cashback.toLocaleString('en-IN')} Cashback</span>
                  )}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                <input
                  id="name"
                  type="text"
                  required
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className="w-full px-4 py-3.5 border-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-primary transition-all font-medium"
                  placeholder="e.g. Aman Gupta"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                <input
                  id="phone"
                  type="tel"
                  required
                  pattern="[0-9]{10}"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  className="w-full px-4 py-3.5 border-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-primary transition-all font-medium"
                  placeholder="10-digit mobile number"
                />
              </div>
            </div>

            {status === 'error' && (
              <div className="p-4 bg-red-50 border border-red-100 text-red-600 text-sm font-medium">
                {errorMessage}
              </div>
            )}

            <button 
              type="submit" 
              disabled={status === 'loading'}
              className="w-full py-4 bg-primary text-white font-bold text-lg hover:bg-primary/90 transition-all disabled:opacity-70 disabled: flex items-center justify-center gap-2 mt-2"
            >
              {status === 'loading' ? <Loader2 className="w-6 h-6 animate-spin" /> : 'Submit Application'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
