'use client';
import { Variant } from '@prisma/client';

interface Props {
  variants: Variant[];
  selectedVariantId: string;
  onSelectVariant: (id: string) => void;
}

export default function VariantSelector({ variants, selectedVariantId, onSelectVariant }: Props) {
  const colors = Array.from(new Set(variants.map(v => v.color)));
  const storages = Array.from(new Set(variants.map(v => v.storage).filter(Boolean)));
  
  const selectedVariant = variants.find(v => v.id === selectedVariantId) || variants[0];

  const handleColorSelect = (color: string) => {
    const newVariant = variants.find(v => v.color === color && v.storage === selectedVariant.storage) 
      || variants.find(v => v.color === color);
    if (newVariant) onSelectVariant(newVariant.id);
  };

  const handleStorageSelect = (storage: string) => {
    const newVariant = variants.find(v => v.storage === storage && v.color === selectedVariant.color)
      || variants.find(v => v.storage === storage);
    if (newVariant) onSelectVariant(newVariant.id);
  };

  return (
    <div className="flex flex-col gap-6 pt-4">
      {colors.length > 0 && (
        <div className="flex flex-col gap-3">
          <span className="text-sm font-semibold text-primary">Color: <span className="font-normal text-gray-600">{selectedVariant.color}</span></span>
          <div className="flex flex-wrap gap-3">
            {colors.map(color => {
              const v = variants.find(v => v.color === color);
              const isSelected = selectedVariant.color === color;
              if (!v) return null;
              return (
                <button
                  key={color}
                  onClick={() => handleColorSelect(color)}
                  className={`w-12 h-12 border-2 focus:outline-none transition-all flex items-center justify-center ${isSelected ? 'border-primary p-[3px]' : 'border-transparent hover:border-gray-300 p-[3px]'}`}
                  aria-label={`Select color ${color}`}
                  aria-pressed={isSelected}
                >
                  <div className="w-full h-full border border-gray-200/50" style={{ backgroundColor: v.colorHex }}></div>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {storages.length > 0 && (
        <div className="flex flex-col gap-3">
          <span className="text-sm font-semibold text-primary">Storage: <span className="font-normal text-gray-600">{selectedVariant.storage}</span></span>
          <div className="flex flex-wrap gap-3">
            {storages.map(storage => {
              const isSelected = selectedVariant.storage === storage;
              return (
                <button
                  key={storage || 'default'}
                  onClick={() => handleStorageSelect(storage as string)}
                  className={`px-5 py-2.5 border-2 font-semibold text-sm transition-all focus:outline-none ${ isSelected ? 'border-primary bg-primary/5 text-primary' : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:text-primary' }`}
                  aria-pressed={isSelected}
                >
                  {storage}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
