import { Hand, MapPin, RefreshCw, XCircle, Droplets, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Hand,
      title: "Rub the Balm",
      description: "Rub your fingertip gently on the balm to warm it up."
    },
    {
      icon: MapPin,
      title: "Apply to Pulse Points",
      description: "Apply to wrists, neck, behind ears—where your heart beats."
    },
    {
      icon: RefreshCw,
      title: "Reapply Anytime",
      description: "Reapply whenever you need a quick refresh throughout the day."
    }
  ];

  const benefits = [
    {
      icon: XCircle,
      text: "No sprays"
    },
    {
      icon: Droplets,
      text: "No spills"
    },
    {
      icon: Sparkles,
      text: "No mess"
    }
  ];

  const [currentBenefitIndex, setCurrentBenefitIndex] = useState(0);
  const [isBenefitVisible, setIsBenefitVisible] = useState(true);

  useEffect(() => {
    const cycle = () => {
      setIsBenefitVisible(false);
      setTimeout(() => {
        setCurrentBenefitIndex((prev) => (prev + 1) % benefits.length);
        setIsBenefitVisible(true);
      }, 400);
    };

    const interval = setInterval(cycle, 2400);

    return () => clearInterval(interval);
  }, [benefits.length]);

  return (
    <section className="py-24 bg-muted/30" id="how-it-works">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif mb-4 text-foreground">
            How to Use
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            So simple, yet so effective.
          </p>
        </div>

        {/* Steps */}
        <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto mb-20">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="w-full md:w-[calc(33.333%-1.5rem)] p-8 rounded-2xl border border-border bg-card shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center">
                <step.icon className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-serif mb-3 text-foreground">
                {step.title}
              </h3>
              <p className="text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Benefits Strip */}
        <div className="flex justify-center items-center">
          <div className="relative h-20 w-full max-w-sm">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`absolute inset-0 flex items-center justify-center gap-3 px-8 py-4 rounded-full border border-accent/30 bg-accent/10 transition-all duration-400 ${
                  index === currentBenefitIndex && isBenefitVisible
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95"
                }`}
              >
                <benefit.icon className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-foreground font-medium">
                  {benefit.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
