'use client';

import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CartDrawer } from '@/components/layout/CartDrawer';
import { DistributorForm } from '@/components/store/DistributorForm';

export default function DistribuidoresPage() {
  return (
    <main className="min-h-screen bg-[#FDFBF7] text-[#0F172A]">
      <Header />
      <DistributorForm />
      <Footer />
      <CartDrawer />
    </main>
  );
}
