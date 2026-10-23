'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  BarChart3,
  Package,
  ShoppingBag,
  Building2,
  Tag,
  ShieldCheck,
  TrendingUp,
  CheckCircle2,
  DollarSign,
  Lock,
  Eye,
  EyeOff,
  ArrowLeft
} from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { useStore } from '@/context/StoreContext';
import { PRODUCTS } from '@/data/mockData';

import { HorneaLogo } from '@/components/layout/HorneaLogo';

const ADMIN_PIN = process.env.NEXT_PUBLIC_ADMIN_PIN || '1234'; // Configurable vía NEXT_PUBLIC_ADMIN_PIN o '1234' por defecto

export default function AdminPage() {
  const { orders, leads } = useStore();
  const [activeTab, setActiveTab] = useState<'metrics' | 'inventory' | 'orders' | 'leads' | 'coupons'>('metrics');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pin, setPin] = useState('');
  const [showPin, setShowPin] = useState(false);
  const [pinError, setPinError] = useState(false);

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const auth = sessionStorage.getItem('hornea_admin_authenticated');
      if (auth === 'true') {
        setIsAuthenticated(true);
      }
    }
  }, []);

  const totalSales = orders.reduce((acc, o) => acc + o.total, 0) + 14850000;
  const totalOrdersCount = orders.length + 248;
  const aov = Math.round(totalSales / totalOrdersCount);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin === ADMIN_PIN) {
      setIsAuthenticated(true);
      setPinError(false);
      sessionStorage.setItem('hornea_admin_authenticated', 'true');
    } else {
      setPinError(true);
      setPin('');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('hornea_admin_authenticated');
  };

  // ── LOGIN GATE ──────────────────────────────────────────────────────────────
  if (!isAuthenticated) {
    return (
      <main className="min-h-screen bg-[#FDFBF7] flex items-center justify-center px-4">
        <div className="w-full max-w-sm">
          {/* Logo */}
          <div className="text-center mb-8 space-y-3">
            <div className="flex justify-center mb-2">
              <HorneaLogo variant="icon" className="w-14 h-14" />
            </div>
            <h1 className="font-heading text-2xl font-extrabold text-[#0F172A]">Sistema de Gestión HORNEA</h1>
            <p className="text-xs text-[#64748B]">Acceso restringido. Exclusivo para administradores.</p>
          </div>

          {/* Login Card */}
          <div className="glass-gold-card rounded-3xl p-8 space-y-5 shadow-lg">
            <div className="flex items-center gap-2 text-[#C59B27] mb-2">
              <Lock className="w-5 h-5" />
              <span className="font-heading font-bold text-base text-[#0F172A]">Ingresa tu PIN</span>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div className="relative">
                <input
                  type={showPin ? 'text' : 'password'}
                  value={pin}
                  onChange={(e) => { setPin(e.target.value); setPinError(false); }}
                  placeholder="••••"
                  maxLength={8}
                  className={`w-full bg-white border rounded-xl px-4 py-3 text-center text-2xl font-bold tracking-[0.5em] text-[#0F172A] focus:outline-none focus:ring-2 transition-all ${
                    pinError
                      ? 'border-red-300 focus:ring-red-200'
                      : 'border-[#E2E8F0] focus:border-[#C59B27] focus:ring-[#C59B27]/20'
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPin(!showPin)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#94A3B8] hover:text-[#0F172A] transition-colors"
                >
                  {showPin ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>

              {pinError && (
                <p className="text-xs text-red-500 font-medium text-center">PIN incorrecto. Intenta nuevamente.</p>
              )}

              <button
                type="submit"
                className="w-full gold-gradient-btn py-3 rounded-xl font-bold text-sm shadow-md"
              >
                Acceder al Panel
              </button>
            </form>
          </div>

          <div className="text-center mt-6">
            <Link href="/" className="inline-flex items-center gap-1.5 text-xs text-[#64748B] hover:text-[#0F172A] transition-colors">
              <ArrowLeft className="w-3.5 h-3.5" />
              Volver al sitio
            </Link>
          </div>
        </div>
      </main>
    );
  }

  // ── ADMIN DASHBOARD ─────────────────────────────────────────────────────────
  return (
    <main className="min-h-screen bg-[#FDFBF7] text-[#0F172A]">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E2E8F0] pb-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs text-[#C59B27] font-semibold uppercase tracking-widest bg-[#FDF6E2] px-3 py-1 rounded-full border border-[#C59B27]/25">
              <ShieldCheck className="w-4 h-4" />
              <span>HORNEA Executive Control Room</span>
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#0F172A] mt-2">
              Panel Administrativo
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-xs text-emerald-600 font-semibold bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              Cadena de Frío Activa (-18°C)
            </span>
            <button
              onClick={handleLogout}
              className="text-xs text-[#64748B] hover:text-[#0F172A] border border-[#E2E8F0] bg-white hover:bg-slate-50 px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 font-semibold shadow-sm"
            >
              <Lock className="w-3.5 h-3.5 text-[#C59B27]" />
              Cerrar sesión
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-[#E2E8F0] scrollbar-none">
          {[
            { id: 'metrics', label: 'Dashboard & Analytics', icon: BarChart3 },
            { id: 'inventory', label: 'Gestión de Inventario', icon: Package },
            { id: 'orders', label: 'Gestión de Pedidos', icon: ShoppingBag },
            { id: 'leads', label: 'Distribuidores B2B', icon: Building2 },
            { id: 'coupons', label: 'Cupones & Promociones', icon: Tag }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`px-4 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 whitespace-nowrap transition-all ${
                  isActive
                    ? 'gold-gradient-btn font-bold shadow-md'
                    : 'bg-white border border-[#E2E8F0] text-[#475569] hover:text-[#0F172A] hover:border-[#C59B27]/40'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content 1: Metrics */}
        {activeTab === 'metrics' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="glass-gold-card p-6 rounded-2xl space-y-2">
                <div className="flex justify-between items-center text-xs text-[#64748B]">
                  <span>Ventas Totales (Mes)</span>
                  <DollarSign className="w-4 h-4 text-[#C59B27]" />
                </div>
                <span className="font-heading text-3xl font-extrabold text-[#0F172A] block">
                  ${totalSales.toLocaleString('es-CO')}
                </span>
                <span className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" /> +24.8% vs mes anterior
                </span>
              </div>

              <div className="glass-gold-card p-6 rounded-2xl space-y-2">
                <div className="flex justify-between items-center text-xs text-[#64748B]">
                  <span>Pedidos Despachados</span>
                  <ShoppingBag className="w-4 h-4 text-[#C59B27]" />
                </div>
                <span className="font-heading text-3xl font-extrabold text-[#0F172A] block">
                  {totalOrdersCount}
                </span>
                <span className="text-[11px] text-[#C59B27] font-semibold">100% Entregados a tiempo</span>
              </div>

              <div className="glass-gold-card p-6 rounded-2xl space-y-2">
                <div className="flex justify-between items-center text-xs text-[#64748B]">
                  <span>Ticket Promedio (AOV)</span>
                  <TrendingUp className="w-4 h-4 text-[#C59B27]" />
                </div>
                <span className="font-heading text-3xl font-extrabold text-[#0F172A] block">
                  ${aov.toLocaleString('es-CO')}
                </span>
                <span className="text-[11px] text-[#64748B]">2.8 bolsas por pedido</span>
              </div>

              <div className="glass-gold-card p-6 rounded-2xl space-y-2">
                <div className="flex justify-between items-center text-xs text-[#64748B]">
                  <span>Leads Distribuidores</span>
                  <Building2 className="w-4 h-4 text-[#C59B27]" />
                </div>
                <span className="font-heading text-3xl font-extrabold text-[#0F172A] block">
                  {leads.length + 18}
                </span>
                <span className="text-[11px] text-emerald-600 font-semibold">5 solicitudes pendientes</span>
              </div>
            </div>

            {/* Product Performance Table */}
            <div className="glass-gold-card p-6 rounded-3xl space-y-4">
              <h3 className="font-heading font-bold text-xl text-[#0F172A]">
                Rendimiento de Productos en Congelador
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left">
                  <thead className="text-[11px] uppercase tracking-wider text-[#C59B27] border-b border-[#E2E8F0]">
                    <tr>
                      <th className="py-3 px-4">Producto</th>
                      <th className="py-3 px-4">Categoría</th>
                      <th className="py-3 px-4">Precio</th>
                      <th className="py-3 px-4">Unidades Vendidas</th>
                      <th className="py-3 px-4">Estado Stock</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E2E8F0]">
                    {PRODUCTS.map((p) => (
                      <tr key={p.id} className="hover:bg-[#F8F6F0] transition-colors text-[#475569]">
                        <td className="py-3 px-4 font-bold text-[#0F172A] flex items-center gap-3">
                          <div className="relative w-8 h-8 rounded-lg overflow-hidden shrink-0 bg-[#F1F5F9]">
                            <Image src={p.image} alt={p.name} fill className="object-cover" />
                          </div>
                          <span>{p.name}</span>
                        </td>
                        <td className="py-3 px-4 uppercase text-[10px]">{p.category}</td>
                        <td className="py-3 px-4 text-[#C59B27] font-bold">${p.price.toLocaleString('es-CO')}</td>
                        <td className="py-3 px-4 font-semibold text-[#0F172A]">{Math.floor(p.price / 30)} bolsas</td>
                        <td className="py-3 px-4">
                          <span className="inline-flex items-center gap-1 text-emerald-600 font-semibold bg-emerald-50 px-2.5 py-1 rounded-full text-[10px] border border-emerald-200">
                            <CheckCircle2 className="w-3 h-3" />
                            Stock OK (1,200 u)
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Tab Content 2: Inventory */}
        {activeTab === 'inventory' && (
          <div className="glass-gold-card p-6 rounded-3xl space-y-6">
            <h3 className="font-heading font-bold text-xl text-[#0F172A]">
              Inventario de Planta Ultracongelada (-18°C)
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {PRODUCTS.map((p) => (
                <div key={p.id} className="bg-white border border-[#E2E8F0] p-5 rounded-2xl space-y-4 hover:border-[#C59B27]/40 transition-all shadow-sm">
                  <div className="flex gap-3 items-center">
                    <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-[#F1F5F9] shrink-0">
                      <Image src={p.image} alt={p.name} fill className="object-cover" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xs text-[#0F172A]">{p.name}</h4>
                      <span className="text-[10px] text-[#C59B27] font-semibold">${p.price.toLocaleString('es-CO')}</span>
                    </div>
                  </div>
                  <div className="space-y-1 text-xs text-[#475569]">
                    <div className="flex justify-between">
                      <span>Stock en Cámara Fría:</span>
                      <span className="text-emerald-600 font-bold">1,450 bolsas</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Ubicación Almacén:</span>
                      <span className="text-[#0F172A] font-medium">Rack B-04</span>
                    </div>
                  </div>
                  <button className="w-full bg-[#F8F6F0] hover:bg-[#FDF6E2] text-xs font-semibold py-2 rounded-lg border border-[#E2E8F0] hover:border-[#C59B27]/40 text-[#C59B27] transition-all">
                    Actualizar Reorden de Planta
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab Content 3: Orders */}
        {activeTab === 'orders' && (
          <div className="glass-gold-card p-6 rounded-3xl space-y-4">
            <h3 className="font-heading font-bold text-xl text-[#0F172A]">
              Gestión de Pedidos en Vivo
            </h3>
            <div className="space-y-4">
              {orders.length === 0 && (
                <p className="text-sm text-[#64748B] text-center py-8">No hay pedidos registrados aún.</p>
              )}
              {orders.map((ord) => (
                <div key={ord.id} className="p-4 rounded-xl bg-white border border-[#E2E8F0] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs hover:border-[#C59B27]/40 transition-all">
                  <div>
                    <span className="font-mono text-[#C59B27] font-bold text-sm">{ord.id}</span>
                    <span className="text-[#475569] ml-3">• {ord.customerName} ({ord.city})</span>
                    <p className="text-[#64748B] text-[11px] mt-0.5">{ord.items.map((i) => i.product.name).join(', ')}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-bold text-[#0F172A]">${ord.total.toLocaleString('es-CO')}</span>
                    <select
                      defaultValue={ord.status}
                      className="bg-white border border-[#C59B27]/40 text-[#C59B27] rounded-lg px-3 py-1.5 text-xs font-semibold focus:outline-none focus:border-[#C59B27]"
                    >
                      <option value="Recibido">Recibido</option>
                      <option value="En Preparación">En Preparación</option>
                      <option value="En Camino (Refrigerado)">En Camino (-18°C)</option>
                      <option value="Entregado">Entregado</option>
                    </select>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab Content 4: B2B Leads */}
        {activeTab === 'leads' && (
          <div className="glass-gold-card p-6 rounded-3xl space-y-4">
            <h3 className="font-heading font-bold text-xl text-[#0F172A]">
              Solicitudes de Distribuidores & Mayoristas
            </h3>
            <div className="space-y-4">
              {leads.length === 0 && (
                <p className="text-sm text-[#64748B] text-center py-8">No hay solicitudes de distribuidores aún.</p>
              )}
              {leads.map((l) => (
                <div key={l.id} className="p-5 rounded-2xl bg-white border border-[#E2E8F0] space-y-3 text-xs hover:border-[#C59B27]/40 transition-all">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-sm text-[#0F172A]">{l.companyName}</h4>
                      <span className="text-[#475569]">Contacto: {l.fullName} • {l.city}</span>
                    </div>
                    <span className="bg-[#FDF6E2] text-[#C59B27] px-3 py-1 rounded-full text-[10px] font-bold border border-[#C59B27]/30">
                      {l.estimatedVolume}
                    </span>
                  </div>
                  <div className="flex gap-4 text-[#64748B] text-[11px] pt-1">
                    <span>📱 WhatsApp: {l.whatsapp}</span>
                    <span>✉️ Email: {l.email}</span>
                  </div>
                  {l.notes && <p className="text-xs text-[#475569] italic bg-[#F8F6F0] p-2.5 rounded-lg border border-[#E2E8F0]">&ldquo;{l.notes}&rdquo;</p>}
                  <button className="gold-gradient-btn px-4 py-2 rounded-lg text-xs font-bold shadow-sm">
                    Abrir Chat Directo de WhatsApp
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab Content 5: Coupons */}
        {activeTab === 'coupons' && (
          <div className="glass-gold-card p-6 rounded-3xl space-y-6">
            <h3 className="font-heading font-bold text-xl text-[#0F172A]">
              Motor de Cupones & Promociones
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-5 rounded-2xl bg-white border border-[#C59B27]/40 space-y-2 shadow-sm">
                <span className="font-mono text-lg font-bold text-[#C59B27]">HORNEA10</span>
                <p className="text-xs text-[#475569]">10% de descuento en el total de la compra.</p>
                <span className="inline-block text-[10px] bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded-full font-bold border border-emerald-200">Activo</span>
              </div>
              <div className="p-5 rounded-2xl bg-white border border-[#E2E8F0] space-y-2 shadow-sm">
                <span className="font-mono text-lg font-bold text-[#C59B27]">FRESCOS20</span>
                <p className="text-xs text-[#475569]">20% de descuento especial lanzamiento.</p>
                <span className="inline-block text-[10px] bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded-full font-bold border border-emerald-200">Activo</span>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
}
