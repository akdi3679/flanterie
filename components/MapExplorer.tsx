import { cityPins, type Place } from '@/data/flanterie';

// Projection équirectangulaire (France) — partagée par le tracé ET les pins.
const project = (lat: number, lon: number) => ({
  x: (lon + 5) * 6.143 + 7,
  y: (51.5 - lat) * 9.143 + 2,
});

// Silhouette simplifiée de la France métropolitaine (coords réelles projetées).
const FRANCE = "52.5,6.6 49.1,7 45.7,15.2 38.3,20.4 35.5,21.8 27.8,18.9 28.5,28.1 25.4,28.1 10.1,30.3 8.7,33.7 20.8,37.2 25.4,41.3 30.7,50.8 31.3,56 28.1,75.2 26.8,76.3 42,82.5 56.1,84.9 60.4,76.1 67.2,76.1 70.7,77 74.1,78.6 82.4,73.3 83.8,72.7 85,69.7 79.5,60.5 79.9,53.8 75.5,50.5 79.8,43.1 84.4,37.7 85.3,28.7 76.7,20.3 68.1,17.5 56.5,10";
const CORSE = "95.2,79.7 95.8,82.5 94,94.4 91.4,89.6";

type Pin = { label: string; latitude: number; longitude: number; kind: 'tour' | 'place' | 'soon' };

export default function MapExplorer({ places }: { places: Place[] }) {
  const pins: Pin[] = [
    ...cityPins.map((c) => ({ label: c.soon ? `${c.city} · bientôt` : c.city, latitude: c.latitude, longitude: c.longitude, kind: c.soon ? 'soon' as const : 'tour' as const })),
    ...places.filter((p) => p.latitude).map((p) => ({ label: p.name, latitude: p.latitude!, longitude: p.longitude!, kind: 'place' as const })),
  ];
  return (
    <div className="w-full">
      <svg viewBox="0 0 100 100" className="mx-auto w-full max-w-[460px]" role="img" aria-label="Carte de France des adresses et Flan Tours">
        <polygon points={FRANCE} fill="var(--color-blue)" fillOpacity="0.15" stroke="var(--color-blue-deep)" strokeOpacity="0.6" strokeWidth="0.7" strokeLinejoin="round" />
        <polygon points={CORSE} fill="var(--color-blue)" fillOpacity="0.15" stroke="var(--color-blue-deep)" strokeOpacity="0.6" strokeWidth="0.6" strokeLinejoin="round" />
        {pins.map((p) => {
          const { x, y } = project(p.latitude, p.longitude);
          return (
            <g key={p.label}>
              {p.kind === 'soon' ? (
                <circle cx={x} cy={y} r="2.4" fill="none" stroke="var(--color-caramel)" strokeWidth="0.7" strokeDasharray="1.3 1" />
              ) : (
                <circle cx={x} cy={y} r={p.kind === 'tour' ? 2.4 : 1.7} fill={p.kind === 'tour' ? 'var(--color-caramel)' : 'var(--color-blue-deep)'} className="pin-dot" />
              )}
              <text x={x + 3.4} y={y + 1.3} fontSize={p.kind === 'place' ? 2.8 : 3.6} fontWeight={p.kind === 'place' ? 500 : 700} fill="var(--color-ink)">{p.label}</text>
            </g>
          );
        })}
      </svg>
      <div className="mt-5 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-medium text-cocoa">
        <span className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-caramel" /> Flan Tour</span>
        <span className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-blue-deep" /> Adresse goûtée</span>
        <span className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full border border-dashed border-caramel" /> Bientôt</span>
      </div>
    </div>
  );
}