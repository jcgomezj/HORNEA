'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Flame, Clock, Sparkles, ChevronDown, Play, ShieldCheck } from 'lucide-react';
import { useStore } from '@/context/StoreContext';
import { PRODUCTS } from '@/data/mockData';

import { HorneaLogo } from '@/components/layout/HorneaLogo';

export function HeroSection() {
  const { addToCart } = useStore();

  return (
    <section className="relative min-h-[88vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#FDFBF7] via-[#FFFDF9] to-[#F5EFE6] text-slate-900 border-b border-slate-200/80">
      {/* Background Visual Container */}
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
        <Image
          src="/images/products/palitos_de_queso.png"
          alt="Palitos de queso HORNEA derretidos"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FDFBF7] via-transparent to-[#F5EFE6]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center flex flex-col items-center justify-center space-y-8">

        {/* Exclusive Brand Badge */}
        <div className="inline-flex items-center gap-2 bg-white border border-[#C59B27]/40 px-4 py-1.5 rounded-full text-xs font-bold text-[#A8811A] shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#C59B27]" />
          <span className="uppercase tracking-widest">Calidad Premium Artesanal Colombiana</span>
        </div>

        {/* Hero Headlines & Logo */}
        <div className="space-y-4 max-w-4xl">
          <HorneaLogo variant="hero" darkText={true} />
          <p className="text-base sm:text-xl text-slate-600 max-w-2xl mx-auto font-sans font-medium leading-relaxed pt-2">
            Palitos de queso, pasteles y antojos gourmet listos en <strong className="text-slate-900 font-extrabold">menos de 20 minutos</strong> en tu Air Fryer u horno, para compartir con quienes más quieres.
          </p>
        </div>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 w-full max-w-md">
          <Link
            href="/#productos"
            className="w-full sm:w-auto gold-gradient-btn px-8 py-4 rounded-full font-bold text-base shadow-lg flex items-center justify-center gap-2 group"
          >
            <span>Comprar Ahora</span>
            <Flame className="w-5 h-5 group-hover:scale-125 transition-transform text-[#C59B27]" />
          </Link>
          <button
            onClick={() => addToCart(PRODUCTS[0])}
            className="w-full sm:w-auto bg-white border border-slate-300 hover:border-[#C59B27] px-8 py-4 rounded-full font-bold text-base text-slate-800 transition-all flex items-center justify-center gap-2 shadow-sm"
          >
            <Play className="w-4 h-4 text-[#C59B27] fill-[#C59B27]" />
            <span>Probar Palitos Insignia</span>
          </button>
        </div>

        {/* Key Trust Pillars */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 pt-10 w-full border-t border-slate-300/70 text-xs sm:text-sm font-semibold text-slate-700">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-[#C59B27]" />
            <span>Listo en &lt;20 min</span>
          </div>
          <div className="flex items-center gap-2">
            <Flame className="w-5 h-5 text-[#C59B27]" />
            <span>Directo al Air Fryer</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#C59B27]" />
            <span>Cadena de Frío Garantizada</span>
          </div>
        </div>


        {/* Scroll Indicator */}
        <div className="pt-4 animate-bounce">
          <a href="#productos" aria-label="Desplazarse a los productos" className="text-slate-400 hover:text-[#C59B27]">
            <ChevronDown className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
}
