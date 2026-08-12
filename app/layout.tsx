import type { Metadata } from 'next';
import { Fraunces, Baloo_2, Outfit } from 'next/font/google';
import './globals.css';

const fraunces = Fraunces({ weight: ['400', '500', '600', '700'], style: ['normal', 'italic'], subsets: ['latin'], variable: '--font-fraunces', display: 'swap' });
const baloo = Baloo_2({ weight: ['600', '700'], subsets: ['latin'], variable: '--font-baloo', display: 'swap' });
const outfit = Outfit({ weight: ['300', '400', '500', '600'], subsets: ['latin'], variable: '--font-outfit', display: 'swap' });

export const metadata: Metadata = {
  title: 'La Flanterie — Le flan pâtissier en une page | Adresses, dégustations & Flan Tours',
  description: 'La Flanterie explore le flan pâtissier : artisans d’exception, bonnes adresses à Lyon, Paris et Marseille, dégustations notées et Flan Tours. Par Benjamin, 100+ flans dégustés.',
  openGraph: {
    title: 'La Flanterie — Le flan n’a jamais été aussi passionnant.',
    description: 'Des artisans, des adresses, des découvertes et une passion commune pour le flan pâtissier.',
    images: ['https://image.qwenlm.ai/public_source/7cc5c577-d61d-44b2-b0fa-82207669e021/5811a9dc2-40d0-41ed-8659-7fc414c156064931.png'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'La Flanterie',
  slogan: 'Le flan en une page',
  founder: { '@type': 'Person', name: 'Benjamin' },
  sameAs: ['https://www.instagram.com/flanterie/', 'https://www.airbnb.com/experiences/6417883'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${fraunces.variable} ${baloo.variable} ${outfit.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <a className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-cream" href="#contenu">Aller au contenu</a>
        {children}
      </body>
    </html>
  );
}