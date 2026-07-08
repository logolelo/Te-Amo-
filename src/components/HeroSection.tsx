import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-teamo.jpg";

const HeroSection = () => {
  const handleShopClick = () => {
    const collectionSection = document.getElementById("collection");
    if (collectionSection) {
      collectionSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-[550px] flex items-center gradient-hero pt-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Perfume That Fits in Your Pocket. Fragrance That Stays With You.
            </h1>
            <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Carry your signature scent everywhere with Te Amo's handcrafted solid perfumes. 
              No spills, no alcohol, no bulky bottles—just long-lasting fragrance made with natural oils and beeswax.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <Button variant="hero" size="lg" onClick={handleShopClick}>
                Shop Collection
              </Button>
            </div>

          </div>

          {/* Hero Image */}
          <div className="order-1 lg:order-2 animate-scale-in">
            <div className="relative">
              <div className="aspect-[16/10] rounded-xl overflow-hidden shadow-elevated">
                <img
                  src={heroImage}
                  alt="Te Amo solid perfume collection"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-secondary/50 rounded-full blur-2xl -z-10" />
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent/20 rounded-full blur-xl -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
