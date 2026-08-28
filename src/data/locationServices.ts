import { categories, type ServiceCategory } from "./categories";
import { locations, getNearbyLocationLinks, type LocationPage } from "./locations";
import type { ServiceFaq } from "./services";

export interface LocationServicePage {
  locationSlug: string;
  categorySlug: string;
  title: string;
  h1: string;
  metaDescription: string;
  intro: string;
  localParagraph: string;
  bodyParagraph: string;
  faqs: ServiceFaq[];
  location: LocationPage;
  category: ServiceCategory;
}

function buildLocationServicePage(location: LocationPage, category: ServiceCategory): LocationServicePage {
  const nearbyNames = getNearbyLocationLinks(location).map((n) => n.name);
  return {
    locationSlug: location.slug,
    categorySlug: category.slug,
    title: category.metaTemplate(location.name),
    h1: `${category.name} in ${location.name}`,
    metaDescription: category.descriptionTemplate(location.name),
    intro: category.introTemplate(location.name),
    localParagraph: category.localTemplate(location.name, nearbyNames.length ? nearbyNames : [location.name]),
    bodyParagraph: category.bodyTemplate(location.name),
    faqs: category.faqTemplates(location.name),
    location,
    category,
  };
}

export const locationServicePages: LocationServicePage[] = locations.flatMap((location) =>
  categories.map((category) => buildLocationServicePage(location, category)),
);

export function getLocationServicePage(locationSlug: string, categorySlug: string): LocationServicePage | undefined {
  return locationServicePages.find(
    (page) => page.locationSlug === locationSlug && page.categorySlug === categorySlug,
  );
}

export function getLocationServicePagesForLocation(locationSlug: string): LocationServicePage[] {
  return locationServicePages.filter((page) => page.locationSlug === locationSlug);
}

export function getLocationServicePagesForCategory(categorySlug: string): LocationServicePage[] {
  return locationServicePages.filter((page) => page.categorySlug === categorySlug);
}

export function getLocationServicePath(locationSlug: string, categorySlug: string): string {
  return `/locations/${locationSlug}/${categorySlug}`;
}

export function getNearbyLocationServiceLinks(page: LocationServicePage): { name: string; href: string }[] {
  return getNearbyLocationLinks(page.location).map((nearby) => ({
    name: nearby.name,
    href: getLocationServicePath(nearby.slug, page.categorySlug),
  }));
}
