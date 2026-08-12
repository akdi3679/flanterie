import { brandData } from '@/data/flanterie';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 md:pt-40">
      <div className="mx-auto grid w-full max-w-[1280px] items-center gap-12 px-5 pb-16 md:grid-cols-12 md:px-8 md:pb-24">
        <div className="md:col-span-6">
          <p className="chip mb-6">🥮 {brandData.tagline}</p>
          <h1 className="font-display text-[11vw] font-semibold leading-[1.02] sm:text-5xl md:text-6xl lg:text-7xl">
            Le flan n’a jamais été aussi <em className="text-blue-deep">passionnant</em>.
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-cocoa md:text-lg">
            Des artisans, des adresses, des découvertes — et une passion commune pour le flan pâtissier.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a href="#adresses" className="btn btn-primary">Explorer les adresses</a>
            <a href="#histoire" className="btn btn-ghost">Découvrir La Flanterie</a>
          </div>
          <ul className="mt-12 flex flex-wrap gap-8">
            {brandData.stats.map((s) => (
              <li key={s.label}>
                <p className="font-round text-3xl font-bold text-blue-deep">{s.value}</p>
                <p className="label mt-1 text-taupe">{s.label}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-6">
<div className="card-img group relative aspect-[4/5] max-h-[70vh] w-full overflow-hidden rounded-[2rem] shadow-[16px_16px_0_var(--color-blue)]">
            <img src="https://image.qwenlm.ai/public_source/7cc5c577-d61d-44b2-b0fa-82207669e021/5811a9dc2-40d0-41ed-8659-7fc414c156064931.png" alt="Part de flan pâtissier, surface caramélisée" fetchPriority="high" className="h-full w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}