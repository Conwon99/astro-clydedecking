export interface ServiceBenefit {
  title: string;
  description: string;
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServicePage {
  slug: string;
  title: string;
  shortTitle: string;
  parentCategorySlug: string;
  description: string;
  cardDescription: string;
  image: string;
  imageAlt: string;
  about: string;
  whyChooseUs: string;
  benefits: ServiceBenefit[];
  process: string[];
  faq: ServiceFaq[];
}

export const services: ServicePage[] = [
  {
    slug: "composite-decking",
    title: "Composite Decking",
    shortTitle: "Composite Decking",
    parentCategorySlug: "composite-decking",
    description:
      "Professional composite decking installation in Glasgow, Edinburgh, Stirling & Ayrshire. Low maintenance, weather-resistant composite decking solutions. Free quotes available.",
    cardDescription: "High-quality composite decking solutions for modern outdoor spaces",
    image: "/gallery/imgi_4_gallery 7.jpg",
    imageAlt: "Professional composite decking installation in Glasgow and Central Belt",
    about:
      "Transform your outdoor space with high-quality composite decking. Low maintenance, weather-resistant, and built to last. Perfect for modern homes across Glasgow, Edinburgh, Stirling, and Ayrshire.",
    whyChooseUs:
      "Composite decking offers the perfect combination of durability, low maintenance, and modern aesthetics for your outdoor space.",
    benefits: [
      { title: "Low Maintenance", description: "No staining, sealing, or sanding required. Simply clean with soap and water to keep your deck looking like new." },
      { title: "Weather Resistant", description: "Built to withstand Scotland's climate. Resistant to rot, mould, and fading, even in harsh weather conditions." },
      { title: "Long-Lasting", description: "Designed to last for decades with minimal upkeep. A long-term investment in your outdoor living space." },
      { title: "Modern Design", description: "Contemporary appearance with a variety of colours and finishes to match your home's aesthetic." },
      { title: "Eco-Friendly", description: "Made from recycled materials, composite decking is an environmentally responsible choice for your home." },
      { title: "Slip Resistant", description: "Textured surface provides excellent grip, making it safe for families even when wet." },
    ],
    process: [
      "Free on-site survey and measure-up, with material and colour options talked through in person",
      "Fixed, no-obligation quote with a clear installation timeline",
      "Groundwork and joist frame built to the correct fall for drainage",
      "Composite boards fitted, edged and finished ready to use",
    ],
    faq: [
      { question: "How much does composite decking cost?", answer: "Composite decking typically starts from £80-120 per square metre depending on board choice and substructure. We provide a free, no-obligation quote after seeing the space." },
      { question: "How long does composite decking last?", answer: "Composite decking is designed to last for decades with minimal upkeep, resisting rot, mould and fading far better than timber." },
      { question: "Does composite decking need any maintenance?", answer: "No staining, sealing or sanding is needed - an occasional clean with soap and water keeps it looking like new." },
    ],
  },
  {
    slug: "wooden-decking",
    title: "Wooden Decking",
    shortTitle: "Wooden Decking",
    parentCategorySlug: "timber-decking",
    description:
      "Professional wooden decking installation in Glasgow, Edinburgh, Stirling & Ayrshire. Traditional wooden decking with expert craftsmanship. Free quotes available.",
    cardDescription: "Traditional wooden decking with expert craftsmanship",
    image: "/gallery/imgi_5_gallery 6.jpg",
    imageAlt: "Professional wooden decking installation",
    about:
      "Traditional wooden decking with expert craftsmanship. Natural beauty, custom designs, and professional installation for homes across Glasgow, Edinburgh, Stirling, and Ayrshire.",
    whyChooseUs: "Wooden decking offers natural beauty, warmth, and timeless appeal for your outdoor space.",
    benefits: [
      { title: "Natural Beauty", description: "Classic wooden appearance that complements any garden design with warmth and character." },
      { title: "Custom Designs", description: "Tailored to your space with various wood types, finishes, and layout options." },
      { title: "Quality Materials", description: "Premium hardwoods and treated softwoods selected for durability and appearance." },
      { title: "Professional Installation", description: "Expert craftsmanship ensuring proper drainage, support, and finishing." },
      { title: "Versatile", description: "Suitable for various applications from ground-level decks to elevated platforms." },
      { title: "Cost-Effective", description: "Excellent value for money, with proper maintenance extending its lifespan significantly." },
    ],
    process: [
      "Free on-site survey to assess ground conditions, levels and drainage",
      "Timber and finish options discussed, with a fixed quote provided",
      "Frame and joists built to support and drain correctly",
      "Deck boards fitted and finished, with maintenance advice given on completion",
    ],
    faq: [
      { question: "How much does wooden decking cost?", answer: "Wooden decking typically ranges from £60-100 per square metre depending on timber choice and design. We provide a free, no-obligation quote." },
      { question: "How often does wooden decking need maintenance?", answer: "We recommend an annual clean and re-stain or re-oil to keep timber decking protected against Scotland's weather and looking its best." },
      { question: "Can you match wooden decking to an existing garden design?", answer: "Yes - we offer custom designs with a choice of wood types, finishes and layouts to suit your existing garden." },
    ],
  },
  {
    slug: "fencing-installation",
    title: "Fencing Installation",
    shortTitle: "Fencing Installation",
    parentCategorySlug: "fencing",
    description:
      "Professional fencing installation in Glasgow, Edinburgh, Stirling & Ayrshire. Various materials, custom heights, secure installation. Free quotes available.",
    cardDescription: "Professional fencing solutions for privacy and security",
    image: "/gallery/imgi_7_gallery 2.jpg",
    imageAlt: "Professional fencing installation",
    about:
      "Professional fencing solutions for privacy, security, and boundary definition. Various materials, custom heights, and secure installation across Glasgow, Edinburgh, Stirling, and Ayrshire.",
    whyChooseUs: "Comprehensive fencing solutions tailored to your needs.",
    benefits: [
      { title: "Various Materials", description: "Wood, composite, metal, and vinyl fencing options to suit your style and budget." },
      { title: "Custom Heights", description: "Fencing installed to your exact specifications for privacy and security needs." },
      { title: "Secure Installation", description: "Properly installed posts and panels ensuring long-lasting stability and security." },
      { title: "Weather Protection", description: "Materials and treatments designed to withstand Scotland's climate conditions." },
      { title: "Gates Included", description: "Custom gates matching your fence design for complete boundary solutions." },
      { title: "Professional Finish", description: "Expert installation with attention to detail for a polished, professional appearance." },
    ],
    process: [
      "Free site visit to measure boundaries and discuss materials and heights",
      "Fixed quote covering posts, panels, gates and finishing",
      "Existing fencing removed where needed and posts set securely",
      "Panels and gates fitted, finished and checked for line and level",
    ],
    faq: [
      { question: "How much does fencing installation cost?", answer: "Fencing installation typically costs £40-80 per linear metre depending on material and height. We provide a free, no-obligation quote for your boundary." },
      { question: "What fencing materials do you offer?", answer: "We install wood, composite, metal and vinyl fencing, and can advise on the best option for your budget and level of privacy needed." },
      { question: "Can you include gates with a new fence?", answer: "Yes - we build custom gates to match your fence design, giving you a complete, secure boundary solution." },
    ],
  },
  {
    slug: "fence-repairs",
    title: "Fence Repairs",
    shortTitle: "Fence Repairs",
    parentCategorySlug: "fencing",
    description:
      "Expert fence repair and maintenance services in Glasgow, Edinburgh, Stirling & Ayrshire. Quick repairs, post replacement, panel fixing. Free quotes available.",
    cardDescription: "Expert repair and maintenance services for existing fences",
    image: "/gallery/imgi_8_gallery 3.jpg",
    imageAlt: "Professional fence repair services",
    about:
      "Expert repair and maintenance services for existing fences. Quick repairs, post replacement, panel fixing, and maintenance advice to restore your fence to perfect condition.",
    whyChooseUs: "Comprehensive fence repair solutions to restore your fence's functionality and appearance.",
    benefits: [
      { title: "Quick Repairs", description: "Fast response for urgent fence repairs to restore security and privacy quickly." },
      { title: "Post Replacement", description: "Replace damaged or rotted posts to restore structural integrity to your fence." },
      { title: "Panel Fixing", description: "Repair or replace damaged panels to restore your fence's appearance and function." },
      { title: "Gate Repairs", description: "Fix sagging gates, replace hinges, and restore proper gate operation." },
      { title: "Maintenance Advice", description: "Expert guidance on maintaining your fence to prevent future issues." },
      { title: "Storm Damage", description: "Emergency repairs for storm-damaged fences to restore security quickly." },
    ],
    process: [
      "Free assessment of the damage - post rot, storm damage, sagging panels or gates",
      "Fixed quote for repair or replacement of the affected sections",
      "Damaged posts, panels or gates removed and replaced like-for-like where possible",
      "Repaired fence checked for stability, line and level before we finish up",
    ],
    faq: [
      { question: "How quickly can you repair a damaged fence?", answer: "We aim to respond quickly to urgent fence repairs, especially after storm damage, to restore your security and privacy as soon as possible." },
      { question: "Can you replace a single fence post rather than the whole fence?", answer: "Yes - in most cases we can replace individual damaged or rotted posts and panels without needing to rebuild the entire fence." },
      { question: "Do you repair storm-damaged fences?", answer: "Yes, we carry out emergency repairs for storm-damaged fences and gates to restore your boundary's security quickly." },
    ],
  },
  {
    slug: "custom-outdoor-structures",
    title: "Custom Outdoor Structures",
    shortTitle: "Outdoor Structures",
    parentCategorySlug: "outdoor-structures",
    description:
      "Bespoke outdoor structures and joinery solutions in Glasgow, Edinburgh, Stirling & Ayrshire. Pergolas, gates, outdoor storage, custom structures. Free quotes available.",
    cardDescription: "Bespoke outdoor structures and joinery solutions",
    image: "/gallery/imgi_6_gallery 4.jpg",
    imageAlt: "Custom outdoor structures and joinery",
    about:
      "Bespoke outdoor structures and joinery solutions tailored to your needs. Pergolas, gates, outdoor storage, and custom structures designed and built to enhance your outdoor space.",
    whyChooseUs: "Bespoke outdoor structures designed and built to your exact specifications.",
    benefits: [
      { title: "Pergolas", description: "Beautiful pergolas providing shade and structure to your outdoor living space." },
      { title: "Gates", description: "Custom gates matching your property's style, from traditional to modern designs." },
      { title: "Outdoor Storage", description: "Custom-built sheds, storage boxes, and outdoor cabinets for your garden needs." },
      { title: "Custom Structures", description: "Unique structures designed specifically for your space and requirements." },
      { title: "Garden Features", description: "Planters, trellises, and decorative features to enhance your garden design." },
      { title: "Bespoke Design", description: "Tailored designs created to match your vision and complement your property." },
    ],
    process: [
      "Free consultation to talk through what you have in mind and the space available",
      "Design discussed and a fixed quote provided before any work starts",
      "Structure built and installed by our joiners on site",
      "Finished structure checked over and handed back ready to use",
    ],
    faq: [
      { question: "What outdoor structures can you build?", answer: "We build pergolas, gates, outdoor storage, planters and other bespoke joinery, designed and built to your exact specification." },
      { question: "How much does a custom outdoor structure cost?", answer: "Pricing depends entirely on the design and materials involved, so we provide a free, no-obligation quote after discussing your project." },
      { question: "Can you design something that isn't a standard product?", answer: "Yes - bespoke design is our speciality. We build unique structures tailored specifically to your space and requirements." },
    ],
  },
];

export function getServiceBySlug(slug: string): ServicePage | undefined {
  return services.find((service) => service.slug === slug);
}

export function getServicesForCategory(categorySlug: string): ServicePage[] {
  return services.filter((service) => service.parentCategorySlug === categorySlug);
}

export function getFormServiceOptions(): { value: string; label: string }[] {
  return services.map((service) => ({ value: service.slug, label: service.title }));
}
