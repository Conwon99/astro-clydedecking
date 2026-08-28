export interface BusinessAddress {
  addressLocality: string;
  addressRegion: string;
  addressCountry: string;
  postalCode: string;
}

export interface BusinessConfig {
  businessName: string;
  alternateName: string;
  tagline: string;
  description: string;
  phone: string;
  phoneDisplay: string;
  phoneLocal: string;
  phoneTel: string;
  trackingPhone: string;
  trackingPhoneLocal: string;
  trackingPhoneTel: string;
  email: string;
  siteUrl: string;
  facebookUrl: string;
  whatsappUrl: string;
  formspreeEndpoint: string;
  primaryCity: string;
  secondaryCity: string;
  region: string;
  geoRegion: string;
  address: BusinessAddress;
  mapCenter: [number, number];
  logo: string;
  googleAnalyticsId: string;
  foundingDate: string;
  serviceTypes: string[];
  openingHoursSchema: string[];
  openingHoursSpec: { days: string[]; opens: string; closes: string }[];
}

export const business: BusinessConfig = {
  businessName: "Clyde Decking Solutions Ltd",
  alternateName: "Clyde Decking",
  tagline: "Decking & Fencing Services Glasgow & Central Belt",
  description:
    "Expert decking & fencing services in Glasgow, Edinburgh, Stirling, Ayrshire & Scotland's Central Belt. Composite & wooden decking, fencing installation & repairs. Free quotes available.",
  phone: "+447949912201",
  phoneDisplay: "+44 7949 912201",
  phoneLocal: "07949 912201",
  phoneTel: "tel:+447949912201",
  trackingPhone: "+447427570533",
  trackingPhoneLocal: "07427 570533",
  trackingPhoneTel: "tel:+447427570533",
  email: "clydedeckingsolutionsltd@gmail.com",
  siteUrl: "https://clydedeckingsolutionsltd.com",
  facebookUrl: "https://www.facebook.com/people/Clyde-Decking/100095203176792/?_rdr",
  whatsappUrl: "https://wa.me/447949912201",
  formspreeEndpoint: "https://formspree.io/f/xgvljren",
  primaryCity: "Glasgow",
  secondaryCity: "Edinburgh",
  region: "Scotland's Central Belt",
  geoRegion: "GB-SCT",
  address: {
    addressLocality: "Glasgow",
    addressRegion: "Scotland",
    addressCountry: "GB",
    postalCode: "G1",
  },
  mapCenter: [55.8642, -4.2518],
  logo: "/cds - Edited.png",
  googleAnalyticsId: "G-9JPKLK381L",
  foundingDate: "2020",
  serviceTypes: [
    "Composite Decking",
    "Wooden Decking",
    "Fencing Installation",
    "Fence Repairs",
    "Custom Outdoor Structures",
    "Decking Installation",
    "Fencing Contractors",
  ],
  openingHoursSchema: [
    "Mo 08:00-18:00",
    "Tu 08:00-18:00",
    "We 08:00-18:00",
    "Th 08:00-18:00",
    "Fr 08:00-18:00",
    "Sa 09:00-16:00",
    "Su 10:00-15:00",
  ],
  openingHoursSpec: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "18:00" },
    { days: ["Saturday"], opens: "09:00", closes: "16:00" },
    { days: ["Sunday"], opens: "10:00", closes: "15:00" },
  ],
};

export const SITE_URL = business.siteUrl;

export function absoluteUrl(path = "/"): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${clean}`;
}

export function truncateMeta(text: string, maxLength = 155): string {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength - 1).trimEnd()}…`;
}

export function brandName(): string {
  return business.alternateName;
}

// A standard Google Maps search deep-link built from the real business name and
// address - not a fabricated Google Business Profile ID, just a safe, always-
// correct fallback for schema.org `hasMap` until a verified GBP URL is added.
export function googleMapsSearchUrl(): string {
  const query = encodeURIComponent(
    `${business.businessName}, ${business.address.addressLocality}, ${business.address.addressCountry}`,
  );
  return `https://www.google.com/maps/search/?api=1&query=${query}`;
}
