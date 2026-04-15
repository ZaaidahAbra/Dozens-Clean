import { useState, useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import AboutSection from "@/components/AboutSection";
import HoursSection from "@/components/HoursSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
// import SEOSchema from "@/components/SEOSchema";

const SECTIONS = ["hero", "products", "about", "hours", "contact"];

function useActiveSection() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return active;
}

function AppContent() {
  const [cartOpen, setCartOpen] = useState(false);
  const activeSection = useActiveSection();

  return (
    <>
      {/* <SEOSchema /> */}
      <Navbar onCartClick={() => setCartOpen(true)} activeSection={activeSection} />

      <main>
        <HeroSection />
        <ProductsSection />
        <AboutSection />
        <HoursSection />
        <ContactSection />
      </main>

      <Footer />

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}

export default function App() {
  return (
    <CartProvider>
      <AppContent />
      <Analytics />
    </CartProvider>
  );
}
