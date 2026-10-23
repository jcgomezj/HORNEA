'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ShoppingBag, Heart, Flame, Menu, X, ShieldCheck, User } from 'lucide-react';
import { useStore } from '@/context/StoreContext';

import { HorneaLogo } from '@/components/layout/HorneaLogo';

export function Header() {
  const { cart, wishlist, setIsCartOpen } = useStore();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  const cartCount = isMounted ? cart.reduce((acc, item) => acc + (item?.quantity || 0), 0) : 0;
  const wishlistCount = isMounted ? wishlist.length : 0;

  return (
    <header className="sticky top-0 z-40 w-full glass-panel border-b border-slate-200/80 bg-white/90 transition-all">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <HorneaLogo variant="header" darkText={true} />
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-700">
          <Link href="/#productos" className="hover:text-[#C59B27] transition-colors">
            Productos
          </Link>
          <Link href="/#momentos" className="hover:text-[#C59B27] transition-colors">
            Momentos
          </Link>
          <Link href="/distribuidores" className="hover:text-[#C59B27] transition-colors text-xs uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-slate-300 text-slate-800 hover:border-[#C59B27]">
            Distribuidores B2B
          </Link>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <Link
            href="/mi-cuenta"
            aria-label="Mi Cuenta y Pedidos"
            className="p-2 text-slate-700 hover:text-[#C59B27] transition-colors relative"
          >
            <User className="w-5 h-5" />
          </Link>

          <Link
            href="/#productos"
            aria-label="Wishlist / Antojos Guardados"
            className="p-2 text-slate-700 hover:text-[#C59B27] transition-colors relative"
          >
            <Heart className="w-5 h-5" />
            {wishlistCount > 0 && (
              <span className="absolute top-1 right-1 bg-[#C59B27] text-white font-bold text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                {wishlistCount}
              </span>
            )}
          </Link>

          <button
            type="button"
            onClick={() => setIsCartOpen(true)}
            aria-label={`Abrir carrito de compras con ${cartCount} productos`}
            className="flex items-center gap-2 gold-gradient-btn px-5 py-2.5 rounded-full font-bold text-sm shadow-md transition-all cursor-pointer"
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="hidden sm:inline">Congelador</span>
            <span className="bg-white text-slate-900 font-bold text-xs px-2 py-0.5 rounded-full">
              {cartCount}
            </span>
          </button>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-900 hover:text-[#C59B27]"
            aria-label="Abrir menú de navegación"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-6 py-6 flex flex-col gap-4 text-base font-semibold text-slate-800">
          <Link href="/#productos" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#C59B27]">
            Productos Premium
          </Link>
          <Link href="/#momentos" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#C59B27]">
            Momentos HORNEA
          </Link>
          <Link href="/distribuidores" onClick={() => setMobileMenuOpen(false)} className="text-[#C59B27] font-bold">
            Ventas al por mayor / Distribuidores B2B
          </Link>
        </div>
      )}
    </header>
  );
}
