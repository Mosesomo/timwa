"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  ChevronDown,
  ArrowRight,
  Building2,
  Sprout,
  Droplets,
  Wrench,
  Fish,
  GraduationCap,
  ShieldCheck,
  Waves,
  Store,
} from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import WhatsAppButton from "@/components/whatsapp-button";

const allServices = [
  {
    id: "pond-construction",
    icon: Building2,
    title: "Fish Pond Construction",
    shortDesc: "Expert pond construction services",
    fullDesc:
      "We specialise in constructing all types of fish ponds — earthen, concrete, lined, circular tanks, and raised ponds. Our expert team handles everything from site assessment to first harvest.",
    features: ["Earthen fish ponds", "Concrete fish ponds", "HDPE lined ponds", "Circular fish tanks", "Water inlet/outlet systems", "Drainage installation"],
    image: "/images/gallery/drip-line-1.jpeg",
  },
  {
    id: "greenhouse",
    icon: Sprout,
    title: "Greenhouse Construction",
    shortDesc: "Modern greenhouse setups",
    fullDesc:
      "Our greenhouse construction services deliver controlled-environment agriculture solutions, perfect for integrated farming and aquaponics in Kenya's varied climates.",
    features: ["Aquaponics integration", "Climate control", "Drip irrigation setup", "Ventilation systems", "Shade net covering", "Custom sizes"],
    image: "/images/gallery/team-2.jpeg",
  },
  {
    id: "drip-line",
    icon: Droplets,
    title: "Drip Line Installation",
    shortDesc: "Efficient irrigation systems",
    fullDesc:
      "Professional drip-line installation for optimal water distribution on your farm. Our systems reduce water wastage by 60% while increasing crop yields through precision irrigation.",
    features: ["Precision water delivery", "Water-efficient systems", "Automated irrigation", "Timer systems", "Fertigation capability", "Maintenance support"],
    image: "/images/gallery/drip-field.jpeg",
  },
  {
    id: "plumbing",
    icon: Wrench,
    title: "Water Farm Plumbing",
    shortDesc: "Complete plumbing solutions",
    fullDesc:
      "Comprehensive plumbing for fish farms: water circulation, filtration setups, aeration systems, and drainage. We ensure reliable water management for your aquaculture operations.",
    features: ["Water circulation", "Filtration installation", "Aeration systems", "Drainage solutions", "Pipe fitting & repairs", "Water storage tanks"],
    image: "/images/gallery/fish-plumbing.jpeg",
  },
  {
    id: "fingerlings",
    icon: Fish,
    title: "Fingerlings & Fish Feeds",
    shortDesc: "Quality fingerlings and feeds",
    fullDesc:
      "We supply certified tilapia and catfish fingerlings from quality breeding stock, alongside formulated fish feeds designed for Kenya's climate and water conditions.",
    features: ["Tilapia fingerlings", "Catfish fingerlings", "Starter feeds", "Grower feeds", "Finisher feeds", "Fish supplements"],
    image: "/images/gallery/tilapia-fry.jpeg",
  },
  {
    id: "training",
    icon: GraduationCap,
    title: "Fish Farming Training",
    shortDesc: "Comprehensive training programs",
    fullDesc:
      "Hands-on training programs covering pond management, fish breeding, feeding protocols, water quality testing, disease prevention, and farm business management.",
    features: ["Pond management", "Fish breeding", "Feeding techniques", "Water quality testing", "Disease prevention", "Business planning"],
    image: "/images/gallery/team-site.jpeg",
  },
  {
    id: "consultancy",
    icon: ShieldCheck,
    title: "Aquaculture Consultancy",
    shortDesc: "Expert guidance and planning",
    fullDesc:
      "Get professional advice on fish farm setup, commercial planning, feasibility studies, and production management tailored to your location and resources.",
    features: ["Fish farm setup", "Feasibility studies", "Production planning", "Water quality testing", "Farm expansion", "Profitability analysis"],
    image: "/images/gallery/greenhouse-team.jpeg",
  },
  {
    id: "equipment",
    icon: Waves,
    title: "Aquaculture Equipment",
    shortDesc: "Quality farming equipment",
    fullDesc:
      "Supply and installation of essential aquaculture equipment — drip pipes, hapa nets, harvesting containers, air blowers, storage tanks, and hatchery systems.",
    features: ["Drip irrigation pipes", "Harvesting nets", "Air blower machines", "Storage tanks", "Industrial basins", "Hatchery equipment"],
    image: "/images/gallery/equipment-storage.jpeg",
  },
  {
    id: "market-linkage",
    icon: Store,
    title: "Market Linkage",
    shortDesc: "Connect with fish buyers",
    fullDesc:
      "We connect fish farmers with reliable markets — hotels, restaurants, wholesalers, and traders. Sell your fish at fair prices with our established buyer network.",
    features: ["Local market access", "Hotel partnerships", "Restaurant connections", "Trader networks", "Export support", "Contract farming"],
    image: "/images/gallery/fish-trucks.jpeg",
  },
];

export default function ServicesPage() {
  const servicesRef = useRef(null);
  const servicesInView = useInView(servicesRef, { once: true, amount: 0.05 });

  return (
    <main className="bg-white">
      <Navbar />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative min-h-[65vh] flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0">
          <Image
            src="/images/gallery/drip-line-2.jpeg"
            alt="Fish farm Kenya"
            fill
            className="object-cover scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-white" />
          <div className="absolute inset-0 bg-[#0a1628]/25" />
        </div>

        {/* Grain overlay */}
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />

        <div className="container mx-auto px-4 relative z-10 text-white text-center py-36">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >


            <h1 className="text-5xl md:text-6xl font-extrabold mb-5 leading-tight tracking-tight">
              What We
              <span className="block text-[#38d9f5]">Offer</span>
            </h1>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="w-20 h-0.5 bg-[#38d9f5] mx-auto mb-7 origin-left"
            />

            <p className="text-base text-gray-200 max-w-xl mx-auto leading-relaxed">
              Comprehensive aquaculture solutions from pond construction to market linkage —
              everything you need for successful fish farming in Kenya.
            </p>
          </motion.div>

          <motion.a
            href="#services-list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/50 hover:text-white transition-colors text-xs tracking-widest uppercase gap-1"
          >
            <span>Explore Services</span>
            <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
              <ChevronDown size={20} />
            </motion.div>
          </motion.a>
        </div>
      </section>

      {/* ── Quick Nav Pills ──────────────────────────────────── */}
      <section className="bg-gray-50 border-b border-gray-200 py-5 sticky top-0 z-40 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
            {allServices.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="shrink-0 inline-flex items-center gap-1.5 bg-gray-100 hover:bg-[#38d9f5]/15 border border-gray-200 hover:border-[#38d9f5]/40 text-gray-600 hover:text-[#38d9f5] px-4 py-2 rounded-full text-xs font-semibold transition-all whitespace-nowrap"
              >
                <s.icon size={12} />
                {s.title.split(" ").slice(0, 2).join(" ")}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services List ────────────────────────────────────── */}
      <section id="services-list" className="py-20 bg-white" ref={servicesRef}>
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {allServices.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 50 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.65, delay: Math.min(index * 0.07, 0.4) }}
                className={`grid lg:grid-cols-2 gap-10 items-center`}
              >
                {/* Text */}
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-[#38d9f5]/10 rounded-xl flex items-center justify-center">
                      <service.icon className="w-5 h-5 text-[#38d9f5]" />
                    </div>
                    <span className="text-[#38d9f5] text-xs font-bold uppercase tracking-widest">Service</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3 leading-tight">
                    {service.title}
                  </h2>
                  <div className="w-12 h-0.5 bg-[#38d9f5] mb-5" />
                  <p className="text-gray-600 text-sm leading-relaxed mb-7">{service.fullDesc}</p>

                  <div className="grid grid-cols-2 gap-2.5 mb-8">
                    {service.features.map((f) => (
                      <div key={f} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#38d9f5] shrink-0" />
                        <span className="text-gray-600 text-xs">{f}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-[#1e1e6e] hover:bg-[#2a2a8a] text-white px-6 py-3 rounded-xl font-bold text-sm transition-all"
                  >
                    Request a Quote <ArrowRight size={15} />
                  </Link>
                </div>

                {/* Image */}
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="rounded-2xl overflow-hidden ring-1 ring-gray-200 shadow-2xl group">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={640}
                      height={420}
                      className="w-full h-72 md:h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/gallery/team-site.jpeg"
            alt="Fish farming"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#1e1e6e]/88" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-5">
              Need a Custom Solution?
            </h2>
            <p className="text-gray-200 text-sm mb-10 max-w-xl mx-auto leading-relaxed">
              Contact us to discuss your specific requirements. We provide tailored
              solutions for all aquaculture needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+254704460604"
                className="inline-flex items-center justify-center gap-2 bg-[#38d9f5] text-[#1e1e6e] px-7 py-3.5 rounded-xl font-bold text-sm hover:bg-[#22c8e6] transition-colors"
              >
                Call +254 704 460604
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/30 text-white px-7 py-3.5 rounded-xl font-bold text-sm hover:bg-white/20 transition-colors"
              >
                Send a Message <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
