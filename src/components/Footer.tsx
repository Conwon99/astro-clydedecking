import { Phone, Mail, MapPin, Facebook } from "lucide-react";
import { trackExternalLink } from "@/utils/analytics";
import { business } from "@/data/business";
import { services } from "@/data/services";
import { locations } from "@/data/locations";

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
                Our skilled joiners are experts in all aspects of joinery work, ensuring every project is completed to the highest standards with a focus on functionality and aesthetics.
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
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-xl font-bold text-white mb-6">
              Our Services
            </h4>
            <ul className="space-y-3 text-white">
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
            <ul className="space-y-3 text-white">
              {townLocations.map((location) => (
                <li key={location.slug}>
                  <a href={`/locations/${location.slug}`} className="hover:text-gray-300 transition-colors">
                    • Decking & Fencing in {location.name}
                  </a>
                </li>
              ))}
              <li>
                <a href="/locations" className="hover:text-gray-300 transition-colors font-semibold">
                  • View all areas we cover
                </a>
              </li>
            </ul>
          </div>

          {/* About Us */}
          <div>
            <h4 className="font-display text-xl font-bold text-white mb-6">
              About Us
            </h4>
            <p className="text-white leading-relaxed mb-6">
              We are a trusted provider of composite and wooden decking and fencing solutions. Our skilled joiners
              are experts in all aspects of joinery work, ensuring every project is completed to the highest standards.
              We believe in combining functionality with aesthetics to create beautiful, durable outdoor spaces.
            </p>

            <div className="flex items-center gap-4">
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
