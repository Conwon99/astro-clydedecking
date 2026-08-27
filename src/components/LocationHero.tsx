import { Phone } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { business } from "@/data/business";
import { trackPhoneCall, trackMessenger } from "@/utils/analytics";

interface LocationHeroProps {
  name: string;
  intro: string;
  eyebrow?: string;
  trackSource: string;
}

const LocationHero = ({ name, intro, eyebrow = "Decking & Fencing", trackSource }: LocationHeroProps) => {
  return (
    <section className="relative py-20 px-4 pt-32 bg-gradient-to-br from-primary/10 to-primary/5">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-4">
          <h1 className="font-display font-bold text-5xl lg:text-6xl text-foreground mb-6">
            <span className="text-primary">{eyebrow}</span>
            <br />
            Services in {name}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">{intro}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={business.phoneTel}
              data-track-source={trackSource}
              onClick={() => trackPhoneCall(trackSource)}
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call {business.phoneLocal}
            </a>
            <a
              href={business.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-track-source={trackSource}
              onClick={() => trackMessenger(trackSource)}
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary hover:text-white transition-colors"
            >
              <WhatsAppIcon className="w-5 h-5 mr-2" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationHero;
