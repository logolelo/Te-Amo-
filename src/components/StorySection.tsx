import ingredientsImage from "@/assets/ingredients.jpg";

const StorySection = () => {
  return (
    <section id="story" className="py-24 md:py-32 gradient-romantic">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={ingredientsImage}
                alt="Natural essential oils and botanicals"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-subheadline text-secondary-foreground mb-4">
              Why We Started Te Amo
            </p>
            <h2 className="text-headline text-foreground mb-8">
              Crafted with<br />
              <span className="italic">Love & Nature</span>
            </h2>
            
            <div className="space-y-6 text-body-lg text-muted-foreground">
              <p>
                Most perfumes come in bulky glass bottles, contain alcohol, and aren't easy to carry.
              </p>
              <p>
                We wanted something simpler—a fragrance you could slip into your pocket and apply anytime.
              </p>
              <p>
                That's why we created handcrafted solid perfumes made from natural oils, beeswax, and botanical ingredients.
              </p>
              <p className="font-serif italic text-foreground text-xl">
                Simple.<br />
                Portable.<br />
                Beautifully scented.
              </p>
            </div>

            <div id="ingredients" className="mt-12 grid grid-cols-3 gap-8">
              <div className="text-center">
                <p className="font-serif text-3xl md:text-4xl text-foreground mb-2">100%</p>
                <p className="font-sans text-xs tracking-widest uppercase text-muted-foreground">Natural Oils</p>
              </div>
              <div className="text-center">
                <p className="font-serif text-3xl md:text-4xl text-foreground mb-2">10g</p>
                <p className="font-sans text-xs tracking-widest uppercase text-muted-foreground">Travel Size</p>
              </div>
              <div className="text-center">
                <p className="font-serif text-3xl md:text-4xl text-foreground mb-2">Zero</p>
                <p className="font-sans text-xs tracking-widest uppercase text-muted-foreground">Synthetics</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
