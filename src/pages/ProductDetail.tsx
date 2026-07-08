import { useEffect } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { ChevronLeft, Leaf, Package, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { getProduct, getSuggested } from "@/data/products";

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? getProduct(slug) : undefined;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [slug]);

  if (!product) return <Navigate to="/" replace />;

  const suggested = getSuggested(product.slug, 4);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-28 pb-16">
        <div className="container mx-auto px-6">
          {/* Breadcrumb */}
          <Link
            to="/#collection"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 tracking-widest uppercase font-sans"
          >
            <ChevronLeft size={16} />
            Back to Collection
          </Link>

          {/* Product Detail */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Image */}
            <div>
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-elevated bg-card">
                <img
                  src={product.image}
                  alt={`Te Amo ${product.name} solid perfume`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width={600}
                  height={600}
                />
              </div>
            </div>

            {/* Info */}
            <div>
              <p className="text-subheadline text-muted-foreground mb-2">
                Te Amo · Natural Blends
              </p>
              <h1 className="text-display text-foreground mb-4">
                {product.name}
              </h1>
              <p className="text-subheadline text-accent mb-6">
                {product.tagline}
              </p>

              <div className="flex items-baseline gap-4 mb-8">
                <span className="font-serif text-4xl text-foreground">
                  {product.price}
                </span>
                <span className="text-sm text-muted-foreground tracking-wider">
                  / 10g compact
                </span>
              </div>

              <p className="text-body-lg text-muted-foreground mb-8">
                {product.description}
              </p>

              <div className="mb-8">
                <p className="font-sans text-xs tracking-widest uppercase text-muted-foreground mb-3">
                  Fragrance Notes
                </p>
                <p className="font-serif text-xl italic text-foreground">
                  {product.notes}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button variant="hero" size="xl" className="flex-1">
                  Add to Cart
                </Button>
                <Button variant="hero-outline" size="xl" className="flex-1">
                  Buy Now
                </Button>
              </div>

              {/* Ingredients */}
              <div className="border-t border-border pt-8 mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <Leaf size={18} className="text-accent" />
                  <h3 className="font-serif text-xl text-foreground">
                    Natural Ingredients
                  </h3>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {product.ingredients.map((item) => (
                    <li
                      key={item}
                      className="font-sans text-sm text-muted-foreground flex items-start gap-2"
                    >
                      <span className="text-accent mt-1">·</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Details */}
              <div className="border-t border-border pt-8">
                <div className="flex items-center gap-2 mb-4">
                  <Package size={18} className="text-accent" />
                  <h3 className="font-serif text-xl text-foreground">
                    Product Details
                  </h3>
                </div>
                <ul className="space-y-2">
                  {product.details.map((item) => (
                    <li
                      key={item}
                      className="font-sans text-sm text-muted-foreground flex items-start gap-2"
                    >
                      <span className="text-accent mt-1">·</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Suggested Items */}
          <section className="mt-24 md:mt-32 pt-16 border-t border-border">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 mb-4">
                <Sparkles size={18} className="text-accent" />
                <p className="font-sans text-xs tracking-widest uppercase text-muted-foreground">
                  You May Also Love
                </p>
              </div>
              <h2 className="text-headline text-foreground">
                Suggested for You
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
              {suggested.map((item) => (
                <ProductCard
                  key={item.slug}
                  slug={item.slug}
                  image={item.image}
                  name={item.name}
                  notes={item.notes}
                  price={item.price}
                />
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;