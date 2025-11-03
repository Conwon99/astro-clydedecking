import { Button } from "@/components/ui/button";
import { ArrowRight, Hammer, Trees, Wrench, Home, Scissors, Settings, Shield } from "lucide-react";
import LazyImage from "@/components/LazyImage";
import { trackServiceClick } from "@/utils/analytics";

const ServicesGrid = () => {
  const services = [
    {
      title: "Composite Decking",
      description: "High-quality composite decking solutions for modern outdoor spaces",
      features: ["Low maintenance", "Weather resistant", "Long-lasting", "Modern design"],
      image: "/gallery/imgi_4_gallery 7.jpg",
      fallbackImage: "/gallery/imgi_4_gallery 7.jpg",
      icon: Hammer,
      color: "primary-blue"
    },
    {
      title: "Wooden Decking", 
      description: "Traditional wooden decking with expert craftsmanship",
      features: ["Natural beauty", "Custom designs", "Professional installation", "Quality materials"],
      image: "/gallery/imgi_5_gallery 6.jpg",
      fallbackImage: "/gallery/imgi_5_gallery 6.jpg",
      icon: Trees,
      color: "sky-blue"
    },
    {
      title: "Fencing Installation",
      description: "Professional fencing solutions for privacy and security",
      features: ["Various materials", "Custom heights", "Secure installation", "Weather protection"],
      image: "/gallery/imgi_7_gallery 2.jpg",
      fallbackImage: "/gallery/imgi_7_gallery 2.jpg",
      icon: Shield,
      color: "dark-blue"
    },
    {
      title: "Fence Repairs",
      description: "Expert repair and maintenance services for existing fences",
      features: ["Quick repairs", "Post replacement", "Panel fixing", "Maintenance advice"],
      image: "/gallery/imgi_8_gallery 3.jpg",
      fallbackImage: "/gallery/imgi_8_gallery 3.jpg",
      icon: Wrench,
      color: "primary-blue"
    },
    {
      title: "Custom Outdoor Structures",
      description: "Bespoke outdoor structures and joinery solutions",
      features: ["Pergolas", "Gates", "Outdoor storage", "Custom structures"],
      image: "/gallery/imgi_6_gallery 4.jpg",
      fallbackImage: "/gallery/imgi_6_gallery 4.jpg",
      icon: Settings,
      color: "sky-blue"
    }
  ];

  const handleQuoteClick = (serviceTitle: string) => {
    trackServiceClick(serviceTitle, 'services_grid');
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="card-service group overflow-hidden flex flex-col h-full">
              {/* Service Image */}
              <div className="relative -m-6 mb-0 h-48 overflow-hidden">
                <LazyImage
                  src={service.image}
                  alt={`Professional ${service.title.toLowerCase()} service - expert decking and fencing solutions`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  fallbackSrc={service.fallbackImage}
                />
              </div>

              {/* Service Content */}
              <div className="flex flex-col flex-grow pt-6">
                <div className="flex-grow">
                  <h3 className="font-display text-2xl font-bold text-[hsl(var(--asphalt-grey))] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-[hsl(var(--asphalt-grey))] opacity-80 mb-4">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2 text-sm text-[hsl(var(--asphalt-grey))]">
                        <div className="w-1.5 h-1.5 bg-[hsl(var(--primary-blue))] rounded-full mt-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button - positioned at bottom */}
                <div className="mt-6">
                  <Button 
                    onClick={() => handleQuoteClick(service.title)}
                    className="w-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-semibold rounded-full group/button"
                  >
                    Request a Quote
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/button:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;