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
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
