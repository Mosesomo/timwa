import Link from "next/link";
import Image from "next/image";
import { Facebook, Phone, MapPin, Clock, Mail } from "lucide-react";

const footerLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1e1e6e] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/images/timwa-logo-dark.jpeg"
                alt="Timwa Fisheries Logo"
                width={70}
                height={70}
                className="rounded-lg"
              />
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Professional aquaculture and fish farming solutions. We provide fish pond construction, 
              consultancy, training, and complete farming equipment for sustainable aquaculture.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-[#00b4d8]">Quick Links</h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className="text-gray-300 hover:text-[#00b4d8] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-[#00b4d8]">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={20} className="text-[#00b4d8] mt-1 flex-shrink-0" />
                <span className="text-gray-300">+254 704 460604</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={20} className="text-[#00b4d8] mt-1 flex-shrink-0" />
                <span className="text-gray-300">info@timwafisheries.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-[#00b4d8] mt-1 flex-shrink-0" />
                <span className="text-gray-300">Nairobi, Kenya</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={20} className="text-[#00b4d8] mt-1 flex-shrink-0" />
                <span className="text-gray-300">Mon - Sat: 8:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-[#00b4d8]">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/share/1BE1dSNTtx/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-[#00b4d8] w-12 h-12 rounded-full flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={22} />
              </a>
              <a
                href="https://www.tiktok.com/@martin.nguri?_r=1&_t=ZS-96g20yOWEF"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-[#00b4d8] w-12 h-12 rounded-full flex items-center justify-center transition-colors"
                aria-label="TikTok"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
            </div>
            <div className="mt-8">
              <a
                href="https://wa.me/254704460604"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Timwa Fisheries. All Rights Reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Founded by Martin Nguri | Developed by CarlteQ
          </p>
        </div>
      </div>
    </footer>
  );
}
