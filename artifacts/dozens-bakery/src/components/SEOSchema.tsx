export default function SEOSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Bakery",
    name: "Dozens Bakery",
    description:
      "Industrial Bakery & Factory Outlet in Cape Town. Supplying fresh and frozen baked goods to the fast food, catering, and hospitality industries since 1998. Proudly reopened in 2026.",
    url: "https://www.dozensbakery.co.za",
    telephone: "+27215106552",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Unit 5, 98a Bofors Circle",
      addressLocality: "Epping 2",
      addressRegion: "Cape Town",
      postalCode: "7460",
      addressCountry: "ZA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -33.9303,
      longitude: 18.5275,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "08:00",
        closes: "16:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Friday"],
        opens: "08:00",
        closes: "16:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "08:30",
        closes: "12:00",
      },
    ],
    servesCuisine: ["Bakery", "Pastries", "Bread"],
    priceRange: "R10–R75",
    foundingDate: "1998",
    areaServed: "Cape Town",
    sameAs: [`https://wa.me/27640059855`],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
