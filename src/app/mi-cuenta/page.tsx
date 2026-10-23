'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Package, Truck, CheckCircle, Clock, MapPin, ShieldCheck, Heart, ShoppingBag } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CartDrawer } from '@/components/layout/CartDrawer';
import { useStore } from '@/context/StoreContext';
import { PRODUCTS } from '@/data/mockData';

export default function AccountPage() {
  const { orders, wishlist, addToCart } = useStore();

  const favoriteProducts = PRODUCTS.filter((p) => wishlist.includes(p.id));

  return (
    <main className="min-h-screen bg-[#FDFBF7] text-[#0F172A]">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Header */}
        <div className="border-b border-[#E2E8F0] pb-6">
          <span className="text-xs uppercase tracking-widest text-[#C59B27] font-bold">Portal del Cliente</span>
          <h1 className="font-heading text-4xl font-extrabold text-[#0F172A] mt-1">
            Mi Cuenta &amp; Historial de Pedidos
          </h1>
        </div>

        {/* Live Orders Section */}
        <div className="space-y-6">
          <h2 className="font-heading text-2xl font-bold text-[#0F172A] flex items-center gap-2">
            <Truck className="w-5 h-5 text-[#C59B27]" />
            <span>Rastreo de Pedidos Refrigerados</span>
          </h2>

          <div className="space-y-6">
            {orders.map((order) => (
              <div key={order.id} className="glass-gold-card bg-white rounded-3xl p-6 sm:p-8 space-y-6 border border-[#E2E8F0] shadow-md">
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E2E8F0] pb-4 text-xs">
                  <div>
                    <span className="text-[#64748B] font-medium">Pedido ID:</span>
                    <span className="font-mono text-[#C59B27] font-bold text-sm ml-2">{order.id}</span>
                    <span className="text-[#64748B] ml-4">• Realizado el {order.date}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[#64748B] font-medium">Guía Fría:</span>
                    <span className="bg-[#FDF6E2] border border-[#C59B27]/40 text-[#C59B27] px-3 py-1 rounded-full font-mono text-[11px] font-bold">
                      {order.trackingNumber}
                    </span>
                  </div>
                </div>

                {/* Tracking Progress Timeline */}
                <div className="py-4">
                  <div className="grid grid-cols-4 gap-2 text-center text-[11px] font-bold mb-2">
                    <div className={order.status === 'Recibido' || order.status === 'En Preparación' || order.status === 'En Camino (Refrigerado)' || order.status === 'Entregado' ? 'text-[#C59B27]' : 'text-[#94A3B8]'}>
                      1. Recibido
                    </div>
                    <div className={order.status === 'En Preparación' || order.status === 'En Camino (Refrigerado)' || order.status === 'Entregado' ? 'text-[#C59B27]' : 'text-[#94A3B8]'}>
                      2. En Congelador
                    </div>
                    <div className={order.status === 'En Camino (Refrigerado)' || order.status === 'Entregado' ? 'text-[#C59B27]' : 'text-[#94A3B8]'}>
                      3. En Camión Frío (-18°C)
                    </div>
                    <div className={order.status === 'Entregado' ? 'text-[#C59B27]' : 'text-[#94A3B8]'}>
                      4. Entregado
                    </div>
                  </div>

                  <div className="w-full bg-[#E2E8F0] h-2.5 rounded-full overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-[#C59B27] to-[#E5C158] h-full rounded-full transition-all duration-500"
                      style={{
                        width:
                          order.status === 'Recibido' ? '25%' :
                          order.status === 'En Preparación' ? '50%' :
                          order.status === 'En Camino (Refrigerado)' ? '75%' : '100%'
                      }}
                    />
                  </div>
                </div>

                {/* Items & Shipping address */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 text-xs">
                  <div className="space-y-2">
                    <h4 className="font-bold text-[#0F172A]">Productos Comprados:</h4>
                    {order.items.map((it) => (
                      <div key={it.product.id} className="flex justify-between text-[#475569] p-2 rounded-lg bg-[#F8F6F0]">
                        <span className="font-medium">{it.quantity}x {it.product.name}</span>
                        <span className="text-[#0F172A] font-bold">${(it.product.price * it.quantity).toLocaleString('es-CO')}</span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-2 bg-[#F8F6F0] p-4 rounded-xl border border-[#E2E8F0]">
                    <h4 className="font-bold text-[#0F172A] flex items-center gap-1.5 text-[#C59B27]">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>Destino de Entrega:</span>
                    </h4>
                    <p className="text-[#475569] font-medium">{order.customerName}</p>
                    <p className="text-[#475569]">{order.shippingAddress}, {order.city}</p>
                    <p className="text-[#C59B27] font-semibold mt-1">Estimado: {order.estimatedDelivery}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Wishlist Section */}
        <div className="space-y-6 pt-6 border-t border-[#E2E8F0]">
          <h2 className="font-heading text-2xl font-bold text-[#0F172A] flex items-center gap-2">
            <Heart className="w-5 h-5 text-red-500 fill-red-500" />
            <span>Tus Antojos Guardados ({favoriteProducts.length})</span>
          </h2>

          {favoriteProducts.length === 0 ? (
            <p className="text-xs text-[#64748B]">No tienes productos guardados en tus antojos aún.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {favoriteProducts.map((p) => (
                <div key={p.id} className="bg-white border border-[#E2E8F0] p-4 rounded-2xl flex gap-4 items-center shadow-sm">
                  <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-[#F1F5F9] shrink-0 border border-[#E2E8F0]">
                    <Image src={p.image} alt={p.name} fill className="object-cover" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-xs text-[#0F172A]">{p.name}</h4>
                    <span className="text-xs text-[#C59B27] font-bold block">${p.price.toLocaleString('es-CO')}</span>
                    <button
                      onClick={() => addToCart(p)}
                      className="mt-2 text-[11px] text-[#C59B27] font-bold flex items-center gap-1 hover:underline"
                    >
                      <ShoppingBag className="w-3 h-3" />
                      <span>Añadir al Carrito</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <Footer />
      <CartDrawer />
    </main>
  );
}
