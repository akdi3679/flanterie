import type { Flan, Place, TourEvent, Review } from '@/data/flanterie';

export function ScoreChip({ score }: { score: number }) {
  return <span className="chip absolute right-3 top-3 !py-1.5">{score.toFixed(1).replace('.', ',')}</span>;
}

export function FlanCard({ flan }: { flan: Flan }) {
  return (
    <article className="group">
      <div className="card-img relative aspect-[4/5] rounded-2xl bg-milk">
        <img src={flan.image} alt={`Flan — ${flan.bakery}`} loading="lazy" className="h-full w-full rounded-2xl object-cover" />
        {flan.score && <ScoreChip score={flan.score} />}
      </div>
      <div className="mt-4 flex items-baseline justify-between gap-3">
        <h3 className="font-display text-xl font-semibold md:text-2xl">{flan.name} <span className="text-blue-deep">{flan.bakery}</span></h3>
        {flan.price && <span className="chip !py-1 text-xs">{flan.price}</span>}
      </div>
      <p className="mt-1 text-sm text-taupe">{[flan.city, flan.address].filter(Boolean).join(' — ') || flan.handle}</p>
      {flan.description && <p className="mt-2 font-display italic leading-snug text-cocoa">{flan.description}</p>}
      <ul className="mt-3 flex flex-wrap gap-2">
        {flan.tags.map((t) => <li key={t} className="rounded-full border border-ink/15 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-cocoa">{t}</li>)}
      </ul>
    </article>
  );
}

export function PlaceCard({ place }: { place: Place }) {
  return (
    <article className="group flex items-center gap-4 border-b border-ink/10 py-4">
      <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-blue/20 font-round text-lg font-bold text-blue-deep">
        {place.name.charAt(0)}
      </div>
      <div className="min-w-0 flex-1">
        <h3 className="truncate font-display text-lg font-semibold">{place.name}</h3>
        <p className="truncate text-sm text-taupe">{[place.city, place.address].filter(Boolean).join(' — ')}</p>
      </div>
      <ul className="hidden gap-2 sm:flex">
        {place.tags.slice(0, 2).map((t) => <li key={t} className="rounded-full bg-ink/5 px-3 py-1 text-[11px] font-medium text-cocoa">{t}</li>)}
      </ul>
    </article>
  );
}

export function EventCard({ tour }: { tour: TourEvent }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-ink/10 bg-milk p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_-24px_rgba(43,33,24,0.35)]">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="font-display text-2xl font-semibold">{tour.city}</h3>
        <span className="chip">{tour.price}</span>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-cocoa">{tour.description}</p>
      <p className="label mt-4 text-taupe">{tour.stops} dégustations · {tour.duration}</p>
      <p className="mt-1 text-xs font-medium text-blue-deep">{tour.status}</p>
      <div className="mt-6 flex flex-wrap gap-3 pt-2">
        {tour.bookingUrl && <a href={tour.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary !px-5 !py-3">Réserver</a>}
        <a href="https://www.instagram.com/flanterie/" target="_blank" rel="noopener noreferrer" className="btn btn-ghost !px-5 !py-3">Prochaines dates</a>
      </div>
    </article>
  );
}

export function RankingCard({ review, title }: { review: Review; title: string }) {
  const rows = [['Croûte', review.crustScore], ['Texture', review.textureScore], ['Goût', review.tasteScore], ['Visuel', review.visualScore]] as const;
  return (
    <article className="rounded-2xl border border-ink/10 bg-milk p-6 md:p-8">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="font-display text-2xl font-semibold">{title}</h3>
        <span className="font-round text-4xl font-bold text-blue-deep">{review.overallScore.toFixed(1).replace('.', ',')}</span>
      </div>
      <div className="mt-6 space-y-4">
        {rows.map(([label, v]) => (
          <div key={label}>
            <div className="mb-1.5 flex justify-between text-xs font-semibold uppercase tracking-widest text-cocoa"><span>{label}</span><span>{v.toFixed(1).replace('.', ',')}</span></div>
            <div className="bar"><span style={{ width: `${v * 10}%` }} /></div>
          </div>
        ))}
      </div>
      <p className="mt-6 font-display italic text-cocoa">« {review.comment} »</p>
    </article>
  );
}