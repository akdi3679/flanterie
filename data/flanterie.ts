// Types = futurs contrats de base de données (V2).
export type Flan = { id: string; name: string; bakery: string; handle: string; city?: string; address?: string; image: string; price?: string; score?: number; crust?: string; texture?: string; taste?: string; description?: string; tags: string[]; demo?: boolean };
export type Place = { id: string; name: string; city: string; address?: string; latitude?: number; longitude?: number; image?: string; description?: string; tags: string[]; instagram?: string; demo?: boolean };
export type TourEvent = { id: string; title: string; city: string; date?: string; duration: string; stops: number; price: string; status: string; bookingUrl?: string; description: string };
export type Review = { id: string; flanId: string; crustScore: number; textureScore: number; tasteScore: number; visualScore: number; overallScore: number; comment: string; author: string; demo?: boolean };
export type Post = { id: string; image: string; caption: string; instagramUrl?: string; tags: string[] };

export const brandData = {
  name: 'La Flanterie',
  tagline: 'Le flan en une page…',
  founder: 'Benjamin',
  origin: 'Lyon',
  instagram: { handle: '@flanterie', url: 'https://www.instagram.com/flanterie/' },
  // Chiffres RÉELS, sourcés, à rafraîchir via API plus tard :
  stats: [
    { value: '100+', label: 'flans dégustés' },   // source : presse, 2023+
    { value: '34 000', label: 'passionnés sur Instagram' }, // source : @flanterie, août 2026
    { value: '3', label: 'villes en Flan Tour' },
  ],
  press: ['Franceinfo', 'Maritima', 'L’Incartade', 'Le Petit Paume', 'Food’Angers'],
};

export const navigation = [
  { label: 'Les flans', href: '#flans' },
  { label: 'Adresses', href: '#adresses' },
  { label: 'Flan Tour', href: '#tour' },
  { label: 'La méthode', href: '#methode' },
  { label: 'Instagram', href: '#instagram' },
];

const IMG = {
  hero: 'https://images.unsplash.com/photo-1488477181946-6428a0c80063?q=80&w=2000&auto=format&fit=crop',
  overhead: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=1200&auto=format&fit=crop',
  slate: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=1200&auto=format&fit=crop',
  pistache: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=1200&auto=format&fit=crop',
  dark: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1200&auto=format&fit=crop',
  part: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?q=80&w=1200&auto=format&fit=crop',
  etain: 'https://images.unsplash.com/photo-1555507036-ab1f4034808a?q=80&w=1200&auto=format&fit=crop',
  story: 'https://images.unsplash.com/photo-1517433670267-08bbd4be890f?q=80&w=1400&auto=format&fit=crop',
};
// Flans RÉELS issus des posts @flanterie (citations, prix, adresses vérifiés).
export const flans: Flan[] = [
  { id: 'f1', name: 'Flan vanille', bakery: 'Séline Pâtisserie', handle: '@seline_patisserie', image: IMG.overhead, tags: ['vanille', 'équilibré'], description: '« Un vrai petit bonbon, aussi gourmand qu’équilibré. »' },
  { id: 'f2', name: 'Flan', bakery: 'Plein Cœur', handle: '@pleincoeur_official', city: 'Paris', address: '64 rue des Batignolles', price: '9 €', image: IMG.overhead, tags: ['texture fluide'], description: '« Texture ultra fluide, qui laisse plus de place à la pâte. »' },
  { id: 'f3', name: 'Flan vanille', bakery: 'Capsule Pâtisserie', handle: '@lacapsulepatisserie', city: 'Saint-Maur-des-Fossés', price: '4,30 €', image: IMG.slate, crust: 'sablée', texture: 'mousseuse', taste: 'vanille', tags: ['sablée', 'mousseuse', 'vanille'] },
  { id: 'f4', name: 'Flan', bakery: 'La Panifacture', handle: '@lapanifacture', image: IMG.pistache, tags: ['généreux'], description: '« Je pourrais le manger tous les matins. »' },
];
export const faqData = [
  { q: 'La Flanterie, c’est une boutique ?', a: 'Non — c’est un média et une communauté. On goûte, on raconte, on partage les bonnes adresses ; les flans, eux, s’achètent chez les artisans.' },
  { q: 'Comment rejoindre un Flan Tour ?', a: 'Les dates sont annoncées sur Instagram, et les réservations passent par Airbnb Expériences. Petit groupe, six dégustations, 2h30.' },
  { q: 'Je peux proposer une adresse ?', a: 'Oui, avec joie. Envoyez-nous votre pépite en message sur Instagram — la carte de demain s’écrit aussi grâce à vous.' },
  { q: 'Les avis sont-ils sponsorisés ?', a: 'Jamais. Chaque fiche raconte une dégustation réelle, indépendante, sans partenariat commercial.' },
];

export const customerQuote = { text: 'Merci la @Flanterie, c’était beaucoup trop cool !', source: 'Participant·e d’un Flan Tour' };
export const cityPins: { city: string; latitude: number; longitude: number; soon?: boolean }[] = [
  { city: 'Paris', latitude: 48.856, longitude: 2.352 },
  { city: 'Lyon', latitude: 45.764, longitude: 4.835 },
  { city: 'Marseille', latitude: 43.296, longitude: 5.369 },
  { city: 'Bordeaux', latitude: 44.837, longitude: -0.579, soon: true },
];
export const places: Place[] = [
  { id: 'p1', name: 'Plein Cœur', city: 'Paris', address: '64 rue des Batignolles', latitude: 48.887, longitude: 2.315, tags: ['texture fluide', '9 €'], instagram: 'https://www.instagram.com/pleincoeur_official/' },
  { id: 'p2', name: 'Capsule Pâtisserie', city: 'Saint-Maur-des-Fossés', address: 'flan à 4,30 €', latitude: 48.799, longitude: 2.488, tags: ['sablée', 'mousseuse'], instagram: 'https://www.instagram.com/lacapsulepatisserie/' },
  { id: 'p3', name: 'Séline Pâtisserie', city: 'France', tags: ['vanille'], instagram: 'https://www.instagram.com/seline_patisserie/' },
];
export const authorityData = {
  jury: 'Jury du concours du meilleur flan pâtissier — Foire de Lyon',
  press: ['TF1 / Quotidien', 'Franceinfo', 'Gault&Millau', 'Tribune de Lyon', 'Maritima', 'Le Petit Paume'],
};

export const dropData = {
  title: 'Le drop.',
  text: 'Sweats FLAN, tee-shirts sérigraphiés, éditions limitées. Les précommandes s’ouvrent sur Instagram — et partent vite.',
  note: 'Prochain drop annoncé en story.',
};

export const labelData = {
  title: 'Un label pour vous régaler.',
  text: 'Des dégustations, des rencontres, et des artisans mis en lumière pour leur travail. Le label Flanterie récompense ce qui se fait de mieux — et se mérite.',
  cta: 'Proposer sa pâtisserie',
};

// Flan Tours RÉELS (villes, prix, format) — réservation Airbnb réelle.
export const tours: TourEvent[] = [
  { id: 't1', title: 'Flan Tour Lyon', city: 'Lyon', duration: '2h30', stops: 6, price: '35 €', status: 'Dates annoncées sur Instagram', bookingUrl: 'https://www.airbnb.com/experiences/6417883', description: 'La balade d’origine : 6 flans, des anecdotes, un quiz.' },
  { id: 't2', title: 'Flan Tour Paris', city: 'Paris', duration: '2h30', stops: 6, price: '42 €', status: 'Dates annoncées sur Instagram', bookingUrl: 'https://www.airbnb.com/experiences/6417883', description: 'Le flan parisien, de la rive droite à la rive gauche.' },
  { id: 't3', title: 'Flan Tour Marseille', city: 'Marseille', duration: '2h30', stops: 6, price: '41 €', status: 'Dates annoncées sur Instagram', bookingUrl: 'https://www.airbnb.com/experiences/6417883', description: 'Six flans au soleil, en petit groupe.' },
];

// DÉMO — illustration de la méthode ; remplacé par les reviews réelles en V2.
export const demoReview: Review = { id: 'r1', flanId: 'demo', crustScore: 8.5, textureScore: 9.4, tasteScore: 9.1, visualScore: 8.8, overallScore: 9.2, comment: 'Croûte feuilletée qui claque, appareil vanille d’une douceur rare.', author: 'La Flanterie', demo: true };

export const posts: Post[] = [
  { id: 'i1', image: IMG.overhead, caption: 'Caramélisation du soir.', tags: ['flan'] },
  { id: 'i2', image: IMG.slate, caption: 'Petits flans, grande affaire.', tags: ['dégustation'] },
  { id: 'i3', image: IMG.pistache, caption: 'La piste pistache.', tags: ['pistache'] },
  { id: 'i4', image: IMG.dark, caption: 'Vue de dessus, comme toujours.', tags: ['méthode'] },
  { id: 'i5', image: IMG.part, caption: 'La part qui fait débat.', tags: ['flantour'] },
  { id: 'i6', image: IMG.etain, caption: 'Sablée ou feuilletée ?', tags: ['débat'] },
];

export const storyData = {
  title: 'Parce qu’un bon flan commence toujours par quelqu’un.',
  paragraphs: [
    'Benjamin est Lyonnais, et il a un problème : il ne peut pas passer devant une pâtisserie sans entrer goûter le flan. Alors il en a fait une méthode, puis une communauté, puis un tour.',
    'Plus de cent flans dégustés, notés, comparés. Des rencontres avec des pâtissiers. Et cette conviction simple : derrière chaque grand flan, il y a quelqu’un qui a choisi son lait, sa vanille et sa pâte avec obstination.',
  ],
  signature: 'Benjamin — fondateur de La Flanterie',
  image: IMG.part,
};