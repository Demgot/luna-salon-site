// Publish only owner-confirmed information. Empty collections stay hidden.
export const salon = {
  name: 'Luna', city: 'Смоленск', sourceUrl: 'https://luna-smolensk.orgs.biz/',
  bookingUrl: null, phone: null, address: null, hours: null, mapUrl: null,
  mapEmbedUrl: null, socialLinks: [], privacyUrl: null,
  hero: { before: null, after: null, staticImage: null, alt: '' },
  categories: [], // {id, name, services: [{id, name, description, price, duration}]}
  works: [], // {src, alt, category, caption}; use real salon photos only
  masters: [], // {id, name, specialty, description, photo}
  interiors: [], reviews: [], faq: [], about: null,
};
