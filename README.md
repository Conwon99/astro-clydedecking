# Clyde Decking Solutions

Website for Clyde Decking Solutions Ltd - composite decking, timber decking, fencing installation & repairs, and custom outdoor structures across Glasgow, Edinburgh, Stirling and Scotland's Central Belt.

## Site structure

The site is data-driven: page content lives in `src/data/*.ts` and a handful of dynamic Astro routes generate every page from it.

- `src/data/business.ts` - NAP (name, address, phone), site URL, social links, analytics ID
- `src/data/services.ts` - the 5 services (composite decking, wooden decking, fencing installation, fence repairs, custom outdoor structures)
- `src/data/categories.ts` - the 4 service categories (Composite Decking, Timber Decking, Fencing, Outdoor Structures)
- `src/data/locations.ts` - towns and Glasgow neighbourhoods covered
- `src/data/locationServices.ts` - the location x category matrix (long-tail SEO pages)
- `src/data/testimonials.ts` / `src/data/faqs.ts` - reviews and FAQ content

Routes:

- `/` - homepage
- `/services`, `/services/[slug]` - services hub and individual service pages
- `/[categorySlug]` - category hub pages (e.g. `/composite-decking`)
- `/locations`, `/locations/[slug]` - areas hub and individual location pages
- `/locations/[locationSlug]/[categorySlug]` - location x category pages
- `/contact`, `/404`, `/sitemap.xml`

## Technology

- [Astro](https://astro.build) (static output) with [React](https://react.dev) islands
- [Tailwind CSS](https://tailwindcss.com) + [shadcn/ui](https://ui.shadcn.com) components
- Deployed on Netlify

## Development

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

Other scripts:

```bash
npm run lint        # eslint
npm run preview     # preview the production build
npm run convert-images  # convert images in public/ to webp
npm run optimize    # convert-images + build
```

## License

© 2026 Clyde Decking Solutions Ltd. All rights reserved.
