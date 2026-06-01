import type { Metadata, Viewport } from "next";
import { Jost } from "next/font/google";
import "./globals.css";

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Timwa Fisheries | Fish Farming Solutions Kenya - Aquaculture & Pond Construction",
  description:
    "Timwa Fisheries Kenya offers fish pond construction, tilapia & catfish farming, fish feeds, fingerlings, greenhouse construction, drip irrigation, and aquaculture training. Over 10 years of expertise in sustainable fish farming.",
  icons: {
    icon: "/images/timwa-logo.jpeg",
  },
  keywords: [
    "timwa fisheries",
    "fish farming Kenya",
    "aquaculture Kenya",
    "fish pond construction Kenya",
    "tilapia farming",
    "catfish farming Kenya",
    "fish fingerlings Kenya",
    "greenhouse construction Kenya",
    "drip line installation Kenya",
    "fish farming training",
    "aquaculture solutions",
    "fish feeds Kenya",
    "fisheries",
  ],
  authors: [{ name: "Timwa Fisheries" }],
  creator: "Timwa Fisheries",
  publisher: "Timwa Fisheries",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: "https://timwafisheries.com",
    siteName: "Timwa Fisheries",
    title: "Timwa Fisheries | Fish Farming Solutions Kenya",
    description: "Professional aquaculture services including fish pond construction, farming consultancy, and training.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Timwa Fisheries - Fish Farming Kenya",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Timwa Fisheries | Fish Farming Solutions Kenya",
    description: "Professional aquaculture services for fish farming in Kenya",
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
    canonical: "https://timwafisheries.com",
  },
};

export const viewport: Viewport = {
  themeColor: "#1e1e6e",
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  name: "Timwa Fisheries",
  url: "https://timwafisheries.com",
  logo: "https://timwafisheries.com/images/timwa-logo.jpeg",
  description: "Professional aquaculture and fish farming solutions in Kenya. We provide fish pond construction, tilapia and catfish farming, fingerlings, fish feeds, greenhouse construction, drip irrigation installation, and aquaculture training.",
  founder: {
    "@type": "Person",
    name: "Martin Nguri",
  },
  foundingDate: "2014",
  areaServed: {
    "@type": "Country",
    name: "Kenya",
  },
  telephone: "+254704460604",
  email: "info@timwafisheries.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Kisii",
    addressLocality: "Kisii County",
    addressCountry: "KE",
  },
  sameAs: [
    "https://www.facebook.com/timwafisheries",
    "https://www.instagram.com/timwafisheries",
    "https://www.twitter.com/timwafisheries",
  ],
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
