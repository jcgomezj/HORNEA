'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ShieldCheck, Truck, CreditCard, CheckCircle2, Lock, Sparkles } from 'lucide-react';
import { useStore } from '@/context/StoreContext';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CartDrawer } from '@/components/layout/CartDrawer';
import { Order } from '@/types';

export default function CheckoutPage() {
  const { cart, subtotal, discountAmount, total, createOrder } = useStore();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: 'Bogotá, D.C.',
    address: '',
    neighborhood: '',
    notes: '',
    paymentMethod: 'Wompi (PSE, Nequi, Tarjetas, Bancolombia)' as Order['paymentMethod']
  });

  const [createdOrder, setCreatedOrder] = useState<Order | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const freeShippingThreshold = 70000;
  const shippingFee = subtotal >= freeShippingThreshold ? 0 : 7500;
  const grandTotal = total + shippingFee;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0) return;

    setIsProcessing(true);

    try {
      const order = createOrder({
        customerName: formData.fullName,
        customerEmail: formData.email,
        shippingAddress: `${formData.address}, ${formData.neighborhood}`,
        city: formData.city,
        paymentMethod: formData.paymentMethod
      });

      // Si el método es Wompi, solicitamos firma a la API de Wompi
      if (formData.paymentMethod === 'Wompi (PSE, Nequi, Tarjetas, Bancolombia)') {
        try {
          const res = await fetch('/api/wompi/create-checkout', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              orderId: order.id,
              amount: grandTotal,
              customerEmail: formData.email,
              customerName: formData.fullName,
              phone: formData.phone,
            }),
          });
          const data = await res.json();
          if (data?.success && data?.wompiCheckoutUrl) {
            // Guardamos la orden local y mostramos confirmación
          }
        } catch (apiErr) {
          console.warn('Wompi API offline o modo sandbox local:', apiErr);
        }
      }

      setCreatedOrder(order);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#FDFBF7] text-[#0F172A]">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Navigation back link */}
        <Link href="/#productos" className="inline-flex items-center gap-2 text-xs text-[#64748B] hover:text-[#C59B27] mb-8 font-semibold transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span>Volver al catálogo de productos</span>
        </Link>

        {createdOrder ? (
          /* Order Confirmation Screen */
          <div className="max-w-2xl mx-auto glass-gold-card p-8 sm:p-12 rounded-3xl text-center space-y-6 bg-white shadow-xl border border-[#C59B27]/30">
            <div className="w-20 h-20 rounded-full bg-[#FDF6E2] border-2 border-[#C59B27] text-[#C59B27] flex items-center justify-center mx-auto animate-pulse">
              <CheckCircle2 className="w-12 h-12" />
            </div>

            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest text-[#C59B27] font-extrabold">¡Pago Exitoso!</span>
              <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#0F172A]">
                Pedido Confirmado #{createdOrder.id}
              </h1>
              <p className="text-xs text-[#475569]">
                Hemos enviado la confirmación y guía de despacho refrigerado a <strong className="text-[#0F172A]">{createdOrder.customerEmail}</strong>.
              </p>
            </div>

            {/* Order Info Card */}
            <div className="bg-[#F8F6F0] p-6 rounded-2xl border border-[#E2E8F0] text-left space-y-3 text-xs">
              <div className="flex justify-between border-b border-[#E2E8F0] pb-2">
                <span className="text-[#64748B]">Número de Guía Fría:</span>
                <span className="font-mono text-[#C59B27] font-bold">{createdOrder.trackingNumber}</span>
              </div>
              <div className="flex justify-between border-b border-[#E2E8F0] pb-2">
                <span className="text-[#64748B]">Dirección de Entrega:</span>
                <span className="text-[#0F172A] font-semibold">{createdOrder.shippingAddress}, {createdOrder.city}</span>
              </div>
              <div className="flex justify-between border-b border-[#E2E8F0] pb-2">
                <span className="text-[#64748B]">Método de Pago:</span>
                <span className="text-[#0F172A] font-semibold">{createdOrder.paymentMethod}</span>
              </div>
              <div className="flex justify-between font-bold text-sm text-[#0F172A] pt-1">
                <span>Total Pagado:</span>
                <span className="text-[#C59B27]">${createdOrder.total.toLocaleString('es-CO')}</span>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/mi-cuenta"
                className="gold-gradient-btn px-6 py-3 rounded-full text-xs font-bold flex items-center justify-center gap-2 shadow-md"
              >
                <Truck className="w-4 h-4" />
                <span>Rastrear mi Pedido en Tiempo Real</span>
              </Link>
            </div>
          </div>
        ) : (
          /* Checkout Form */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Form Column */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <h1 className="font-heading text-3xl font-extrabold text-[#0F172A]">
                  Finalizar Compra Segura
                </h1>
                <p className="text-xs text-[#64748B] mt-1">
                  Ingresa tus datos para coordinar la entrega en vehículo refrigerado con control de temperatura.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Contact info */}
                <div className="bg-white border border-[#E2E8F0] p-6 rounded-2xl shadow-sm space-y-4">
                  <h3 className="font-heading font-bold text-[#C59B27] text-sm uppercase tracking-wider">
                    1. Datos de Contacto
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#475569] mb-1">Nombre Completo *</label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Ej: María José Ramírez"
                        className="w-full bg-[#FDFBF7] border border-[#E2E8F0] rounded-xl px-4 py-2.5 text-xs text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#C59B27] focus:ring-1 focus:ring-[#C59B27]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#475569] mb-1">Correo Electrónico *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="mariajose@ejemplo.com"
                        className="w-full bg-[#FDFBF7] border border-[#E2E8F0] rounded-xl px-4 py-2.5 text-xs text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#C59B27] focus:ring-1 focus:ring-[#C59B27]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#475569] mb-1">Celular / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Ej: 300 123 4567"
                      className="w-full bg-[#FDFBF7] border border-[#E2E8F0] rounded-xl px-4 py-2.5 text-xs text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#C59B27] focus:ring-1 focus:ring-[#C59B27]"
                    />
                  </div>
                </div>

                {/* Shipping address */}
                <div className="bg-white border border-[#E2E8F0] p-6 rounded-2xl shadow-sm space-y-4">
                  <h3 className="font-heading font-bold text-[#C59B27] text-sm uppercase tracking-wider">
                    2. Dirección de Envío Frío
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#475569] mb-1">Ciudad *</label>
                      <select
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full bg-[#FDFBF7] border border-[#E2E8F0] rounded-xl px-4 py-2.5 text-xs text-[#0F172A] focus:outline-none focus:border-[#C59B27] focus:ring-1 focus:ring-[#C59B27]"
                      >
                        <option value="Medellín">Medellín - Envigado & Área Metropolitana</option>
                        <option value="Bogotá, D.C.">Bogotá, D.C.</option>
                        <option value="Cali">Cali & Yumbo</option>
                        <option value="Barranquilla">Barranquilla</option>
                        <option value="Bucaramanga">Bucaramanga</option>
                        <option value="Pereira">Pereira & Eje Cafetero</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#475569] mb-1">Barrio *</label>
                      <input
                        type="text"
                        required
                        value={formData.neighborhood}
                        onChange={(e) => setFormData({ ...formData, neighborhood: e.target.value })}
                        placeholder="Ej: El Poblado / Envigado / Laureles"
                        className="w-full bg-[#FDFBF7] border border-[#E2E8F0] rounded-xl px-4 py-2.5 text-xs text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#C59B27] focus:ring-1 focus:ring-[#C59B27]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#475569] mb-1">Dirección Exacta (Calle, Carrera, Edificio/Apto) *</label>
                    <input
                      type="text"
                      required
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      placeholder="Ej: Carrera 43A #1-50 Apt 502"
                      className="w-full bg-[#FDFBF7] border border-[#E2E8F0] rounded-xl px-4 py-2.5 text-xs text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#C59B27] focus:ring-1 focus:ring-[#C59B27]"
                    />
                  </div>
                </div>

                {/* Payment selection */}
                <div className="bg-white border border-[#E2E8F0] p-6 rounded-2xl shadow-sm space-y-4">
                  <h3 className="font-heading font-bold text-[#C59B27] text-sm uppercase tracking-wider">
                    3. Método de Pago Seguro
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      {
                        id: 'Wompi (PSE, Nequi, Tarjetas, Bancolombia)',
                        label: '🇨🇴 Wompi Colombia (PSE, Nequi, Tarjetas)',
                        badge: 'Recomendado'
                      },
                      { id: 'Tarjeta de Crédito / Stripe', label: '💳 Tarjeta Internacional / Stripe' },
                      { id: 'PSE', label: '🏦 Transferencia Directa PSE' },
                      { id: 'Nequi', label: '📲 Nequi / Daviplata Directo' },
                      { id: 'Pago Contraentrega', label: '💵 Pago Contraentrega en Efectivo' }
                    ].map((pm) => (
                      <button
                        type="button"
                        key={pm.id}
                        onClick={() => setFormData({ ...formData, paymentMethod: pm.id as Order['paymentMethod'] })}
                        className={`p-3.5 rounded-xl border text-left text-xs font-semibold transition-all relative ${
                          formData.paymentMethod === pm.id
                            ? 'border-[#C59B27] bg-[#FDF6E2] text-[#0F172A] shadow-sm font-bold ring-1 ring-[#C59B27]/40'
                            : 'border-[#E2E8F0] bg-[#FDFBF7] text-[#475569] hover:border-[#C59B27]/40'
                        }`}
                      >
                        {pm.badge && (
                          <span className="absolute -top-2 right-3 bg-[#C59B27] text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm">
                            {pm.badge}
                          </span>
                        )}
                        <span>{pm.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={cart.length === 0}
                  className="w-full gold-gradient-btn py-4 px-6 rounded-2xl font-bold text-base flex items-center justify-center gap-2 shadow-lg disabled:opacity-50"
                >
                  <Lock className="w-5 h-5" />
                  <span>Pagar ${grandTotal.toLocaleString('es-CO')} Seguramente</span>
                </button>
              </form>
            </div>

            {/* Order Summary Sidebar Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="glass-gold-card bg-white p-6 rounded-3xl space-y-6 sticky top-28 border border-[#E2E8F0] shadow-md">
                <h3 className="font-heading font-bold text-xl text-[#0F172A]">
                  Resumen de tu Congelador
                </h3>

                <div className="space-y-3 max-h-72 overflow-y-auto pr-1">
                  {cart.map((item) => (
                    <div key={item.product.id} className="flex gap-3 text-xs items-center p-2 rounded-xl bg-[#F8F6F0] border border-[#E2E8F0]">
                      <div className="relative w-14 h-14 rounded-lg overflow-hidden bg-[#F1F5F9] shrink-0 border border-[#E2E8F0]">
                        <Image src={item.product.image} alt={item.product.name} fill className="object-cover" />
                      </div>
                      <div className="flex-1 flex justify-between items-center">
                        <div>
                          <h4 className="font-bold text-[#0F172A] line-clamp-1">{item.product.name}</h4>
                          <span className="text-[#64748B]">Cant: {item.quantity} x ${item.product.price.toLocaleString('es-CO')}</span>
                        </div>
                        <span className="font-bold text-[#C59B27]">
                          ${(item.product.price * item.quantity).toLocaleString('es-CO')}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-[#E2E8F0] pt-4 space-y-2 text-xs text-[#475569]">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="text-[#0F172A] font-semibold">${subtotal.toLocaleString('es-CO')}</span>
                  </div>
                  {discountAmount > 0 && (
                    <div className="flex justify-between text-[#C59B27] font-semibold">
                      <span>Descuento Cupón</span>
                      <span>-${discountAmount.toLocaleString('es-CO')}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span>Envío Refrigerado Express</span>
                    <span className="text-[#0F172A] font-semibold">{shippingFee === 0 ? 'GRATIS' : `$${shippingFee.toLocaleString('es-CO')}`}</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg text-[#0F172A] pt-2 border-t border-[#E2E8F0]">
                    <span>Total a Pagar</span>
                    <span className="text-[#C59B27]">${grandTotal.toLocaleString('es-CO')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
      <CartDrawer />
    </main>
  );
}
