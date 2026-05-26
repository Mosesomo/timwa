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
  title: "Timwa Fisheries | Professional Aquaculture & Fish Farming Solutions in Kenya",
  description:
    "Timwa Fisheries provides fish pond construction, fish farming consultancy, fish feeds, fingerlings, fish farming training, hatchery systems, and complete aquaculture solutions in Kenya.",
  icons: {
    icon: "/images/timwa-logo.jpeg",
  },
  keywords: [
    "fish farming Kenya",
    "aquaculture",
    "fish pond construction",
    "fingerlings",
    "fish feeds",
    "tilapia farming",
    "catfish farming",
    "greenhouse construction",
    "drip line installation",
    "water farm plumbing",
  ],
};

export const viewport: Viewport = {
  themeColor: "#1e1e6e",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={jost.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}