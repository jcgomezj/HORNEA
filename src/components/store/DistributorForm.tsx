'use client';

import React, { useState } from 'react';
import { Send, Building2, CheckCircle2 } from 'lucide-react';
import { useStore } from '@/context/StoreContext';

export function DistributorForm() {
  const { submitLead } = useStore();
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    city: '',
    whatsapp: '',
    email: '',
    estimatedVolume: '100 - 500 bolsas/mes',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitLead(formData);
    setSubmitted(true);
  };

  return (
    <section className="py-20 bg-[#F8F6F0] text-[#0F172A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Info Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#C59B27] font-semibold bg-[#FDF6E2] px-3 py-1 rounded-full border border-[#C59B27]/25">
              <Building2 className="w-4 h-4" />
              <span>Programa de Distribuidores &amp; HORECA</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-6xl font-extrabold text-[#0F172A] leading-tight">
              Lleva HORNEA a tu canal de ventas o negocio
            </h1>

            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              Buscamos aliados estratégicos, cadenas de supermercados, minimarkets premium, hoteles y restaurantes que deseen ofrecer la más alta calidad en congelados gourmet artesanales colombianos.
            </p>

            {/* Benefits List */}
            <div className="space-y-4 pt-4 border-t border-[#E2E8F0] text-xs sm:text-sm">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#C59B27] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[#0F172A]">Margen Comercial de Alto Rendimiento</h4>
                  <p className="text-[#475569] text-xs">Precios al por mayor con escalamiento por volumen e incentivos por cumplimiento.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#C59B27] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[#0F172A]">Logística Ultracongelada a Nivel Nacional</h4>
                  <p className="text-[#475569] text-xs">Despachos programados con control constante de cadena de frío (-18°C).</p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Form Card Column */}
          <div className="lg:col-span-6 glass-gold-card p-8 sm:p-10 rounded-3xl space-y-6">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#FDF6E2] border-2 border-[#C59B27] text-[#C59B27] flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-[#0F172A]">¡Solicitud Recibida!</h3>
                <p className="text-xs text-[#475569] max-w-md mx-auto leading-relaxed">
                  Gracias por registrarte. Un Director Comercial B2B de HORNEA evaluará la cobertura de tu zona y te contactará en menos de 24 horas hábiles por WhatsApp.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs text-[#C59B27] font-semibold underline pt-4 hover:text-[#A8811A] transition-colors"
                >
                  Enviar otra consulta de distribuidor
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="font-heading text-2xl font-bold text-[#0F172A]">
                  Solicitar Catálogo de Mayorista
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-[#475569] font-medium mb-1">Nombre Completo *</label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="Ej: Juan Camilo Pérez"
                      className="w-full bg-white border border-[#E2E8F0] rounded-xl px-4 py-2.5 text-xs text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#C59B27] focus:ring-1 focus:ring-[#C59B27]/20 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-[#475569] font-medium mb-1">Nombre de la Empresa / Negocio *</label>
                    <input
                      type="text"
                      required
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      placeholder="Ej: Mercados El Nogal"
                      className="w-full bg-white border border-[#E2E8F0] rounded-xl px-4 py-2.5 text-xs text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#C59B27] focus:ring-1 focus:ring-[#C59B27]/20 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-[#475569] font-medium mb-1">Ciudad / Cobertura *</label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="Ej: Cali, Valle del Cauca"
                      className="w-full bg-white border border-[#E2E8F0] rounded-xl px-4 py-2.5 text-xs text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#C59B27] focus:ring-1 focus:ring-[#C59B27]/20 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-[#475569] font-medium mb-1">WhatsApp de Contacto *</label>
                    <input
                      type="tel"
                      required
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      placeholder="Ej: +57 310 123 4567"
                      className="w-full bg-white border border-[#E2E8F0] rounded-xl px-4 py-2.5 text-xs text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#C59B27] focus:ring-1 focus:ring-[#C59B27]/20 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-[#475569] font-medium mb-1">Correo Electrónico *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="ejemplo@empresa.com"
                    className="w-full bg-white border border-[#E2E8F0] rounded-xl px-4 py-2.5 text-xs text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#C59B27] focus:ring-1 focus:ring-[#C59B27]/20 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs text-[#475569] font-medium mb-1">Volumen Estimado de Compra</label>
                  <select
                    value={formData.estimatedVolume}
                    onChange={(e) => setFormData({ ...formData, estimatedVolume: e.target.value })}
                    className="w-full bg-white border border-[#E2E8F0] rounded-xl px-4 py-2.5 text-xs text-[#0F172A] focus:outline-none focus:border-[#C59B27] focus:ring-1 focus:ring-[#C59B27]/20 transition-all appearance-none"
                  >
                    <option value="100 - 500 bolsas/mes">100 - 500 bolsas/mes (Pyme / Minimarket)</option>
                    <option value="500 - 2000 bolsas/mes">500 - 2,000 bolsas/mes (Distribuidor Regional)</option>
                    <option value="> 2000 bolsas/mes">&gt; 2,000 bolsas/mes (Cadena Nacional)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs text-[#475569] font-medium mb-1">Notas o Comentarios Adicionales</label>
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Cuéntanos más sobre tus puntos de venta..."
                    className="w-full bg-white border border-[#E2E8F0] rounded-xl px-4 py-2.5 text-xs text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#C59B27] focus:ring-1 focus:ring-[#C59B27]/20 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full gold-gradient-btn py-3.5 px-6 rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-md"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar Solicitud de Distribución</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
