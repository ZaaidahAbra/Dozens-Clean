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
    <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100 flex flex-row h-32">
      {/* Left: text content */}
      <div className="flex-1 flex flex-col justify-between p-4 min-w-0">
        <div>
          <h3 className="font-heading font-bold text-[#3C2415] text-lg leading-tight mb-1 truncate">
            {product.name}
          </h3>
          <p className="text-xs text-gray-400 leading-relaxed line-clamp-2">
            {product.description}
          </p>
        </div>
        <span className="font-heading font-black text-[#3C2415] text-2xl mt-2">
          R{product.price}
        </span>
      </div>

      {/* Right: image + add button */}
      <div className="w-28 shrink-0 flex flex-col">
        {/* Image placeholder */}
        <div className="flex-1 bg-gradient-to-br from-stone-100 to-stone-200 flex items-center justify-center relative">
          <ImageIcon className="w-7 h-7 text-stone-300" strokeWidth={1.5} />
          {inCart && (
            <div className="absolute top-1.5 right-1.5 bg-[#FBB03B] text-[#3C2415] text-xs font-black w-5 h-5 rounded-full flex items-center justify-center shadow-sm">
              {cartItem!.quantity}
            </div>
          )}
        </div>

        {/* Add button */}
        <button
          onClick={handleAdd}
          className={`flex items-center justify-center gap-1 py-2 font-semibold text-sm transition-all duration-200 ${
            justAdded
              ? "bg-emerald-500 text-white"
              : "bg-[#FBB03B] text-[#3C2415] hover:bg-amber-400"
          }`}
          aria-label={`Add ${product.name} to cart`}
        >
          {justAdded ? (
            <>
              <Check className="w-3.5 h-3.5" />
              Added
            </>
          ) : (
            <>
              <Plus className="w-3.5 h-3.5" />
              Add
            </>
          )}
        </button>
      </div>
    </article>
  );
}
