import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Inter } from 'next/font/google';
import './globals.css';
import { StoreProvider } from '@/context/StoreContext';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'HORNEA | Momentos Recién Horneados - Congelados Premium Colombia',
  description: 'Palitos de queso costeño, pasteles de guayaba, pandebonos, croissants y almojábanas congelados gourmet listos en <20 minutos en Air Fryer u horno.',
  keywords: ['congelados colombia', 'palitos de queso', 'air fryer', 'pandebonos congelados', 'pasteles de guayaba', 'hornea'],
  openGraph: {
    title: 'HORNEA | Momentos Recién Horneados',
    description: 'Productos congelados gourmet colombianos listos en minutos en Air Fryer.',
    url: 'https://hornea.co',
    siteName: 'HORNEA',
    locale: 'es_CO',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${jakarta.variable} ${inter.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full bg-[#FDFBF7] text-[#0F172A] flex flex-col font-sans selection:bg-[#C59B27] selection:text-[#FFFFFF]" suppressHydrationWarning>
        <StoreProvider>
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
