import { Button } from "@/components/ui/button";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import LazyImage from "@/components/LazyImage";
import { trackPhoneCall, trackNavigation, trackQuoteRequest } from "@/utils/analytics";
import { business } from "@/data/business";
import { TRACKING_PHONE_NUMBER_TEL } from "@/utils/phoneTracking";
import { categories } from "@/data/categories";
import { locations } from "@/data/locations";

const townLocations = locations.filter((l) => l.character === "town");

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight; // Approximate hero section height

      if (scrollY > heroHeight * 0.8) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCallClick = () => {
    trackPhoneCall('navigation');
    // Use tracking number for runtime clicks (HTML source still has real number for SEO)
    window.location.href = TRACKING_PHONE_NUMBER_TEL;
  };

  const handleQuoteClick = () => {
    trackQuoteRequest('navigation_button', []);
    window.location.href = "/contact";
  };

  const handleHomeClick = () => {
    trackNavigation('home');
    setIsMenuOpen(false);
    window.location.href = '/';
  };

  const navLink = (label: string) => {
    trackNavigation(label.toLowerCase());
    setIsMenuOpen(false);
  };

  return (
    <nav
      aria-label="Main navigation"
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/95 backdrop-blur-sm border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={handleHomeClick}
              className="cursor-pointer"
              aria-label="Clyde Decking home"
            >
              <div className="w-24 h-24">
                <LazyImage
                  src="/cds - Edited.png"
                  alt="Clyde Decking Solutions Ltd logo"
                  className="w-full h-full object-contain brightness-0 invert"
                />
              </div>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="/"
              onClick={() => navLink('home')}
              className="text-primary-foreground hover:text-primary-foreground/80 transition-colors duration-200 font-medium"
            >
              Home
            </a>

            {/* Services dropdown */}
            <div className="relative group">
              <a
                href="/services"
                onClick={() => navLink('services')}
                className="flex items-center gap-1 text-primary-foreground hover:text-primary-foreground/80 transition-colors duration-200 font-medium"
              >
                Services
                <ChevronDown className="w-4 h-4" />
              </a>
              <div className="absolute left-0 top-full pt-2 hidden group-hover:block group-focus-within:block">
                <div className="bg-white rounded-xl shadow-xl py-2 min-w-[220px]">
                  {categories.map((category) => (
                    <a
                      key={category.slug}
                      href={`/${category.slug}`}
                      className="block px-4 py-2 text-foreground hover:bg-muted/50 hover:text-primary transition-colors text-sm"
                    >
                      {category.name}
                    </a>
                  ))}
                  <a href="/services" className="block px-4 py-2 text-primary font-semibold hover:bg-muted/50 transition-colors text-sm border-t border-border mt-1 pt-2">
                    All Services
                  </a>
                </div>
              </div>
            </div>

            {/* Locations dropdown */}
            <div className="relative group">
              <a
                href="/locations"
                onClick={() => navLink('locations')}
                className="flex items-center gap-1 text-primary-foreground hover:text-primary-foreground/80 transition-colors duration-200 font-medium"
              >
                Locations
                <ChevronDown className="w-4 h-4" />
              </a>
              <div className="absolute left-0 top-full pt-2 hidden group-hover:block group-focus-within:block">
                <div className="bg-white rounded-xl shadow-xl py-2 min-w-[220px] grid grid-cols-2 gap-x-2">
                  {townLocations.map((location) => (
                    <a
                      key={location.slug}
                      href={`/locations/${location.slug}`}
                      className="block px-4 py-2 text-foreground hover:bg-muted/50 hover:text-primary transition-colors text-sm"
                    >
                      {location.name}
                    </a>
                  ))}
                  <a href="/locations" className="block px-4 py-2 text-primary font-semibold hover:bg-muted/50 transition-colors text-sm col-span-2 border-t border-border mt-1 pt-2">
                    All Locations
                  </a>
                </div>
              </div>
            </div>

            <a
              href="/about"
              onClick={() => navLink('about')}
              className="text-primary-foreground hover:text-primary-foreground/80 transition-colors duration-200 font-medium"
            >
              About
            </a>
            <a
              href="/reviews"
              onClick={() => navLink('reviews')}
              className="text-primary-foreground hover:text-primary-foreground/80 transition-colors duration-200 font-medium"
            >
              Reviews
            </a>
            <a
              href="/contact"
              onClick={() => navLink('contact')}
              className="text-primary-foreground hover:text-primary-foreground/80 transition-colors duration-200 font-medium"
            >
              Contact
            </a>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={handleCallClick}
              className="flex items-center justify-center gap-2 text-primary-foreground/80 hover:text-primary-foreground px-6 py-3 lg:px-8 lg:py-4 rounded-xl font-semibold text-base lg:text-lg transition-colors duration-200"
              aria-label={`Call ${business.phoneLocal}`}
            >
              <Phone className="w-5 h-5 lg:w-6 lg:h-6" />
              {business.phoneLocal}
            </button>
            <button
              onClick={handleQuoteClick}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 lg:px-10 lg:py-5 rounded-xl font-bold text-lg lg:text-xl transition-colors duration-200"
            >
              Get a Free Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-primary-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-primary-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-primary border-t border-primary-foreground/20 max-h-[80vh] overflow-y-auto">
            <div className="py-4 space-y-1">
              <a href="/" onClick={() => navLink('home')} className="block w-full text-left px-4 py-2 text-primary-foreground hover:bg-primary-foreground/10 transition-colors duration-200">
                Home
              </a>

              <button
                onClick={() => setOpenDropdown(openDropdown === 'services' ? null : 'services')}
                className="flex items-center justify-between w-full text-left px-4 py-2 text-primary-foreground hover:bg-primary-foreground/10 transition-colors duration-200"
                aria-expanded={openDropdown === 'services'}
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'services' ? 'rotate-180' : ''}`} />
              </button>
              {openDropdown === 'services' && (
                <div className="pl-8 space-y-1">
                  {categories.map((category) => (
                    <a key={category.slug} href={`/${category.slug}`} className="block px-4 py-2 text-primary-foreground/90 hover:bg-primary-foreground/10 transition-colors text-sm">
                      {category.name}
                    </a>
                  ))}
                  <a href="/services" className="block px-4 py-2 text-primary-foreground font-semibold hover:bg-primary-foreground/10 transition-colors text-sm">
                    All Services
                  </a>
                </div>
              )}

              <button
                onClick={() => setOpenDropdown(openDropdown === 'locations' ? null : 'locations')}
                className="flex items-center justify-between w-full text-left px-4 py-2 text-primary-foreground hover:bg-primary-foreground/10 transition-colors duration-200"
                aria-expanded={openDropdown === 'locations'}
              >
                Locations
                <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'locations' ? 'rotate-180' : ''}`} />
              </button>
              {openDropdown === 'locations' && (
                <div className="pl-8 space-y-1">
                  {townLocations.map((location) => (
                    <a key={location.slug} href={`/locations/${location.slug}`} className="block px-4 py-2 text-primary-foreground/90 hover:bg-primary-foreground/10 transition-colors text-sm">
                      {location.name}
                    </a>
                  ))}
                  <a href="/locations" className="block px-4 py-2 text-primary-foreground font-semibold hover:bg-primary-foreground/10 transition-colors text-sm">
                    All Locations
                  </a>
                </div>
              )}

              <a href="/about" onClick={() => navLink('about')} className="block w-full text-left px-4 py-2 text-primary-foreground hover:bg-primary-foreground/10 transition-colors duration-200">
                About
              </a>
              <a href="/reviews" onClick={() => navLink('reviews')} className="block w-full text-left px-4 py-2 text-primary-foreground hover:bg-primary-foreground/10 transition-colors duration-200">
                Reviews
              </a>
              <a href="/contact" onClick={() => navLink('contact')} className="block w-full text-left px-4 py-2 text-primary-foreground hover:bg-primary-foreground/10 transition-colors duration-200">
                Contact
              </a>

              <div className="px-4 pt-4 border-t border-primary-foreground/20 space-y-3">
                <Button
                  onClick={handleCallClick}
                  variant="ghost"
                  className="w-full justify-start flex items-center gap-2 text-primary-foreground hover:text-primary-foreground/80"
                >
                  <Phone className="w-4 h-4" />
                  Call: {business.phoneLocal}
                </Button>
                <Button
                  onClick={handleQuoteClick}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold text-lg"
                >
                  Get a Free Quote
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
