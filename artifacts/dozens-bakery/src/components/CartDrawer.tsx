import { X, Minus, Plus, Trash2, MessageCircle, ShoppingBag, ImageIcon } from "lucide-react";
import { useCart } from "@/context/CartContext";

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
}

const WHATSAPP_NUMBER = "27814758797";

export default function CartDrawer({ open, onClose }: CartDrawerProps) {
  const { items, updateQuantity, removeItem, totalPrice, totalItems, clearCart } =
    useCart();

  const handleWhatsAppCheckout = () => {
    if (items.length === 0) return;

    const itemList = items
      .map((i) => `- ${i.product.name} ×${i.quantity} @ R${i.product.price} each`)
      .join("\n");

    const message = encodeURIComponent(
      `Hi Dozens Bakery! I would like to order:\n\n${itemList}\n\nMy total is R${totalPrice}.\n\nPlease confirm availability and collection time. Thank you!`
    );

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <>
      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 transition-opacity"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed right-0 top-0 bottom-0 z-50 w-full max-w-sm bg-white shadow-2xl flex flex-col transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-label="Shopping cart"
        aria-modal="true"
      >
        {/* Header */}
        <div className="bg-[#3C2415] text-white px-5 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#FBB03B]" />
            <h2 className="font-heading font-bold text-xl">Your Cart</h2>
            {totalItems > 0 && (
              <span className="bg-[#FBB03B] text-[#3C2415] text-xs font-bold px-2 py-0.5 rounded-full">
                {totalItems}
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded hover:bg-amber-900 transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center text-gray-400 gap-3">
              <ShoppingBag className="w-16 h-16 opacity-20" />
              <p className="font-medium">Your cart is empty</p>
              <p className="text-sm">Browse our menu and add items to get started.</p>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.product.id}
                className="bg-gray-50 border border-gray-100 rounded-xl overflow-hidden flex gap-0"
              >
                {/* Image placeholder — same style as product card */}
                <div className="w-20 shrink-0 bg-gradient-to-br from-stone-100 to-stone-200 flex flex-col items-center justify-center gap-1 self-stretch">
                  <ImageIcon className="w-6 h-6 text-stone-300" strokeWidth={1.5} />
                </div>

                {/* Info */}
                <div className="flex-1 p-3">
                  <div className="flex items-start justify-between gap-1 mb-1">
                    <div>
                      <p className="font-heading font-bold text-[#3C2415] text-base leading-tight">
                        {item.product.name}
                      </p>
                      <p className="text-xs text-gray-400">{item.product.category}</p>
                    </div>
                    <button
                      onClick={() => removeItem(item.product.id)}
                      className="p-1 text-gray-300 hover:text-red-400 transition-colors shrink-0"
                      aria-label={`Remove ${item.product.name}`}
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="flex items-center justify-between mt-2">
                    {/* Qty controls */}
                    <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-2 py-0.5">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="text-[#3C2415] hover:text-[#FBB03B] transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="font-bold text-[#3C2415] w-5 text-center text-sm">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="text-[#3C2415] hover:text-[#FBB03B] transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <span className="font-heading font-black text-[#3C2415] text-lg">
                      R{item.product.price * item.quantity}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-gray-100 p-4 space-y-3">
            {/* Total */}
            <div className="flex items-center justify-between">
              <span className="font-medium text-gray-500 text-sm">Total</span>
              <span className="font-heading font-black text-[#3C2415] text-3xl">
                R{totalPrice}
              </span>
            </div>

            {/* Payment note */}
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-xs text-amber-800">
              <strong>Orders are placed via WhatsApp.</strong> Payment is required
              in-store upon collection.
            </div>

            {/* WhatsApp CTA */}
            <button
              onClick={handleWhatsAppCheckout}
              className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-heading font-bold text-lg py-3.5 rounded-xl transition-colors shadow-md uppercase tracking-wide"
            >
              <MessageCircle className="w-5 h-5" />
              Order via WhatsApp
            </button>

            <button
              onClick={clearCart}
              className="w-full text-xs text-gray-400 hover:text-gray-500 transition-colors py-1"
            >
              Clear cart
            </button>
          </div>
        )}
      </div>
    </>
  );
}
