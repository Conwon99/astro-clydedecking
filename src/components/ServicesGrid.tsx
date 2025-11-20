import { trackServiceClick } from "@/utils/analytics";
import LazyImage from "@/components/LazyImage";

const ServicesGrid = () => {
  const services = [
    {
      title: "Composite Decking",
      description: "High-quality composite decking solutions for modern outdoor spaces",
      features: ["Low maintenance", "Weather resistant", "Long-lasting", "Modern design"],
      image: "/gallery/imgi_4_gallery 7.jpg",
      fallbackImage: "/gallery/imgi_4_gallery 7.jpg",
      link: "/services/composite-decking"
    },
    {
      title: "Wooden Decking", 
      description: "Traditional wooden decking with expert craftsmanship",
      features: ["Natural beauty", "Custom designs", "Professional installation", "Quality materials"],
      image: "/gallery/imgi_5_gallery 6.jpg",
      fallbackImage: "/gallery/imgi_5_gallery 6.jpg",
      link: "/services/wooden-decking"
    },
    {
      title: "Fencing Installation",
      description: "Professional fencing solutions for privacy and security",
      features: ["Various materials", "Custom heights", "Secure installation", "Weather protection"],
      image: "/gallery/imgi_7_gallery 2.jpg",
      fallbackImage: "/gallery/imgi_7_gallery 2.jpg",
      link: "/services/fencing-installation"
    },
    {
      title: "Fence Repairs",
      description: "Expert repair and maintenance services for existing fences",
      features: ["Quick repairs", "Post replacement", "Panel fixing", "Maintenance advice"],
      image: "/gallery/imgi_8_gallery 3.jpg",
      fallbackImage: "/gallery/imgi_8_gallery 3.jpg",
      link: "/services/fence-repairs"
    },
    {
      title: "Custom Outdoor Structures",
      description: "Bespoke outdoor structures and joinery solutions",
      features: ["Pergolas", "Gates", "Outdoor storage", "Custom structures"],
      image: "/gallery/imgi_6_gallery 4.jpg",
      fallbackImage: "/gallery/imgi_6_gallery 4.jpg",
      link: "/services/custom-outdoor-structures"
    }
  ];

  const handleLearnMore = (serviceTitle: string, link: string) => {
    trackServiceClick(serviceTitle, 'services_grid');
    window.location.href = link;
  };

  return (
    <section id="services" className="py-20 px-4 bg-gradient-to-b from-background to-[hsl(var(--muted))]">
      <div className="container mx-auto max-w-7xl">
        <div className="text-left mb-16">
          <div className="flex items-center mb-6">
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-[hsl(var(--asphalt-grey))] mr-6">
              PROFESSIONAL DECKING & FENCING SERVICES
            </h2>
            <div className="flex-1 h-px bg-[hsl(var(--asphalt-grey))]"></div>
          </div>
          <p className="text-xl text-[hsl(var(--asphalt-grey))] max-w-3xl">
            Expert decking contractors and fencing specialists serving Glasgow, Edinburgh, Stirling & Ayrshire. Professional composite decking, wooden decking, fencing installation, and custom outdoor structures. Trusted decking builders delivering premium outdoor living solutions across Scotland's Central Belt.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <article
              key={index}
              className="group overflow-hidden flex flex-col rounded-3xl bg-card shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-soft)] transition-[var(--transition-smooth)] hover:scale-[1.02] h-full"
            >
              {/* Image (Dirtworks style: aspect wrapper, object-cover, centered) */}
              <div className="aspect-[4/3] overflow-hidden block">
                <LazyImage
                  src={service.image}
                  alt={`Professional ${service.title.toLowerCase()} service - expert decking and fencing solutions`}
                  className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
                  fallbackSrc={service.fallbackImage}
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex-grow">
                  <h3 className="font-display text-2xl font-bold text-[hsl(var(--asphalt-grey))] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-[hsl(var(--asphalt-grey))] opacity-80 mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2 text-sm text-[hsl(var(--asphalt-grey))]">
                        <div className="w-1.5 h-1.5 bg-[hsl(var(--primary-blue))] rounded-full mt-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6">
                  <button 
                    onClick={() => handleLearnMore(service.title, service.link)}
                    className="block w-full text-center px-4 py-2 bg-[hsl(var(--muted))] hover:bg-[hsl(var(--muted))]/80 text-[hsl(var(--asphalt-grey))] font-semibold rounded-full transition-colors"
                  >
                    Learn more
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;