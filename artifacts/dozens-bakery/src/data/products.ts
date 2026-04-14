export type ProductCategory = "Sweet Packs" | "Cakes & Loaves" | "Bakery Staples";
export type ProductTag = "Fresh" | "Frozen";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: ProductCategory;
  tags: ProductTag[];
  emoji: string;
}

export const products: Product[] = [
  // Sweet Packs
  {
    id: "apple-tartlets",
    name: "Apple Tartlets",
    description: "12-pack of golden apple tartlets with flaky pastry",
    price: 67,
    category: "Sweet Packs",
    tags: ["Fresh"],
    emoji: "🍎",
  },
  {
    id: "assorted-cupcakes",
    name: "Assorted Cupcakes",
    description: "9-pack of mixed frosted cupcakes",
    price: 25,
    category: "Sweet Packs",
    tags: ["Fresh"],
    emoji: "🧁",
  },
  {
    id: "cheese-cake",
    name: "Cheese Cake",
    description: "12-pack of creamy individual cheesecakes",
    price: 75,
    category: "Sweet Packs",
    tags: ["Fresh", "Frozen"],
    emoji: "🍰",
  },
  {
    id: "choc-brownies",
    name: "Choc Brownies",
    description: "5-pack of rich chocolate brownies",
    price: 22,
    category: "Sweet Packs",
    tags: ["Fresh"],
    emoji: "🍫",
  },
  {
    id: "crunchie-bars",
    name: "Crunchie Bars",
    description: "5-pack of crunchy honeycomb toffee bars",
    price: 20,
    category: "Sweet Packs",
    tags: ["Fresh"],
    emoji: "🍯",
  },
  {
    id: "donuts",
    name: "Donut (Cream & Custard)",
    description: "10-pack of cream and custard filled donuts",
    price: 38,
    category: "Sweet Packs",
    tags: ["Fresh"],
    emoji: "🍩",
  },
  {
    id: "eclairs",
    name: "Éclairs",
    description: "12-pack of chocolate glazed choux éclairs",
    price: 65,
    category: "Sweet Packs",
    tags: ["Fresh"],
    emoji: "🥐",
  },
  {
    id: "milk-tartlets",
    name: "Milk Tartlets",
    description: "12-pack of classic South African milk tarts",
    price: 60,
    category: "Sweet Packs",
    tags: ["Fresh"],
    emoji: "🥧",
  },
  {
    id: "mini-swiss-rolls",
    name: "Mini Swiss Rolls",
    description: "5-pack flavoured mini swiss rolls",
    price: 25,
    category: "Sweet Packs",
    tags: ["Fresh"],
    emoji: "🌀",
  },
  {
    id: "snowballs",
    name: "Snowballs",
    description: "12-pack of coconut-dusted snowballs",
    price: 38,
    category: "Sweet Packs",
    tags: ["Fresh"],
    emoji: "⚪",
  },
  {
    id: "snowballs-choc",
    name: "Snowballs Choc",
    description: "12-pack of chocolate-coated snowballs",
    price: 40,
    category: "Sweet Packs",
    tags: ["Fresh"],
    emoji: "🟤",
  },
  {
    id: "pecan-nut-tartlets",
    name: "Pecan Nut Tartlets",
    description: "12-pack of buttery pecan nut tartlets",
    price: 60,
    category: "Sweet Packs",
    tags: ["Fresh"],
    emoji: "🌰",
  },
  // Cakes & Loaves
  {
    id: "box-cake",
    name: "Box Cake",
    description: "16-pack of individual boxed cakes",
    price: 50,
    category: "Cakes & Loaves",
    tags: ["Fresh"],
    emoji: "🎂",
  },
  {
    id: "six-inch-cake",
    name: "6-inch Cakes",
    description: "Individual 6-inch celebration cakes",
    price: 55,
    category: "Cakes & Loaves",
    tags: ["Fresh"],
    emoji: "🎂",
  },
  {
    id: "banana-loaf",
    name: "Banana Loaf",
    description: "Freshly baked moist banana loaf",
    price: 30,
    category: "Cakes & Loaves",
    tags: ["Fresh"],
    emoji: "🍌",
  },
  // Bakery Staples
  {
    id: "rolls",
    name: "Hamburger & Hotdog Rolls",
    description: "Freshly baked burger and hotdog rolls",
    price: 15,
    category: "Bakery Staples",
    tags: ["Fresh", "Frozen"],
    emoji: "🍞",
  },
  {
    id: "bakery-offcuts",
    name: "Bakery Offcuts",
    description: "Mixed bakery offcuts — great value",
    price: 10,
    category: "Bakery Staples",
    tags: ["Fresh"],
    emoji: "🥖",
  },
];

export const categories: ProductCategory[] = [
  "Sweet Packs",
  "Cakes & Loaves",
  "Bakery Staples",
];
