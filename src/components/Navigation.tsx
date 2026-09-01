import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { useState, useEffect } from "react";
import LazyImage from "@/components/LazyImage";
import { trackPhoneCall, trackNavigation, trackQuoteRequest } from "@/utils/analytics";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
    window.location.href = "tel:+447427570533";
  };

  const scrollToSection = (sectionId: string) => {
    trackNavigation(sectionId);
    setIsMenuOpen(false);
    
    // Check if we're on the contact page or if the section doesn't exist on current page
    const currentPath = window.location.pathname;
    const sectionElement = document.getElementById(sectionId);
    
    if (currentPath === '/contact' || !sectionElement) {
      // Redirect to home page with hash anchor
      window.location.href = `/#${sectionId}`;
    } else {
      // Scroll to section on current page
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleQuoteClick = () => {
    trackQuoteRequest('navigation_button', []);
    window.location.href = "/contact";
  };


  const handleHomeClick = () => {
    trackNavigation('home');
    setIsMenuOpen(false);
    if (window.location.pathname === '/contact') {
      window.location.href = '/';
    } else {
      scrollToSection("hero");
    }
  };

  const handleServicesClick = () => {
    trackNavigation('services');
    setIsMenuOpen(false);
    const currentPath = window.location.pathname;
    if (currentPath === '/') {
      // On home page, scroll to services section
      const servicesElement = document.getElementById("services");
      if (servicesElement) {
        servicesElement.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.href = "/services";
      }
    } else {
      // On any other page, go to services page
      window.location.href = "/services";
    }
  };

  const locationLinks = [
    { label: "Glasgow", href: "/glasgow" },
    { label: "Edinburgh", href: "/edinburgh" },
    { label: "Stirling", href: "/stirling" },
  ];

  const handleLocationClick = (href: string) => {
    trackNavigation(`location-${href.replace("/", "")}`);
    setIsMenuOpen(false);
    window.location.href = href;
  };

  const navItems = [
    { label: "Home", onClick: handleHomeClick },
    { label: "Services", onClick: handleServicesClick },
    { label: "Gallery", onClick: () => scrollToSection("gallery") },
    { label: "Reviews", onClick: () => scrollToSection("reviews") },
    { label: "FAQ", onClick: () => scrollToSection("faq") },
    { label: "Contact", onClick: () => {
      setIsMenuOpen(false);
      window.location.href = "/contact";
    } },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/95 backdrop-blur-sm border-b border-white/10' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={() => window.location.href = '/'}
              className="cursor-pointer"
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
            {navItems.slice(0, 2).map((item) => (
              <button
                key={item.label}
                onClick={item.onClick}
                className="text-primary-foreground hover:text-primary-foreground/80 transition-colors duration-200 font-medium"
              >
                {item.label}
              </button>
            ))}
            <div className="relative group">
              <button
                className="text-primary-foreground hover:text-primary-foreground/80 transition-colors duration-200 font-medium"
              >
                Locations
              </button>
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 hidden group-hover:block group-focus-within:block">
                <div className="min-w-[180px] rounded-xl border border-white/10 bg-black/95 backdrop-blur-sm p-2 shadow-lg">
                  {locationLinks.map((location) => (
                    <button
                      key={location.href}
                      onClick={() => handleLocationClick(location.href)}
                      className="block w-full text-left px-3 py-2 rounded-lg text-primary-foreground hover:text-primary-foreground/80 hover:bg-white/5 transition-colors duration-200"
                    >
                      {location.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            {navItems.slice(2).map((item) => (
              <button
                key={item.label}
                onClick={item.onClick}
                className="text-primary-foreground hover:text-primary-foreground/80 transition-colors duration-200 font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={handleCallClick}
              className="flex items-center justify-center gap-2 text-primary-foreground/80 hover:text-primary-foreground px-6 py-3 lg:px-8 lg:py-4 rounded-xl font-semibold text-base lg:text-lg transition-colors duration-200"
            >
              <Phone className="w-5 h-5 lg:w-6 lg:h-6" />
              07949 912201
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
          <div className="md:hidden bg-primary border-t border-primary-foreground/20">
            <div className="py-4 space-y-4">
              {navItems.slice(0, 2).map((item) => (
                <button
                  key={item.label}
                  onClick={item.onClick}
                  className="block w-full text-left px-4 py-2 text-primary-foreground hover:text-primary-foreground/80 hover:bg-primary-foreground/10 transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
              <div className="px-4 py-2">
                <p className="text-primary-foreground/60 text-sm font-semibold uppercase tracking-wide mb-2">
                  Locations
                </p>
                <div className="space-y-1 pl-2">
                  {locationLinks.map((location) => (
                    <button
                      key={location.href}
                      onClick={() => handleLocationClick(location.href)}
                      className="block w-full text-left py-1.5 text-primary-foreground hover:text-primary-foreground/80 transition-colors duration-200"
                    >
                      {location.label}
                    </button>
                  ))}
                </div>
              </div>
              {navItems.slice(2).map((item) => (
                <button
                  key={item.label}
                  onClick={item.onClick}
                  className="block w-full text-left px-4 py-2 text-primary-foreground hover:text-primary-foreground/80 hover:bg-primary-foreground/10 transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
              <div className="px-4 pt-4 border-t border-primary-foreground/20 space-y-3">
                <Button
                  onClick={handleCallClick}
                  variant="ghost"
                  className="w-full justify-start flex items-center gap-2 text-primary-foreground hover:text-primary-foreground/80"
                >
                  <Phone className="w-4 h-4" />
                  Call: 07949 912201
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