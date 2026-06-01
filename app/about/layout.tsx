import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Timwa Fisheries | Fish Farming Solutions Since 2014",
  description:
    "Learn about Timwa Fisheries - a leading aquaculture company in Kenya founded in 2014. Discover our mission, vision, and 10+ years of experience in professional fish farming.",
  keywords: ["about timwa fisheries", "fish farming company Kenya", "aquaculture services", "Martin Nguri"],
  openGraph: {
    title: "About Timwa Fisheries | Fish Farming Solutions",
    description: "Discover our journey, mission, and expertise in aquaculture",
    type: "website",
    url: "https://timwafisheries.com/about",
  },
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Timwa Fisheries",
  description: "Learn about Timwa Fisheries - a leading aquaculture company in Kenya",
  url: "https://timwafisheries.com/about",
  mainEntity: {
    "@type": "Organization",
    name: "Timwa Fisheries",
    image: "https://timwafisheries.com/images/timwa-logo.jpeg",
    description: "Professional aquaculture solutions provider",
    foundingDate: "2014",
    founder: {
      "@type": "Person",
      name: "Martin Nguri",
    },
    telephone: "+254704460604",
    url: "https://timwafisheries.com",
    areaServed: {
      "@type": "Country",
      name: "Kenya",
    },
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      {children}
    </>
  );
}
