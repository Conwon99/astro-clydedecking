import { Phone, ArrowRight } from "lucide-react";
import LazyImage from "@/components/LazyImage";
import { business } from "@/data/business";
import { trackPhoneCall } from "@/utils/analytics";

interface CategoryHeroProps {
  name: string;
  intro: string;
  image: string;
  imageAlt: string;
}

const CategoryHero = ({ name, intro, image, imageAlt }: CategoryHeroProps) => {
  return (
    <section className="relative py-24 px-4 pt-32 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              {name}
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8">Glasgow &amp; Central Belt</h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">{intro}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold text-lg rounded-xl transition-colors duration-200"
              >
                Get a Free Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href={business.phoneTel}
                onClick={() => trackPhoneCall("category_hero")}
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold text-lg rounded-xl transition-colors duration-200"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call {business.phoneLocal}
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <LazyImage src={image} alt={imageAlt} className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryHero;
