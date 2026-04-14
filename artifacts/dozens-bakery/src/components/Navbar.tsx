import { useState } from "react";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";

interface NavbarProps {
  onCartClick: () => void;
  activeSection: string;
}

const navLinks = [
  { id: "hero", label: "Home" },
  { id: "products", label: "Menu" },
  { id: "about", label: "About" },
  { id: "hours", label: "Hours" },
  { id: "contact", label: "Contact" },
];

export default function Navbar({ onCartClick, activeSection }: NavbarProps) {
  const { totalItems } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setMobileOpen(false);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-40 bg-[#3C2415] shadow-lg"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo image — transparent blend on dark bg */}
          <button
            onClick={() => scrollTo("hero")}
            className="flex items-center focus:outline-none"
            aria-label="Go to top"
          >
            <img
              src="/logo.jpg"
              alt="Dozens Bakery logo"
              className="h-10 w-auto rounded"
              style={{ mixBlendMode: "multiply" }}
            />
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? "bg-[#FBB03B] text-[#3C2415]"
                    : "text-amber-100 hover:text-[#FBB03B]"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Cart + Mobile toggle */}
          <div className="flex items-center gap-2">
            <button
              onClick={onCartClick}
              className="relative p-2 text-white hover:text-[#FBB03B] transition-colors"
              aria-label={`Shopping cart, ${totalItems} items`}
            >
              <ShoppingCart className="w-6 h-6" />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-[#FBB03B] text-[#3C2415] text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>

            <button
              className="md:hidden p-2 text-white hover:text-[#FBB03B] transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-amber-900 py-3 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`w-full text-left px-4 py-2.5 rounded text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? "bg-[#FBB03B] text-[#3C2415]"
                    : "text-amber-100 hover:bg-amber-900"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
