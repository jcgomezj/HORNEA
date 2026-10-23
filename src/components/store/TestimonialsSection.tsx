'use client';

import React from 'react';
import Image from 'next/image';
import { Star, ShieldCheck, Quote } from 'lucide-react';
import { REVIEWS } from '@/data/mockData';

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-[#FDFBF7] text-[#0F172A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#C59B27] font-semibold">
            <ShieldCheck className="w-4 h-4" />
            <span>Opiniones de Familias Reales</span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-[#0F172A]">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-sm sm:text-base text-[#475569]">
            Más de 10,000 congeladores en Colombia ya tienen HORNEA listo para hornear.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="glass-gold-card p-8 rounded-3xl space-y-6 flex flex-col justify-between relative group hover:border-[#C59B27]/50 transition-all"
            >
              <Quote className="w-10 h-10 text-[#C59B27]/15 absolute top-6 right-6" />

              <div className="space-y-4">
                {/* Rating stars */}
                <div className="flex items-center gap-1 text-[#C59B27]">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C59B27]" />
                  ))}
                </div>

                <p className="text-sm text-[#0F172A]/85 italic leading-relaxed">
                  &ldquo;{review.comment}&rdquo;
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-4 border-t border-[#E2E8F0] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-[#C59B27]/30 bg-[#F1F5F9]">
                    <Image
                      src={review.avatar}
                      alt={review.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-heading text-sm font-bold text-[#0F172A]">
                      {review.author}
                    </h4>
                    <span className="text-[11px] text-[#64748B]">{review.city}</span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="inline-flex items-center gap-1 text-[10px] text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    <ShieldCheck className="w-3 h-3" />
                    Compra verificada
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
