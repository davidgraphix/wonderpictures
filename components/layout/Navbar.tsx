"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { FaInstagram, FaYoutube, FaVimeoV } from "react-icons/fa";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Films" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled || open
            ? "border-b border-white/10 bg-[#050505]/90 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-2 md:px-10">
          <Link href="/">
            <div className="relative flex items-center justify-center overflow-hidden">
              <Image
                src="/wonder-w.png"
                alt="Wonder Pictures logo"
                width={130}
                height={130}
                priority
                className="h-full w-full object-contain transition duration-500 group-hover:scale-110"
              />
            </div>

            {/* <div className="hidden sm:block">
              <p className="mt-1 text-sm font-light uppercase tracking-[0.35em] text-[#f5efe4]">
                Wonder Pictures
              </p>
            </div> */}
          </Link>

          <ul className="hidden items-center gap-10 lg:flex">
            {NAV_LINKS.map(({ href, label }) => {
              const active =
                pathname === href || (href !== "/" && pathname.startsWith(href));

              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`relative text-[10px] font-bold uppercase tracking-[0.35em] transition ${
                      active ? "text-[#d6ad61]" : "text-white/65 hover:text-white"
                    }`}
                  >
                    {label}

                    {active && (
                      <motion.span
                        layoutId="nav-active-line"
                        className="absolute -bottom-3 left-0 h-px w-full bg-[#d6ad61]"
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden bg-[#d6ad61] px-7 py-4 text-[10px] font-bold uppercase tracking-[0.28em] text-black transition hover:bg-white md:inline-flex"
            >
              Book Now →
            </Link>

            <button
              onClick={() => setOpen((value) => !value)}
              className="relative z-50 flex h-11 w-11 items-center justify-center border border-white/15 bg-white/[0.03] lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              type="button"
            >
              <span className="relative block h-5 w-6">
                <motion.span
                  animate={open ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className="absolute left-0 top-0 h-px w-full bg-white"
                />
                <motion.span
                  animate={open ? { opacity: 0, x: -8 } : { opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 top-[9px] h-px w-full bg-white"
                />
                <motion.span
                  animate={open ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className="absolute bottom-0 left-0 h-px w-full bg-white"
                />
              </span>
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#050505] lg:hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(214,173,97,0.16),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_35%)]" />

            <div className="relative flex min-h-screen flex-col justify-between px-5 pb-10 pt-28">
              <div className="space-y-2">
                {NAV_LINKS.map(({ href, label }, index) => {
                  const active =
                    pathname === href ||
                    (href !== "/" && pathname.startsWith(href));

                  return (
                    <motion.div
                      key={href}
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 0.12 + index * 0.06,
                        duration: 0.55,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    >
                      <Link
                        href={href}
                        className={`block border-b border-white/10 py-5 font-serif text-5xl font-light tracking-[-0.05em] transition sm:text-6xl ${
                          active ? "text-[#d6ad61]" : "text-[#f5efe4]"
                        }`}
                      >
                        {label}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.48, duration: 0.55 }}
                className="space-y-7"
              >
                <Link
                  href="/contact"
                  className="inline-flex bg-[#d6ad61] px-8 py-4 text-[10px] font-bold uppercase tracking-[0.35em] text-black"
                >
                  Book A Shoot →
                </Link>

                <div className="flex gap-5 text-white/60">
                  <a href="https://instagram.com/visuals_byiyanu/" target="_blank" rel="noreferrer">
                    <FaInstagram size={18} />
                  </a>
                  <a href="https://youtube.com" target="_blank" rel="noreferrer">
                    <FaYoutube size={19} />
                  </a>
                  <a href="https://vimeo.com" target="_blank" rel="noreferrer">
                    <FaVimeoV size={18} />
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}