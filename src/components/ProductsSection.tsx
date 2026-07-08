import ProductCard from "./ProductCard";
import { products } from "@/data/products";

const ProductsSection = () => {
  return (
    <section id="collection" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-subheadline text-muted-foreground mb-4">
            The Collection
          </p>
          <h2 className="text-3xl md:text-5xl font-serif mb-4 text-foreground">
            Signature Scents
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Each 10g compact is designed to be your perfect travel companion—slip it into your pocket or purse and carry your signature scent everywhere.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.slug}
              slug={product.slug}
              image={product.image}
              name={product.name}
              notes={product.notes}
              price={product.price}
              originalPrice={product.originalPrice}
              isHighlyRecommended={product.isHighlyRecommended}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
