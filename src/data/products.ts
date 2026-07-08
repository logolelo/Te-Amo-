import citrus from "@/assets/citrus.png";
import embrace from "@/assets/embrace.png";
import jasmine from "@/assets/jasmine.png";
import oud from "@/assets/oud.png";
import rose from "@/assets/rose.png";

export interface Product {
  slug: string;
  name: string;
  image: string;
  notes: string;
  price: string;
  originalPrice?: string;
  isHighlyRecommended?: boolean;
  tagline: string;
  description: string;
  ingredients: string[];
  details: string[];
}

export const products: Product[] = [
  {
    slug: "citrus",
    name: "Citrus",
    image: citrus,
    notes: "Orange · Bergamot · Lemon Zest",
    price: "₹499",
    tagline: "A burst of sunshine in a compact.",
    description:
      "Bright, zesty and endlessly uplifting — our Citrus solid perfume opens with juicy orange and bergamot, softened by a whisper of lemon zest. Perfect for mornings, travel days, and moments when you want to feel wide awake.",
    ingredients: [
      "Sweet Orange Essential Oil",
      "Bergamot Oil",
      "Lemon Zest Extract",
      "Organic Beeswax",
      "Cold-Pressed Jojoba Oil",
    ],
    details: [
      "Net Wt. 10g / 0.35 oz",
      "100% Natural, Alcohol-Free",
      "Handcrafted in small batches",
      "Travel-friendly tin",
    ],
  },
  {
    slug: "embrace",
    name: "Embrace",
    image: embrace,
    notes: "Warm Musk · Amber · Vanilla",
    price: "₹549",
    originalPrice: "₹699",
    isHighlyRecommended: true,
    tagline: "A soft, comforting hug you can wear.",
    description:
      "Warm, sensual, and deeply comforting — Embrace layers creamy vanilla and amber over a soft musk base. A scent that feels like a candlelit evening wrapped around your skin.",
    ingredients: [
      "Vanilla Absolute",
      "Amber Resin",
      "White Musk (Plant-Based)",
      "Organic Beeswax",
      "Sweet Almond Oil",
    ],
    details: [
      "Net Wt. 10g / 0.35 oz",
      "100% Natural, Alcohol-Free",
      "Handcrafted in small batches",
      "Travel-friendly tin",
    ],
  },
  {
    slug: "jasmine",
    name: "Jasmine",
    image: jasmine,
    notes: "Jasmine · White Flowers · Green Notes",
    price: "₹499",
    tagline: "A midnight garden in bloom.",
    description:
      "Intoxicating and romantic, our Jasmine solid perfume captures the heady sweetness of night-blooming jasmine, balanced by fresh green notes and delicate white florals.",
    ingredients: [
      "Jasmine Sambac Absolute",
      "White Tea Extract",
      "Green Leaf Accord",
      "Organic Beeswax",
      "Jojoba Oil",
    ],
    details: [
      "Net Wt. 10g / 0.35 oz",
      "100% Natural, Alcohol-Free",
      "Handcrafted in small batches",
      "Travel-friendly tin",
    ],
  },
  {
    slug: "oud",
    name: "Oud",
    image: oud,
    notes: "Oud Wood · Sandalwood · Spices",
    price: "₹599",
    tagline: "Rich, mysterious, unforgettable.",
    description:
      "Our signature Oud is a bold, resinous statement — smoky oud wood layered with creamy sandalwood and a whisper of warm spices. A timeless scent with true presence.",
    ingredients: [
      "Agarwood (Oud) Oil",
      "Sandalwood Essential Oil",
      "Cardamom & Clove Extract",
      "Organic Beeswax",
      "Argan Oil",
    ],
    details: [
      "Net Wt. 10g / 0.35 oz",
      "100% Natural, Alcohol-Free",
      "Handcrafted in small batches",
      "Travel-friendly tin",
    ],
  },
  {
    slug: "rose",
    name: "Rose",
    image: rose,
    notes: "Bulgarian Rose · Peony · Soft Musk",
    price: "₹499",
    tagline: "Timeless romance, softly told.",
    description:
      "Delicate yet deep — Bulgarian rose petals meet fresh peony and a soft musk base. A modern take on a classic, feminine and effortlessly elegant.",
    ingredients: [
      "Bulgarian Rose Absolute",
      "Peony Extract",
      "Soft Musk Accord",
      "Organic Beeswax",
      "Rosehip Seed Oil",
    ],
    details: [
      "Net Wt. 10g / 0.35 oz",
      "100% Natural, Alcohol-Free",
      "Handcrafted in small batches",
      "Travel-friendly tin",
    ],
  },
];

export const getProduct = (slug: string) =>
  products.find((p) => p.slug === slug);

export const getSuggested = (slug: string, count = 4) =>
  products.filter((p) => p.slug !== slug).slice(0, count);