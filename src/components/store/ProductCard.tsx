'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Clock, Heart, Star, ShoppingBag, Flame, Sparkles, ChevronDown, CheckCircle2, Info } from 'lucide-react';
import { Product } from '@/types';
import { useStore } from '@/context/StoreContext';

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export function ProductCard({ product, priority = false }: ProductCardProps) {
  const { addToCart, wishlist, toggleWishlist } = useStore();
  const [showDetails, setShowDetails] = useState(false);
  const isFav = wishlist.includes(product.id);
  const isStarProduct = product.isBestSeller || product.id === 'prod-12' || product.name.toLowerCase().includes('palito');

  return (
    <article
      className={`glass-gold-card rounded-3xl overflow-hidden flex flex-col justify-between group transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl relative bg-white border ${
        isStarProduct ? 'border-[#C59B27]/40 ring-1 ring-[#C59B27]/20 shadow-lg' : 'border-slate-200/90'
      }`}
    >
      {/* Top Banner for Flagship / Star Products */}
      {isStarProduct && (
        <div className="bg-gradient-to-r from-[#C59B27] via-[#D4AF37] to-[#A8811A] text-white text-[11px] font-extrabold uppercase tracking-wider py-1.5 px-4 text-center flex items-center justify-center gap-1.5 shadow-sm">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Bocado Insignia HORNEA • Recién Horneado</span>
        </div>
      )}

      {/* Image Container with immersive hover zoom */}
      <div className="relative h-64 sm:h-72 w-full bg-[#F8F6F0] overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          priority={priority}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-50 group-hover:opacity-40 transition-opacity" />

        {/* Floating Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
          {product.isBestSeller && (
            <span className="bg-[#C59B27] text-white font-extrabold text-[11px] px-3 py-1 rounded-full uppercase tracking-wider shadow-md flex items-center gap-1">
              <Flame className="w-3 h-3 fill-white" />
              Más Vendido
            </span>
          )}
          <span className="bg-white/95 backdrop-blur-md text-slate-800 text-[11px] font-bold px-3 py-1 rounded-full border border-slate-200/80 flex items-center gap-1.5 shadow-sm">
            <Clock className="w-3.5 h-3.5 text-[#C59B27]" />
            {product.preparationTimeMin} min • {product.airFryerTempC}°C
          </span>
        </div>

        {/* Wishlist Button */}
        <button
          onClick={() => toggleWishlist(product.id)}
          aria-label={isFav ? `Quitar ${product.name} de favoritos` : `Añadir ${product.name} a favoritos`}
          className={`absolute top-4 right-4 p-2.5 rounded-full backdrop-blur-md border transition-all z-10 ${
            isFav
              ? 'bg-red-50 border-red-200 text-red-500 shadow-md scale-105'
              : 'bg-white/95 border-slate-200 text-slate-400 hover:text-slate-900 shadow-sm'
          }`}
        >
          <Heart className={`w-4 h-4 ${isFav ? 'fill-red-500 text-red-500' : ''}`} />
        </button>

        {/* Quick Ingredients Pill (Visible over image on mobile/desktop) */}
        <div className="absolute bottom-3 left-4 right-4 z-10 flex items-center justify-between pointer-events-none">
          <span className="text-[11px] font-medium text-white/90 drop-shadow-md bg-black/40 px-2.5 py-0.5 rounded-full backdrop-blur-sm">
            🧀 {product.ingredients[0]}
          </span>
          <span className="text-[11px] font-bold text-amber-300 drop-shadow-md bg-black/40 px-2 py-0.5 rounded-full backdrop-blur-sm">
            {product.piecesPerPack} bocados
          </span>
        </div>
      </div>

      {/* Body Content */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          {/* Rating & Pack info */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 text-[#C59B27] text-xs font-bold">
              <Star className="w-3.5 h-3.5 fill-[#C59B27]" />
              <span>{product.rating.toFixed(2)}</span>
              <span className="text-slate-400 font-normal">({product.reviewsCount} reseñas)</span>
            </div>
            <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-md">
              {product.unit}
            </span>
          </div>

          <h3 className="font-heading text-xl font-bold text-slate-900 group-hover:text-[#C59B27] transition-colors leading-snug">
            {product.name}
          </h3>

          <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Interactive Expandable Specs / Ingredients */}
        <div className="pt-2 border-t border-slate-100">
          <button
            type="button"
            onClick={() => setShowDetails(!showDetails)}
            className="w-full flex items-center justify-between text-[11px] font-bold text-[#A8811A] hover:text-[#C59B27] py-1 transition-colors"
          >
            <span className="flex items-center gap-1.5">
              <Info className="w-3.5 h-3.5" />
              {showDetails ? 'Ocultar ingredientes y preparación' : 'Ver ingredientes y preparación Air Fryer'}
            </span>
            <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${showDetails ? 'rotate-180' : ''}`} />
          </button>

          {showDetails && (
            <div className="mt-2.5 p-3 rounded-2xl bg-[#F8F6F0] border border-amber-200/50 space-y-2 text-[11px] text-slate-700 animate-fadeIn">
              <div className="space-y-1">
                <span className="font-extrabold text-[#A8811A] block uppercase tracking-wider text-[10px]">
                  Ingredientes Artesanales:
                </span>
                <div className="flex flex-wrap gap-1">
                  {product.ingredients.map((ing, i) => (
                    <span key={i} className="bg-white border border-slate-200 px-2 py-0.5 rounded-full text-slate-700 text-[10px]">
                      {ing}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-1.5 border-t border-amber-200/40 flex items-center justify-between text-[10px] text-slate-600">
                <span className="flex items-center gap-1 text-emerald-700 font-semibold">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  Descongelar antes de hornear
                </span>
                <span className="font-bold text-slate-700">🔥 {product.calories} kcal/porción</span>
              </div>
            </div>
          )}
        </div>

        {/* Price & Action Button */}
        <div className="flex items-center justify-between pt-3 border-t border-slate-100">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="font-heading text-2xl font-extrabold text-slate-900 tracking-tight">
                ${product.price.toLocaleString('es-CO')}
              </span>
              {product.originalPrice && (
                <span className="text-xs text-slate-400 line-through">
                  ${product.originalPrice.toLocaleString('es-CO')}
                </span>
              )}
            </div>
            <span className="text-[10px] text-[#A8811A] font-semibold block">
              ${Math.round(product.price / product.piecesPerPack).toLocaleString('es-CO')} por bocado
            </span>
          </div>

          <button
            type="button"
            onClick={() => addToCart(product)}
            className="gold-gradient-btn px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 shadow-md hover:shadow-lg active:scale-95 transition-all cursor-pointer"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Comprar</span>
          </button>
        </div>
      </div>
    </article>
  );
}
