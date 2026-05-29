"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
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
  { id: "1",  src: "/images/gallery/drip-line-1.jpeg",       alt: "Fish pond construction",          category: "Aquaculture",  title: "Pond Development"          },
  { id: "2",  src: "/images/gallery/drip-line-2.jpeg",       alt: "Fish farming in Kenya",           category: "Aquaculture",  title: "Aquaculture Work"          },
  { id: "3",  src: "/images/gallery/fish-catch.jpeg",        alt: "Fish harvest tilapia",            category: "Aquaculture",  title: "Tilapia Harvest"           },
  { id: "4",  src: "/images/gallery/catfish.jpeg",           alt: "Catfish processing",              category: "Aquaculture",  title: "Catfish Harvest"           },
  { id: "5",  src: "/images/gallery/catfish-fry.jpeg",       alt: "Eels ready for sale",             category: "Aquaculture",  title: "Eel Production"            },
  { id: "6",  src: "/images/gallery/oysters-harvest.jpeg",   alt: "Shell fish processing",           category: "Aquaculture",  title: "Shellfish Operation"       },
  { id: "7",  src: "/images/gallery/tilapia-adult.jpeg",     alt: "Fish quality check",              category: "Aquaculture",  title: "Quality Fish"              },
  { id: "8",  src: "/images/gallery/tilapia-fry.jpeg",       alt: "Fish fingerlings",                category: "Aquaculture",  title: "Fingerling Stock"          },
  { id: "9",  src: "/images/gallery/drip-installation.jpeg", alt: "Land preparation",                category: "Drip Systems", title: "Farm Preparation"          },
  { id: "10", src: "/images/gallery/pond-setup.jpeg",        alt: "Drip line installation",          category: "Drip Systems", title: "Installing Drip Lines"     },
  { id: "11", src: "https://images.pexels.com/photos/10606633/pexels-photo-10606633.jpeg", alt: "Water storage and drip", category: "Drip Systems", title: "Drip System Ready" },
  { id: "12", src: "/images/gallery/equipment-storage.jpeg", alt: "Irrigation drip detail",          category: "Drip Systems", title: "Drip System Detail"        },
  { id: "13", src: "/images/gallery/greenhouse-structure.jpeg",   alt: "Greenhouse net house",            category: "Greenhouses",  title: "Greenhouse Structure"      },
  { id: "14", src: "https://images.pexels.com/photos/35096090/pexels-photo-35096090.jpeg", alt: "Greenhouse interior", category: "Greenhouses", title: "Greenhouse Interior" },
  { id: "15", src: "/images/gallery/oysters-baskets.jpeg",   alt: "Aquaculture greenhouse",          category: "Greenhouses",  title: "Fish Breeding Greenhouse"  },
  { id: "17", src: "/images/gallery/transport.jpeg",         alt: "Fish feed bags transported",      category: "Equipment",    title: "Fish Feed Supply"          },
  { id: "18", src: "/images/gallery/fish-trucks.jpeg",       alt: "Fish transport truck",            category: "Equipment",    title: "Fish Transport"            },
  { id: "19", src: "/images/gallery/equipment-storage.jpeg", alt: "Irrigation pipes and equipment",  category: "Equipment",    title: "Irrigation Equipment"      },
  { id: "20", src: "/images/gallery/oysters-harvest.jpeg",   alt: "Fish in baskets",                 category: "Equipment",    title: "Harvest Containers"        },
  { id: "21", src: "/images/gallery/team-2.jpeg",         alt: "Team members on farm",            category: "Team",         title: "Expert Team"               },
  { id: "22", src: "/images/gallery/greenhouse-team.jpeg",     alt: "Client visiting fish farm",       category: "Team",         title: "Farm Visit"                },
];

const categories = ["All", "Aquaculture", "Drip Systems", "Greenhouses", "Equipment"] as const;

const categoryAccents: Record<string, string> = {
  Aquaculture:  "#00b4d8",
  "Drip Systems": "#4895ef",
  Greenhouses:  "#52b788",
  Equipment:    "#f4a261",
  Team:         "#9b5de5",
};

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<typeof categories[number]>("All");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const filteredImages =
    selectedCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  const currentIndex = selectedImage
    ? filteredImages.findIndex((img) => img.id === selectedImage.id)
    : -1;

  const goPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentIndex > 0) setSelectedImage(filteredImages[currentIndex - 1]);
  };
  const goNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentIndex < filteredImages.length - 1) setSelectedImage(filteredImages[currentIndex + 1]);
  };

  return (
    <main style={{ background: "#f8f9fc" }}>
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative min-h-[58vh] flex items-end overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/36386087/pexels-photo-36386087.jpeg"
            alt="Kenyan fish farm"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Cinematic layered overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#05090f] via-[#0a1628]/70 to-[#0a1628]/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#05090f]/60 via-transparent to-transparent" />
        </div>

        {/* Decorative grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage: "linear-gradient(rgba(0,180,216,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,180,216,1) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        {/* Content — pinned to bottom-left */}
        <div className="container mx-auto px-6 relative z-10 pb-14 pt-40">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex items-center gap-3 mb-5"
            >
              <div className="w-8 h-px" style={{ background: "#00b4d8" }} />
              <span
                className="text-xs font-bold tracking-[0.25em] uppercase"
                style={{ color: "#00b4d8" }}
              >
                Our Work in Pictures
              </span>
            </motion.div>

            <h1
              className="font-extrabold text-white leading-[1.08] mb-5"
              style={{ fontSize: "clamp(2.4rem, 6vw, 4rem)" }}
            >
              Real Projects,<br />
              <span style={{ color: "#00b4d8" }}>Real Results</span>
            </h1>

            <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
              From tilapia ponds in Rift Valley to greenhouse systems in Central Kenya —
              explore our work across the country.
            </p>

            {/* Stat strip */}
            <div className="flex flex-wrap gap-8 mt-10">
              {[["22+", "Projects Shown"], ["5", "Categories"], ["Nationwide", "Coverage"]].map(([val, lbl]) => (
                <div key={lbl}>
                  <div
                    className="text-2xl font-black"
                    style={{ color: "#00b4d8" }}
                  >
                    {val}
                  </div>
                  <div
                    className="text-xs font-semibold tracking-wider uppercase mt-0.5"
                    style={{ color: "rgba(255,255,255,0.45)" }}
                  >
                    {lbl}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FILTER BAR ───────────────────────────────────────────── */}
      <div
        className="sticky top-16 z-40 border-b"
        style={{ background: "#fff", borderColor: "#e5e7eb" }}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide py-4">
            {categories.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <motion.button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  whileTap={{ scale: 0.95 }}
                  className="flex-shrink-0 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200"
                  style={{
                    background: active ? "#1e1e6e" : "transparent",
                    color: active ? "#fff" : "#6b7280",
                    border: active ? "2px solid #1e1e6e" : "2px solid #e5e7eb",
                  }}
                  onMouseEnter={e => {
                    if (!active) {
                      (e.currentTarget as HTMLButtonElement).style.borderColor = "#1e1e6e";
                      (e.currentTarget as HTMLButtonElement).style.color = "#1e1e6e";
                    }
                  }}
                  onMouseLeave={e => {
                    if (!active) {
                      (e.currentTarget as HTMLButtonElement).style.borderColor = "#e5e7eb";
                      (e.currentTarget as HTMLButtonElement).style.color = "#6b7280";
                    }
                  }}
                >
                  {cat}
                  <span
                    className="ml-2 text-xs px-1.5 py-0.5 rounded-full"
                    style={{
                      background: active ? "rgba(255,255,255,0.2)" : "#f3f4f6",
                      color: active ? "#fff" : "#9ca3af",
                    }}
                  >
                    {cat === "All"
                      ? galleryImages.length
                      : galleryImages.filter((i) => i.category === cat).length}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── GALLERY GRID ─────────────────────────────────────────── */}
      <section className="py-14" style={{ background: "#f8f9fc" }}>
        <div className="container mx-auto px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {filteredImages.map((image, idx) => {
                const accent = categoryAccents[image.category] ?? "#00b4d8";
                /* Every 7th image spans 2 cols for visual rhythm */
                const wide = idx % 7 === 0;
                return (
                  <motion.div
                    key={image.id}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.04 }}
                    className={`group relative cursor-pointer ${wide ? "sm:col-span-2 lg:col-span-1" : ""}`}
                    onClick={() => setSelectedImage(image)}
                  >
                    <div
                      className="relative overflow-hidden rounded-2xl shadow-sm"
                      style={{ aspectRatio: wide ? "16/9" : "4/3" }}
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.07]"
                      />

                      {/* Dark gradient overlay always present at bottom */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                      {/* Hover overlay */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ background: "rgba(0,0,0,0.3)" }}
                      />

                      {/* Category chip — top left */}
                      <div
                        className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-white text-[10px] font-bold tracking-wider uppercase"
                        style={{ background: `${accent}cc`, backdropFilter: "blur(6px)" }}
                      >
                        {image.category}
                      </div>

                      {/* Zoom icon — top right on hover */}
                      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div
                          className="w-8 h-8 rounded-full flex items-center justify-center"
                          style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)" }}
                        >
                          <ZoomIn size={14} color="#fff" />
                        </div>
                      </div>

                      {/* Title — bottom */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-white font-bold text-sm leading-tight">{image.title}</h3>
                        <div
                          className="mt-1.5 w-0 group-hover:w-8 transition-all duration-500 h-0.5 rounded"
                          style={{ background: accent }}
                        />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>

          {filteredImages.length === 0 && (
            <div className="text-center py-24 text-gray-400">No images in this category.</div>
          )}
        </div>
      </section>

      {/* ── LIGHTBOX ─────────────────────────────────────────────── */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: "rgba(5,9,15,0.92)", backdropFilter: "blur(12px)" }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 flex items-center gap-1.5 text-white/60 hover:text-white transition-colors text-sm"
              >
                <X size={18} /> Close
              </button>

              {/* Image */}
              <div className="relative w-full rounded-2xl overflow-hidden bg-black" style={{ aspectRatio: "16/9" }}>
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Meta */}
              <div className="mt-4 flex items-start justify-between">
                <div>
                  <span
                    className="text-xs font-bold tracking-wider uppercase"
                    style={{ color: categoryAccents[selectedImage.category] ?? "#00b4d8" }}
                  >
                    {selectedImage.category}
                  </span>
                  <h3 className="text-white font-bold text-lg mt-0.5">{selectedImage.title}</h3>
                  <p className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.45)" }}>
                    {selectedImage.alt}
                  </p>
                </div>

                {/* Prev / Next */}
                <div className="flex gap-2 mt-1">
                  <button
                    onClick={goPrev}
                    disabled={currentIndex === 0}
                    className="w-9 h-9 rounded-full flex items-center justify-center transition-all disabled:opacity-30"
                    style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)" }}
                  >
                    <ChevronLeft size={16} color="#fff" />
                  </button>
                  <button
                    onClick={goNext}
                    disabled={currentIndex === filteredImages.length - 1}
                    className="w-9 h-9 rounded-full flex items-center justify-center transition-all disabled:opacity-30"
                    style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)" }}
                  >
                    <ChevronRight size={16} color="#fff" />
                  </button>
                </div>
              </div>

              {/* Progress dots */}
              <div className="flex justify-center gap-1.5 mt-5">
                {filteredImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={(e) => { e.stopPropagation(); setSelectedImage(filteredImages[i]); }}
                    className="rounded-full transition-all duration-300"
                    style={{
                      width: i === currentIndex ? 20 : 6,
                      height: 6,
                      background: i === currentIndex ? "#00b4d8" : "rgba(255,255,255,0.2)",
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="relative py-24 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/36618323/pexels-photo-36618323.jpeg"
            alt="Fish farming Kenya"
            fill
            className="object-cover opacity-20"
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(135deg, #1e1e6e 0%, #0a0f3a 100%)" }}
          />
        </div>

        {/* Glow orb */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(0,180,216,0.12) 0%, transparent 70%)" }}
        />

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span
              className="text-xs font-bold tracking-[0.25em] uppercase mb-4 block"
              style={{ color: "#00b4d8" }}
            >
              Let's Build Together
            </span>

            <h2
              className="font-extrabold text-white mb-5 leading-tight"
              style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}
            >
              Ready to Build Your<br />Success Story?
            </h2>

            <p
              className="max-w-xl mx-auto mb-10 text-base leading-relaxed"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              See how our proven expertise can transform your aquaculture operations.
              Contact us today for a custom solution.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-sm transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: "#00b4d8",
                  color: "#fff",
                  boxShadow: "0 0 40px rgba(0,180,216,0.35)",
                }}
              >
                Get Started <ArrowRight size={16} />
              </Link>
              <a
                href="tel:+254704460604"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-sm transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  color: "#fff",
                  border: "1px solid rgba(255,255,255,0.2)",
                  backdropFilter: "blur(12px)",
                }}
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