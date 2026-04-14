import { MessageCircle, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <footer className="bg-[#3C2415] text-amber-200 py-12" aria-label="Footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-9 h-9 rounded-full bg-[#FBB03B] flex items-center justify-center font-heading font-black text-[#3C2415] text-xl">
                D
              </div>
              <span className="font-heading font-bold text-white text-xl uppercase tracking-wide">
                Dozens Bakery
              </span>
            </div>
            <p className="text-sm text-amber-300/70 leading-relaxed">
              Industrial Bakery &amp; Factory Outlet.<br />
              Supplying fresh &amp; frozen excellence since 1998.
            </p>
            <div className="mt-3 inline-flex items-center gap-1.5 text-xs text-[#FBB03B] font-bold uppercase tracking-wide">
              <span className="w-2 h-2 rounded-full bg-[#FBB03B]" />
              Proudly Reopened 2026
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-heading font-bold text-white text-sm uppercase tracking-widest mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { id: "hero", label: "Home" },
                { id: "products", label: "Menu" },
                { id: "about", label: "About" },
                { id: "hours", label: "Hours" },
                { id: "contact", label: "Contact" },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="text-sm text-amber-300/70 hover:text-[#FBB03B] transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-bold text-white text-sm uppercase tracking-widest mb-4">
              Get In Touch
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="https://maps.google.com/?q=Unit+5+98a+Bofors+Circle+Epping+2+Cape+Town"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-amber-300/70 hover:text-[#FBB03B] transition-colors"
                >
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                  Unit 5, 98a Bofors Circle, Epping 2, Cape Town
                </a>
              </li>
              <li>
                <a
                  href="tel:+27215106552"
                  className="flex items-center gap-2 text-amber-300/70 hover:text-[#FBB03B] transition-colors"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  021 510 6552
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/27640059855"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-amber-300/70 hover:text-[#FBB03B] transition-colors"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" />
                  +27 64 005 9855
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-amber-900 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-amber-700">
          <p>&copy; {new Date().getFullYear()} Dozens Bakery. All rights reserved.</p>
          <p>Made with care in Cape Town, South Africa</p>
        </div>
      </div>
    </footer>
  );
}
