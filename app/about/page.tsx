"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ChevronDown, ArrowRight, Target, Eye, Heart } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import WhatsAppButton from "@/components/whatsapp-button";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To provide high-quality aquaculture solutions and support sustainable fish farming across Kenya, empowering farmers with knowledge, resources, and technology.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To become the leading aquaculture solutions provider in East Africa, recognised for excellence in fish farming consultancy, construction, and training.",
  },
  {
    icon: Heart,
    title: "Our Values",
    description:
      "Integrity, quality, sustainability, and customer satisfaction — in everything we do. We believe in building lasting relationships with our clients.",
  },
];

const milestones = [
  { year: "2014", title: "Company Founded", description: "Timwa Fisheries was established by Martin Nguri with a vision to transform fish farming in Kenya." },
  { year: "2016", title: "Expanded Services", description: "Added greenhouse construction and irrigation services to our portfolio." },
  { year: "2019", title: "500+ Projects", description: "Reached a milestone of completing over 500 successful fish farming projects." },
  { year: "2022", title: "Training Center", description: "Launched comprehensive fish farming training programs for aspiring farmers." },
  { year: "2024", title: "Regional Growth", description: "Expanded operations to serve clients across multiple counties in Kenya." },
];

export default function AboutPage() {
  const missionRef = useRef(null);
  const missionInView = useInView(missionRef, { once: true, amount: 0.2 });
  const timelineRef = useRef(null);
  const timelineInView = useInView(timelineRef, { once: true, amount: 0.15 });

  return (
    <main className="bg-white">
      <Navbar />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative min-h-[68vh] flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0">
          {/* Kenyan tilapia fish farm / pond image */}
          <Image
            src="https://images.pexels.com/photos/11035625/pexels-photo-11035625.jpeg"
            alt="Fish farming Kenya"
            fill
            className="object-cover scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-white" />
          <div className="absolute inset-0 bg-[#0a1628]/25" />
        </div>

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
              Our Story,
              <span className="block text-[#38d9f5]">Our Purpose</span>
            </h1>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="w-20 h-0.5 bg-[#38d9f5] mx-auto mb-7 origin-left"
            />

            <p className="text-base text-gray-200 max-w-xl mx-auto leading-relaxed">
              Pioneering sustainable fish farming solutions in Kenya since 2014.
              Founded by Martin Nguri with a passion for aquaculture.
            </p>
          </motion.div>

          <motion.a
            href="#story"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/50 hover:text-white transition-colors text-xs tracking-widest uppercase gap-1"
          >
            <span>Learn More</span>
            <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
              <ChevronDown size={20} />
            </motion.div>
          </motion.a>
        </div>
      </section>

      {/* ── Our Story ────────────────────────────────────────── */}
      <section id="story" className="py-28 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="text-[#38d9f5] text-xs font-bold uppercase tracking-widest">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2 mb-5 leading-tight">
                Building a Better Future<br />for Fish Farming
              </h2>
              <div className="w-14 h-0.5 bg-[#38d9f5] mb-8" />
              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                Timwa Fisheries was founded by Martin Nguri with a clear mission: to make professional
                aquaculture accessible to farmers across Kenya. What started as a small consultancy
                has grown into a comprehensive aquaculture solutions provider.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                Over the years, we have helped hundreds of farmers establish successful fish farming
                operations — from small backyard ponds to large commercial ventures — bringing the
                same dedication and expertise to every project.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Today, Timwa Fisheries offers pond construction, greenhouse construction, drip line
                installation, water farm plumbing, training, and market linkage. We continue to
                innovate to meet the evolving needs of Kenya&apos;s aquaculture industry.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              {/* Main image */}
              <div className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-gray-200">
                <Image
                  src="https://images.pexels.com/photos/35991863/pexels-photo-35991863.jpeg"
                  alt="Fish farming Kenya"
                  width={640}
                  height={460}
                  className="w-full h-[360px] object-cover"
                />
              </div>
              {/* Floating card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute -bottom-5 -right-5 bg-[#38d9f5] text-[#1e1e6e] p-5 rounded-xl shadow-2xl"
              >
                <div className="text-3xl font-extrabold leading-none">10+</div>
                <div className="text-xs font-bold uppercase tracking-wide mt-0.5">Years of Excellence</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Mission / Vision / Values ────────────────────────── */}
      <section className="py-28 bg-white" ref={missionRef}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={missionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-14"
          >
            <span className="text-[#38d9f5] text-xs font-bold uppercase tracking-widest">What Drives Us</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2 leading-tight">
              Mission, Vision & Values
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5">
            {values.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={missionInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-gray-50 border border-gray-200 p-8 rounded-2xl hover:border-[#38d9f5]/30 hover:bg-[#38d9f5]/5 transition-all group text-center"
              >
                <div className="w-14 h-14 bg-[#38d9f5]/10 group-hover:bg-[#38d9f5]/20 rounded-xl flex items-center justify-center mx-auto mb-5 transition-colors">
                  <item.icon className="w-7 h-7 text-[#38d9f5]" />
                </div>
                <h3 className="text-base font-extrabold text-gray-900 mb-3 tracking-tight">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ─────────────────────────────────────────── */}
      <section className="py-28 bg-gray-50" ref={timelineRef}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={timelineInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-14"
          >
            <span className="text-[#38d9f5] text-xs font-bold uppercase tracking-widest">Our Journey</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">Key Milestones</h2>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                animate={timelineInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-6 mb-8 last:mb-0"
              >
                <div className="flex flex-col items-center shrink-0">
                  <div className="w-14 h-14 bg-[#38d9f5] text-[#1e1e6e] rounded-xl flex items-center justify-center font-extrabold text-xs tracking-wide">
                    {m.year}
                  </div>
                  {i < milestones.length - 1 && (
                    <div className="w-px flex-1 bg-gray-300  mt-2" />
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <h3 className="text-base font-extrabold text-gray-900 mb-1.5">{m.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{m.description}</p>
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
            src="https://images.pexels.com/photos/9743471/pexels-photo-9743471.jpeg"
            alt="Fish farming"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#1e1e6e]/75" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-5 leading-tight">
              Ready to Partner With Us?
            </h2>
            <p className="text-gray-200 text-sm mb-10 max-w-xl mx-auto leading-relaxed">
              Let us help you build a successful fish farming operation.
              Contact us today for a free consultation.
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
                Get in Touch <ArrowRight size={16} />
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