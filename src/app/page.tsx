'use client';

import React from 'react';
import { HeroSection } from '@/components/store/HeroSection';

import { ProductCatalog } from '@/components/store/ProductCatalog';
import { MomentosSection } from '@/components/store/MomentosSection';
import { HowItWorks } from '@/components/store/HowItWorks';

import { TestimonialsSection } from '@/components/store/TestimonialsSection';
import { DistributorForm } from '@/components/store/DistributorForm';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CartDrawer } from '@/components/layout/CartDrawer';

export default function HomePage() {
  // Organization & LocalBusiness JSON-LD for Technical SEO
  const jsonLdOrg = {
    '@context': 'https://schema.org',
    '@type': 'Bakery',
    name: 'HORNEA',
    url: 'https://hornea.co',
    logo: 'https://hornea.co/images/products/palitos_de_queso.png',
    description: 'Empresa colombiana de productos congelados gourmet para Air Fryer u horno en menos de 20 minutos.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Zona Franca Bogotá',
      addressLocality: 'Bogotá',
      addressRegion: 'Cundinamarca',
      addressCountry: 'CO'
    },
    priceRange: '$$',
    telephone: '+576018004676'
  };

  return (
    <main className="min-h-screen bg-[#FDFBF7] text-[#0F172A]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrg) }}
      />
      <Header />
      <HeroSection />

      <ProductCatalog />
      <MomentosSection />
      <HowItWorks />

      <TestimonialsSection />
      <DistributorForm />
      <Footer />
      <CartDrawer />
    </main>
  );
}
