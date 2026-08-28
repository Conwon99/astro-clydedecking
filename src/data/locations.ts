import { business } from "./business";

export type LocationCharacter = "town" | "glasgowDistrict";

export interface LocationFaq {
  question: string;
  answer: string;
}

export interface LocationSeed {
  slug: string;
  name: string;
  character: LocationCharacter;
  nearby: string[];
}

export interface LocationPage extends LocationSeed {
  title: string;
  description: string;
  intro: string;
  locationFaqs: LocationFaq[];
}

const locationSeeds: LocationSeed[] = [
  { slug: "glasgow", name: "Glasgow", character: "town", nearby: ["West End", "Southside", "Paisley", "Hamilton"] },
  { slug: "edinburgh", name: "Edinburgh", character: "town", nearby: ["Livingston", "Falkirk", "Stirling"] },
  { slug: "stirling", name: "Stirling", character: "town", nearby: ["Falkirk", "Glasgow", "Edinburgh"] },
  { slug: "falkirk", name: "Falkirk", character: "town", nearby: ["Stirling", "Livingston", "Cumbernauld"] },
  { slug: "livingston", name: "Livingston", character: "town", nearby: ["Edinburgh", "Falkirk"] },
  { slug: "ayr", name: "Ayr", character: "town", nearby: ["Kilmarnock", "Paisley"] },
  { slug: "kilmarnock", name: "Kilmarnock", character: "town", nearby: ["Ayr", "Paisley"] },
  { slug: "paisley", name: "Paisley", character: "town", nearby: ["Glasgow", "Kilmarnock", "Ayr"] },
  { slug: "hamilton", name: "Hamilton", character: "town", nearby: ["Glasgow", "Cumbernauld"] },
  { slug: "cumbernauld", name: "Cumbernauld", character: "town", nearby: ["Falkirk", "Hamilton", "Glasgow"] },
  { slug: "west-end", name: "West End", character: "glasgowDistrict", nearby: ["Southside", "City Centre", "North Glasgow", "Glasgow"] },
  { slug: "southside", name: "Southside", character: "glasgowDistrict", nearby: ["Shawlands", "West End", "Glasgow"] },
  { slug: "east-end", name: "East End", character: "glasgowDistrict", nearby: ["City Centre", "North Glasgow", "Glasgow"] },
  { slug: "city-centre", name: "City Centre", character: "glasgowDistrict", nearby: ["West End", "East End", "Glasgow"] },
  { slug: "north-glasgow", name: "North Glasgow", character: "glasgowDistrict", nearby: ["East End", "Bearsden", "Glasgow"] },
  { slug: "shawlands", name: "Shawlands", character: "glasgowDistrict", nearby: ["Southside", "Newton Mearns", "Glasgow"] },
  { slug: "bearsden", name: "Bearsden", character: "glasgowDistrict", nearby: ["North Glasgow", "West End", "Glasgow"] },
  { slug: "newton-mearns", name: "Newton Mearns", character: "glasgowDistrict", nearby: ["Shawlands", "Southside", "Glasgow"] },
];

function describe(seed: LocationSeed): { description: string; intro: string } {
  if (seed.character === "glasgowDistrict") {
    return {
      description: `Composite decking, timber decking and fencing installed and repaired across ${seed.name}, Glasgow, by local decking and fencing specialists. Free quotes.`,
      intro: `${seed.name} is one of Glasgow's most sought-after neighbourhoods, known for its tenement flats and back-court gardens. Clyde Decking works within the practical realities of tenement gardens, shared back courts and conservation area rules to deliver composite decking, timber decking and fencing that make the most of compact urban outdoor space.`,
    };
  }
  return {
    description: `Composite decking, timber decking and fencing installed and repaired across ${seed.name} and the surrounding area by Clyde Decking Solutions. Free quotes.`,
    intro: `${seed.name} covers a mix of housing types, from period townhouses to newer suburban builds, each with different garden layouts and drainage needs. Clyde Decking installs and repairs composite decking, timber decking, fencing and custom outdoor structures for homes throughout ${seed.name}, with a free, no-obligation quote for every project.`,
  };
}

function makeLocationFaqs(name: string): LocationFaq[] {
  return [
    { question: `Do you cover ${name}?`, answer: `Yes - ${name} is one of the areas we regularly work in as part of our Central Belt coverage. Contact us to confirm availability for your project.` },
    { question: `Do you offer a decking or fencing contractor near me in ${name}?`, answer: `Yes - if you're searching for a decking or fencing contractor near ${name}, Clyde Decking installs and repairs composite decking, timber decking, fencing and custom outdoor structures throughout the area.` },
    { question: `How much does decking or fencing cost in ${name}?`, answer: `Costs depend on the size and material of the project. Composite decking typically starts from £80-120 per square metre and fencing from £40-80 per linear metre in ${name}. We provide a free, no-obligation quote.` },
    { question: `How quickly can you start a project in ${name}?`, answer: `Availability varies with the season, but we aim to provide a quote and realistic start date for ${name} projects within a few days of getting in touch.` },
  ];
}

export const locations: LocationPage[] = locationSeeds.map((seed) => {
  const { description, intro } = describe(seed);
  return {
    ...seed,
    title: `Decking & Fencing in ${seed.name} | ${business.alternateName}`,
    description,
    intro,
    locationFaqs: makeLocationFaqs(seed.name),
  };
});

export function getLocationBySlug(slug: string): LocationPage | undefined {
  return locations.find((location) => location.slug === slug);
}

export function getNearbyLocationLinks(location: LocationPage): LocationPage[] {
  return location.nearby
    .map((name) => locations.find((candidate) => candidate.name === name))
    .filter((candidate): candidate is LocationPage => Boolean(candidate));
}
