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
  signsYouNeed: string;
  options: string;
  localContext: string;
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
      "Composite decking installation in Glasgow & Edinburgh. Low-maintenance, weather-resistant decking, fitted by Clyde Decking. Free quotes available.",
    cardDescription: "High-quality composite decking solutions for modern outdoor spaces",
    image: "/gallery/imgi_4_gallery 7.jpg",
    imageAlt: "Professional composite decking installation in Glasgow and Central Belt",
    about:
      "Composite decking combines the look of natural timber with a low-maintenance, weather-resistant build. It's made from a mix of wood fibres and recycled plastics, giving you a deck that copes with Scotland's climate without the annual sanding, staining or sealing that timber needs. We supply and fit composite decking for gardens, patios and raised platforms across Glasgow, Edinburgh, Stirling and Ayrshire.",
    signsYouNeed:
      "If your existing timber decking has started to warp, splinter or need re-staining every year just to stay presentable, it's usually more cost-effective to replace it with composite than keep patching it up. Composite decking is also a popular choice for a bare or unused patch of garden that could become proper outdoor living space, or for anyone extending their home outward with a low-maintenance alternative to a poured patio.",
    options:
      "We fit composite decking boards in a range of colours and finishes, from natural wood-look woodgrain textures through to smooth, contemporary tones. Boards come in different widths and can be laid in straight runs or picture-frame patterns, with hidden or visible fixings depending on the finish you're after. We'll talk you through the board ranges available during your free, no-obligation quote so you can pick what suits your garden and budget.",
    localContext:
      "Scotland's weather - frequent rain, damp winters and the odd spell of summer sun - means outdoor materials need to work hard. Composite decking suits Glasgow and Edinburgh gardens particularly well, from tenement back courts to larger suburban plots, because it resists the rot, mould and slippery surface that affects timber decking in a wet climate, without the annual re-staining timber needs to stay looking good.",
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
      { question: "Do you offer composite decking near me in Glasgow or Edinburgh?", answer: "Yes - we install composite decking across Glasgow, Edinburgh, Stirling, Ayrshire and towns throughout the Central Belt. Get in touch with your location and we'll confirm coverage." },
    ],
  },
  {
    slug: "wooden-decking",
    title: "Wooden Decking",
    shortTitle: "Wooden Decking",
    parentCategorySlug: "timber-decking",
    description:
      "Wooden decking installation in Glasgow & Edinburgh. Traditional timber decking with expert craftsmanship, fitted by Clyde Decking. Free quotes.",
    cardDescription: "Traditional wooden decking with expert craftsmanship",
    image: "/gallery/imgi_5_gallery 6.jpg",
    imageAlt: "Professional wooden decking installation",
    about:
      "Wooden decking brings natural warmth and character to a garden that composite materials can't quite match. Built from premium hardwoods and pressure-treated softwoods, our timber decking is designed and fitted by experienced joiners for homes across Glasgow, Edinburgh, Stirling and Ayrshire, with a finish tailored to your garden.",
    signsYouNeed:
      "If your garden has bare, uneven or muddy ground that's hard to use for most of the year, a raised timber deck creates a proper outdoor room in one project. Timber decking also suits anyone wanting a natural, classic look rather than a manufactured composite finish, or a deck built at height to deal with a sloped garden or step down from a raised patio door.",
    options:
      "We work with a range of hardwoods and treated softwoods, chosen for durability and appearance, and can lay boards in standard straight runs, herringbone patterns or bespoke shapes to suit an awkward plot. Balustrades, steps and built-in seating can all be added as part of the design. We'll go through timber types and finishes with you during your free quote.",
    localContext:
      "Timber decking needs the right build to cope with the Central Belt's wet climate - correct drainage, spacing and treatment are essential to stop boards trapping moisture and rotting prematurely. We build in proper airflow and drainage from the outset on every Glasgow and Edinburgh project, and provide maintenance advice so your deck stays sound through Scottish winters.",
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
      { question: "Do you fit wooden decking near me in Glasgow or Edinburgh?", answer: "Yes - our joiners build timber decking throughout Glasgow, Edinburgh, Stirling and the wider Central Belt. Get in touch to check coverage for your area." },
    ],
  },
  {
    slug: "fencing-installation",
    title: "Fencing Installation",
    shortTitle: "Fencing Installation",
    parentCategorySlug: "fencing",
    description:
      "Fencing installation in Glasgow & Edinburgh. Privacy, security and boundary fencing fitted by Clyde Decking across the Central Belt. Free quotes.",
    cardDescription: "Professional fencing solutions for privacy and security",
    image: "/gallery/imgi_7_gallery 2.jpg",
    imageAlt: "Professional fencing installation",
    about:
      "New fencing defines your boundary, adds privacy and improves security, and it's often one of the most noticeable upgrades you can make to a garden. We install fencing in wood, composite, metal and vinyl for homes across Glasgow, Edinburgh, Stirling and Ayrshire, matched to your height, style and budget requirements.",
    signsYouNeed:
      "If your current fence line is missing sections, low enough that pets or children can get through, or simply doesn't offer the privacy you want from neighbouring gardens or a street-facing plot, new fencing installation solves it in one job. It's also worth considering when you're landscaping a garden from scratch and need a boundary put up before any other work can start.",
    options:
      "We fit close-board, panel, picket and trellis-topped fencing in timber, along with composite and metal options where a lower-maintenance finish is wanted. Heights and styles can be mixed along a single boundary - taller close-board sections for privacy, lower picket sections at the front - and we build in matching gates as part of the same job.",
    localContext:
      "Fencing across Glasgow and Edinburgh needs to handle everything from exposed hillside gardens to sheltered tenement back courts, so material and post-fixing choices matter more here than in a milder climate. We choose treatments and fixings suited to each site's exposure, and are used to working within the boundary and planning considerations that come with tenement, terraced and conservation-area properties.",
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
      { question: "Do you offer a fencing contractor near me in Glasgow or Edinburgh?", answer: "Yes - we install fencing throughout Glasgow, Edinburgh, Stirling, Ayrshire and the surrounding Central Belt towns. Contact us to confirm coverage for your address." },
    ],
  },
  {
    slug: "fence-repairs",
    title: "Fence Repairs",
    shortTitle: "Fence Repairs",
    parentCategorySlug: "fencing",
    description:
      "Fence repairs in Glasgow & Edinburgh. Post replacement, panel fixing and storm damage repairs from Clyde Decking. Free quotes available.",
    cardDescription: "Expert repair and maintenance services for existing fences",
    image: "/gallery/imgi_8_gallery 3.jpg",
    imageAlt: "Professional fence repair services",
    about:
      "A damaged fence rarely needs replacing outright - in most cases a rotted post, a blown panel or a sagging gate can be repaired without rebuilding the whole boundary. We carry out fence repairs and maintenance for homes across Glasgow, Edinburgh, Stirling and Ayrshire, restoring security and privacy quickly.",
    signsYouNeed:
      "Common signs it's time for a repair rather than a full replacement include a fence post that's visibly leaning or rotten at the base, panels that have blown out or split in strong wind, or a gate that's dropped on its hinges and no longer closes properly. If only part of your boundary is affected, a targeted repair is usually the quicker and more cost-effective fix.",
    options:
      "We repair and replace individual posts, panels and gate hardware to match your existing fence wherever possible, so the repaired section blends in rather than standing out. Where storm damage or long-term rot has affected a larger stretch, we can advise honestly on whether a repair or partial replacement makes more sense for the fence as a whole.",
    localContext:
      "Storm damage and prolonged damp are the two biggest causes of fence repairs we see across Glasgow and Edinburgh gardens, particularly on exposed boundaries and older timber posts set in the ground rather than on metal spikes or concrete bases. We aim to respond quickly to storm-damaged fences to get your garden secure again without a long wait.",
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
      { question: "Do you offer fence repairs near me in Glasgow or Edinburgh?", answer: "Yes - we repair fences throughout Glasgow, Edinburgh, Stirling, Ayrshire and the wider Central Belt. Get in touch with details of the damage and we'll advise on next steps." },
    ],
  },
  {
    slug: "custom-outdoor-structures",
    title: "Custom Outdoor Structures",
    shortTitle: "Outdoor Structures",
    parentCategorySlug: "outdoor-structures",
    description:
      "Custom pergolas, gates and outdoor structures in Glasgow & Edinburgh, built by Clyde Decking's joiners. Free, no-obligation quotes available.",
    cardDescription: "Bespoke outdoor structures and joinery solutions",
    image: "/gallery/imgi_6_gallery 4.jpg",
    imageAlt: "Custom outdoor structures and joinery",
    about:
      "Beyond decking and fencing, our joiners design and build bespoke outdoor structures - pergolas, matching gates, outdoor storage and garden features - tailored to your space. Each project is designed and built to your brief for homes across Glasgow, Edinburgh, Stirling and Ayrshire.",
    signsYouNeed:
      "If you want shade over a seating or dining area, extra secure storage for bikes, tools or bins that doesn't look like an afterthought, or a garden gate and structure that matches a new fence or deck we've already built, a custom outdoor structure is usually the answer. It's also the right route when nothing off-the-shelf quite fits an awkward corner or non-standard space.",
    options:
      "We design and build pergolas, garden gates, outdoor storage boxes, sheds and decorative features such as planters and trellises, in timber to match your existing decking or fencing. Because every structure is built to order, sizes and finishes are tailored to your space rather than fitted around a standard product size.",
    localContext:
      "Custom structures for Glasgow and Edinburgh gardens need to be built with the same weather resistance as our decking and fencing work - properly treated timber, correct drainage and secure fixings are essential given the Central Belt's exposure to wind and rain. We build every structure with that in mind, whether it's a small storage box or a full pergola.",
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
      { question: "Do you build custom outdoor structures near me in Glasgow or Edinburgh?", answer: "Yes - our joiners take on bespoke outdoor structure projects across Glasgow, Edinburgh, Stirling and the Central Belt. Get in touch with your idea and we'll arrange a free consultation." },
    ],
  },
];

export function getServiceBySlug(slug: string): ServicePage | undefined {
  return services.find((service) => service.slug === slug);
}

export function getServicesForCategory(categorySlug: string): ServicePage[] {
  return services.filter((service) => service.parentCategorySlug === categorySlug);
}

export function getRelatedServices(slug: string, count = 3): ServicePage[] {
  const current = getServiceBySlug(slug);
  if (!current) return [];
  const others = services.filter((service) => service.slug !== slug);
  const sameCategory = others.filter((service) => service.parentCategorySlug === current.parentCategorySlug);
  const rest = others.filter((service) => service.parentCategorySlug !== current.parentCategorySlug);
  return [...sameCategory, ...rest].slice(0, count);
}

export function getFormServiceOptions(): { value: string; label: string }[] {
  return services.map((service) => ({ value: service.slug, label: service.title }));
}
