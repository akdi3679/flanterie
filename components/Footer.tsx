import { brandData, navigation } from '@/data/flanterie';

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-cream">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-10 px-5 py-14 md:flex-row md:items-start md:justify-between md:px-8">
        <div>
          <p className="inline-block rounded-full bg-blue px-5 py-2.5 font-round text-lg font-bold text-white">Flanterie</p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-taupe">{brandData.tagline} Un univers éditorial dédié au flan pâtissier, né à {brandData.origin}.</p>
        </div>
        <nav className="flex flex-col gap-3" aria-label="Pied de page">
          {navigation.map((n) => <a key={n.href} href={n.href} className="text-sm font-semibold text-cocoa hover:text-blue-deep">{n.label}</a>)}
        </nav>
        <div className="text-sm text-taupe">
          <a href={brandData.instagram.url} target="_blank" rel="noopener noreferrer" className="font-semibold text-ink hover:text-blue-deep">{brandData.instagram.handle}</a>
          <p className="mt-3">Flan Tours : Lyon · Paris · Marseille</p>
        </div>
      </div>
<p className="border-t border-ink/10 py-6 text-center font-round text-sm text-taupe">
  Fait avec passion, et beaucoup de vanille. © {new Date().getFullYear()} La Flanterie
  <span className="mx-2">·</span><a href="/mentions-legales" className="hover:text-blue-deep">Mentions légales</a>
  <span className="mx-2">·</span><a href="/confidentialite" className="hover:text-blue-deep">Confidentialité</a>
</p>
    </footer>
  );
}