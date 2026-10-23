'use client';

import React from 'react';
import { Snowflake, Flame, HeartHandshake, ArrowRight } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      step: '01',
      icon: <Snowflake className="w-8 h-8 text-[#C59B27]" />,
      title: 'Deja descongelar',
      description: 'Sácalo con anticipación y déjalo descongelar a temperatura ambiente. Este reposo clave asegura que la masa de hojaldre se expanda uniformemente, evitando que se queme por fuera o quede frío por dentro.'
    },
    {
      step: '02',
      icon: <Flame className="w-8 h-8 text-[#C59B27]" />,
      title: 'Lleva a la Air Fryer',
      description: 'Programa a 160°C durante 12 a 15 minutos. La temperatura ideal para que el hojaldre se infle de forma espectacular y el queso se derrita a la perfección.'
    },
    {
      step: '03',
      icon: <HeartHandshake className="w-8 h-8 text-[#C59B27]" />,
      title: 'Disfruta Recién Horneado',
      description: 'Sirve caliente sobre la mesa y disfruta el sonido crujiente del primer bocado junto a los tuyos.'
    }
  ];

  return (
    <section className="py-24 bg-[#FDFBF7] text-[#0F172A] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-widest text-[#C59B27] font-semibold block">
            Simplicidad Absoluta
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-[#0F172A]">
            ¿Cómo Funciona HORNEA?
          </h2>
          <p className="text-sm sm:text-base text-[#475569]">
            Tres pasos sin complicaciones para convertir tu casa en una panadería artesanal gourmet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((s, idx) => (
            <div
              key={s.step}
              className="glass-gold-card p-8 rounded-3xl space-y-6 relative flex flex-col justify-between group hover:border-[#C59B27] transition-all"
            >
              <div className="flex items-center justify-between">
                <div className="w-16 h-16 rounded-2xl bg-[#FDF6E2] border border-[#C59B27]/25 flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
                  {s.icon}
                </div>
                <span className="font-heading text-4xl font-extrabold text-[#E2E8F0] group-hover:text-[#C59B27]/20 transition-colors">
                  {s.step}
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="font-heading text-2xl font-bold text-[#0F172A]">
                  {s.title}
                </h3>
                <p className="text-xs text-[#475569] leading-relaxed">
                  {s.description}
                </p>
              </div>

              {idx < 2 && (
                <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 z-10 text-[#C59B27]/30">
                  <ArrowRight className="w-8 h-8" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
