import { useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
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
    <section id="products" className="py-24 bg-gray-50" aria-label="Product menu">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="h-px w-8 bg-[#FBB03B]" />
            <span className="font-heading text-[#FBB03B] text-xs font-bold tracking-[0.25em] uppercase">
              Factory Price List
            </span>
          </div>
          <h2 className="font-heading font-black text-[#3C2415] text-5xl sm:text-6xl uppercase leading-none">
            Our Menu
          </h2>
          <p className="text-gray-500 mt-3 max-w-md text-sm leading-relaxed">
            Browse our full range. Add items to your cart and place your order directly via WhatsApp.
          </p>
        </div>

        {/* Controls bar */}
        <div className="flex flex-col sm:flex-row gap-3 mb-8">
          {/* Search */}
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="search"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl bg-white text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FBB03B]/50 focus:border-[#FBB03B] transition-colors"
              aria-label="Search products"
            />
          </div>

          {/* Category pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
            <SlidersHorizontal className="w-4 h-4 text-gray-400 shrink-0" />
            <button
              onClick={() => setActiveCategory("All")}
              className={`shrink-0 px-4 py-2 rounded-xl text-xs font-bold tracking-wide uppercase transition-all ${
                activeCategory === "All"
                  ? "bg-[#3C2415] text-white shadow-sm"
                  : "bg-white border border-gray-200 text-gray-600 hover:border-gray-300"
              }`}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`shrink-0 px-4 py-2 rounded-xl text-xs font-bold tracking-wide uppercase transition-all ${
                  activeCategory === cat
                    ? "bg-[#3C2415] text-white shadow-sm"
                    : "bg-white border border-gray-200 text-gray-600 hover:border-gray-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Category heading */}
        {activeCategory !== "All" && (
          <div className="mb-6 flex items-center gap-3">
            <h3 className="font-heading font-bold text-[#3C2415] text-2xl uppercase">
              {activeCategory}
            </h3>
            <span className="text-xs text-gray-400 bg-gray-100 px-2.5 py-1 rounded-full font-medium">
              {filtered.length} item{filtered.length !== 1 ? "s" : ""}
            </span>
          </div>
        )}

        {/* Product grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            <Search className="w-10 h-10 mx-auto mb-3 opacity-30" />
            <p className="font-medium">No products found for "{search}"</p>
          </div>
        ) : activeCategory === "All" ? (
          // Group by category when showing all
          categories.map((cat) => {
            const catProducts = filtered.filter((p) => p.category === cat);
            if (catProducts.length === 0) return null;
            return (
              <div key={cat} className="mb-12">
                <div className="flex items-center gap-3 mb-5">
                  <h3 className="font-heading font-bold text-[#3C2415] text-2xl uppercase">
                    {cat}
                  </h3>
                  <div className="flex-1 h-px bg-gray-200" />
                  <span className="text-xs text-gray-400 font-medium">{catProducts.length} items</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                  {catProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </div>
            );
          })
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

        {/* Payment note */}
        <div className="mt-12 flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-2xl p-5 max-w-xl">
          <div className="w-1 self-stretch bg-[#FBB03B] rounded-full shrink-0" />
          <p className="text-sm text-amber-900">
            <span className="font-bold">Orders are placed via WhatsApp.</span>{" "}
            Payment is required in-store upon collection.
          </p>
        </div>
      </div>
    </section>
  );
}
