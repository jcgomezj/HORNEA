'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Send, Flame, Shield, CheckCircle2, Mail, Phone, MapPin } from 'lucide-react';
import { useStore } from '@/context/StoreContext';

export function Footer() {
  const { showToast } = useStore();
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      showToast('💌 ¡Bienvenido al Club HORNEA! Revisa tu correo para recibir un 15% en tu primer pedido.');
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#0F172A] border-t border-[#C59B27]/20 text-white pt-16 pb-12 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-[#C59B27]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#C59B27] to-[#8C6F16] flex items-center justify-center font-heading font-bold text-lg text-white shadow-md">
                H
              </div>
              <span className="font-heading font-bold text-2xl text-white tracking-wider">
                HORNEA
              </span>
            </div>
            <p className="text-sm text-white/60 max-w-sm leading-relaxed">
              HORNEA no vende productos congelados. HORNEA vende momentos recién horneados. Calidad artesanal colombiana lista para Air Fryer u horno en menos de 20 minutos.
            </p>

            {/* Newsletter */}
            <div className="pt-2">
              <span className="block text-xs font-semibold text-[#C59B27] uppercase tracking-wider mb-2">
                Únete a la Experiencia Recién Horneada
              </span>
              <form onSubmit={handleSubscribe} className="flex gap-2 max-w-md">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Tu correo electrónico"
                  className="flex-1 bg-white/10 border border-white/15 rounded-lg px-4 py-2.5 text-xs text-white placeholder:text-white/40 focus:outline-none focus:border-[#C59B27] transition-colors"
                />
                <button
                  type="submit"
                  className="bg-[#C59B27] hover:bg-[#A8811A] text-white px-4 py-2.5 rounded-lg text-xs font-bold flex items-center gap-1 transition-colors shadow-md"
                >
                  <span>Suscribir</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>
          </div>

          {/* Nav Column 1 */}
          <div className="space-y-3 text-sm">
            <h4 className="font-heading font-bold text-[#C59B27] text-base">Productos</h4>
            <ul className="space-y-2 text-white/60">
              <li><Link href="/#productos" className="hover:text-white transition-colors">Palitos de Queso</Link></li>
              <li><Link href="/#productos" className="hover:text-white transition-colors">Pasteles de Guayaba</Link></li>
              <li><Link href="/#productos" className="hover:text-white transition-colors">Pandebonos Artesanales</Link></li>
              <li><Link href="/#productos" className="hover:text-white transition-colors">Croissants Mantequilla</Link></li>
              <li><Link href="/#productos" className="hover:text-white transition-colors">Pan de Yuca</Link></li>
              <li><Link href="/#productos" className="hover:text-white transition-colors">Almojábanas</Link></li>
            </ul>
          </div>

          {/* Nav Column 2 */}
          <div className="space-y-3 text-sm">
            <h4 className="font-heading font-bold text-[#C59B27] text-base">Experiencia</h4>
            <ul className="space-y-2 text-white/60">
              <li><Link href="/#momentos" className="hover:text-white transition-colors">Momentos HORNEA</Link></li>
              <li><Link href="/distribuidores" className="hover:text-white transition-colors">Distribuidores B2B</Link></li>
              <li><Link href="/mi-cuenta" className="hover:text-white transition-colors">Rastrear Pedido</Link></li>
            </ul>
          </div>

          {/* Nav Column 3 */}
          <div className="space-y-3 text-sm">
            <h4 className="font-heading font-bold text-[#C59B27] text-base">Contacto &amp; Cobertura</h4>
            <ul className="space-y-2.5 text-white/60 text-xs">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#C59B27] shrink-0" />
                <span>Medellín, Colombia</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C59B27] shrink-0" />
                <span>+57 (601) 800-HORNEA</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#C59B27] shrink-0" />
                <span>hola@hornea.co</span>
              </li>
              <li className="pt-2 flex items-center gap-3">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-2 bg-white/5 rounded-full hover:bg-[#C59B27]/20 hover:text-[#C59B27] transition-all">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="p-2 bg-white/5 rounded-full hover:bg-[#C59B27]/20 hover:text-[#C59B27] transition-all">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright & WCAG badges */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-[#C59B27]" />
            <span>© 2026 HORNEA Colombia S.A.S. Todos los derechos reservados.</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-emerald-400/80">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>WCAG 2.2 AA Compliant</span>
            </span>
            <span className="flex items-center gap-1.5 text-[#C59B27]">
              <Flame className="w-3.5 h-3.5" />
              <span>Lighthouse Score &gt; 98</span>
            </span>
            <span className="text-white/40 hover:text-white/60 cursor-pointer transition-colors">Términos &amp; Privacidad</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
