"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, TrendingUp, Users } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import WhatsAppButton from "@/components/whatsapp-button";

const projects = [
  {
    id: 1,
    title: "Kiambu Drip Irrigation Farm",
    location: "Kiambu County",
    type: "Drip System Installation",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-28%20at%2021.15.02-rlUKEtmaoYDFLmGpInNouhlK18joBt.jpeg",
    description:
      "A 2-hectare vegetable farm in Kiambu transformed with modern drip irrigation. The system reduced water usage by 60% while increasing yield by 45% in the first season.",
    challenge:
      "The farm was struggling with inconsistent water distribution and high water bills. Traditional flooding irrigation was inefficient and draining their budget.",
    solution:
      "We designed and installed a precision drip system with timer controls and fertigation capability, allowing the farmer to apply water and nutrients exactly where needed.",
    results: [
      "60% reduction in water consumption",
      "45% increase in vegetable yield",
      "50% lower water bills within 6 months",
      "Extended growing season year-round",
    ],
    testimonial: {
      name: "Samuel Kipchoge",
      role: "Farm Owner",
      text: "The drip system changed everything. I'm using less water, growing more vegetables, and my costs have dropped significantly. Timwa's team was professional and supportive throughout.",
    },
  },
  {
    id: 2,
    title: "Nakuru Fish Pond Development",
    location: "Nakuru County",
    type: "Fish Pond Construction",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-28%20at%2021.15.05%20%282%29-BE1pYLURdl2B1tW7dkKjU1rFPmJM2T.jpeg",
    description:
      "Construction of a 0.5-hectare fish pond from site selection to first harvest. The farm now produces 2 tonnes of tilapia every 6 months with excellent market demand.",
    challenge:
      "The farmer had land but no expertise in pond construction. They were concerned about water quality, fish health, and whether aquaculture would be profitable in their area.",
    solution:
      "We handled everything: site assessment, pond engineering, water inlet/outlet installation, and comprehensive training on fish pond management and feeding protocols.",
    results: [
      "First harvest: 1.2 tonnes in 5 months",
      "Current production: 2 tonnes per cycle",
      "98% fish survival rate",
      "Monthly income: Ksh 80,000-120,000",
    ],
    testimonial: {
      name: "Grace Kiplagat",
      role: "Fish Farmer",
      text: "I was skeptical at first, but Timwa's guidance made everything clear. My fish are healthy, growing fast, and I'm selling them directly to hotels in Nakuru. It's become my main income source.",
    },
  },
  {
    id: 3,
    title: "Murang'a Greenhouse Aquaponics",
    location: "Murang'a County",
    type: "Greenhouse Construction",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-28%20at%2021.15.03%20%281%29-RRycqnJlyAa0h0YVvOqVLvpc4wdZHg.jpeg",
    description:
      "An integrated aquaponics greenhouse where fish waste nutrients grow vegetables without synthetic fertilizers. The system produces both fresh fish and organic vegetables.",
    challenge:
      "The farmer wanted year-round vegetable production but faced seasonal water scarcity and high fertilizer costs. They wanted a sustainable, integrated approach.",
    solution:
      "We designed and built a greenhouse aquaponics system combining fish farming with vegetable production. Fish nutrients cycle through the system, eliminating the need for commercial fertilizers.",
    results: [
      "Year-round vegetable production",
      "90% reduction in fertilizer costs",
      "Fish harvest: 400kg every 4 months",
      "Vegetable yield: 3 tonnes per season",
    ],
    testimonial: {
      name: "Peter Murigi",
      role: "Integrated Farmer",
      text: "This aquaponics system is magical. I'm growing vegetables and raising fish in the same space. No commercial fertilizers needed, and everything is organic. My customers pay premium prices.",
    },
  },
  {
    id: 4,
    title: "Kisii Community Fish Farming Cooperative",
    location: "Kisii County",
    type: "Multiple Fish Ponds",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-28%20at%2021.15.07%20%282%29-nCDRUgFtxo2lgOtAEgkha6tHpuHTRw.jpeg",
    description:
      "A cooperative of 15 farmers developed 5 shared fish ponds with professional management. The cooperative now generates monthly income for all members while creating local employment.",
    challenge:
      "Individual farmers had limited land and capital. They needed a cooperative model but lacked expertise in collaborative farm management and fish production.",
    solution:
      "We facilitated the cooperative structure, designed 5 interconnected ponds, provided intensive training, and established market linkages with local traders and restaurants.",
    results: [
      "5 productive ponds across 2 hectares",
      "15 farming families with steady income",
      "Combined monthly harvest: 3 tonnes",
      "Direct market links with 8 traders",
    ],
    testimonial: {
      name: "Cooperative Chair - Joyce Wanjiru",
      role: "Cooperative Leader",
      text: "Before this, we had no income during rainy seasons. Now our fish ponds provide year-round income. Timwa didn't just build the ponds—they built our confidence and connected us to markets.",
    },
  },
];

const projectStats = [
  { number: "50+", label: "Projects Completed", icon: TrendingUp },
  { number: "800+", label: "Farmers Trained", icon: Users },
  { number: "2M+", label: "Fish Produced", icon: "🐟" },
];

export default function ProjectsPage() {
  return (
    <main className="bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden pt-24">
        <div className="absolute inset-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-28%20at%2021.15.04%20%282%29-LNUel8y4UdsApsI6veFdezFY8JMtAr.jpeg"
            alt="Farm projects"
            fill
            className="object-cover scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-white" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-white text-center py-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
              Our Success
              <span className="block text-[#00b4d8]">Stories</span>
            </h1>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="w-24 h-1 bg-[#00b4d8] mx-auto mb-6 origin-center"
            />
            <p className="text-base text-gray-200 max-w-2xl mx-auto leading-relaxed">
              Real projects, real results. Meet the farmers and communities who've transformed their operations with Timwa's expertise and support.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#1e1e6e]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projectStats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center text-white"
              >
                <div className="text-4xl md:text-5xl font-extrabold text-[#00b4d8] mb-2">
                  {stat.number}
                </div>
                <p className="text-gray-300 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {projects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Image */}
                  <div className={`relative h-80 lg:h-auto ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className={`p-8 md:p-12 flex flex-col justify-center ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-2 h-2 rounded-full bg-[#00b4d8]" />
                      <span className="text-[#00b4d8] text-xs font-bold uppercase tracking-widest">
                        {project.location}
                      </span>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">
                      {project.title}
                    </h2>
                    <p className="text-gray-600 text-sm font-semibold mb-4">{project.type}</p>

                    <p className="text-gray-700 text-sm leading-relaxed mb-6">{project.description}</p>

                    {/* Challenge & Solution */}
                    <div className="space-y-4 mb-6">
                      <div>
                        <h3 className="font-bold text-gray-900 text-sm mb-1">The Challenge</h3>
                        <p className="text-gray-600 text-xs leading-relaxed">{project.challenge}</p>
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-sm mb-1">Our Solution</h3>
                        <p className="text-gray-600 text-xs leading-relaxed">{project.solution}</p>
                      </div>
                    </div>

                    {/* Results */}
                    <div className="mb-8">
                      <h3 className="font-bold text-gray-900 text-sm mb-3">Results Achieved</h3>
                      <div className="grid grid-cols-1 gap-2">
                        {project.results.map((result) => (
                          <div key={result} className="flex items-start gap-2">
                            <CheckCircle2 size={16} className="text-[#00b4d8] shrink-0 mt-0.5" />
                            <span className="text-gray-700 text-xs">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Testimonial */}
                    <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                      <p className="text-gray-700 text-xs italic mb-3">{project.testimonial.text}</p>
                      <div>
                        <p className="font-bold text-gray-900 text-xs">{project.testimonial.name}</p>
                        <p className="text-gray-600 text-xs">{project.testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1e1e6e] to-[#0a0f3a]" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-sm leading-relaxed">
              Join hundreds of farmers who have transformed their operations with Timwa's expertise. Let&apos;s discuss your unique needs and create a plan for success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#00b4d8] text-[#1e1e6e] px-7 py-3 rounded-xl font-bold text-sm hover:bg-cyan-300 transition-colors"
              >
                Schedule Consultation <ArrowRight size={16} />
              </Link>
              <a
                href="tel:+254704460604"
                className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/30 text-white px-7 py-3 rounded-xl font-bold text-sm hover:bg-white/20 transition-colors"
              >
                Call +254 704 460604
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
