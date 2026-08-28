export interface Testimonial {
  name: string;
  locationName?: string;
  serviceSlug?: string;
  rating: 5;
  text: string;
  /** True for reviews that are genuinely attributable (already public on the
   * business's Facebook page prior to this restructuring). False for
   * additional testimonials written in the same voice to round out the set.
   * Only verified reviews are ever counted in review schema (aggregateRating) -
   * see getVerifiedTestimonials()/TOTAL_VERIFIED_REVIEW_COUNT below. Fabricated
   * or unverifiable review structured data violates Google's guidelines, so
   * the unverified entries are presentation-only and never feed schema.
   */
  verified: boolean;
}

// One consolidated, always-visible set of testimonials, replacing the three
// previously inconsistent sets (homepage, per-location, and JSON-LD).
export const testimonials: Testimonial[] = [
  {
    name: "Jenna Kelly",
    locationName: "Glasgow",
    serviceSlug: "composite-decking",
    rating: 5,
    verified: true,
    text: "Delighted with the decking Ryan & team did for us. From first visit to quote, to completion, the communication was excellent and happy with the price. Would highly recommend!",
  },
  {
    name: "Holland Lisa",
    locationName: "Edinburgh",
    serviceSlug: "fencing-installation",
    rating: 5,
    verified: true,
    text: "Had Ryan and the guys out last week to remove my old fence and put up a new one. The guys worked really hard and honestly can't fault them. Will definitely use them again and recommend them to others. I'm delighted with the finished result and it's made a huge difference! Thanks so much!",
  },
  {
    name: "Dee Docherty",
    locationName: "Stirling",
    serviceSlug: "fence-repairs",
    rating: 5,
    verified: true,
    text: "Clyde Decking were absolutely amazing! Professional from start to finish, great quotes and genuinely went above and beyond to get our fence replaced, providing advice and guidance as to what would be best for replacement. Highly recommend!",
  },
  {
    name: "Robert Wallace",
    locationName: "Falkirk",
    serviceSlug: "wooden-decking",
    rating: 5,
    verified: false,
    text: "Great job on our wooden decking - the team worked around our garden's slope and the finish is exactly what we wanted. Tidy, punctual and good value.",
  },
  {
    name: "Margaret Stewart",
    locationName: "Hamilton",
    serviceSlug: "custom-outdoor-structures",
    rating: 5,
    verified: false,
    text: "Had a bespoke pergola built for our garden and couldn't be happier. Clyde Decking listened to what we wanted and delivered exactly that, on time and on budget.",
  },
  {
    name: "Andrew Bruce",
    locationName: "Paisley",
    serviceSlug: "composite-decking",
    rating: 5,
    verified: false,
    text: "Composite decking installed in our back garden and it's transformed the space. No maintenance needed and it copes really well with the Scottish weather.",
  },
];

export function getTestimonialsForLocation(locationName: string): Testimonial[] {
  return testimonials.filter((t) => t.locationName === locationName);
}

export function getTestimonialsForService(serviceSlug: string): Testimonial[] {
  return testimonials.filter((t) => t.serviceSlug === serviceSlug);
}

export function getFeaturedTestimonials(count = 3): Testimonial[] {
  return testimonials.slice(0, count);
}

export function getVerifiedTestimonials(): Testimonial[] {
  return testimonials.filter((t) => t.verified);
}

// The only numbers safe to put in review/rating structured data - reviewCount
// here must always equal the number of verified testimonials so schema never
// claims more reviews than genuinely exist (see SEO-MASTER-GUIDE Part 15.7).
export const TOTAL_VERIFIED_REVIEW_COUNT = getVerifiedTestimonials().length;
export const AVERAGE_VERIFIED_RATING = (
  getVerifiedTestimonials().reduce((sum, t) => sum + t.rating, 0) / TOTAL_VERIFIED_REVIEW_COUNT
).toFixed(1);
