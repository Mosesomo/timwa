// Schema markup utilities for SEO

export const serviceSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Fish Pond Construction",
    description: "Professional fish pond construction services including earthen, concrete, lined, and circular tank ponds across Kenya.",
    provider: {
      "@type": "LocalBusiness",
      name: "Timwa Fisheries",
      url: "https://timwafisheries.com",
      telephone: "+254704460604",
      address: {
        "@type": "PostalAddress",
        addressCountry: "KE",
        addressLocality: "Kisii County"
      }
    },
    areaServed: {
      "@type": "Country",
      name: "KE"
    },
    image: "/images/gallery/drip-line-1.jpeg",
    priceRange: "Custom quotes available"
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Greenhouse Construction",
    description: "Modern greenhouse construction for aquaponics and integrated farming in Kenya's varied climates.",
    provider: {
      "@type": "LocalBusiness",
      name: "Timwa Fisheries",
      url: "https://timwafisheries.com",
      telephone: "+254704460604"
    },
    areaServed: {
      "@type": "Country",
      name: "KE"
    },
    image: "/images/gallery/greenhouse-construction.jpeg",
    priceRange: "Custom quotes available"
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Drip Line Installation",
    description: "Professional drip irrigation system installation for water-efficient farming. Reduces water wastage by 60%.",
    provider: {
      "@type": "LocalBusiness",
      name: "Timwa Fisheries",
      url: "https://timwafisheries.com",
      telephone: "+254704460604"
    },
    areaServed: {
      "@type": "Country",
      name: "KE"
    },
    image: "/images/gallery/drip-field.jpeg",
    priceRange: "Custom quotes available"
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Fish Farming Training",
    description: "Comprehensive hands-on training in fish pond management, breeding, feeding, water quality, disease prevention, and business management.",
    provider: {
      "@type": "LocalBusiness",
      name: "Timwa Fisheries",
      url: "https://timwafisheries.com",
      telephone: "+254704460604"
    },
    areaServed: {
      "@type": "Country",
      name: "KE"
    },
    image: "/images/gallery/team-site.jpeg",
    educationalLevel: "Beginner to Commercial Operators"
  },
];

export const breadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

export const faqSchema = [
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much does fish pond construction cost in Kenya?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Fish pond construction costs vary based on size, soil type, and pond design. Contact Timwa Fisheries for a free consultation and quote.",
        },
      },
      {
        "@type": "Question",
        name: "What is the best time to start a fish farm in Kenya?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Fish farming can be done year-round in Kenya, but the best time is during the rainy season when water is abundant.",
        },
      },
      {
        "@type": "Question",
        name: "Do you provide fish farming training?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Timwa Fisheries offers comprehensive fish farming training programs covering pond management, breeding, feeding, and business management.",
        },
      },
      {
        "@type": "Question",
        name: "Can you help with market linkage for my fish?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we provide market linkage services connecting farmers with hotels, restaurants, wholesalers, and traders for reliable fish sales.",
        },
      },
    ],
  },
];
