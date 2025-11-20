import { ArrowRight } from "lucide-react";

const ContactSection = () => {
  const handleQuoteClick = () => {
    window.location.href = "/contact";
  };

  return (
    <section id="contact-form" className="py-20 px-4 bg-[hsl(var(--muted))]">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-[hsl(var(--asphalt-grey))] mb-6">
            Get Your Free Quote
          </h2>
        </div>

        <div className="flex justify-center">
          {/* Get Quote Button */}
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
      </div>
    </section>
  );
};

export default ContactSection;