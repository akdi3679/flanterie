"use client";
import { useEffect, useState } from 'react';
import { brandData, navigation } from '@/data/flanterie';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? 'bg-cream/90 shadow-[0_1px_0_rgba(43,33,24,0.08)] backdrop-blur-md' : ''}`}>
      <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between px-5 py-4 md:px-8">
        <a href="#" className="flex items-center gap-2 rounded-full bg-blue px-5 py-2.5 font-round text-lg font-bold text-white shadow-[0_8px_20px_-8px_rgba(124,156,196,0.8)]" onClick={() => setOpen(false)}>
          Flanterie
        </a>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Navigation principale">
          {navigation.map((n) => <a key={n.href} href={n.href} className="text-[13px] font-semibold uppercase tracking-[0.16em] text-cocoa transition-colors hover:text-blue-deep">{n.label}</a>)}
          <a href={brandData.instagram.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary !px-5 !py-2.5">Suivre</a>
        </nav>
        <button className="label text-ink md:hidden" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? 'Fermer' : 'Menu'}</button>
      </div>
      {open && (
        <div className="border-t border-ink/10 bg-cream px-5 pb-8 pt-4 md:hidden">
          <nav className="flex flex-col gap-4" aria-label="Navigation mobile">
            {navigation.map((n) => <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="font-display text-2xl font-semibold">{n.label}</a>)}
            <a href={brandData.instagram.url} className="btn btn-primary mt-2 w-full">Suivre {brandData.instagram.handle}</a>
          </nav>
        </div>
      )}
    </header>
  );
}