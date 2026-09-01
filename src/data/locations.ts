const brand = "Clyde Decking Solutions";

export type LocationFaq = {
  question: string;
  answer: string;
};

export type LocationPage = {
  slug: string;
  name: string;
  title: string;
  description: string;
  intro: string;
  postcode: string;
  landmark: string;
  county: string;
  nearby: string[];
  faqs: LocationFaq[];
};

/** Deterministic small-integer hash so the same location always picks the same phrasing variant. */
const hashIndex = (input: string, modulo: number): number => {
  let hash = 0;
  for (let i = 0; i < input.length; i++) {
    hash = (hash * 31 + input.charCodeAt(i)) >>> 0;
  }
  return hash % modulo;
};

type Character = "city" | "coastal" | "suburb" | "newTown" | "town";

type LocationSeed = {
  slug: string;
  name: string;
  character: Character;
  postcode: string;
  landmark: string;
  county: string;
  nearby: string[];
};

const locationSeeds: LocationSeed[] = [
  { slug: "glasgow", name: "Glasgow", character: "city", postcode: "G postcodes", landmark: "Kelvingrove Park", county: "Glasgow City", nearby: ["Paisley", "Rutherglen", "Bearsden", "Clydebank"] },
  { slug: "edinburgh", name: "Edinburgh", character: "city", postcode: "EH postcodes", landmark: "Edinburgh Castle", county: "City of Edinburgh", nearby: ["Livingston", "Linlithgow", "Bathgate", "Bo'ness"] },
  { slug: "stirling", name: "Stirling", character: "city", postcode: "FK postcodes", landmark: "Stirling Castle", county: "Stirling", nearby: ["Falkirk", "Cumbernauld", "Alexandria", "Denny"] },
  { slug: "paisley", name: "Paisley", character: "town", postcode: "PA1-PA3", landmark: "Paisley Abbey", county: "Renfrewshire", nearby: ["Renfrew", "Johnstone", "Barrhead", "Glasgow"] },
  { slug: "hamilton", name: "Hamilton", character: "town", postcode: "ML3", landmark: "Chatelherault Country Park", county: "South Lanarkshire", nearby: ["Motherwell", "Bellshill", "Larkhall", "East Kilbride"] },
  { slug: "falkirk", name: "Falkirk", character: "town", postcode: "FK1-FK2", landmark: "The Kelpies", county: "Falkirk", nearby: ["Grangemouth", "Denny", "Bo'ness", "Stirling"] },
  { slug: "livingston", name: "Livingston", character: "newTown", postcode: "EH54", landmark: "Almond Valley Heritage Centre", county: "West Lothian", nearby: ["Bathgate", "Broxburn", "Whitburn", "Edinburgh"] },
  { slug: "ayr", name: "Ayr", character: "coastal", postcode: "KA7-KA8", landmark: "Ayr Racecourse", county: "South Ayrshire", nearby: ["Troon", "Prestwick", "Kilmarnock", "Irvine"] },
  { slug: "kilmarnock", name: "Kilmarnock", character: "town", postcode: "KA1-KA3", landmark: "Dean Castle Country Park", county: "East Ayrshire", nearby: ["Irvine", "Ayr", "Troon", "Larkhall"] },
  { slug: "cumbernauld", name: "Cumbernauld", character: "newTown", postcode: "G67-G68", landmark: "Palacerigg Country Park", county: "North Lanarkshire", nearby: ["Falkirk", "Kirkintilloch", "Motherwell", "Glasgow"] },
  { slug: "east-kilbride", name: "East Kilbride", character: "newTown", postcode: "G74-G75", landmark: "Calderglen Country Park", county: "South Lanarkshire", nearby: ["Hamilton", "Cambuslang", "Newton Mearns", "Larkhall"] },
  { slug: "motherwell", name: "Motherwell", character: "town", postcode: "ML1", landmark: "Strathclyde Country Park", county: "North Lanarkshire", nearby: ["Wishaw", "Bellshill", "Hamilton", "Coatbridge"] },
  { slug: "coatbridge", name: "Coatbridge", character: "town", postcode: "ML5", landmark: "Summerlee Museum of Scottish Industrial Life", county: "North Lanarkshire", nearby: ["Airdrie", "Motherwell", "Bellshill", "Cumbernauld"] },
  { slug: "airdrie", name: "Airdrie", character: "town", postcode: "ML6", landmark: "Rawyards Park", county: "North Lanarkshire", nearby: ["Coatbridge", "Wishaw", "Cumbernauld", "Bellshill"] },
  { slug: "wishaw", name: "Wishaw", character: "town", postcode: "ML2", landmark: "Belhaven Park", county: "North Lanarkshire", nearby: ["Motherwell", "Larkhall", "Hamilton", "Airdrie"] },
  { slug: "bellshill", name: "Bellshill", character: "town", postcode: "ML4", landmark: "Strathclyde Country Park", county: "North Lanarkshire", nearby: ["Motherwell", "Coatbridge", "Hamilton", "Wishaw"] },
  { slug: "rutherglen", name: "Rutherglen", character: "suburb", postcode: "G73", landmark: "Rutherglen Town Hall", county: "South Lanarkshire", nearby: ["Cambuslang", "Glasgow", "Hamilton", "East Kilbride"] },
  { slug: "cambuslang", name: "Cambuslang", character: "suburb", postcode: "G72", landmark: "Cambuslang Park", county: "South Lanarkshire", nearby: ["Rutherglen", "Hamilton", "East Kilbride", "Glasgow"] },
  { slug: "clydebank", name: "Clydebank", character: "town", postcode: "G81", landmark: "the Titan Crane", county: "West Dunbartonshire", nearby: ["Dumbarton", "Glasgow", "Bearsden", "Erskine"] },
  { slug: "dumbarton", name: "Dumbarton", character: "town", postcode: "G82", landmark: "Dumbarton Castle", county: "West Dunbartonshire", nearby: ["Alexandria", "Clydebank", "Erskine", "Glasgow"] },
  { slug: "alexandria", name: "Alexandria", character: "coastal", postcode: "G83", landmark: "Loch Lomond Shores", county: "West Dunbartonshire", nearby: ["Dumbarton", "Clydebank", "Milngavie", "Stirling"] },
  { slug: "bearsden", name: "Bearsden", character: "suburb", postcode: "G61", landmark: "the Roman Bath House", county: "East Dunbartonshire", nearby: ["Milngavie", "Bishopbriggs", "Glasgow", "Clydebank"] },
  { slug: "milngavie", name: "Milngavie", character: "suburb", postcode: "G62", landmark: "Mugdock Country Park", county: "East Dunbartonshire", nearby: ["Bearsden", "Bishopbriggs", "Stirling", "Alexandria"] },
  { slug: "bishopbriggs", name: "Bishopbriggs", character: "suburb", postcode: "G64", landmark: "Bishopbriggs Cross", county: "East Dunbartonshire", nearby: ["Bearsden", "Kirkintilloch", "Glasgow", "Milngavie"] },
  { slug: "kirkintilloch", name: "Kirkintilloch", character: "suburb", postcode: "G66", landmark: "the Forth and Clyde Canal", county: "East Dunbartonshire", nearby: ["Bishopbriggs", "Cumbernauld", "Milngavie", "Glasgow"] },
  { slug: "newton-mearns", name: "Newton Mearns", character: "suburb", postcode: "G77", landmark: "Mearns Castle", county: "East Renfrewshire", nearby: ["Giffnock", "Clarkston", "Barrhead", "Glasgow"] },
  { slug: "giffnock", name: "Giffnock", character: "suburb", postcode: "G46", landmark: "Rouken Glen Park", county: "East Renfrewshire", nearby: ["Newton Mearns", "Clarkston", "Glasgow", "Barrhead"] },
  { slug: "clarkston", name: "Clarkston", character: "suburb", postcode: "G76", landmark: "Clarkston Toll", county: "East Renfrewshire", nearby: ["Giffnock", "Newton Mearns", "Glasgow", "Barrhead"] },
  { slug: "barrhead", name: "Barrhead", character: "town", postcode: "G78", landmark: "Cowan Park", county: "East Renfrewshire", nearby: ["Paisley", "Newton Mearns", "Johnstone", "Clarkston"] },
  { slug: "renfrew", name: "Renfrew", character: "town", postcode: "PA4", landmark: "Renfrew Town Hall", county: "Renfrewshire", nearby: ["Paisley", "Erskine", "Glasgow", "Johnstone"] },
  { slug: "erskine", name: "Erskine", character: "town", postcode: "PA8", landmark: "the Erskine Bridge", county: "Renfrewshire", nearby: ["Renfrew", "Paisley", "Dumbarton", "Bishopton"] },
  { slug: "johnstone", name: "Johnstone", character: "town", postcode: "PA5", landmark: "Johnstone Castle grounds", county: "Renfrewshire", nearby: ["Paisley", "Barrhead", "Renfrew", "Bishopton"] },
  { slug: "bishopton", name: "Bishopton", character: "suburb", postcode: "PA7", landmark: "the village centre", county: "Renfrewshire", nearby: ["Erskine", "Johnstone", "Renfrew", "Paisley"] },
  { slug: "greenock", name: "Greenock", character: "coastal", postcode: "PA15-PA16", landmark: "Lyle Hill", county: "Inverclyde", nearby: ["Port Glasgow", "Gourock", "Dumbarton", "Bishopton"] },
  { slug: "port-glasgow", name: "Port Glasgow", character: "coastal", postcode: "PA14", landmark: "Newark Castle", county: "Inverclyde", nearby: ["Greenock", "Gourock", "Erskine", "Dumbarton"] },
  { slug: "gourock", name: "Gourock", character: "coastal", postcode: "PA19", landmark: "the esplanade and Battery Park", county: "Inverclyde", nearby: ["Greenock", "Port Glasgow", "Dumbarton", "Erskine"] },
  { slug: "bathgate", name: "Bathgate", character: "town", postcode: "EH48", landmark: "Balbardie Park", county: "West Lothian", nearby: ["Livingston", "Whitburn", "Broxburn", "Linlithgow"] },
  { slug: "broxburn", name: "Broxburn", character: "town", postcode: "EH52", landmark: "Sports Park, Broxburn", county: "West Lothian", nearby: ["Livingston", "Bathgate", "Linlithgow", "Edinburgh"] },
  { slug: "linlithgow", name: "Linlithgow", character: "town", postcode: "EH49", landmark: "Linlithgow Palace", county: "West Lothian", nearby: ["Bathgate", "Broxburn", "Bo'ness", "Livingston"] },
  { slug: "whitburn", name: "Whitburn", character: "town", postcode: "EH47", landmark: "Polkemmet Country Park", county: "West Lothian", nearby: ["Bathgate", "Livingston", "Larkhall", "Wishaw"] },
  { slug: "bo-ness", name: "Bo'ness", character: "coastal", postcode: "EH51", landmark: "the Bo'ness and Kinneil Railway", county: "Falkirk", nearby: ["Linlithgow", "Grangemouth", "Falkirk", "Dunfermline"] },
  { slug: "grangemouth", name: "Grangemouth", character: "town", postcode: "FK3", landmark: "the Forth waterfront", county: "Falkirk", nearby: ["Falkirk", "Bo'ness", "Denny", "Stirling"] },
  { slug: "denny", name: "Denny", character: "town", postcode: "FK6", landmark: "the Carron Valley", county: "Falkirk", nearby: ["Falkirk", "Stirling", "Grangemouth", "Cumbernauld"] },
  { slug: "dunfermline", name: "Dunfermline", character: "town", postcode: "KY11-KY12", landmark: "Dunfermline Abbey", county: "Fife", nearby: ["Kirkcaldy", "Glenrothes", "Bo'ness", "Edinburgh"] },
  { slug: "kirkcaldy", name: "Kirkcaldy", character: "coastal", postcode: "KY1-KY2", landmark: "Ravenscraig Park", county: "Fife", nearby: ["Glenrothes", "Dunfermline", "Edinburgh", "Falkirk"] },
  { slug: "glenrothes", name: "Glenrothes", character: "newTown", postcode: "KY6-KY7", landmark: "Riverside Park", county: "Fife", nearby: ["Kirkcaldy", "Dunfermline", "Stirling", "Edinburgh"] },
  { slug: "irvine", name: "Irvine", character: "coastal", postcode: "KA12", landmark: "Irvine Beach Park", county: "North Ayrshire", nearby: ["Kilmarnock", "Troon", "Ayr", "Prestwick"] },
  { slug: "troon", name: "Troon", character: "coastal", postcode: "KA10", landmark: "the beach and links golf courses", county: "South Ayrshire", nearby: ["Ayr", "Prestwick", "Irvine", "Kilmarnock"] },
  { slug: "prestwick", name: "Prestwick", character: "coastal", postcode: "KA9", landmark: "the beach and esplanade", county: "South Ayrshire", nearby: ["Ayr", "Troon", "Irvine", "Kilmarnock"] },
  { slug: "larkhall", name: "Larkhall", character: "town", postcode: "ML9", landmark: "the Larkhall Viaduct", county: "South Lanarkshire", nearby: ["Hamilton", "Wishaw", "East Kilbride", "Motherwell"] },
];

const describe = (
  name: string,
  character: Character,
  facts: { postcode: string; landmark: string; county: string },
  nearby: string[],
  slug: string,
): { description: string; intro: string } => {
  const nearbyPair = nearby.slice(0, 2).join(" and ");

  const cityVariants = [
    {
      description: `${brand} installs and repairs decking and fencing across ${name} (${facts.postcode}), from properties near ${facts.landmark} to the wider ${facts.county} area.`,
      intro: `${brand} installs and repairs decking and fencing across ${name}, working with the mix of tenement gardens, back courts and suburban plots found across the city near ${facts.landmark}. Materials and layouts are chosen to suit ${facts.county}'s planning restrictions and Scotland's wet climate. The team also covers nearby ${nearbyPair}.`,
    },
    {
      description: `${brand} designs and fits decking and fencing for ${name} properties (${facts.postcode}), including areas around ${facts.landmark}.`,
      intro: `${name} covers a wide mix of housing, from compact city gardens near ${facts.landmark} to larger suburban plots on the edge of ${facts.county}. ${brand} plans each project around the space actually available rather than a standard layout. Coverage extends to nearby ${nearbyPair}.`,
    },
  ];

  const coastalVariants = [
    {
      description: `${brand} installs decking and fencing for ${name} gardens (${facts.postcode}) in ${facts.county}, close to ${facts.landmark}.`,
      intro: `Properties near ${facts.landmark} in ${name} face more direct exposure to sea air and wind than inland towns, so ${brand} selects fixings and finishes suited to that coastal exposure. The team also covers nearby ${nearbyPair}.`,
    },
    {
      description: `${brand} fits weather-resistant decking and fencing for ${name} (${facts.postcode}), including properties around ${facts.landmark}.`,
      intro: `${name}'s coastal position near ${facts.landmark} means gardens see more wind and salt air than towns further inland, which ${brand} accounts for when choosing materials and fixings for a ${facts.county} property. Coverage extends to nearby ${nearbyPair}.`,
    },
  ];

  const newTownVariants = [
    {
      description: `${brand} installs decking and fencing across ${name} (${facts.postcode}), a ${facts.county} new town built around generous private gardens.`,
      intro: `${name} was built with larger private gardens than most older Scottish towns, giving plenty of scope for a full-size deck near ${facts.landmark}. ${brand} plans a layout that suits the plot and how the family actually uses the space. The team also covers nearby ${nearbyPair}.`,
    },
    {
      description: `${brand} designs decking and fencing for ${name} gardens (${facts.postcode}), close to ${facts.landmark}.`,
      intro: `Most ${name} homes were built with a generous garden as standard, and ${brand} makes the most of that space near ${facts.landmark} with a properly planned deck or fence rather than a token patio. Coverage extends to nearby ${nearbyPair} in ${facts.county}.`,
    },
  ];

  const townVariants = [
    {
      description: `${brand} installs and repairs decking and fencing across ${name} (${facts.postcode}) and the wider ${facts.county} area.`,
      intro: `${name} has a mix of housing types near ${facts.landmark}, and ${brand} plans decking and fencing projects to suit whatever space is available, from compact yards to larger family gardens. The team also covers nearby ${nearbyPair}.`,
    },
    {
      description: `${brand} designs and fits decking and fencing for ${name} properties (${facts.postcode}), including areas around ${facts.landmark}.`,
      intro: `Housing stock in ${name} varies street to street, and ${brand} sizes up each ${facts.county} garden individually near ${facts.landmark} rather than assuming a one-size layout. Coverage extends to nearby ${nearbyPair}.`,
    },
  ];

  const suburbVariants = [
    {
      description: `${brand} installs composite and timber decking for ${name} gardens (${facts.postcode}), close to ${facts.landmark}.`,
      intro: `Most homes in ${name} have a private garden well suited to a full-size deck, and ${brand} helps plan a layout that works with the space and slope of the garden near ${facts.landmark}. The team also covers nearby ${nearbyPair} in ${facts.county}.`,
    },
    {
      description: `${brand} fits decking and fencing for ${name} properties (${facts.postcode}), near ${facts.landmark}.`,
      intro: `${name} properties near ${facts.landmark} typically have generous private gardens, giving plenty of scope for a proper deck rather than a token patio. ${brand} works out a layout that suits the plot and how the family uses the space. Coverage extends to nearby ${nearbyPair}.`,
    },
  ];

  const byCharacter: Record<Character, { description: string; intro: string }[]> = {
    city: cityVariants,
    coastal: coastalVariants,
    newTown: newTownVariants,
    town: townVariants,
    suburb: suburbVariants,
  };

  const variants = byCharacter[character];
  return variants[hashIndex(slug, variants.length)];
};

const makeLocationFaqs = (
  name: string,
  slug: string,
  character: Character,
  facts: { postcode: string; landmark: string; county: string },
): LocationFaq[] => {
  const coverageVariants: LocationFaq[] = [
    {
      question: `Do you install decking and fencing in ${name}?`,
      answer: `Yes. ${brand} installs and repairs both decking and fencing in ${name} (${facts.postcode}) and the surrounding ${facts.county} area, working on both timber and composite decking. Free quotes are available.`,
    },
    {
      question: `Is ${name} within your coverage area?`,
      answer: `Yes. ${brand} covers ${name} (${facts.postcode}) as part of our ${facts.county} and Central Belt coverage, along with the surrounding towns.`,
    },
  ];
  const coverage = coverageVariants[hashIndex(slug + "-coverage", coverageVariants.length)];

  const secondQuestionVariants: LocationFaq[] =
    character === "coastal"
      ? [
          {
            question: `Does decking near the coast in ${name} need different materials?`,
            answer: `Properties near ${facts.landmark} are more exposed to salt air and wind than inland towns, which can accelerate corrosion on fixings and wear on timber. ${brand} selects fixings and finishes suited to that exposure so the deck or fence holds up over time.`,
          },
          {
            question: `Can you work around a windy, exposed ${name} garden?`,
            answer: `Yes. ${name}'s coastal position near ${facts.landmark} means more wind exposure than towns further inland, and ${brand} designs fencing and decking layouts to suit, including windbreak sections where useful.`,
          },
        ]
      : character === "newTown"
        ? [
            {
              question: `What size garden do most ${name} homes have?`,
              answer: `${name} was built with larger private gardens than most older Scottish towns, so there's usually enough room for a full-size deck. ${brand} plans the layout around the actual garden near ${facts.landmark} rather than a standard template.`,
            },
            {
              question: `Is a ${name} garden big enough for a full deck?`,
              answer: `Usually, yes. Homes in ${name} (${facts.postcode}) were built with generous gardens as standard, giving enough space for a proper deck rather than a small patio area.`,
            },
          ]
        : [
            {
              question: `Do you cover the whole of ${name}, not just the town centre?`,
              answer: `Yes. ${brand} covers all of ${name} (${facts.postcode}) including the streets around ${facts.landmark} and the wider ${facts.county} area, not just the centre.`,
            },
            {
              question: `Can you work on older properties in ${name}?`,
              answer: `Yes. ${brand} regularly works on both older and newer properties in ${name}, including repairs and replacements for decking or fencing that's reached the end of its life near ${facts.landmark}.`,
            },
          ];
  const secondQuestion = secondQuestionVariants[hashIndex(slug + "-second", secondQuestionVariants.length)];

  return [
    coverage,
    secondQuestion,
    {
      question: `Do you offer composite decking in ${name}?`,
      answer: `Yes. ${brand} fits composite decking in ${name} as well as timber decking, repairs and fencing installation, including properties near ${facts.landmark}.`,
    },
    {
      question: `Do you install fencing as well as decking in ${name}?`,
      answer: `Yes. ${brand} handles both decking and fencing installation and repairs across ${name} (${facts.postcode}), and can quote for combined projects.`,
    },
    {
      question: `How do I get a decking or fencing quote in ${name}?`,
      answer: `Use the contact form with a brief description of the ${name} property and a few photos if you have them. Quotes are free and there's no obligation to proceed.`,
    },
  ];
};

export const locations: LocationPage[] = locationSeeds.map((seed) => {
  const facts = { postcode: seed.postcode, landmark: seed.landmark, county: seed.county };
  const { description, intro } = describe(seed.name, seed.character, facts, seed.nearby, seed.slug);
  return {
    slug: seed.slug,
    name: seed.name,
    title: `Decking & Fencing Services in ${seed.name} | ${brand}`,
    description,
    intro,
    postcode: seed.postcode,
    landmark: seed.landmark,
    county: seed.county,
    nearby: seed.nearby,
    faqs: makeLocationFaqs(seed.name, seed.slug, seed.character, facts),
  };
});

export const getLocationBySlug = (slug: string) => locations.find((location) => location.slug === slug);

export const getNearbyLocationLinks = (location: LocationPage) =>
  location.nearby
    .map((name) => locations.find((item) => item.name === name))
    .filter((item): item is LocationPage => Boolean(item));
