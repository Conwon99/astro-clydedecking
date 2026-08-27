import { MapPin, Star, ArrowRight } from "lucide-react";
import LazyImage from "@/components/LazyImage";
import { business } from "@/data/business";

const Hero = () => {
  const handleQuoteClick = () => {
    window.location.href = "/contact";
  };

  return (
    <section id="hero" className="relative bg-background min-h-screen flex items-center py-20 px-4 pt-40 overflow-hidden w-full">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <LazyImage
          src="/gallery/Fence1.jpg"
          alt="Decking and fencing services Glasgow - professional outdoor contractors"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="max-w-4xl">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              
              <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-5xl lg:text-6xl text-white leading-tight drop-shadow-lg">
                <span className="relative inline-block text-white">
                  Professional
                  <img 
                    src="/undelrine svg1.svg" 
                    alt="" 
                    aria-hidden="true"
                    className="absolute top-1/2 left-0 w-full h-16 md:h-20 lg:h-24 object-contain -z-10 max-w-full"
                  />
                </span> Decking & Fencing
              </h1>
              <h2 className="font-display font-bold text-2xl lg:text-3xl text-white drop-shadow-lg flex items-center gap-3">
                <MapPin className="w-6 h-6" />
                Glasgow & Central Belt
              </h2>
              
              <p className="text-xl text-white/90 font-medium max-w-2xl leading-relaxed drop-shadow-md">
                Expert composite decking and wooden decking specialists serving Glasgow, Edinburgh, Ayrshire and across Scotlands central belt. Professional fencing installation and custom outdoor structures. Trusted decking contractors delivering premium outdoor living solutions
              </p>
            </div>

            {/* Get a Free Quote Button */}
            <div className="pt-4">
              <button
                onClick={handleQuoteClick}
                className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:from-green-600 hover:via-green-700 hover:to-green-800 text-white font-bold text-xl lg:text-2xl px-10 py-5 lg:px-12 lg:py-6 rounded-xl shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-105 transform overflow-hidden"
              >
                {/* Continuous shine animation */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shine"></span>
                
                {/* Additional shine on hover */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                
                {/* Button content */}
                <span className="relative z-10">Get a Free Quote</span>
                <ArrowRight className="w-6 h-6 lg:w-7 lg:h-7 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                
                {/* Glow effect */}
                <span className="absolute inset-0 rounded-xl bg-green-400 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></span>
              </button>
            </div>
            
            <style jsx>{`
              @keyframes shine {
                0% {
                  transform: translateX(-100%) skewX(-15deg);
                }
                100% {
                  transform: translateX(200%) skewX(-15deg);
                }
              }
              .animate-shine {
                animation: shine 3s infinite;
              }
            `}</style>

            {/* 5-Star Review Component */}
            <div className="pt-4">
              <a
                href={business.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-col sm:flex-row items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-6 py-4 hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
              >
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-6 h-6 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
                <div className="text-left">
                  <p className="text-white font-semibold text-lg">5-Star Rated</p>
                  <p className="text-white/80 text-sm">Read our reviews on Facebook</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;