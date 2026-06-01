import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies | Timwa Fisheries Fish Farming Success Stories Kenya",
  description:
    "Discover our successful fish farming case studies in Kenya - drip irrigation, fish ponds, greenhouses, and community aquaculture projects with measurable results.",
  keywords: ["fish farming case studies", "aquaculture success Kenya", "fish farming results", "aquaculture projects"],
  openGraph: {
    title: "Case Studies | Fish Farming Success Stories",
    description: "Real case studies of successful fish farming projects across Kenya",
    type: "website",
    url: "https://timwafisheries.com/projects",
  },
};

const projectsSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Fish Farming Case Studies",
  description: "Real case studies of successful fish farming projects across Kenya",
  url: "https://timwafisheries.com/projects",
  mainEntity: {
    "@type": "LocalBusiness",
    name: "Timwa Fisheries",
    image: "https://timwafisheries.com/images/timwa-logo.jpeg",
    description: "Professional aquaculture solutions with proven results",
    telephone: "+254704460604",
    url: "https://timwafisheries.com",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsSchema) }}
      />
      {children}
    </>
  );
}
