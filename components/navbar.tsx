"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Gallery", path: "/gallery" },
  // { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const showWhiteBg = true;

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        showWhiteBg ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-1 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/timwa-logo.jpeg"
            alt="Timwa Fisheries Logo"
            width={60}
            height={60}
            className="rounded-lg"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={`font-medium transition-colors relative ${
                showWhiteBg
                  ? "text-gray-700 hover:text-[#1e1e6e]"
                  : "text-white hover:text-[#00b4d8]"
              } ${
                pathname === link.path
                  ? "after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-[#00b4d8]"
                  : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="tel:+254704460604"
            className="flex items-center gap-2 bg-[#1e1e6e] hover:bg-[#2a2a8a] text-white px-5 py-2.5 rounded-full font-medium transition-colors"
          >
            <Phone size={18} />
            <span>Call Us</span>
          </a>
        </nav>

        {/* Mobile menu controls */}
        <div className="lg:hidden flex items-center gap-3">
          {/* Hamburger */}
          <button
            className="p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X size={28} className="text-gray-800" />
            ) : (
              <Menu size={28} className="text-gray-800" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="lg:hidden bg-white px-4 py-6 shadow-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`text-gray-800 hover:text-[#1e1e6e] py-2 font-medium border-b border-gray-100 ${
                    pathname === link.path ? "text-[#00b4d8]" : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="tel:+254704460604"
                className="flex items-center justify-center gap-2 bg-[#1e1e6e] text-white px-4 py-3 rounded-full font-medium mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Phone size={18} />
                <span>+254 704 460604</span>
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
