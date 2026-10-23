'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, Tag, Truck, ShieldCheck } from 'lucide-react';
import { useStore } from '@/context/StoreContext';

export function CartDrawer() {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    subtotal,
    appliedCoupon,
    applyCoupon,
    discountAmount,
    total
  } = useStore();

  const [couponInput, setCouponInput] = useState('');

  if (!isCartOpen) return null;

  const freeShippingThreshold = 70000;
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);
  const freeShippingProgress = Math.min(100, (subtotal / freeShippingThreshold) * 100);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (couponInput) {
      applyCoupon(couponInput);
      setCouponInput('');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={() => setIsCartOpen(false)}
        className="fixed inset-0 bg-[#0F172A]/40 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white border-l border-[#E2E8F0] text-[#0F172A] shadow-2xl flex flex-col justify-between">
          {/* Header */}
          <div className="p-6 border-b border-[#E2E8F0] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#FDF6E2] flex items-center justify-center text-[#C59B27] border border-[#C59B27]/25">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-heading font-bold text-xl text-[#0F172A]">Tu Congelador</h2>
                <p className="text-xs text-[#64748B]">
                  {cart.length === 0 ? 'Sin productos aún' : `${cart.length} productos seleccionados`}
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 text-[#64748B] hover:text-[#0F172A] rounded-full hover:bg-[#F8F6F0] transition-colors"
              aria-label="Cerrar carrito"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Free Shipping Progress Bar */}
          <div className="px-6 py-3 bg-[#FDFBF7] border-b border-[#E2E8F0]">
            <div className="flex items-center justify-between text-xs mb-1.5">
              <span className="flex items-center gap-1.5 text-[#C59B27] font-medium">
                <Truck className="w-4 h-4" />
                {remainingForFreeShipping === 0
                  ? '¡Envío Refrigerado GRATIS conseguido!'
                  : `Agrega $${remainingForFreeShipping.toLocaleString('es-CO')} para Envío GRATIS`}
              </span>
              <span className="font-bold text-xs text-[#64748B]">
                {Math.round(freeShippingProgress)}%
              </span>
            </div>
            <div className="w-full bg-[#E2E8F0] rounded-full h-2 overflow-hidden">
              <div
                className="bg-gradient-to-r from-[#C59B27] to-[#E5C158] h-full rounded-full transition-all duration-500"
                style={{ width: `${freeShippingProgress}%` }}
              />
            </div>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cart.length === 0 ? (
              <div className="text-center py-16 flex flex-col items-center justify-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#F8F6F0] border border-[#E2E8F0] flex items-center justify-center text-[#94A3B8]">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <p className="text-lg font-heading text-[#0F172A]">Tu congelador está vacío</p>
                <p className="text-sm text-[#475569] max-w-xs">
                  Agrega palitos de queso o pandebonos para disfrutar de momentos recién horneados.
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="gold-gradient-btn px-6 py-2.5 rounded-full text-sm font-semibold mt-2 shadow-md"
                >
                  Explorar Catálogo Premium
                </button>
              </div>
            ) : (
              cart.filter((item) => item && item.product).map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-4 p-3 rounded-xl bg-[#F8F6F0] border border-[#E2E8F0] hover:border-[#C59B27]/30 transition-all"
                >
                  <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-[#F1F5F9] flex-shrink-0 border border-[#E2E8F0]">
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <h4 className="font-heading font-medium text-sm text-[#0F172A] line-clamp-1">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          className="text-[#94A3B8] hover:text-red-400 p-1 transition-colors"
                          aria-label={`Eliminar ${item.product.name}`}
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-xs text-[#C59B27] font-semibold mt-0.5">
                        ${item.product.price.toLocaleString('es-CO')} c/u
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border border-[#E2E8F0] rounded-lg bg-white shadow-sm">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="px-2 py-1 text-[#64748B] hover:text-[#0F172A] text-xs transition-colors"
                          aria-label="Disminuir cantidad"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-bold text-[#0F172A]">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="px-2 py-1 text-[#64748B] hover:text-[#0F172A] text-xs transition-colors"
                          aria-label="Aumentar cantidad"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <span className="font-bold text-sm text-[#0F172A]">
                        ${(item.product.price * item.quantity).toLocaleString('es-CO')}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout Action */}
          {cart.length > 0 && (
            <div className="p-6 border-t border-[#E2E8F0] bg-[#FDFBF7] space-y-4">
              {/* Coupon input */}
              <form onSubmit={handleApplyCoupon} className="flex gap-2">
                <div className="relative flex-1">
                  <Tag className="w-4 h-4 absolute left-3 top-3 text-[#94A3B8]" />
                  <input
                    type="text"
                    value={couponInput}
                    onChange={(e) => setCouponInput(e.target.value)}
                    placeholder="Código de cupón (ej: HORNEA10)"
                    className="w-full bg-white border border-[#E2E8F0] rounded-lg pl-9 pr-3 py-2 text-xs text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#C59B27]"
                  />
                </div>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#FDF6E2] hover:bg-[#C59B27]/20 border border-[#C59B27]/40 text-[#C59B27] rounded-lg text-xs font-semibold transition-colors"
                >
                  Aplicar
                </button>
              </form>

              {appliedCoupon && (
                <div className="flex justify-between items-center text-xs text-[#C59B27] bg-[#FDF6E2] p-2 rounded-lg border border-[#C59B27]/25">
                  <span>Descuento cupón {appliedCoupon.code} ({appliedCoupon.discountPercent}%):</span>
                  <span>-${discountAmount.toLocaleString('es-CO')}</span>
                </div>
              )}

              {/* Price summary */}
              <div className="space-y-1.5 text-xs text-[#475569]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="text-[#0F172A] font-medium">${subtotal.toLocaleString('es-CO')}</span>
                </div>
                <div className="flex justify-between">
                  <span>Envío Frío Controlado</span>
                  <span className="text-[#0F172A] font-medium">
                    {subtotal >= freeShippingThreshold ? 'GRATIS' : '$7.500'}
                  </span>
                </div>
                <div className="flex justify-between text-base font-bold text-[#0F172A] pt-2 border-t border-[#E2E8F0]">
                  <span>Total</span>
                  <span className="text-[#C59B27]">
                    ${(total + (subtotal >= freeShippingThreshold ? 0 : 7500)).toLocaleString('es-CO')}
                  </span>
                </div>
              </div>

              {/* Checkout CTA */}
              <Link
                href="/checkout"
                onClick={() => setIsCartOpen(false)}
                className="w-full gold-gradient-btn py-3.5 px-6 rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-md"
              >
                <span>Proceder al Pago Seguro</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <div className="flex items-center justify-center gap-2 text-[11px] text-[#64748B]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C59B27]" />
                <span>Garantía de Cadena de Frío &amp; Pago Encriptado 256-bit</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
