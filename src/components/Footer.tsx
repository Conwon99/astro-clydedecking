import { Phone, Mail, MapPin, Facebook } from "lucide-react";
import { trackExternalLink } from "@/utils/analytics";
import { business } from "@/data/business";
import { services } from "@/data/services";
import { categories } from "@/data/categories";
import { locations } from "@/data/locations";
import { getLocationServicePath } from "@/data/locationServices";

// A handful of top town x category links for the footer - concrete examples
// of the location x category matrix, not the full 72-page list.
const topMatrixLinks = [
  { name: "Composite Decking in Glasgow", href: getLocationServicePath("glasgow", "composite-decking") },
  { name: "Fencing in Edinburgh", href: getLocationServicePath("edinburgh", "fencing") },
  { name: "Timber Decking in Stirling", href: getLocationServicePath("stirling", "timber-decking") },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const townLocations = locations.filter((location) => location.character === "town");

  return (
    <footer className="bg-black text-white py-16 px-4">
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="font-display text-2xl font-bold text-white mb-4">
                {business.businessName}
              </h3>
              <p className="text-white leading-relaxed">
                Trusted provider of composite and wooden decking and fencing solutions across Scotland.
                Our skilled joiners are experts in all aspects of joinery work, ensuring every project is completed to the highest standards.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-white" />
                <span className="text-white">{business.phoneDisplay}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-white" />
                <span className="text-white">{business.email}</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-white" />
                <span className="text-white">Scotland and surrounding areas</span>
              </div>
            </div>

            <a
              href={business.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackExternalLink(business.facebookUrl, 'Facebook')}
              className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors"
            >
              <Facebook className="w-5 h-5" />
              <span>Follow us on Facebook</span>
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-xl font-bold text-white mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3 text-white">
              <li><a href="/" className="hover:text-gray-300 transition-colors">• Home</a></li>
              <li><a href="/services" className="hover:text-gray-300 transition-colors">• Services</a></li>
              <li><a href="/locations" className="hover:text-gray-300 transition-colors">• Locations</a></li>
              <li><a href="/about" className="hover:text-gray-300 transition-colors">• About</a></li>
              <li><a href="/reviews" className="hover:text-gray-300 transition-colors">• Reviews</a></li>
              <li><a href="/contact" className="hover:text-gray-300 transition-colors">• Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-xl font-bold text-white mb-6">
              Our Services
            </h4>
            <ul className="space-y-2 text-white text-sm">
              {categories.map((category) => (
                <li key={category.slug}>
                  <a href={`/${category.slug}`} className="hover:text-gray-300 transition-colors font-semibold">
                    • {category.name}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="space-y-2 text-white/80 text-sm mt-3 pt-3 border-t border-white/10">
              {services.map((service) => (
                <li key={service.slug}>
                  <a href={`/services/${service.slug}`} className="hover:text-gray-300 transition-colors">
                    • {service.shortTitle}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-display text-xl font-bold text-white mb-6">
              Service Areas
            </h4>
            <ul className="space-y-2 text-white text-sm">
              {townLocations.map((location) => (
                <li key={location.slug}>
                  <a href={`/locations/${location.slug}`} className="hover:text-gray-300 transition-colors">
                    • {location.name}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="space-y-2 text-white/80 text-sm mt-3 pt-3 border-t border-white/10">
              {topMatrixLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-gray-300 transition-colors">
                    • {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <a href="/locations" className="inline-block mt-3 text-white hover:text-gray-300 transition-colors font-semibold text-sm">
              View all areas we cover →
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white text-sm">
              © {currentYear} {business.businessName}. All rights reserved.
            </div>
            <div className="text-white/70 text-sm text-center">
              Professional decking and fencing services across Scotland.
              <br />
              Website made by <a href="https://codapixel.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors underline">Code Pixel</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
