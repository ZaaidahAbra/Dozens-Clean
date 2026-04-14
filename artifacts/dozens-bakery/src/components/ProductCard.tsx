import { Plus, Check, ImageIcon } from "lucide-react";
import { useState } from "react";
import type { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem, items } = useCart();
  const [justAdded, setJustAdded] = useState(false);

  const cartItem = items.find((i) => i.product.id === product.id);
  const inCart = (cartItem?.quantity ?? 0) > 0;

  const handleAdd = () => {
    addItem(product);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1200);
  };

  return (
    <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-200 border border-gray-100 flex flex-col group">
      {/* Image placeholder */}
      <div className="relative aspect-[4/3] bg-gradient-to-br from-stone-100 to-stone-200 flex flex-col items-center justify-center gap-2 overflow-hidden">
        <ImageIcon className="w-10 h-10 text-stone-300" strokeWidth={1.5} />
        <span className="text-xs text-stone-400 font-medium tracking-wide uppercase">
          Photo coming soon
        </span>

        {/* Tag badges float over image area */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          {product.tags.map((tag) => (
            <span
              key={tag}
              className={`text-xs font-bold px-2.5 py-0.5 rounded-full backdrop-blur-sm ${
                tag === "Fresh"
                  ? "bg-emerald-500/90 text-white"
                  : "bg-sky-500/90 text-white"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Cart count badge */}
        {inCart && (
          <div className="absolute top-3 right-3 bg-[#FBB03B] text-[#3C2415] text-xs font-black w-7 h-7 rounded-full flex items-center justify-center shadow">
            {cartItem!.quantity}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-heading font-bold text-[#3C2415] text-lg leading-tight mb-1">
          {product.name}
        </h3>
        <p className="text-xs text-gray-400 mb-4 flex-1 leading-relaxed">
          {product.description}
        </p>

        {/* Price + Add */}
        <div className="flex items-center justify-between mt-auto">
          <span className="font-heading font-black text-[#3C2415] text-2xl">
            R{product.price}
          </span>

          <button
            onClick={handleAdd}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl font-semibold text-sm transition-all duration-200 ${
              justAdded
                ? "bg-emerald-500 text-white scale-95"
                : "bg-[#FBB03B] text-[#3C2415] hover:bg-amber-400 hover:scale-105"
            }`}
            aria-label={`Add ${product.name} to cart`}
          >
            {justAdded ? (
              <>
                <Check className="w-4 h-4" />
                Added!
              </>
            ) : (
              <>
                <Plus className="w-4 h-4" />
                Add
              </>
            )}
          </button>
        </div>
      </div>
    </article>
  );
}
