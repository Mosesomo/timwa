import type { Metadata, Viewport } from "next";
import { Jost } from "next/font/google";
import "./globals.css";

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-sans",
  display: "swap",
});

const siteUrl = "https://www.timwafisheries.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Timwa Fisheries | Fish Farming & Aquaculture Solutions in Kenya",
    template: "%s | Timwa Fisheries Kenya",
  },

  description:
    "Timwa Fisheries — Kenya's trusted aquaculture experts. We build fish ponds, supply tilapia & catfish fingerlings, install drip irrigation, construct greenhouses, and provide hands-on fish farming training. Call Martin Nguri: +254 704 460604.",

  keywords: [
    "Timwa Fisheries",
    "fish farming Kenya",
    "aquaculture Kenya",
    "fish pond construction Kenya",
    "tilapia farming Kenya",
    "catfish farming Kenya",
    "fish fingerlings Kenya",
    "fish feeds Kenya",
    "greenhouse construction Kenya",
    "drip line installation Kenya",
    "fish farming training Kenya",
    "fish farming consultancy Kenya",
    "Martin Nguri fisheries",
    "fish pond construction Nairobi",
    "aquaculture solutions East Africa",
    "fish farming Nairobi",
    "fish pond construction Kiambu",
    "fish pond construction Nakuru",
    "water farm plumbing Kenya",
    "fish market linkage Kenya",
    "hatchery Kenya",
    "fish breeding Kenya",
    "commercial fish farming Kenya",
  ],

  authors: [{ name: "Timwa Fisheries", url: siteUrl }],
  creator: "Timwa Fisheries",
  publisher: "Timwa Fisheries",

  openGraph: {
    type: "website",
    locale: "en_KE",
    url: siteUrl,
    siteName: "Timwa Fisheries",
    title: "Timwa Fisheries | Fish Farming & Aquaculture Solutions in Kenya",
    description:
      "Kenya's leading aquaculture company. Fish pond construction, tilapia & catfish fingerlings, greenhouse construction, drip irrigation, and fish farming training. 500+ projects completed since 2014.",
    images: [
      {
        url: "/images/timwa-logo.jpeg",
        width: 800,
        height: 600,
        alt: "Timwa Fisheries - Professional Aquaculture Solutions Kenya",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Timwa Fisheries | Fish Farming & Aquaculture Solutions in Kenya",
    description:
      "Kenya's leading aquaculture company. Fish pond construction, fingerlings, greenhouse construction, drip irrigation & fish farming training. 500+ projects. Call +254 704 460604.",
    images: ["/images/timwa-logo.jpeg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: siteUrl,
  },

  icons: {
    icon: "/images/timwa-logo.jpeg",
    apple: "/images/timwa-logo.jpeg",
  },

  verification: {
    // Add your Google Search Console verification code here once you have it:
    // google: "YOUR_GOOGLE_VERIFICATION_CODE",
  },

  category: "Aquaculture & Fish Farming",
};

export const viewport: Viewport = {
  themeColor: "#1e1e6e",
  width: "device-width",
  initialScale: 1,
};

// JSON-LD Structured Data for rich search results
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": siteUrl,
  name: "Timwa Fisheries",
  alternateName: ["Timwa Fish Farming", "Timwa Aquaculture Kenya"],
  description:
    "Professional aquaculture and fish farming solutions in Kenya. Specialising in fish pond construction, tilapia and catfish fingerlings, greenhouse construction, drip irrigation installation, and comprehensive fish farming training.",
  url: siteUrl,
  telephone: "+254704460604",
  email: "info@timwafisheries.com",
  founder: {
    "@type": "Person",
    name: "Martin Nguri",
  },
  foundingDate: "2014",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Nairobi",
    addressCountry: "KE",
    addressRegion: "Nairobi County",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -1.286389,
    longitude: 36.817223,
  },
  areaServed: [
    { "@type": "Country", name: "Kenya" },
    { "@type": "AdministrativeArea", name: "Nairobi County" },
    { "@type": "AdministrativeArea", name: "Kiambu County" },
    { "@type": "AdministrativeArea", name: "Nakuru County" },
    { "@type": "AdministrativeArea", name: "Kisii County" },
    { "@type": "AdministrativeArea", name: "Murang'a County" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  sameAs: [
    "https://www.facebook.com/share/1BE1dSNTtx/",
    "https://www.tiktok.com/@martin.nguri",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Aquaculture Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fish Pond Construction" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Greenhouse Construction" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Drip Line Installation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fish Farming Training" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Tilapia Fingerlings Supply" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Catfish Fingerlings Supply" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Aquaculture Consultancy" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Market Linkage" } },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "500",
    bestRating: "5",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Timwa Fisheries",
  url: siteUrl,
  potentialAction: {
    "@type": "SearchAction",
    target: `${siteUrl}/?search={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={jost.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        {/* Preconnect for performance (helps SEO) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://images.pexels.com" />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}