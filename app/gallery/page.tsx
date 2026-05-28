"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import WhatsAppButton from "@/components/whatsapp-button";

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: "Aquaculture" | "Drip Systems" | "Greenhouses" | "Equipment" | "Team";
  title: string;
}

const galleryImages: GalleryImage[] = [
  // Aquaculture Operations
  {
    id: "1",
    src: "/images/gallery/drip-line-1.jpeg",
    alt: "Fish pond construction",
    category: "Aquaculture",
    title: "Pond Development",
  },
  {
    id: "2",
    src: "/images/gallery/drip-line-2.jpeg",
    alt: "Fish farming in Kenya",
    category: "Aquaculture",
    title: "Aquaculture Work",
  },
  {
    id: "3",
    src: "/images/gallery/fish-catch.jpeg",
    alt: "Fish harvest tilapia",
    category: "Aquaculture",
    title: "Tilapia Harvest",
  },
  {
    id: "4",
    src: "/images/gallery/catfish.jpeg",
    alt: "Catfish processing",
    category: "Aquaculture",
    title: "Catfish Harvest",
  },
  {
    id: "5",
    src: "/images/gallery/catfish-fry.jpeg",
    alt: "Eels ready for sale",
    category: "Aquaculture",
    title: "Eel Production",
  },
  {
    id: "6",
    src: "/images/gallery/oysters-harvest.jpeg",
    alt: "Shell fish processing",
    category: "Aquaculture",
    title: "Shellfish Operation",
  },
  {
    id: "7",
    src: "/images/gallery/tilapia-adult.jpeg",
    alt: "Fish quality check",
    category: "Aquaculture",
    title: "Quality Fish",
  },
  {
    id: "8",
    src: "/images/gallery/tilapia-fry.jpeg",
    alt: "Fish fingerlings",
    category: "Aquaculture",
    title: "Fingerling Stock",
  },
  // Drip Systems
  {
    id: "9",
    src: "/images/gallery/drip-installation.jpeg",
    alt: "Land preparation for drip installation",
    category: "Drip Systems",
    title: "Farm Preparation",
  },
  {
    id: "10",
    src: "/images/gallery/pond-setup.jpeg",
    alt: "Drip line installation work",
    category: "Drip Systems",
    title: "Installing Drip Lines",
  },
  {
    id: "11",
    src: "/images/gallery/drip-field.jpeg",
    alt: "Water storage and drip system",
    category: "Drip Systems",
    title: "Drip System Ready",
  },
  {
    id: "12",
    src: "/images/gallery/equipment-storage.jpeg",
    alt: "Irrigation drip system detail",
    category: "Drip Systems",
    title: "Drip System Detail",
  },
  // Greenhouses
  {
    id: "13",
    src: "/images/gallery/greenhouse-team.jpeg",
    alt: "Greenhouse net house construction",
    category: "Greenhouses",
    title: "Greenhouse Structure",
  },
  {
    id: "14",
    src: "/images/gallery/greenhouse-construction.jpeg",
    alt: "Greenhouse interior with plants",
    category: "Greenhouses",
    title: "Greenhouse Interior",
  },
  {
    id: "15",
    src: "/images/gallery/oysters-baskets.jpeg",
    alt: "Aquaculture greenhouse operations",
    category: "Greenhouses",
    title: "Fish Breeding Greenhouse",
  },
  {
    id: "16",
    src: "/images/gallery/team-site.jpeg",
    alt: "Mushroom or seedling greenhouse",
    category: "Greenhouses",
    title: "Integrated Farming",
  },
  // Equipment & Supplies
  {
    id: "17",
    src: "/images/gallery/transport.jpeg",
    alt: "Fish feed bags transported",
    category: "Equipment",
    title: "Fish Feed Supply",
  },
  {
    id: "18",
    src: "/images/gallery/fish-trucks.jpeg",
    alt: "Fish transport truck",
    category: "Equipment",
    title: "Fish Transport",
  },
  {
    id: "19",
    src: "/images/gallery/equipment-storage.jpeg",
    alt: "Irrigation pipes and equipment",
    category: "Equipment",
    title: "Irrigation Equipment",
  },
  {
    id: "20",
    src: "/images/gallery/oysters-harvest.jpeg",
    alt: "Fish in baskets and containers",
    category: "Equipment",
    title: "Harvest Containers",
  },
  // Team & Community
  {
    id: "21",
    src: "/images/gallery/team-site.jpeg",
    alt: "Team members on farm",
    category: "Team",
    title: "Expert Team",
  },
  {
    id: "22",
    src: "/images/gallery/catfish-ponds.jpeg",
    alt: "Client visiting fish farm",
    category: "Team",
    title: "Farm Visit",
  },
  {
    id: "23",
    src: "/images/gallery/team-site.jpeg",
    alt: "Team training session",
    category: "Team",
    title: "Training Program",
  },
];

const categories = ["All", "Aquaculture", "Drip Systems", "Greenhouses", "Equipment", "Team"] as const;

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<typeof categories[number]>("All");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const filteredImages =
    selectedCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  return (
    <main className="bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-20 pb-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1e1e6e] via-[#1e1e6e]/90 to-[#0a0f3a]" />

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
              Project Gallery
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto text-base md:text-lg leading-relaxed mb-2">
              Real projects from across Kenya showcasing our aquaculture expertise—from drip irrigation systems to greenhouse construction and thriving fish farms.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Pills */}
      <section className="py-8 bg-gray-50 border-b border-gray-200 sticky top-20 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full font-semibold text-sm transition-all ${
                  selectedCategory === cat
                    ? "bg-[#00b4d8] text-white shadow-lg"
                    : "bg-white text-gray-700 border border-gray-300 hover:border-[#00b4d8] hover:text-[#00b4d8]"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredImages.map((image, idx) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="relative group cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <div className="relative overflow-hidden rounded-xl aspect-square bg-gray-200 shadow-lg">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end p-4">
                    <div className="translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-white font-bold text-sm leading-tight">{image.title}</h3>
                      <p className="text-gray-200 text-xs mt-1">{image.category}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative max-w-2xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors z-10"
            >
              <X size={32} />
            </button>
            <div className="relative w-full aspect-video bg-gray-900 rounded-lg overflow-hidden">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain"
              />
            </div>
            <div className="mt-4 text-white">
              <h3 className="text-xl font-bold">{selectedImage.title}</h3>
              <p className="text-gray-300 mt-2">{selectedImage.alt}</p>
            </div>
          </motion.div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#1e1e6e] to-[#0a0f3a]">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Ready to Build Your Success Story?
            </h2>
            <p className="text-gray-300 max-w-xl mx-auto mb-8 text-sm leading-relaxed">
              See how our proven expertise can transform your aquaculture operations. Contact us today for a custom solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#00b4d8] text-[#1e1e6e] px-7 py-3 rounded-xl font-bold text-sm hover:bg-cyan-300 transition-colors"
              >
                Get Started <ArrowRight size={16} />
              </Link>
              <a
                href="tel:+254704460604"
                className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/30 text-white px-7 py-3 rounded-xl font-bold text-sm hover:bg-white/20 transition-colors"
              >
                Call Us Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
