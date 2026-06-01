import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Timwa Fisheries | Fish Farming Services Kenya",
  description:
    "Get in touch with Timwa Fisheries - Kenya's leading aquaculture solutions provider. Call +254 704 460604 or email for fish farming consultancy and services.",
  keywords: ["contact timwa fisheries", "fish farming services Kenya", "aquaculture consultancy"],
  openGraph: {
    title: "Contact Timwa Fisheries",
    description: "Contact us for professional fish farming and aquaculture services",
    type: "website",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
