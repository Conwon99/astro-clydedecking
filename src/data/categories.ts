import type { ServiceFaq } from "./services";
import { business } from "./business";

export interface ServiceCategory {
  slug: string;
  name: string;
  title: string;
  description: string;
  intro: string;
  localParagraph: string;
  image: string;
  imageAlt: string;
  serviceSlugs: string[];
  metaTemplate: (town: string) => string;
  descriptionTemplate: (town: string) => string;
  introTemplate: (town: string) => string;
  localTemplate: (town: string, nearby: string[]) => string;
  bodyTemplate: (town: string) => string;
  faqTemplates: (town: string) => ServiceFaq[];
}

export const categories: ServiceCategory[] = [
  {
    slug: "composite-decking",
    name: "Composite Decking",
    title: `Composite Decking in ${business.primaryCity} & ${business.secondaryCity} | ${business.alternateName}`,
    description:
      "Low-maintenance, weather-resistant composite decking installed across Glasgow, Edinburgh, Stirling and Scotland's Central Belt. Free quotes available.",
    intro:
      "Composite decking is our most requested upgrade for homes across the Central Belt - no staining, sealing or sanding, built to withstand Scotland's weather, and available in a range of modern colours and finishes.",
    localParagraph:
      "We've installed composite decking for homes across Glasgow, Edinburgh, Stirling and the surrounding towns, from compact tenement back gardens to larger suburban plots, always fitted to the correct fall for drainage and finished to a high standard.",
    image: "/gallery/imgi_4_gallery 7.jpg",
    imageAlt: "Composite decking installation in Glasgow and Central Belt",
    serviceSlugs: ["composite-decking"],
    metaTemplate: (town) => `Composite Decking in ${town} | ${business.alternateName}`,
    descriptionTemplate: (town) =>
      `Composite decking installed in ${town} by ${business.businessName} - low-maintenance, weather-resistant decking. Free, no-obligation quotes.`,
    introTemplate: (town) =>
      `Looking for composite decking in ${town}? Clyde Decking installs low-maintenance, weather-resistant composite decking for homes across ${town}, built to last for decades with no staining, sealing or sanding required. If you're searching for a composite decking contractor near ${town}, we provide a free, no-obligation quote for every project.`,
    localTemplate: (town, nearby) =>
      `As well as ${town}, we regularly install composite decking in ${nearby.join(", ")} and the surrounding areas, so we understand the local ground conditions and drainage needs. Whether you're in a tenement back court or a larger suburban garden near ${town}, we build the substructure to suit your specific plot.`,
    bodyTemplate: (town) =>
      `Every composite decking project in ${town} starts with a free, no-obligation site survey. We build the substructure to the correct fall for drainage, then fit and edge the composite boards for a clean, modern finish that copes well with Scotland's weather. Composite decking is a popular choice in ${town} for homeowners replacing a tired or rotting timber deck, or turning an unused patch of garden into an easy-care outdoor living space.`,
    faqTemplates: (town) => [
      { question: `How much does composite decking cost in ${town}?`, answer: `Composite decking in ${town} typically starts from £80-120 per square metre depending on board choice and substructure. We provide a free, no-obligation quote after seeing the space.` },
      { question: `Do you install composite decking across ${town}?`, answer: `Yes - we regularly install composite decking throughout ${town} and the surrounding areas as part of our Central Belt coverage.` },
      { question: `How long does composite decking installation take in ${town}?`, answer: `Most composite decking projects in ${town} are completed within a few days, depending on the size and complexity of the area being decked.` },
      { question: `Is there a composite decking contractor near me in ${town}?`, answer: `Yes - Clyde Decking regularly installs composite decking near ${town} and the surrounding area. Get in touch and we'll confirm coverage for your address.` },
    ],
  },
  {
    slug: "timber-decking",
    name: "Timber Decking",
    title: `Timber Decking in ${business.primaryCity} & ${business.secondaryCity} | ${business.alternateName}`,
    description:
      "Traditional wooden decking with expert craftsmanship, installed across Glasgow, Edinburgh, Stirling and Scotland's Central Belt. Free quotes.",
    intro:
      "Wooden decking brings natural beauty and warmth to any garden. Our joiners work with premium hardwoods and treated softwoods to design and build timber decking tailored to your space.",
    localParagraph:
      "From New Town gardens to suburban back gardens across the Central Belt, we've built timber decking that copes with local ground conditions and Scotland's variable weather, with maintenance advice provided on completion.",
    image: "/gallery/imgi_5_gallery 6.jpg",
    imageAlt: "Timber decking installation across the Central Belt",
    serviceSlugs: ["wooden-decking"],
    metaTemplate: (town) => `Timber Decking in ${town} | ${business.alternateName}`,
    descriptionTemplate: (town) =>
      `Timber decking built in ${town} by ${business.businessName}'s joiners - natural, traditional decking. Free, no-obligation quotes available.`,
    introTemplate: (town) =>
      `Looking for timber decking in ${town}? Clyde Decking's joiners design and build traditional wooden decking for homes across ${town}, with natural beauty and a custom finish to suit your garden. If you're after a timber decking contractor near ${town}, we offer a free, no-obligation quote for every project.`,
    localTemplate: (town, nearby) =>
      `We also build timber decking in ${nearby.join(", ")}, so we know how to choose the right timber and treatment for gardens throughout the ${town} area. Correct drainage and ground preparation matter just as much as the timber itself, especially on the sloped or uneven plots common near ${town}.`,
    bodyTemplate: (town) =>
      `Timber decking projects in ${town} begin with a free site survey to check ground levels and drainage. We then build a frame to properly support and drain the deck, before fitting and finishing the boards with maintenance advice given on completion. Timber decking suits ${town} homeowners who want a natural, classic look, or need a raised deck to deal with a sloped garden or a step down from a raised patio door.`,
    faqTemplates: (town) => [
      { question: `How much does timber decking cost in ${town}?`, answer: `Timber decking in ${town} typically ranges from £60-100 per square metre depending on timber choice and design. We provide a free, no-obligation quote.` },
      { question: `Do you build timber decking across ${town}?`, answer: `Yes - we regularly build timber decking throughout ${town} and the wider Central Belt.` },
      { question: `How often does timber decking need maintenance in ${town}?`, answer: `We recommend an annual clean and re-stain or re-oil to keep timber decking in ${town} protected against Scotland's weather.` },
      { question: `Is there a timber decking contractor near me in ${town}?`, answer: `Yes - Clyde Decking builds timber decking near ${town} and the surrounding area. Get in touch and we'll confirm coverage for your address.` },
    ],
  },
  {
    slug: "fencing",
    name: "Fencing",
    title: `Fencing in ${business.primaryCity} & ${business.secondaryCity} | ${business.alternateName}`,
    description:
      "Fencing installation and repairs for privacy, security and boundary definition across Glasgow, Edinburgh, Stirling and Scotland's Central Belt.",
    intro:
      "From new fence installations to repairs and post replacement, we provide complete fencing solutions in wood, composite, metal and vinyl, with custom heights and matching gates.",
    localParagraph:
      "We install and repair fencing across the Central Belt, working with a range of materials chosen to withstand local weather conditions and give lasting security and privacy.",
    image: "/gallery/imgi_7_gallery 2.jpg",
    imageAlt: "Fencing installation and repairs across the Central Belt",
    serviceSlugs: ["fencing-installation", "fence-repairs"],
    metaTemplate: (town) => `Fencing in ${town} | ${business.alternateName}`,
    descriptionTemplate: (town) =>
      `Fencing installed and repaired in ${town} by ${business.businessName} - privacy, security and boundary fencing, with a free quote available.`,
    introTemplate: (town) =>
      `Looking for fencing in ${town}? Clyde Decking installs and repairs fencing for privacy, security and boundary definition across ${town}, in a range of materials and custom heights. If you need a fencing contractor near ${town}, we provide a free, no-obligation quote for new installations and repairs alike.`,
    localTemplate: (town, nearby) =>
      `We also cover fencing installation and repairs in ${nearby.join(", ")}, so we're familiar with boundary and planning considerations throughout the ${town} area, including the exposure and ground conditions that affect post-fixing choices near ${town}.`,
    bodyTemplate: (town) =>
      `Fencing projects in ${town} start with a free site visit to measure boundaries and discuss materials and heights. Whether it's a new installation or a repair to an existing fence, posts are set securely and panels fitted and finished to a professional standard. We handle everything from full boundary replacements to fixing a single damaged post or panel for ${town} homeowners.`,
    faqTemplates: (town) => [
      { question: `How much does fencing cost in ${town}?`, answer: `Fencing installation in ${town} typically costs £40-80 per linear metre depending on material and height. We provide a free, no-obligation quote for your boundary.` },
      { question: `Do you repair existing fences in ${town}?`, answer: `Yes - as well as new installations, we repair damaged posts, panels and gates on existing fences throughout ${town}.` },
      { question: `What fencing materials do you offer in ${town}?`, answer: `We install wood, composite, metal and vinyl fencing in ${town}, and can advise on the best option for your budget and privacy needs.` },
      { question: `Is there a fencing contractor near me in ${town}?`, answer: `Yes - Clyde Decking installs and repairs fencing near ${town} and the surrounding area. Get in touch and we'll confirm coverage for your address.` },
    ],
  },
  {
    slug: "outdoor-structures",
    name: "Outdoor Structures",
    title: `Outdoor Structures in ${business.primaryCity} & ${business.secondaryCity} | ${business.alternateName}`,
    description:
      "Bespoke pergolas, gates, outdoor storage and custom joinery built across Glasgow, Edinburgh, Stirling and Scotland's Central Belt. Free quotes.",
    intro:
      "Beyond decking and fencing, our joiners design and build bespoke outdoor structures - pergolas, matching gates, outdoor storage and garden features - tailored to your space.",
    localParagraph:
      "We've built custom outdoor structures for gardens across the Central Belt, from shaded pergolas to bespoke storage solutions, each one designed around the space and the brief.",
    image: "/gallery/imgi_6_gallery 4.jpg",
    imageAlt: "Custom outdoor structures and joinery across the Central Belt",
    serviceSlugs: ["custom-outdoor-structures"],
    metaTemplate: (town) => `Custom Outdoor Structures in ${town} | ${business.alternateName}`,
    descriptionTemplate: (town) =>
      `Custom pergolas, gates and bespoke outdoor structures built in ${town} by ${business.businessName}'s joiners. Free quotes available.`,
    introTemplate: (town) =>
      `Looking for a custom outdoor structure in ${town}? Clyde Decking's joiners design and build bespoke pergolas, gates and outdoor storage for homes across ${town}. If you're searching for a joiner near ${town} for a one-off garden project, we offer a free consultation and quote.`,
    localTemplate: (town, nearby) =>
      `We also build custom outdoor structures in ${nearby.join(", ")}, so we understand what works well for gardens throughout the ${town} area, from small storage solutions to full pergolas built to withstand the local weather.`,
    bodyTemplate: (town) =>
      `Every custom structure in ${town} starts with a free consultation to talk through what you have in mind and the space available. We agree a design and fixed quote before any work starts, then build and install on site to a professional finish. It's a popular option for ${town} homeowners wanting shade over a seating area, secure garden storage, or a gate to match an existing fence or deck.`,
    faqTemplates: (town) => [
      { question: `What outdoor structures can you build in ${town}?`, answer: `In ${town} we build pergolas, gates, outdoor storage, planters and other bespoke joinery, designed and built to your exact specification.` },
      { question: `How much does a custom outdoor structure cost in ${town}?`, answer: `Pricing depends entirely on the design and materials involved, so we provide a free, no-obligation quote after discussing your project in ${town}.` },
      { question: `Do you design bespoke structures for ${town} gardens?`, answer: `Yes - bespoke design is our speciality, and we build unique structures tailored specifically to the space and requirements of your ${town} garden.` },
      { question: `Is there a joiner near me in ${town} for custom garden structures?`, answer: `Yes - Clyde Decking's joiners take on bespoke outdoor structure projects near ${town} and the surrounding area. Get in touch with your idea and we'll arrange a free consultation.` },
    ],
  },
];

export function getCategoryBySlug(slug: string): ServiceCategory | undefined {
  return categories.find((category) => category.slug === slug);
}
