import { Link } from "react-router-dom";
import { Button } from "./ui/button";

interface ProductCardProps {
  slug: string;
  image: string;
  name: string;
  notes: string;
  price: string;
  originalPrice?: string;
  isHighlyRecommended?: boolean;
}

const ProductCard = ({ slug, image, name, notes, price, originalPrice, isHighlyRecommended }: ProductCardProps) => {
  return (
    <div className="group flex flex-col h-full pt-3">
      <Link to={`/product/${slug}`} className="block cursor-pointer flex-grow">
        <div className="relative aspect-[3/4] mb-4 bg-card">
          <div className="w-full h-full rounded-xl overflow-hidden shadow-soft">
            <img
                  src={image}
                  alt={`Te Amo ${name} solid perfume`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  width={400}
                  height={533}
                />
            <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-300 rounded-xl" />
          </div>
          {isHighlyRecommended && (
            <div className="absolute -top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-medium tracking-wide uppercase z-10 shadow-md">
              Highly Recommended
            </div>
          )}
        </div>
        <div className="text-center flex-grow flex flex-col justify-between">
          <div>
            <h3 className="font-serif text-lg md:text-xl text-foreground mb-1 group-hover:text-accent transition-colors duration-300">
              {name}
            </h3>
            <p className="font-sans text-xs text-muted-foreground tracking-wide mb-2 line-clamp-1">
              {notes}
            </p>
          </div>
          <div className="flex items-center justify-center gap-2 mb-4">
            <p className="font-sans text-base font-medium text-foreground tracking-wider">
              {price}
            </p>
            {originalPrice && (
              <p className="font-sans text-sm text-muted-foreground line-through">
                {originalPrice}
              </p>
            )}
          </div>
        </div>
      </Link>
      <div className="text-center">
        <Button variant="hero" size="sm" className="rounded-full">
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
