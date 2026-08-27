export interface FaqItem {
  question: string;
  answer: string;
}

export const homepageFaqs: FaqItem[] = [
  {
    question: "How much does decking installation cost?",
    answer:
      "Decking installation costs vary depending on the size, material choice, and complexity of the project. Composite decking typically starts from £80-120 per square metre, while wooden decking ranges from £60-100 per square metre. We provide free, no-obligation quotes for all decking work. Contact us for a detailed quote.",
  },
  {
    question: "Do you install both composite and wooden decking?",
    answer:
      "Yes, we specialise in both composite and wooden decking installation. Composite decking offers low maintenance and weather resistance, while wooden decking provides natural beauty and traditional appeal. Our skilled joiners can help you choose the best option for your needs.",
  },
  {
    question: "What areas do you cover?",
    answer:
      "We provide decking and fencing services across Scotland's Central Belt, including Glasgow, Edinburgh, Stirling, Ayrshire, and surrounding areas. Contact us to confirm coverage for your specific location and discuss your project requirements.",
  },
  {
    question: "Do you offer fencing installation and repairs?",
    answer:
      "Yes, we provide comprehensive fencing services including new installations, repairs, and maintenance. We work with various fencing materials and can handle everything from privacy fences to decorative fencing. All work is completed to the highest standards by our expert contractors.",
  },
  {
    question: "What types of custom outdoor structures do you build?",
    answer:
      "We offer a wide range of custom outdoor structures including pergolas, outdoor storage, gates, and bespoke decking solutions. Our skilled contractors can create custom solutions tailored to your specific needs and outdoor design.",
  },
  {
    question: "How long does a typical decking project take?",
    answer:
      "Project duration depends on size and complexity. Simple decking installations typically take 1-3 days, while larger or more complex projects may take up to a week. We provide realistic timelines during the quote process and keep you updated throughout the project.",
  },
  {
    question: "Do you offer free quotes?",
    answer:
      "Yes, we provide completely free, no-obligation quotes for all our services. You can request a quote by calling us, emailing us, or using our contact form. We'll assess your needs and provide a detailed, transparent quote with no hidden costs.",
  },
];

export function buildFaqSchema(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
