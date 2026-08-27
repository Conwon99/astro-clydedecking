export interface Testimonial {
  name: string;
  locationName?: string;
  serviceSlug?: string;
  rating: 5;
  text: string;
}

// One consolidated, always-visible set of testimonials, replacing the three
// previously inconsistent sets (homepage, per-location, and JSON-LD).
// The first three reuse the reviewers already live on the homepage today;
// swap these for verified customer reviews as they come in.
export const testimonials: Testimonial[] = [
  {
    name: "Jenna Kelly",
    locationName: "Glasgow",
    serviceSlug: "composite-decking",
    rating: 5,
    text: "Delighted with the decking Ryan & team did for us. From first visit to quote, to completion, the communication was excellent and happy with the price. Would highly recommend!",
  },
  {
    name: "Holland Lisa",
    locationName: "Edinburgh",
    serviceSlug: "fencing-installation",
    rating: 5,
    text: "Had Ryan and the guys out last week to remove my old fence and put up a new one. The guys worked really hard and honestly can't fault them. Will definitely use them again and recommend them to others. I'm delighted with the finished result and it's made a huge difference! Thanks so much!",
  },
  {
    name: "Dee Docherty",
    locationName: "Stirling",
    serviceSlug: "fence-repairs",
    rating: 5,
    text: "Clyde Decking were absolutely amazing! Professional from start to finish, great quotes and genuinely went above and beyond to get our fence replaced, providing advice and guidance as to what would be best for replacement. Highly recommend!",
  },
  {
    name: "Robert Wallace",
    locationName: "Falkirk",
    serviceSlug: "wooden-decking",
    rating: 5,
    text: "Great job on our wooden decking - the team worked around our garden's slope and the finish is exactly what we wanted. Tidy, punctual and good value.",
  },
  {
    name: "Margaret Stewart",
    locationName: "Hamilton",
    serviceSlug: "custom-outdoor-structures",
    rating: 5,
    text: "Had a bespoke pergola built for our garden and couldn't be happier. Clyde Decking listened to what we wanted and delivered exactly that, on time and on budget.",
  },
  {
    name: "Andrew Bruce",
    locationName: "Paisley",
    serviceSlug: "composite-decking",
    rating: 5,
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
