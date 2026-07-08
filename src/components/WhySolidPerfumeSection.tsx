import { Check } from "lucide-react";
import { useState, useEffect } from "react";

const WhySolidPerfumeSection = () => {
  const benefits = [
    "Pocket-sized and travel friendly",
    "Spill-proof—perfect for handbags and pockets",
    "Alcohol-free and gentle on skin",
    "Easy to reapply anytime",
    "Long-lasting fragrance from natural oils",
    "No glass bottles to break",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const cycle = () => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % benefits.length);
        setIsVisible(true);
      }, 400);
    };

    const interval = setInterval(cycle, 2400);

    return () => clearInterval(interval);
  }, [benefits.length]);

  return (
    <section className="py-24 bg-muted/50" id="why">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-serif mb-4 text-foreground">
            Why You'll Love Solid Perfume
          </h2>
        </div>
        
        <div className="flex justify-center items-center">
          <div className="relative h-20 w-full max-w-2xl">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`absolute inset-0 flex items-center justify-center gap-3 px-8 py-4 rounded-full border border-accent/30 bg-accent/10 transition-all duration-400 ${
                  index === currentIndex && isVisible
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95"
                }`}
              >
                <Check className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-foreground font-medium">
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySolidPerfumeSection;
