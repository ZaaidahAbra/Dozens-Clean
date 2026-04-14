export default function HeroSection() {
  const scrollToProducts = () => {
    const el = document.getElementById("products");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Background: dark chocolate overlay on gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #3C2415 0%, #5a3820 40%, #3C2415 100%)",
        }}
      />

      {/* Decorative industrial pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            #FBB03B 0px,
            #FBB03B 1px,
            transparent 1px,
            transparent 20px
          ), repeating-linear-gradient(
            -45deg,
            #FBB03B 0px,
            #FBB03B 1px,
            transparent 1px,
            transparent 20px
          )`,
        }}
      />

      {/* Warm radial glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(251,176,59,0.15) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto pt-20">
        {/* Est badge */}
        <div className="inline-flex items-center gap-2 mb-6">
          <div className="h-px w-12 bg-[#FBB03B]" />
          <span
            className="font-heading text-[#FBB03B] text-sm font-bold tracking-[0.2em] uppercase"
          >
            Est. 1998
          </span>
          <div className="h-px w-12 bg-[#FBB03B]" />
        </div>

        {/* Main heading */}
        <h1
          className="font-heading font-black text-white leading-none mb-4"
          style={{ fontSize: "clamp(3rem, 10vw, 7rem)" }}
        >
          <span className="block">DOZENS</span>
          <span className="block text-[#FBB03B]">BAKERY</span>
        </h1>

        {/* Tagline */}
        <p className="text-amber-200 text-lg sm:text-xl font-medium mb-3 max-w-2xl mx-auto leading-relaxed">
          Industrial Bakery &amp; Factory Outlet
        </p>
        <p className="text-amber-300/80 text-base sm:text-lg mb-2">
          Supplying fresh &amp; frozen excellence since 1998
        </p>

        {/* Reopened banner */}
        <div className="inline-flex items-center gap-3 mt-6 mb-10 bg-[#FBB03B] text-[#3C2415] px-6 py-3 rounded font-heading font-bold text-lg tracking-wide uppercase shadow-lg">
          <span className="text-2xl">🎉</span>
          Proudly Reopened 2026
        </div>

        {/* Serving industries */}
        <div className="flex flex-wrap justify-center gap-4 mb-10 text-sm text-amber-200/80">
          <span className="border border-amber-700 rounded px-3 py-1">Fast Food Industry</span>
          <span className="border border-amber-700 rounded px-3 py-1">Catering</span>
          <span className="border border-amber-700 rounded px-3 py-1">Hospitality</span>
          <span className="border border-amber-700 rounded px-3 py-1">Factory Outlet</span>
        </div>

        {/* CTA */}
        <button
          onClick={scrollToProducts}
          className="bg-[#FBB03B] text-[#3C2415] font-heading font-bold text-lg px-8 py-4 rounded hover:bg-amber-400 transition-colors shadow-lg hover:shadow-xl uppercase tracking-wide"
        >
          Browse Our Menu
        </button>

        {/* Scroll indicator */}
        <div className="mt-16 flex flex-col items-center gap-2 text-amber-600/60">
          <div className="w-6 h-10 border-2 border-amber-700 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-amber-600 rounded-full animate-bounce" />
          </div>
          <span className="text-xs tracking-widest uppercase">Scroll</span>
        </div>
      </div>
    </section>
  );
}
