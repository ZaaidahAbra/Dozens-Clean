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
      {/* Video background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="https://cdn.prod.website-files.com/60227199efe7a5c6cf6ba585/604b36b303ba7a074c0c490b_Home_halo-transcode.mp4"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />

      {/* Dark overlay so text is legible */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(30,15,5,0.72) 0%, rgba(40,20,8,0.80) 60%, rgba(30,15,5,0.88) 100%)",
        }}
      />

      {/* Subtle warm radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(251,176,59,0.08) 0%, transparent 65%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto pt-20">
        {/* Est badge */}
        <div className="inline-flex items-center gap-2 mb-6">
          <div className="h-px w-12 bg-[#FBB03B]" />
          <span className="font-heading text-[#FBB03B] text-sm font-bold tracking-[0.2em] uppercase">
            Est. 1998 &amp; 2026
          </span>
          <div className="h-px w-12 bg-[#FBB03B]" />
        </div>

        {/* Main heading */}
        <h1
          className="font-heading font-black text-white leading-none mb-4 drop-shadow-lg"
          style={{ fontSize: "clamp(3rem, 10vw, 7rem)" }}
        >
          <span className="block">DOZENS</span>
          <span className="block text-[#FBB03B]">BAKERY</span>
        </h1>

        {/* Tagline */}
        <p className="text-amber-100 text-lg sm:text-xl font-medium mb-2 max-w-2xl mx-auto leading-relaxed drop-shadow">
          Industrial Bakery &amp; Factory Outlet
        </p>
        <p className="text-amber-200/80 text-base sm:text-lg mb-10 drop-shadow">
          Supplying fresh &amp; frozen excellence since 1998
        </p>

        {/* CTA */}
        <button
          onClick={scrollToProducts}
          className="bg-[#FBB03B] text-[#3C2415] font-heading font-bold text-lg px-8 py-4 rounded hover:bg-amber-400 transition-colors shadow-lg hover:shadow-xl uppercase tracking-wide"
        >
          Browse Our Menu
        </button>

        {/* Scroll indicator */}
        <div className="mt-16 flex flex-col items-center gap-2 text-amber-500/60">
          <div className="w-6 h-10 border-2 border-amber-600/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-amber-500/60 rounded-full animate-bounce" />
          </div>
          <span className="text-xs tracking-widest uppercase">Scroll</span>
        </div>
      </div>
    </section>
  );
}
