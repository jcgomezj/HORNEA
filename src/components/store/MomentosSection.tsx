'use client';

import React from 'react';
import Image from 'next/image';
import { Film, Users, Sun, Coffee, Sparkles, ArrowRight } from 'lucide-react';
import { MOMENTOS, PRODUCTS } from '@/data/mockData';
import { useStore } from '@/context/StoreContext';

export function MomentosSection() {
  const { addToCart } = useStore();

  const iconMap = [
    <Film key="1" className="w-5 h-5 text-[#C59B27]" />,
    <Users key="2" className="w-5 h-5 text-[#C59B27]" />,
    <Sun key="3" className="w-5 h-5 text-[#C59B27]" />,
    <Coffee key="4" className="w-5 h-5 text-[#C59B27]" />
  ];

  return (
    <section id="momentos" className="py-24 bg-[#F8F6F0] relative border-t border-[#C59B27]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#C59B27] font-semibold">
            <Sparkles className="w-4 h-4" />
            <span>Historias de Hogar</span>
          </div>
          <h2 className="font-heading text-4xl sm:text-6xl font-extrabold text-[#0F172A]">
            Momentos HORNEA
          </h2>
          <p className="text-base text-[#475569] leading-relaxed">
            No vendemos congelados. Creamos momentos inolvidables recién horneados para cada ocasión de tu vida.
          </p>
        </div>

        {/* Grid of Moments */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {MOMENTOS.map((momento, idx) => {
            const pairedProduct = PRODUCTS.find((p) => p.id === momento.recommendedProductId) || PRODUCTS[0];

            return (
              <div
                key={momento.id}
                className="glass-gold-card rounded-3xl overflow-hidden grid grid-cols-1 sm:grid-cols-12 group hover:border-[#C59B27]/50 transition-all duration-300"
              >
                {/* Visual Image */}
                <div className="sm:col-span-5 relative min-h-[220px] bg-[#F1F5F9]">
                  <Image
                    src={momento.image}
                    alt={momento.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white/10 hidden sm:block" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-[#C59B27] border border-[#C59B27]/25 shadow-sm">
                    {momento.tag}
                  </div>
                </div>

                {/* Text Content */}
                <div className="sm:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      {iconMap[idx % iconMap.length]}
                      <span className="text-xs uppercase tracking-wider text-[#C59B27] font-semibold">
                        {momento.subtitle}
                      </span>
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-[#0F172A]">
                      {momento.title}
                    </h3>
                    <p className="text-xs text-[#475569] leading-relaxed">
                      {momento.description}
                    </p>
                  </div>

                  {/* Recommended Product Pairing */}
                  <div className="pt-4 border-t border-[#E2E8F0] flex items-center justify-between">
                    <div>
                      <span className="block text-[10px] text-[#94A3B8] uppercase font-medium">Recomendado:</span>
                      <span className="text-xs font-bold text-[#0F172A] line-clamp-1">{pairedProduct.name}</span>
                    </div>
                    <button
                      onClick={() => addToCart(pairedProduct)}
                      className="gold-gradient-btn px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-md"
                    >
                      <span>Añadir (${pairedProduct.price.toLocaleString('es-CO')})</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
