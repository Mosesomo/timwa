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
    url: "https://timwafisheries.com/contact",
  },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Timwa Fisheries",
  description: "Contact Timwa Fisheries for fish farming consultancy and services",
  url: "https://timwafisheries.com/contact",
  mainEntity: {
    "@type": "LocalBusiness",
    name: "Timwa Fisheries",
    image: "https://timwafisheries.com/images/timwa-logo.jpeg",
    description: "Professional aquaculture solutions provider in Kenya",
    telephone: "+254704460604",
    email: "info@timwafisheries.com",
    url: "https://timwafisheries.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Kisii",
      addressLocality: "Kisii County",
      addressCountry: "KE",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      telephone: "+254704460604",
      email: "info@timwafisheries.com",
    },
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      {children}
    </>
  );
}
