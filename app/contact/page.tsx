"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import {
  ChevronDown,
  MapPin,
  Clock,
  Phone,
  Mail,
  Send,
  CheckCircle,
  Loader2,
  Facebook,
} from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import WhatsAppButton from "@/components/whatsapp-button";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+254 704 460604"],
    action: "tel:+254704460604",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@timwafisheries.com"],
    action: "mailto:info@timwafisheries.com",
  },
  {
    icon: MapPin,
    title: "Location",
    details: ["Nairobi, Kenya"],
    action: null,
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Mon – Sat", "8:00 AM – 6:00 PM"],
    action: null,
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const formRef = useRef(null);
  const formInView = useInView(formRef, { once: true, amount: 0.2 });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setFormStatus("submitting");
    setTimeout(() => {
      setFormStatus("success");
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      setTimeout(() => setFormStatus("idle"), 5000);
    }, 1500);
  };

  return (
    <main className="bg-white">
      <Navbar />

      {/* ── Hero ───────────────────────────────────────────────── */}
      <section className="relative min-h-[62vh] flex items-center justify-center overflow-hidden">
        {/* Real Kenyan fish farming image – aquaculture workers at a pond */}
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/10606633/pexels-photo-10606633.jpeg"
            alt="Fish farming in Kenya"
            fill
            className="object-cover scale-105"
            priority
          />
          {/* Multi-layer cinematic overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/80" />
          <div className="absolute inset-0 bg-[#0a1628]/30" />
        </div>

        {/* Floating grain texture */}
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />

        <div className="container mx-auto px-4 relative z-10 text-white text-center py-36">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            

            <h1 className="text-5xl md:text-6xl font-extrabold mb-5 leading-tight tracking-tight">
              Let&apos;s Talk
              <span className="block text-[#38d9f5]">Fish Farming</span>
            </h1>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="w-20 h-0.5 bg-[#38d9f5] mx-auto mb-7 origin-left"
            />

            <p className="text-base text-gray-300 max-w-xl mx-auto leading-relaxed">
              Questions about aquaculture? Ready to launch your project? Our team is
              on standby — reach out and we&apos;ll respond within 24 hours.
            </p>
          </motion.div>

          <motion.a
            href="#contact-form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/60 hover:text-white transition-colors text-xs tracking-widest uppercase gap-1"
          >
            <span>Send Message</span>
            <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
              <ChevronDown size={20} />
            </motion.div>
          </motion.a>
        </div>
      </section>

      {/* ── Info Cards ─────────────────────────────────────────── */}
      <section className="py-14 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactInfo.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                {item.action ? (
                  <a
                    href={item.action}
                    className="flex flex-col items-center text-center p-6 rounded-2xl border border-gray-200 bg-white hover:bg-[#38d9f5]/10 hover:border-[#38d9f5]/40 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#38d9f5]/10 group-hover:bg-[#38d9f5] flex items-center justify-center mb-4 transition-colors">
                      <item.icon className="w-5 h-5 text-[#38d9f5] group-hover:text-[#1e1e6e] transition-colors" />
                    </div>
                    <h3 className="text-sm font-bold text-gray-900 mb-1.5 tracking-wide">{item.title}</h3>
                    {item.details.map((d) => (
                      <p key={d} className="text-gray-500 text-xs">{d}</p>
                    ))}
                  </a>
                ) : (
                  <div className="flex flex-col items-center text-center p-6 rounded-2xl border border-gray-200 bg-white">
                    <div className="w-12 h-12 rounded-xl bg-[#38d9f5]/10 flex items-center justify-center mb-4">
                      <item.icon className="w-5 h-5 text-[#38d9f5]" />
                    </div>
                    <h3 className="text-sm font-bold text-gray-900 mb-1.5 tracking-wide">{item.title}</h3>
                    {item.details.map((d) => (
                      <p key={d} className="text-gray-500 text-xs">{d}</p>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Form Section ───────────────────────────────────────── */}
      <section id="contact-form" className="py-24 bg-white" ref={formRef}>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-14 items-start">

            {/* Left – copy + social */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="text-[#38d9f5] text-xs font-bold uppercase tracking-widest">Reach Out</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2 mb-5 leading-tight">
                Start Your<br />
                <span className="text-[#38d9f5]">Aquaculture Journey</span>
              </h2>
              <div className="w-14 h-0.5 bg-[#38d9f5] mb-7" />
              <p className="text-gray-600 text-sm leading-relaxed mb-10">
                Whether you need a fish pond built, a greenhouse set up, irrigation
                installed, or expert consultation — fill out the form and we&apos;ll
                get back to you within 24 hours.
              </p>

              {/* Social */}
              <div className="mb-8">
                <h3 className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  <a
                    href="https://www.facebook.com/share/1BE1dSNTtx/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-100 hover:bg-[#38d9f5] border border-gray-200 hover:border-[#38d9f5] text-gray-600 rounded-xl flex items-center justify-center transition-all"
                    aria-label="Facebook"
                  >
                    <Facebook size={16} />
                  </a>
                  <a
                    href="https://www.tiktok.com/@martin.nguri?_r=1&_t=ZS-96g20yOWEF"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-100 hover:bg-[#38d9f5] border border-gray-200 hover:border-[#38d9f5] text-gray-600 rounded-xl flex items-center justify-center transition-all"
                    aria-label="TikTok"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="bg-green-50 border border-green-200 p-6 rounded-2xl">
                <h3 className="text-sm font-bold text-gray-900 mb-1.5">Quick Response via WhatsApp</h3>
                <p className="text-gray-600 text-xs mb-5 leading-relaxed">
                  Get faster replies by messaging us directly — we&apos;re usually online.
                </p>
                <a
                  href="https://wa.me/254704460604"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Chat on WhatsApp
                </a>
              </div>
            </motion.div>

            {/* Right – form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 md:p-10">
                <h3 className="text-xl font-extrabold text-gray-900 mb-7 tracking-tight">Send Us a Message</h3>

                {formStatus === "success" ? (
                  <motion.div
                    className="bg-green-50 border border-green-200 rounded-xl p-10 text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <CheckCircle className="mx-auto text-green-500 mb-4" size={44} />
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Message Sent!</h4>
                    <p className="text-gray-600 text-sm">We&apos;ll get back to you as soon as possible.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      {[
                        { id: "name", label: "Full Name", type: "text", placeholder: "John Doe", required: true },
                        { id: "email", label: "Email Address", type: "email", placeholder: "john@example.com", required: true },
                        { id: "phone", label: "Phone Number", type: "tel", placeholder: "+254 700 000 000", required: false },
                      ].map((field) => (
                        <div key={field.id} className={field.id === "name" ? "md:col-span-1" : ""}>
                          <label htmlFor={field.id} className="block text-gray-600 text-xs font-semibold mb-2 uppercase tracking-wider">
                            {field.label} {field.required && <span className="text-[#38d9f5]">*</span>}
                          </label>
                          <input
                            type={field.type}
                            id={field.id}
                            name={field.id}
                            value={formData[field.id as keyof typeof formData]}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#38d9f5]/50 focus:border-[#38d9f5]/50 transition-all ${
                              errors[field.id] ? "border-red-500/60" : "border-gray-200"
                            }`}
                            placeholder={field.placeholder}
                          />
                          {errors[field.id] && <p className="mt-1 text-red-500 text-xs">{errors[field.id]}</p>}
                        </div>
                      ))}

                      <div>
                        <label htmlFor="subject" className="block text-gray-600 text-xs font-semibold mb-2 uppercase tracking-wider">
                          Subject
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-[#38d9f5]/50 focus:border-[#38d9f5]/50 transition-all"
                        >
                          <option value="">Select a topic</option>
                          <option value="pond-construction">Pond Construction</option>
                          <option value="greenhouse">Greenhouse Construction</option>
                          <option value="drip-line">Drip Line Installation</option>
                          <option value="plumbing">Water Farm Plumbing</option>
                          <option value="fingerlings">Fingerlings & Feeds</option>
                          <option value="training">Training Programs</option>
                          <option value="consultation">Consultation</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-gray-600 text-xs font-semibold mb-2 uppercase tracking-wider">
                        Your Message <span className="text-[#38d9f5]">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className={`w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#38d9f5]/50 focus:border-[#38d9f5]/50 transition-all resize-none ${
                          errors.message ? "border-red-500/60" : "border-gray-200"
                        }`}
                        placeholder="Tell us about your project or inquiry…"
                      />
                      {errors.message && <p className="mt-1 text-red-500 text-xs">{errors.message}</p>}
                    </div>

                    <button
                      type="submit"
                      disabled={formStatus === "submitting"}
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#1e1e6e] hover:bg-[#2a2a8a] text-white px-6 py-3.5 rounded-xl font-bold text-sm transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {formStatus === "submitting" ? (
                        <><Loader2 className="animate-spin" size={17} /> Sending…</>
                      ) : (
                        <>Send Message <Send size={15} /></>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}