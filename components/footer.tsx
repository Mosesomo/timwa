"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, Clock, Mail } from "lucide-react";

const footerLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ background: "#13134a" }} className="text-white">
      {/* Top accent line */}
      <div className="w-full h-1" style={{ background: "linear-gradient(to right, #00b4d8, #1877F2, #25D366, #00b4d8)" }} />

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* ── Company Info ── */}
          <div>
            <div className="mb-6">
              <Image
                src="/images/timwa-logo-dark.jpeg"
                alt="Timwa Fisheries Logo"
                width={80}
                height={80}
                className="rounded-xl"
                style={{ background: "#fff", padding: 4 }}
              />
            </div>
            <p className="leading-relaxed text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
              Professional aquaculture and fish farming solutions. Pond construction,
              consultancy, training, and complete farming equipment for sustainable aquaculture in Kenya.
            </p>
          </div>

          {/* ── Quick Links ── */}
          <div>
            <h3
              className="text-base font-bold mb-6 pb-3 border-b"
              style={{ color: "#00b4d8", borderColor: "rgba(0,180,216,0.25)" }}
            >
              Quick Links
            </h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className="text-sm flex items-center gap-2 group transition-colors duration-200"
                    style={{ color: "rgba(255,255,255,0.6)" }}
                    onMouseEnter={e => { e.currentTarget.style.color = "#00b4d8"; }}
                    onMouseLeave={e => { e.currentTarget.style.color = "rgba(255,255,255,0.6)"; }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full transition-colors duration-200"
                      style={{ background: "rgba(0,180,216,0.4)", display: "inline-block", flexShrink: 0 }}
                    />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact Info ── */}
          <div>
            <h3
              className="text-base font-bold mb-6 pb-3 border-b"
              style={{ color: "#00b4d8", borderColor: "rgba(0,180,216,0.25)" }}
            >
              Contact Us
            </h3>
            <ul className="space-y-4">
              {[
                { icon: <Phone size={16} />, text: "+254 704 460604", href: "tel:+254704460604" },
                { icon: <Mail size={16} />, text: "info@timwafisheries.com", href: "mailto:info@timwafisheries.com" },
                { icon: <MapPin size={16} />, text: "Nairobi, Kenya", href: null },
                { icon: <Clock size={16} />, text: "Mon – Sat: 8:00 AM – 6:00 PM", href: null },
              ].map(({ icon, text, href }) => (
                <li key={text} className="flex items-start gap-3">
                  <span className="mt-0.5 flex-shrink-0" style={{ color: "#00b4d8" }}>{icon}</span>
                  {href ? (
                    <a
                      href={href}
                      className="text-sm transition-colors duration-200"
                      style={{ color: "rgba(255,255,255,0.6)" }}
                      onMouseEnter={e => { e.currentTarget.style.color = "#00b4d8"; }}
                      onMouseLeave={e => { e.currentTarget.style.color = "rgba(255,255,255,0.6)"; }}
                    >
                      {text}
                    </a>
                  ) : (
                    <span className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>{text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* ── Social Links ── */}
          <div>
            <h3
              className="text-base font-bold mb-6 pb-3 border-b"
              style={{ color: "#00b4d8", borderColor: "rgba(0,180,216,0.25)" }}
            >
              Follow Us
            </h3>

            <div className="flex gap-3">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/share/1BE1dSNTtx/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{ background: "#1877F2", boxShadow: "0 4px 14px rgba(24,119,242,0.4)" }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#fff">
                  <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.514c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
                </svg>
              </a>

              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@martin.nguri?_r=1&_t=ZS-96g20yOWEF"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{ background: "#010101", boxShadow: "0 4px 14px rgba(0,0,0,0.5)" }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.3 0 .59.05.88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" fill="#EE1D52"/>
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.3 0 .59.05.88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" fill="#69C9D0" opacity="0.5"/>
                </svg>
              </a>

              
            </div>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div
          className="mt-14 pt-8 flex flex-col md:flex-row items-center justify-between gap-3"
          style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
        >
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
            &copy; {currentYear} Timwa Fisheries. All Rights Reserved.
          </p>
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.3)" }}>
            Founded by <span style={{ color: "rgba(255,255,255,0.5)" }}>Martin Nguri</span>
            {" · "}
            Developed by <span style={{ color: "#00b4d8" }}>CarlteQ</span>
          </p>
        </div>
      </div>
    </footer>
  );
}