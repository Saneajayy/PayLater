interface Props {
  mrp: number;
  price: number;
}

export default function PriceBlock({ mrp, price }: Props) {
  const discountPercent = mrp > 0 ? Math.round(((mrp - price) / mrp) * 100) : 0;
  
  return (
    <div className="flex flex-col gap-1.5" aria-live="polite">
      <div className="flex items-end gap-3 flex-wrap">
        <span className="text-4xl md:text-5xl font-bold tabular-nums text-primary tracking-tight">
          ₹{price.toLocaleString('en-IN')}
        </span>
        {discountPercent > 0 && (
          <span className="text-xl text-gray-400 line-through tabular-nums pb-1 font-medium">
            ₹{mrp.toLocaleString('en-IN')}
          </span>
        )}
      </div>
      {discountPercent > 0 && (
        <div className="text-sm font-bold text-accent-green tracking-wide">
          You save ₹{(mrp - price).toLocaleString('en-IN')} ({discountPercent}% OFF)
        </div>
      )}
    </div>
  );
}
