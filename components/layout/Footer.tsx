import Link from "next/link";
import Image from "next/image";
import {  Mail, MapPin, Phone} from "lucide-react";
import { FaInstagram, FaYoutube, FaVimeoV } from "react-icons/fa";

const QUICK_LINKS = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Films" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

const SERVICES = [
  "Wedding Films",
  "Event Coverage",
  "Brand & Commercial",
  "Music Videos",
  "Documentaries",
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#050505] text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-14 md:grid-cols-[1.3fr_0.8fr_1fr_1.1fr] md:px-10">
        <div>
          <Link href="/" className="mb-5 flex items-center gap-3">
            <div className="relative h-12 w-12">
              <Image
                src="/wonder-w.png"
                alt="Wonder Pictures logo"
                width={80}
                height={80}
                className="h-full w-full object-contain"
              />
            </div>

            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.45em] text-[#d6ad61]">
                Wonder
              </p>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#f5efe4]">
                Pictures
              </p>
            </div>
          </Link>

          <p className="max-w-xs text-sm leading-7 text-white/55">
            Cinematic videography for weddings, brands, and the moments that
            deserve to live forever.
          </p>

          <div className="mt-7 flex gap-4 text-white/55">
            <a href="https://instagram.com/visuals_byiyanu/" target="_blank" rel="noreferrer" className="transition hover:text-[#d6ad61]">
              <FaInstagram size={17} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="transition hover:text-[#d6ad61]">
              <FaYoutube size={18} />
            </a>
            <a href="https://vimeo.com" target="_blank" rel="noreferrer" className="transition hover:text-[#d6ad61]">
              <FaVimeoV size={17} />
            </a>
          </div>
        </div>

        <div>
          <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.35em] text-[#d6ad61]">
            Quick Links
          </p>

          <ul className="space-y-3">
            {QUICK_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className="text-sm text-white/55 transition hover:text-white">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.35em] text-[#d6ad61]">
            Services
          </p>

          <ul className="space-y-3">
            {SERVICES.map((service) => (
              <li key={service} className="text-sm text-white/55">
                {service}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.35em] text-[#d6ad61]">
            Contact
          </p>

          <ul className="space-y-4 text-sm text-white/55">
            <li className="flex gap-3">
              <MapPin size={16} className="mt-1 shrink-0 text-[#d6ad61]" />
              <span>Lagos, Nigeria</span>
            </li>

            <li className="flex gap-3">
              <Phone size={16} className="mt-1 shrink-0 text-[#d6ad61]" />
              <a href="tel:+2348179521770" className="transition hover:text-white">
                +234 817 952 1770
              </a>
            </li>

            <li className="flex gap-3">
              <Mail size={16} className="mt-1 shrink-0 text-[#d6ad61]" />
              <a href="mailto:wonderspictures96@gmail.com" className="transition hover:text-white">
                wonderspictures96@gmail.com
              </a>
            </li>
          </ul>

          <Link
            href="/contact"
            className="mt-7 inline-flex bg-[#d6ad61] px-7 py-4 text-[10px] font-bold uppercase tracking-[0.28em] text-black transition hover:bg-white"
          >
            Book A Shoot →
          </Link>
        </div>
      </div>
    </footer>
  );
}