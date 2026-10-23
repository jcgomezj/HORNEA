'use client';

import React, { useState } from 'react';
import { PRODUCTS } from '@/data/mockData';
import { ProductCard } from '@/components/store/ProductCard';

type CategoryFilter = 'todos' | 'salados' | 'dulces' | 'complementos' | 'favoritos' | 'mas_vendidos';

export function ProductCatalog() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('todos');

  const filteredProducts = PRODUCTS.filter((prod) => {
    if (activeCategory === 'todos') return true;
    if (activeCategory === 'mas_vendidos') return prod.isBestSeller;
    return prod.category === activeCategory;
  });

  return (
    <section id="productos" className="py-24 bg-[#FDFBF7] text-[#0F172A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header & Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#E2E8F0] pb-8">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#C59B27] font-semibold block mb-2">
              Nuestra Colección de Congelados Gourmet
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-[#0F172A]">
              Catálogo HORNEA
            </h2>
          </div>

          {/* Category Filter Buttons */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {[
              { id: 'todos', label: 'Todos' },
              { id: 'favoritos', label: 'Favoritos' },
              { id: 'mas_vendidos', label: '🔥 Más Vendidos' },
              { id: 'salados', label: '🧀 Hojaldres Salados' },
              { id: 'dulces', label: '🍬 Hojaldres Dulces' },
              { id: 'complementos', label: '🥐 Complementos' }
            ].map((tab) => {
              const isActive = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id as CategoryFilter)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                    isActive
                      ? 'gold-gradient-btn font-bold shadow-md'
                      : 'bg-white border border-[#E2E8F0] text-[#475569] hover:text-[#0F172A] hover:border-[#C59B27]/40'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, idx) => (
            <ProductCard key={product.id} product={product} priority={idx < 3} />
          ))}
        </div>
      </div>
    </section>
  );
}
