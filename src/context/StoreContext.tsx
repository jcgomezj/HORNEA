'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, CartItem, Order, DistributorLead } from '@/types';
import { PRODUCTS, MOCK_ORDERS } from '@/data/mockData';

interface StoreContextType {
  cart: CartItem[];
  wishlist: string[];
  isCartOpen: boolean;
  appliedCoupon: { code: string; discountPercent: number } | null;
  toastMessage: string | null;
  orders: Order[];
  leads: DistributorLead[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  toggleWishlist: (productId: string) => void;
  setIsCartOpen: (isOpen: boolean) => void;
  applyCoupon: (code: string) => boolean;
  showToast: (msg: string) => void;
  createOrder: (orderData: Partial<Order>) => Order;
  submitLead: (lead: DistributorLead) => void;
  subtotal: number;
  discountAmount: number;
  total: number;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [appliedCoupon, setAppliedCoupon] = useState<{ code: string; discountPercent: number } | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [orders, setOrders] = useState<Order[]>(MOCK_ORDERS);
  const [leads, setLeads] = useState<DistributorLead[]>([
    {
      id: 'lead-1',
      fullName: 'Andrés Cepeda',
      companyName: 'Supermercados Euro & Más',
      city: 'Medellín',
      whatsapp: '+57 300 123 4567',
      email: 'andres@euro.co',
      estimatedVolume: '500 - 1000 bolsas/mes',
      notes: 'Interesado en distribución exclusiva para Antioquia.',
      createdAt: '2026-07-28'
    }
  ]);

  // Load cart from localStorage with schema validation
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem('hornea_cart');
      if (savedCart) {
        const parsed = JSON.parse(savedCart);
        if (Array.isArray(parsed)) {
          const validItems = parsed.filter(
            (item) => item && item.product && PRODUCTS.some((p) => p.id === item.product.id)
          );
          setCart(validItems);
        }
      }
      const savedWishlist = localStorage.getItem('hornea_wishlist');
      if (savedWishlist) {
        const parsedWish = JSON.parse(savedWishlist);
        if (Array.isArray(parsedWish)) {
          const validWish = parsedWish.filter((id) => PRODUCTS.some((p) => p.id === id));
          setWishlist(validWish);
        }
      }
    } catch {
      // Ignore initial SSR parse error
    }
  }, []);

  // Sync cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('hornea_cart', JSON.stringify(cart));
      localStorage.setItem('hornea_wishlist', JSON.stringify(wishlist));
    } catch {
      // Ignore
    }
  }, [cart, wishlist]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const addToCart = (product: Product, quantity = 1) => {
    if (!product || !product.id) return;
    setCart((prev) => {
      const existing = prev.find((item) => item.product && item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product && item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
    showToast(`🛒 ${product.name} añadido a tu congelador!`);
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product && item.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.product && item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
    setAppliedCoupon(null);
  };

  const toggleWishlist = (productId: string) => {
    setWishlist((prev) => {
      const isFav = prev.includes(productId);
      if (isFav) {
        showToast('Eliminado de tus favoritos');
        return prev.filter((id) => id !== productId);
      } else {
        showToast('❤️ Añadido a tus antojos guardados!');
        return [...prev, productId];
      }
    });
  };

  const applyCoupon = (code: string) => {
    const cleanCode = code.trim().toUpperCase();
    if (cleanCode === 'HORNEA10' || cleanCode === 'AIRFRYER') {
      setAppliedCoupon({ code: cleanCode, discountPercent: 10 });
      showToast('🎉 ¡Cupón de 10% de descuento aplicado!');
      return true;
    } else if (cleanCode === 'FRESCOS20') {
      setAppliedCoupon({ code: cleanCode, discountPercent: 20 });
      showToast('🎉 ¡Cupón de 20% de descuento aplicado!');
      return true;
    }
    showToast('⚠️ Cupón inválido o expirado. Prueba con HORNEA10');
    return false;
  };

  const subtotal = cart.reduce(
    (acc, item) => acc + (item && item.product ? item.product.price : 0) * item.quantity,
    0
  );
  const discountAmount = appliedCoupon ? Math.round((subtotal * appliedCoupon.discountPercent) / 100) : 0;
  const total = Math.max(0, subtotal - discountAmount);

  const createOrder = (orderData: Partial<Order>): Order => {
    const newOrder: Order = {
      id: `HOR-${Math.floor(1000 + Math.random() * 9000)}`,
      date: new Date().toISOString().split('T')[0],
      customerName: orderData.customerName || 'Cliente HORNEA',
      customerEmail: orderData.customerEmail || 'cliente@hornea.co',
      shippingAddress: orderData.shippingAddress || 'Dirección de envío',
      city: orderData.city || 'Bogotá, D.C.',
      items: [...cart],
      subtotal,
      shippingFee: subtotal > 70000 ? 0 : 7500,
      discount: discountAmount,
      total: total + (subtotal > 70000 ? 0 : 7500),
      paymentMethod: orderData.paymentMethod || 'Tarjeta de Crédito / Stripe',
      status: 'Recibido',
      trackingNumber: `FRZ-${Math.random().toString(36).substring(2, 7).toUpperCase()}`,
      estimatedDelivery: 'Mañana entre 8:00 AM y 12:00 PM (Envío Frío Express)'
    };
    setOrders((prev) => [newOrder, ...prev]);
    clearCart();
    return newOrder;
  };

  const submitLead = (lead: DistributorLead) => {
    const newLead: DistributorLead = {
      ...lead,
      id: `lead-${Date.now()}`,
      createdAt: new Date().toISOString().split('T')[0]
    };
    setLeads((prev) => [newLead, ...prev]);
    showToast('✨ ¡Gracias! Un director comercial HORNEA te contactará por WhatsApp.');
  };

  return (
    <StoreContext.Provider
      value={{
        cart,
        wishlist,
        isCartOpen,
        appliedCoupon,
        toastMessage,
        orders,
        leads,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        toggleWishlist,
        setIsCartOpen,
        applyCoupon,
        showToast,
        createOrder,
        submitLead,
        subtotal,
        discountAmount,
        total
      }}
    >
      {children}
      {toastMessage && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#0F172A] border border-[#C59B27]/40 text-white px-5 py-3.5 rounded-2xl shadow-2xl animate-bounce"
        >
          <span className="font-medium text-sm">{toastMessage}</span>
        </div>
      )}
    </StoreContext.Provider>
  );
}

export function useStore() {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
}
