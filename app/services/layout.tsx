import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aquaculture Services | Fish Pond Construction & Farming Solutions Kenya",
  description:
    "Explore Timwa Fisheries services: fish pond construction, greenhouse setup, drip irrigation, fish feeds, fingerlings, training, and market linkage. Complete aquaculture solutions for Kenya.",
  keywords: [
    "fish pond construction Kenya",
    "aquaculture services",
    "fish farming training",
    "greenhouse construction",
    "drip line installation",
    "fish fingerlings",
    "fish feeds Kenya",
  ],
  openGraph: {
    title: "Aquaculture Services | Fish Farming Solutions",
    description: "Complete fish farming services from pond construction to market linkage",
    type: "website",
    url: "https://timwafisheries.com/services",
  },
};

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Aquaculture Services",
  description: "Complete fish farming services from pond construction to market linkage",
  url: "https://timwafisheries.com/services",
  mainEntity: {
    "@type": "LocalBusiness",
    name: "Timwa Fisheries",
    image: "https://timwafisheries.com/images/timwa-logo.jpeg",
    description: "Professional aquaculture solutions provider in Kenya",
    telephone: "+254704460604",
    url: "https://timwafisheries.com",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      {children}
    </>
  );
}
