import { Leaf, Droplets, Zap, MapPin, Heart } from "lucide-react";

const WhyChooseTeAmoSection = () => {
  const reasons = [
    {
      icon: Leaf,
      title: "Natural Essential Oils",
      description: "Made with natural essential oils instead of harsh synthetic fragrance.",
      accent: true
    },
    {
      icon: Droplets,
      title: "Organic Beeswax",
      description: "Organic beeswax creates a smooth balm that's easy to apply.",
      accent: false
    },
    {
      icon: Zap,
      title: "Alcohol-Free",
      description: "Alcohol-free formula that feels gentle on skin.",
      accent: false
    },
    {
      icon: MapPin,
      title: "Travel Ready",
      description: "Small enough to carry everywhere.",
      accent: false
    },
    {
      icon: Heart,
      title: "Handcrafted in India",
      description: "Handcrafted in India in small batches for quality.",
      accent: true
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-secondary/30 via-cream/30 to-background" id="why-choose">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif mb-4 text-foreground">
            Why Choose <span className="italic">Te Amo</span>?
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className={`w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] p-8 rounded-2xl border ${reason.accent ? 'border-accent/30 bg-accent/10' : 'border-border bg-card'} shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1`}
            >
              <div className={`w-14 h-14 mb-6 rounded-xl flex items-center justify-center ${reason.accent ? 'bg-accent/20' : 'bg-muted'}`}>
                <reason.icon className={`h-7 w-7 ${reason.accent ? 'text-accent' : 'text-foreground'}`} />
              </div>
              <h3 className="text-xl font-serif mb-3 text-foreground">
                {reason.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseTeAmoSection;
