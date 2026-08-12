import Reveal from './Reveal';
import MapExplorer from './MapExplorer';
import NewsletterForm from './NewsletterForm'; // add this line
import { FlanCard, PlaceCard, EventCard, RankingCard } from './cards';
import { flans, places, tours, demoReview, posts, storyData, brandData, dropData, labelData, authorityData , faqData, customerQuote  } from '@/data/flanterie';
function Head({ index, title, sub }: { index: string; title: string; sub?: string }) {
  return (
    <Reveal className="mb-12 md:mb-16">
<p className="mb-3 font-round text-sm font-bold uppercase tracking-[0.2em] text-blue-deep">{index}</p>
      <h2 className="max-w-3xl font-display text-4xl font-semibold leading-tight md:text-5xl">{title}</h2>
      {sub && <p className="mt-4 max-w-xl leading-relaxed text-cocoa">{sub}</p>}
    </Reveal>
  );
}

export function DiscoverySection() {
  return (
    <section id="flans" className="mx-auto w-full max-w-[1280px] scroll-mt-24 px-5 py-20 md:px-8 md:py-28">
      <Head index="01 — Découvrir" title="Combien de flans vous reste-t-il à découvrir ?" sub="Chaque dégustation est une petite expédition : la pâte, la texture, la vanille, la caramélisation. En voici quelques-unes, racontées comme on les a vécues." />
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {flans.map((f, i) => <Reveal key={f.id} delay={(i % 4) * 90}><FlanCard flan={f} /></Reveal>)}
      </div>
      <Reveal className="mt-12 text-center"><a href="#adresses" className="btn btn-ghost">Voir les flans</a></Reveal>
    </section>
  );
}

export function AddressesSection() {
  return (
    <section id="adresses" className="scroll-mt-24 bg-milk py-20 md:py-28">
      <div className="mx-auto grid w-full max-w-[1280px] items-center gap-14 px-5 md:px-8 lg:grid-cols-2">
        <div>
          <Head index="02 — Explorer" title="Les bonnes adresses commencent ici." sub="Paris, Lyon, Marseille et au-delà : les pâtisseries qui valent le détour, vérifiées sur place, notées avec méthode." />
          <div className="-mt-4">
            {places.map((p, i) => <Reveal key={p.id} delay={i * 90}><PlaceCard place={p} /></Reveal>)}
          </div>
          <Reveal className="mt-10"><a href="#communaute" className="btn btn-primary">Explorer la carte</a></Reveal>
        </div>
        <Reveal delay={150}><MapExplorer places={places} /></Reveal>
      </div>
    </section>
  );
}

export function StorySection() {
  return (
    <section id="histoire" className="mx-auto grid w-full max-w-[1280px] scroll-mt-24 items-center gap-12 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-12">
      <Reveal className="lg:col-span-5">
        <div className="card-img aspect-[4/5] overflow-hidden rounded-[2rem]">
          <img src={storyData.image} alt="Part de flan tenue en main, vitrine de pâtisserie" loading="lazy" className="h-full w-full object-cover" />
        </div>
      </Reveal>
      <div className="lg:col-span-7">
        <Head index="03 — L’histoire" title={storyData.title} />
        <Reveal delay={100}>
          {storyData.paragraphs.map((p, i) => <p key={i} className="mb-5 max-w-xl leading-relaxed text-cocoa">{p}</p>)}
          <p className="mt-6 font-round text-xl font-bold text-blue-deep">{storyData.signature}</p>
          <a href="#tour" className="btn btn-ghost mt-8">Lire l’histoire</a>
        </Reveal>
      </div>
    </section>
  );
}

export function TourSection() {
  const steps = ['Une balade de 2h30', '6 flans dégustés', 'Analyse & quiz flan', 'Rencontre avec les pâtissiers'];
  return (
    <section id="tour" className="scroll-mt-24 bg-blue/15 py-20 md:py-28">
      <div className="mx-auto w-full max-w-[1280px] px-5 md:px-8">
        <Head index="04 — Vivre" title="Goûter. Comparer. Découvrir." sub="Le Flan Tour, ce n’est pas un événement : c’est une expédition gourmande en petit groupe, dans les rues d’une ville, à travers ses meilleurs flans." />
        <Reveal className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s} className="rounded-2xl bg-milk p-5">
              <p className="font-round text-2xl font-bold text-blue-deep">{i + 1}</p>
              <p className="mt-2 font-medium text-cocoa">{s}</p>
            </div>
          ))}
        </Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {tours.map((t, i) => <Reveal key={t.id} delay={i * 100}><EventCard tour={t} /></Reveal>)}
        </div>
        <Reveal className="mt-10 text-center">
  <p className="text-sm text-cocoa">Un Flan Tour privé — équipe, anniversaire, enterrement de vie célibataire ? <a href={brandData.instagram.url} target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-deep underline underline-offset-4">Écris-nous</a>.</p>
</Reveal>
      </div>
    </section>
  );
}

export function MethodSection() {
  return (
    <section id="methode" className="mx-auto grid w-full max-w-[1280px] scroll-mt-24 items-start gap-12 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-2">
      <div>
        <Head index="05 — Comprendre" title="La méthode Flanterie." sub="Un flan se juge avec le cœur, mais aussi avec des critères. Chaque dégustation passe par les mêmes quatre questions." />
        <Reveal delay={100}><RankingCard review={demoReview} title="Exemple de fiche de dégustation" /></Reveal>
      </div>
      <Reveal delay={150} className="lg:pt-24">
        <p className="chip mb-8">🏅 {authorityData.jury}</p>
<ul className="flex flex-wrap gap-3">
  {authorityData.press.map((p) => <li key={p} className="rounded-full border border-ink/15 bg-milk px-5 py-3 font-display text-lg italic text-cocoa">{p}</li>)}
</ul>
<p className="mt-8 font-display text-xl italic text-cocoa">« {customerQuote.text} » <span className="label ml-2 not-italic text-taupe">{customerQuote.source}</span></p>
        <p className="mt-8 max-w-md text-sm leading-relaxed text-taupe">
          Les notes publiées sur le site proviennent exclusivement de dégustations réalisées et racontées par La Flanterie. Jamais d’avis acheté, jamais de flan promu sans avoir été goûté.
        </p>
      </Reveal>
    </section>
  );
}
export function FaqSection() {
  return (
    <section className="mx-auto w-full max-w-[1280px] scroll-mt-24 px-5 pb-20 md:px-8 md:pb-28">
      <Head index="08 — Répondre" title="Les questions qu’on nous pose." />
      <Reveal>
        {faqData.map((f) => (
          <details key={f.q} className="faq group border-b border-ink/10 py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6">
              <span className="font-display text-xl font-semibold md:text-2xl">{f.q}</span>
              <span className="faq-icon shrink-0 font-round text-2xl text-blue-deep transition-transform duration-300">+</span>
            </summary>
            <p className="mt-3 max-w-3xl leading-relaxed text-cocoa">{f.a}</p>
          </details>
        ))}
      </Reveal>
    </section>
  );
}
export function InstagramSection() {
  return (
    <section id="instagram" className="scroll-mt-24 bg-milk py-20 md:py-28">
      <div className="mx-auto w-full max-w-[1280px] px-5 md:px-8">
        <Head index="06 — Suivre" title="Vu sur Instagram." sub="Le quotidien de la quête : vitrines, parts coupées, débats sablée contre feuilletée. Le site prolonge ; Instagram vit." />
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {posts.map((p, i) => (
            <Reveal key={p.id} delay={(i % 3) * 80}>
              <a href={brandData.instagram.url} target="_blank" rel="noopener noreferrer" className="group card-img relative block aspect-square overflow-hidden rounded-2xl">
                <img src={p.image} alt={p.caption} loading="lazy" className="h-full w-full object-cover" />
                <span className="absolute inset-0 flex items-end bg-ink/50 p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <span className="font-display italic text-cream">{p.caption}</span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-12 text-center">
          <a href={brandData.instagram.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Suivre {brandData.instagram.handle}</a>
        </Reveal>
      </div>
    </section>
  );
}
export function DropsSection() {
  return (
    <section className="mx-auto w-full max-w-[1280px] px-5 pb-20 md:px-8 md:pb-28">
      <Reveal className="relative overflow-hidden rounded-[2rem] bg-ink px-6 py-14 md:px-14 md:py-20">
        <p className="chip absolute right-6 top-6">précommande</p>
        <p className="label pr-28 text-custard">05 — Porter</p>
        <h2 className="mt-3 max-w-xl font-display text-4xl font-semibold text-cream md:text-6xl">{dropData.title}</h2>
        <p className="mt-5 max-w-md leading-relaxed text-cream/75">{dropData.text}</p>
        <div className="mt-9 flex flex-wrap items-center gap-5">
          <a href={brandData.instagram.url} target="_blank" rel="noopener noreferrer" className="btn bg-custard text-ink hover:-translate-y-0.5 hover:bg-cream">Voir le drop</a>
          <span className="text-sm text-cream/60">{dropData.note}</span>
        </div>
      </Reveal>
    </section>
  );
}

export function LabelSection() {
  return (
    <section className="mx-auto grid w-full max-w-[1280px] items-center gap-10 px-5 pb-20 md:px-8 md:pb-28 lg:grid-cols-2">
      <Reveal>
        <p className="label mb-3 text-blue-deep">06 — Artisans</p>
        <h2 className="font-display text-4xl font-semibold leading-tight md:text-5xl">{labelData.title}</h2>
        <p className="mt-5 max-w-md leading-relaxed text-cocoa">{labelData.text}</p>
        <a href={brandData.instagram.url} target="_blank" rel="noopener noreferrer" className="btn btn-ghost mt-8">{labelData.cta}</a>
      </Reveal>
      <Reveal delay={120} className="card-img aspect-[4/3] overflow-hidden rounded-[2rem]">
        <img src="https://images.unsplash.com/photo-1555507036-ab1f4034808a?q=80&w=1600&auto=format&fit=crop" alt="Vitrine de pâtisserie artisanale" loading="lazy" className="h-full w-full object-cover" />
      </Reveal>
    </section>
  );
}
export function CommunitySection() {
  return (
    <section id="communaute" className="mx-auto w-full max-w-[1280px] scroll-mt-24 px-5 py-20 md:px-8 md:py-28">
      <Reveal className="rounded-[2rem] bg-blue px-6 py-14 text-center md:py-20">
        <h2 className="mx-auto max-w-2xl font-display text-4xl font-semibold leading-tight text-white md:text-5xl">Vous avez un flan à nous faire découvrir ?</h2>
        <p className="mx-auto mt-4 max-w-md leading-relaxed text-white/85">La carte de demain s’écrit aussi grâce à vous. Partagez une adresse, une ville, une part mémorable.</p>
        <a href={brandData.instagram.url} target="_blank" rel="noopener noreferrer" className="btn mt-9 bg-white text-ink hover:-translate-y-0.5 hover:bg-custard">Partager une adresse</a>
      </Reveal>
    </section>
  );
}

export function NewsletterSection() {
  return (
    <section className="mx-auto w-full max-w-[1280px] px-5 pb-24 md:px-8 md:pb-32">
      <Reveal className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <p className="label mb-3 text-blue-deep">07 — Recevoir</p>
          <h2 className="font-display text-4xl font-semibold leading-tight md:text-5xl">Les prochains flans à découvrir.</h2>
          <p className="mt-4 max-w-md leading-relaxed text-cocoa">Une sélection d’adresses, de découvertes et d’expériences, directement dans votre boîte mail.</p>
        </div>
        <NewsletterForm />
      </Reveal>
    </section>
  );
}
