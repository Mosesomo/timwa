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
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
