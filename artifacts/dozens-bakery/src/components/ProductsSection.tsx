import { useState } from "react";
import { Search } from "lucide-react";
import ProductCard from "./ProductCard";
import { products, categories } from "@/data/products";
import type { ProductCategory } from "@/data/products";

export default function ProductsSection() {
  const [activeCategory, setActiveCategory] = useState<ProductCategory | "All">("All");
  const [search, setSearch] = useState("");

  const filtered = products.filter((p) => {
    const matchesCategory =
      activeCategory === "All" || p.category === activeCategory;
    const matchesSearch =
      search.trim() === "" ||
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="products" className="py-20 bg-[#FDF5E6]" aria-label="Product menu">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="h-px w-10 bg-[#FBB03B]" />
            <span className="font-heading text-[#FBB03B] text-sm font-bold tracking-[0.2em] uppercase">
              Factory Price List
            </span>
            <div className="h-px w-10 bg-[#FBB03B]" />
          </div>
          <h2 className="font-heading font-black text-[#3C2415] text-5xl sm:text-6xl uppercase mb-3">
            Our Menu
          </h2>
          <p className="text-gray-600 max-w-md mx-auto">
            Browse our full range of freshly baked and frozen goods. Add items to your
            cart and order directly via WhatsApp.
          </p>
        </div>

        {/* Search */}
        <div className="relative max-w-md mx-auto mb-8">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="search"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-amber-200 rounded-xl bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FBB03B] focus:border-transparent"
            aria-label="Search products"
          />
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          <button
            onClick={() => setActiveCategory("All")}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
              activeCategory === "All"
                ? "bg-[#3C2415] text-white"
                : "bg-white border border-amber-200 text-gray-700 hover:border-[#FBB03B]"
            }`}
          >
            All Items
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                activeCategory === cat
                  ? "bg-[#3C2415] text-white"
                  : "bg-white border border-amber-200 text-gray-700 hover:border-[#FBB03B]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-16 text-gray-400">
            <p className="text-lg">No products found for "{search}"</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

        {/* Note about ordering */}
        <div className="mt-12 bg-amber-50 border border-amber-200 rounded-xl p-5 text-center max-w-xl mx-auto">
          <p className="text-sm text-amber-800 font-medium">
            <span className="font-bold">Orders are placed via WhatsApp.</span>{" "}
            Payment is required in-store upon collection.
          </p>
        </div>
      </div>
    </section>
  );
}
