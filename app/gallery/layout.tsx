import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Timwa Fisheries Fish Farming Projects Kenya",
  description:
    "View our fish farming projects gallery - aquaculture operations, drip irrigation systems, greenhouses, and equipment from farms across Kenya.",
  keywords: ["fish farming gallery", "aquaculture projects Kenya", "fish ponds", "fish farming photos"],
  openGraph: {
    title: "Gallery | Fish Farming Projects",
    description: "Explore our completed fish farming projects and aquaculture solutions",
    type: "website",
    url: "https://timwafisheries.com/gallery",
  },
};

const gallerySchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Gallery",
  description: "Gallery of fish farming projects and aquaculture operations",
  url: "https://timwafisheries.com/gallery",
  mainEntity: {
    "@type": "LocalBusiness",
    name: "Timwa Fisheries",
    image: "https://timwafisheries.com/images/timwa-logo.jpeg",
    description: "Professional aquaculture solutions with visual portfolio",
    telephone: "+254704460604",
    url: "https://timwafisheries.com",
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gallerySchema) }}
      />
      {children}
    </>
  );
}
