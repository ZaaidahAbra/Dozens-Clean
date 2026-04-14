export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 bg-[#3C2415] text-white"
      aria-label="About Dozens Bakery"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-10 bg-[#FBB03B]" />
              <span className="font-heading text-[#FBB03B] text-sm font-bold tracking-[0.2em] uppercase">
                Our Story
              </span>
            </div>
            <h2 className="font-heading font-black text-white text-5xl sm:text-6xl uppercase mb-6 leading-none">
              Baking Since
              <br />
              <span className="text-[#FBB03B]">1998</span>
            </h2>
            <div className="space-y-4 text-amber-100/80 leading-relaxed">
              <p>
                Dozens Bakery has been a cornerstone of Cape Town's food supply chain
                for over 25 years. From our industrial facility in Epping 2, we've
                supplied the fast food, catering, and hospitality industries with
                consistent, high-quality baked goods at factory prices.
              </p>
              <p>
                In 2025, our facility was severely damaged by fire — a devastating
                setback for our team and our loyal customers. But true to the spirit
                of a bakery that rises to every challenge, we rebuilt from the ground
                up. In 2026, <strong className="text-[#FBB03B]">Dozens Bakery is proudly back</strong>{" "}
                with a modernised facility, the same trusted recipes, and the same
                commitment to freshness and value.
              </p>
              <p>
                Today we serve the full spectrum of the food industry — from fast food
                chains and catering companies to hospitality groups and individual
                customers who know quality when they taste it.
              </p>
            </div>
          </div>

          {/* Stats / highlights */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "1998", label: "Established" },
              { value: "25+", label: "Years of Baking" },
              { value: "2026", label: "Proudly Reopened" },
              { value: "3", label: "Industries Served" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-amber-900/40 border border-amber-800 rounded-xl p-6 text-center"
              >
                <span className="font-heading font-black text-[#FBB03B] text-4xl sm:text-5xl">
                  {stat.value}
                </span>
                <p className="text-amber-200 text-sm mt-1 font-medium">{stat.label}</p>
              </div>
            ))}

            {/* Industries badge */}
            <div className="col-span-2 bg-[#FBB03B] rounded-xl p-5">
              <p className="font-heading font-bold text-[#3C2415] text-xl uppercase mb-3">
                We Supply
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Fast Food Industry",
                  "Catering",
                  "Hospitality",
                  "Factory Outlet Retail",
                ].map((ind) => (
                  <span
                    key={ind}
                    className="bg-[#3C2415]/20 text-[#3C2415] text-sm font-semibold px-3 py-1 rounded-full"
                  >
                    {ind}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
