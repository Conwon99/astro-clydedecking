import { Button } from "@/components/ui/button";
import { Award, Users, Clock, Home, Facebook, Truck } from "lucide-react";
import LazyImage from "@/components/LazyImage";

const AboutUs = () => {
  return (
    <section id="about" className="py-20 px-4 bg-[hsl(var(--asphalt-grey))]">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="font-display font-bold text-4xl lg:text-5xl text-white leading-tight">
                ABOUT US
              </h2>
              <div className="w-16 h-1 bg-primary"></div>
              
              <p className="text-lg text-white/90 leading-relaxed max-w-2xl">
                We are trusted decking contractors and fencing specialists serving Glasgow, Edinburgh, Stirling & Ayrshire. Our professional decking builders specialize in composite decking, wooden decking, and custom outdoor structures. Expert fencing installation and decking installation services across Scotland's Central Belt, delivering premium outdoor living solutions that enhance your property's beauty and value.
              </p>
              
              {/* Social Media Icons */}
              <div className="flex items-center gap-4">
                <a 
                  href="https://www.facebook.com/people/Clyde-Decking/100095203176792/?_rdr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                >
                  <Facebook className="w-6 h-6 text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Company Logo/Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="text-center">
              <div className="mb-6 mx-auto">
                <LazyImage
                  src="/cds - Edited.png"
                  alt="Clyde Decking Solutions Ltd logo"
                  className="w-80 h-80 object-contain brightness-0 invert"
                />
              </div>
              <h3 className="font-display font-bold text-3xl text-white mb-2">
                CLYDE DECKING
              </h3>
              <p className="text-white/80 text-lg">
                Solutions Ltd
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;