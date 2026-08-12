"use client";
import { useEffect, useState } from 'react';
import { brandData } from '@/data/flanterie';

export default function MobileBar() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.7);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div className={`fixed inset-x-0 bottom-0 z-40 border-t border-ink/10 bg-cream/95 backdrop-blur-md transition-transform duration-500 md:hidden ${show ? 'translate-y-0' : 'translate-y-full'}`}>
      <div className="flex gap-3 px-4 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))]">
        <a href="#tour" className="btn btn-primary flex-1">Flan Tour</a>
        <a href={brandData.instagram.url} target="_blank" rel="noopener noreferrer" className="btn btn-ghost flex-1">Suivre</a>
      </div>
    </div>
  );
}