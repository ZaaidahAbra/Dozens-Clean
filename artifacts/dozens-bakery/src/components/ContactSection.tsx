import { MapPin, Phone, MessageCircle } from "lucide-react";

const ADDRESS = "Unit 5, 98a Bofors Circle, Epping 2, Cape Town";
const PHONE = "021 510 6552";
const WHATSAPP = "+27 64 005 9855";
const WHATSAPP_NUMBER = "27640059855";

// Google Maps embed for the address
const MAP_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.3!2d18.5275!3d-33.9303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc5bb9e0000001%3A0x0!2sUnit+5%2C+98a+Bofors+Circle%2C+Epping+2%2C+Cape+Town!5e0!3m2!1sen!2sza!4v1700000000000!5m2!1sen!2sza";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-20 bg-white"
      aria-label="Contact and location"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="h-px w-10 bg-[#FBB03B]" />
            <span className="font-heading text-[#FBB03B] text-sm font-bold tracking-[0.2em] uppercase">
              Find Us
            </span>
            <div className="h-px w-10 bg-[#FBB03B]" />
          </div>
          <h2 className="font-heading font-black text-[#3C2415] text-5xl sm:text-6xl uppercase mb-3">
            Contact & Location
          </h2>
          <p className="text-gray-600 max-w-md mx-auto">
            Visit us at our factory in Epping 2, or get in touch via phone or WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map */}
          <div className="rounded-2xl overflow-hidden border border-amber-100 shadow-md" style={{ minHeight: 350 }}>
            <iframe
              title="Dozens Bakery Location Map"
              src={MAP_EMBED}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 350 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              aria-label="Map showing Dozens Bakery location at Unit 5, 98a Bofors Circle, Epping 2, Cape Town"
            />
          </div>

          {/* Contact details */}
          <div className="space-y-5">
            {/* Address */}
            <div className="bg-amber-50 border border-amber-100 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-[#FBB03B] rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#3C2415]" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-[#3C2415] text-lg uppercase mb-1">
                    Address
                  </h3>
                  <p className="text-gray-700">{ADDRESS}</p>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(ADDRESS)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#FBB03B] hover:text-amber-600 font-semibold mt-1 inline-block transition-colors"
                  >
                    Open in Google Maps →
                  </a>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-amber-50 border border-amber-100 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-[#FBB03B] rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-[#3C2415]" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-[#3C2415] text-lg uppercase mb-1">
                    Call Us
                  </h3>
                  <p className="text-gray-700 mb-3">{PHONE}</p>
                  <a
                    href={`tel:+27215106552`}
                    className="inline-flex items-center gap-2 bg-[#3C2415] text-white font-heading font-bold px-5 py-2.5 rounded-lg hover:bg-amber-900 transition-colors text-sm uppercase tracking-wide"
                  >
                    <Phone className="w-4 h-4" />
                    Call Now
                  </a>
                </div>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="bg-green-50 border border-green-100 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-green-500 rounded-xl flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-[#3C2415] text-lg uppercase mb-1">
                    WhatsApp
                  </h3>
                  <p className="text-gray-700 mb-3">{WHATSAPP}</p>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-green-500 text-white font-heading font-bold px-5 py-2.5 rounded-lg hover:bg-green-600 transition-colors text-sm uppercase tracking-wide"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
