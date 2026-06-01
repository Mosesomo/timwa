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
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
