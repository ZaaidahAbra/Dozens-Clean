import { Plus, Check } from "lucide-react";
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
    <article className="bg-white rounded-xl border border-amber-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col">
      {/* Card header accent */}
      <div className="h-1.5 bg-gradient-to-r from-[#FBB03B] to-amber-400" />

      <div className="p-4 flex flex-col flex-1">
        {/* Top row */}
        <div className="flex items-start justify-between gap-2 mb-2">
          <div className="flex-1">
            <div className="flex flex-wrap gap-1 mb-1.5">
              {product.tags.map((tag) => (
                <span
                  key={tag}
                  className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                    tag === "Fresh"
                      ? "bg-green-100 text-green-700"
                      : "bg-blue-100 text-blue-700"
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="font-heading font-bold text-[#3C2415] text-xl leading-tight">
              {product.name}
            </h3>
          </div>
          <span className="text-3xl" aria-hidden="true">
            {product.emoji}
          </span>
        </div>

        <p className="text-sm text-gray-500 mb-4 flex-1">{product.description}</p>

        {/* Price + Add button */}
        <div className="flex items-center justify-between mt-auto">
          <span className="font-heading font-black text-[#3C2415] text-2xl">
            R{product.price}
          </span>

          <div className="flex items-center gap-2">
            {inCart && (
              <span className="text-xs text-amber-700 font-semibold bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full">
                ×{cartItem!.quantity}
              </span>
            )}
            <button
              onClick={handleAdd}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg font-semibold text-sm transition-all ${
                justAdded
                  ? "bg-green-500 text-white"
                  : "bg-[#FBB03B] text-[#3C2415] hover:bg-amber-400"
              }`}
              aria-label={`Add ${product.name} to cart`}
            >
              {justAdded ? (
                <>
                  <Check className="w-4 h-4" />
                  Added
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
      </div>
    </article>
  );
}
