"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  ArrowRight,
  Fish,
  Droplets,
  Users,
  Award,
  Building2,
  Sprout,
  Wrench,
  GraduationCap,
  Phone,
  CheckCircle2,
  TrendingUp,
  MapPin,
} from "lucide-react";

/* ─── Data ─────────────────────────────────────────────────────── */

const services = [
  {
    icon: Building2,
    title: "Fish Pond Construction",
    description:
      "Expert construction of earthen, concrete, lined, and circular fish ponds engineered for maximum yield.",
    link: "/services#pond-construction",
    accent: "#00b4d8",
  },
  {
    icon: Sprout,
    title: "Greenhouse Construction",
    description:
      "Modern greenhouse setups for controlled environment agriculture and aquaponics systems.",
    link: "/services#greenhouse",
    accent: "#52b788",
  },
  {
    icon: Droplets,
    title: "Drip Line Installation",
    description:
      "Efficient irrigation systems for optimal water distribution and farm productivity.",
    link: "/services#drip-line",
    accent: "#4895ef",
  },
  {
    icon: Wrench,
    title: "Water Farm Plumbing",
    description:
      "Complete plumbing solutions for fish farms, water circulation, and drainage systems.",
    link: "/services#plumbing",
    accent: "#f4a261",
  },
  {
    icon: Fish,
    title: "Fingerlings & Fish Feeds",
    description:
      "Quality tilapia and catfish fingerlings with premium fish feeds for optimal growth.",
    link: "/services#fingerlings",
    accent: "#00b4d8",
  },
  {
    icon: GraduationCap,
    title: "Fish Farming Training",
    description:
      "Comprehensive training programs covering all aspects of modern fish farming.",
    link: "/services#training",
    accent: "#9b5de5",
  },
];

const stats = [
  { value: "500+", label: "Projects Completed", icon: TrendingUp },
  { value: "10+", label: "Years Experience", icon: Award },
  { value: "1,000+", label: "Happy Farmers", icon: Users },
  { value: "24/7", label: "Support Available", icon: Phone },
];

const whyUs = [
  {
    icon: Award,
    title: "Expert Knowledge",
    body: "Over a decade of hands-on experience in aquaculture and fish farming across Kenya.",
  },
  {
    icon: Users,
    title: "Dedicated Support",
    body: "We walk with clients from project planning through to a successful, profitable harvest.",
  },
  {
    icon: Fish,
    title: "Quality Products",
    body: "Premium fingerlings, feeds, and equipment selected for Kenya's climate and species.",
  },
  {
    icon: MapPin,
    title: "Local Expertise",
    body: "Deep roots in Kenyan aquaculture — we know the terrain, regulations, and market.",
  },
];

const heroImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-28%20at%2021.15.05%20%282%29-BE1pYLURdl2B1tW7dkKjU1rFPmJM2T.jpeg",
    alt: "Fish pond construction in Kenya",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-28%20at%2021.15.07%20%282%29-nCDRUgFtxo2lgOtAEgkha6tHpuHTRw.jpeg",
    alt: "Fish farming operations in Kenya",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-28%20at%2021.15.02-rlUKEtmaoYDFLmGpInNouhlK18joBt.jpeg",
    alt: "Drip irrigation system installation",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-28%20at%2021.15.03%20%281%29-RRycqnJlyAa0h0YVvOqVLvpc4wdZHg.jpeg",
    alt: "Greenhouse construction in Kenya",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-28%20at%2021.14.59-mad64z54oKhUWEj4LdDaKwNK06JYDe.jpeg",
    alt: "Fish harvest and market preparation",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-28%20at%2021.15.06%20%282%29-JmmTVNTU6EMrfa39JoIA92mQ1lTcbc.jpeg",
    alt: "Team working in greenhouse facility",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-28%20at%2021.15.04%20%282%29-LNUel8y4UdsApsI6veFdezFY8JMtAr.jpeg",
    alt: "Fish breeding and aquaculture operations",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-28%20at%2021.15.00-VZgsNjNuW99H7L5vdlnxJzDo7IGNNp.jpeg",
    alt: "Catfish and fish species farming",
  },
];

/* ─── Animation Variants ─────────────────────────────────────── */

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.12,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

/* ─── Sub-components ─────────────────────────────────────────── */

type IconLike = React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
type ServiceLike = { title: string; icon: IconLike; description: string; link: string; accent: string };
type StatLike = { value: string; label: string; icon: IconLike };
type WhyUsLike = { title: string; body: string; icon: IconLike };

function StatCard({
  stat,
  index,
  inView,
}: {
  stat: StatLike;
  index: number;
  inView: boolean;
}) {
  const Icon = stat.icon;
  return (
    <motion.div
      custom={index}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      className="flex flex-col items-center text-center group"
    >
      <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-3 group-hover:bg-[#00b4d8]/30 transition-colors duration-300">
        <Icon className="w-5 h-5 text-[#00b4d8]" />
      </div>
      <div className="text-4xl font-black text-white tracking-tight mb-1">
        {stat.value}
      </div>
      <div className="text-sm text-blue-200/80 font-medium uppercase tracking-widest">
        {stat.label}
      </div>
    </motion.div>
  );
}

function ServiceCard({
  service,
  index,
  inView,
}: {
  service: ServiceLike;
  index: number;
  inView: boolean;
}) {
  const Icon = service.icon;
  return (
    <motion.div
      custom={index}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
    >
      <Link href={service.link}>
        <div className="group relative bg-white rounded-3xl p-7 h-full border border-gray-100 overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-400">
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-3xl"
            style={{ background: service.accent }}
          />
          <div
            className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left"
            style={{ background: service.accent }}
          />
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-colors duration-300"
            style={{ background: `${service.accent}15` }}
          >
            <Icon
              className="w-7 h-7 transition-colors duration-300"
              style={{ color: service.accent }}
            />
          </div>
          <h3 className="text-lg font-bold text-[#1e1e6e] mb-2 group-hover:text-[#00b4d8] transition-colors">
            {service.title}
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            {service.description}
          </p>
          <div
            className="mt-5 flex items-center gap-1.5 text-sm font-semibold transition-colors duration-300"
            style={{ color: service.accent }}
          >
            Learn more
            <ArrowRight
              size={14}
              className="group-hover:translate-x-1 transition-transform"
            />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

/* ─── Main Component ─────────────────────────────────────────── */

export default function HeroSection() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const statsRef = useRef(null);
  const whyRef = useRef(null);
  const ctaRef = useRef(null);

  const aboutInView = useInView(aboutRef, { once: true, amount: 0.25 });
  const servicesInView = useInView(servicesRef, {
    once: true,
    amount: 0.15,
  });
  const statsInView = useInView(statsRef, { once: true, amount: 0.3 });
  const whyInView = useInView(whyRef, { once: true, amount: 0.25 });
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.3 });

  const [currentImage, setCurrentImage] = useState(0);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isActive) {
        setCurrentImage((prev) => (prev + 1) % heroImages.length);
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [isActive]);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          {heroImages.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0 }}
              animate={{ opacity: i === currentImage ? 1 : 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover object-center scale-105"
                priority={i === 0}
              />
            </motion.div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-[#00b4d8]/15 to-transparent" />
        </motion.div>

        <motion.div
          className="container mx-auto px-4 relative z-10 text-white text-center py-28"
          style={{ opacity: heroOpacity }}
        >
          <motion.h1
            variants={fadeUp}
            custom={0}
            initial="hidden"
            animate="show"
            className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-[1.05] tracking-tight flex items-center justify-center gap-4 flex-wrap"
          >
            
            <span>
              Professional{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00b4d8] to-[#48cae4]">
                Aquaculture
              </span>
              <br />
              Fish Farming
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            custom={2}
            initial="hidden"
            animate="show"
            className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            From pond construction to complete aquaculture systems — everything you
            need for a thriving fish farming operation in Kenya.
          </motion.p>

          <motion.div
            variants={fadeUp}
            custom={3}
            initial="hidden"
            animate="show"
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/services"
              className="group inline-flex items-center justify-center gap-2.5 bg-[#00b4d8] hover:bg-[#0096c7] text-white px-8 py-4 rounded-2xl font-bold text-base transition-all duration-300 shadow-lg shadow-[#00b4d8]/30 hover:shadow-[#00b4d8]/50 hover:-translate-y-0.5"
            >
              Explore Services
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:border-white/50 px-8 py-4 rounded-2xl font-bold text-base transition-all duration-300"
            >
              Get a Free Quote
            </Link>
          </motion.div>

          <motion.div
            variants={fadeUp}
            custom={4}
            initial="hidden"
            animate="show"
            className="flex flex-wrap justify-center gap-6 mt-14"
          >
            {[
              "500+ Ponds Built",
              "10+ Years in Kenya",
              "Tilapia & Catfish Experts",
            ].map((t) => (
              <div key={t} className="flex items-center gap-2 text-white/70 text-sm">
                <CheckCircle2 size={15} className="text-[#00b4d8]" />
                {t}
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/50 hover:text-white/80 transition-colors z-10"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown size={20} />
          </motion.div>
        </motion.a>
      </section>

      {/* ── ABOUT ──────────────────────────────────────────────── */}
      <section id="about" className="py-24 bg-white overflow-hidden" ref={aboutRef}>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              animate={aboutInView ? "show" : "hidden"}
            >
              <div className="inline-flex items-center gap-2 bg-[#00b4d8]/10 text-[#00b4d8] text-sm font-semibold px-4 py-1.5 rounded-full mb-4 tracking-wide">
                About Timwa Fisheries
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-[#1e1e6e] mb-5 leading-tight">
                Building Thriving Fish Farms Across Kenya
              </h2>
              <div className="w-16 h-1.5 bg-gradient-to-r from-[#00b4d8] to-[#48cae4] rounded-full mb-6" />
              <p className="text-gray-600 leading-relaxed mb-5">
                Timwa Fisheries was born from real farming experience. We&apos;ve built hundreds of fish ponds across Kenya—from Kisii to Nakuru, Murang&apos;a to Kajiado. Every project taught us what works in our climate, soil, and water conditions.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Today, we partner with individual farmers, cooperatives, and commercial operations to turn land into productive aquaculture systems. Whether it&apos;s a half-hectare family pond or a 5-pond cooperative venture, we handle the design, construction, training, and market connections.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-2 bg-[#1e1e6e] text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-[#2a2a8a] transition-colors"
                >
                  Our Story
                  <ArrowRight
                    size={15}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
                <a
                  href="tel:+254704460604"
                  className="inline-flex items-center gap-2 text-[#00b4d8] font-semibold text-sm hover:underline"
                >
                  <Phone size={15} />
                  +254 704 460604
                </a>
              </div>
            </motion.div>

            <motion.div
              variants={fadeRight}
              initial="hidden"
              animate={aboutInView ? "show" : "hidden"}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-3xl overflow-hidden h-64 shadow-xl">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-28%20at%2021.15.07%20%282%29-nCDRUgFtxo2lgOtAEgkha6tHpuHTRw.jpeg"
                    alt="Fish farming work in progress"
                    width={300}
                    height={256}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="rounded-3xl overflow-hidden h-64 shadow-xl mt-8">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-28%20at%2021.15.04%20%282%29-LNUel8y4UdsApsI6veFdezFY8JMtAr.jpeg"
                    alt="Fish breeding and production"
                    width={300}
                    height={256}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
              <motion.div
                initial={{ scale: 0.7, opacity: 0 }}
                animate={aboutInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                className="absolute -bottom-4 -left-4 bg-[#1e1e6e] text-white px-6 py-4 rounded-2xl shadow-2xl"
              >
                <div className="text-3xl font-black text-[#00b4d8]">10+</div>
                <div className="text-xs text-blue-200 font-medium uppercase tracking-wider">
                  Years Experience
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────────── */}
      <section className="py-24 bg-gray-50/80" ref={servicesRef}>
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeUp}
            custom={0}
            initial="hidden"
            animate={servicesInView ? "show" : "hidden"}
            className="text-center max-w-2xl mx-auto mb-14"
          >
            <div className="inline-flex items-center gap-2 bg-[#00b4d8]/10 text-[#00b4d8] text-sm font-semibold px-4 py-1.5 rounded-full mb-4 tracking-wide">
              What We Do
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-[#1e1e6e] mb-4 leading-tight">
              Everything for Your Fish Farm
            </h2>
            <p className="text-gray-500 leading-relaxed">
              From site selection and pond construction to harvesting and market sales—we provide complete aquaculture services designed for Kenya&apos;s climate and conditions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                service={service as ServiceLike}
                index={index}
                inView={servicesInView}
              />
            ))}
          </div>

          <motion.div
            variants={fadeUp}
            custom={7}
            initial="hidden"
            animate={servicesInView ? "show" : "hidden"}
            className="text-center mt-12"
          >
            <Link
              href="/services"
              className="group inline-flex items-center gap-2.5 bg-[#1e1e6e] hover:bg-[#2a2a8a] text-white px-8 py-4 rounded-2xl font-bold text-sm transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-[#1e1e6e]/20"
            >
              View All Services
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── STATS ─────────────────────────────────────────────────── */}
      <section className="relative py-20 overflow-hidden" ref={statsRef}>
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/37314878/pexels-photo-37314878.jpeg"
            alt="Fish farming pond"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#1e1e6e]/90" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#00b4d8]/20 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {stats.map((stat, index) => (
              <StatCard
                key={stat.label}
                stat={stat as StatLike}
                index={index}
                inView={statsInView}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ────────────────────────────────────────── */}
      <section className="py-24 bg-white overflow-hidden" ref={whyRef}>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              animate={whyInView ? "show" : "hidden"}
              className="relative order-2 lg:order-1"
            >
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-3xl overflow-hidden h-56 shadow-lg">
                  <Image
                    src="https://images.pexels.com/photos/35030993/pexels-photo-35030993.jpeg"
                    alt="Fish farming Kenya"
                    width={280}
                    height={224}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="rounded-3xl overflow-hidden h-56 shadow-lg mt-6">
                  <Image
                    src="https://images.pexels.com/photos/35096090/pexels-photo-35096090.jpeg"
                    alt="Greenhouse farming Kenya"
                    width={280}
                    height={224}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="rounded-3xl overflow-hidden h-56 shadow-lg -mt-6">
                  <Image
                    src="https://images.pexels.com/photos/10606633/pexels-photo-10606633.jpeg"
                    alt="Irrigation drip line Kenya"
                    width={280}
                    height={224}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="rounded-3xl overflow-hidden h-56 shadow-lg">
                  <Image
                    src="https://images.pexels.com/photos/29994589/pexels-photo-29994589.jpeg"
                    alt="Aquaculture pond Kenya"
                    width={280}
                    height={224}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeRight}
              initial="hidden"
              animate={whyInView ? "show" : "hidden"}
              className="order-1 lg:order-2"
            >
              <div className="inline-flex items-center gap-2 bg-[#00b4d8]/10 text-[#00b4d8] text-sm font-semibold px-4 py-1.5 rounded-full mb-4 tracking-wide">
                Why Choose Us
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-[#1e1e6e] mb-4 leading-tight">
                Your Trusted Partner in Aquaculture
              </h2>
              <div className="w-16 h-1.5 bg-gradient-to-r from-[#00b4d8] to-[#48cae4] rounded-full mb-8" />

              <div className="space-y-6">
                {whyUs.map((item: WhyUsLike, i: number) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.title}
                      custom={i}
                      variants={fadeUp}
                      initial="hidden"
                      animate={whyInView ? "show" : "hidden"}
                      className="flex gap-4 group"
                    >
                      <div className="w-12 h-12 bg-[#00b4d8]/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#00b4d8] transition-colors duration-300">
                        <Icon className="w-5 h-5 text-[#00b4d8] group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-[#1e1e6e] mb-1">
                          {item.title}
                        </h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                          {item.body}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────── */}
      <section className="relative py-24 overflow-hidden" ref={ctaRef}>
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/7509424/pexels-photo-7509424.jpeg"
            alt="Fish farming Kenya"
            fill
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#00b4d8]/95 to-[#0096c7]/90" />
        </div>

        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#1e1e6e]/30 rounded-full blur-2xl translate-y-1/2 -translate-x-1/3" />

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            variants={fadeUp}
            custom={0}
            initial="hidden"
            animate={ctaInView ? "show" : "hidden"}
          >
            <div className="inline-flex items-center gap-2 bg-white/20 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wide border border-white/30">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              Free Consultation Available
            </div>

            <h2 className="text-3xl md:text-5xl font-black text-white mb-5 leading-tight">
              Ready to Start Your Fish
              <br />
              Farming Journey?
            </h2>

            <p className="text-lg text-white/85 mb-10 max-w-xl mx-auto leading-relaxed">
              Contact us today and let our experts help you build a profitable
              aquaculture business in Kenya.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+254704460604"
                className="group inline-flex items-center justify-center gap-2.5 bg-white text-[#1e1e6e] px-8 py-4 rounded-2xl font-bold text-base hover:bg-gray-50 transition-all duration-300 shadow-xl hover:-translate-y-0.5"
              >
                <Phone size={18} />
                Call +254 704 460604
              </a>
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2.5 bg-[#1e1e6e] hover:bg-[#2a2a8a] text-white px-8 py-4 rounded-2xl font-bold text-base transition-all duration-300 hover:-translate-y-0.5 shadow-xl"
              >
                Get in Touch
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
