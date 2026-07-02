"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaInstagram, FaYoutube, FaVimeoV } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050505] text-white">
      {/* Background Video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/videos/hero.mp4"
        poster="/images/hero-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />

      {/* Cinematic Overlays */}
      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/65 to-black/15" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-black/65" />

      {/* Side Counter */}
      {/* <div className="absolute left-6 top-1/2 z-20 hidden -translate-y-1/2 flex-col items-center gap-4 lg:flex">
        <span className="text-[10px] font-semibold text-white/70">01</span>
        <div className="h-20 w-px bg-gradient-to-b from-[#d6ad61] to-white/15" />
        <div className="flex flex-col gap-3">
          <span className="h-1 w-1 rounded-full bg-[#d6ad61]" />
          <span className="h-1 w-1 rounded-full bg-white/35" />
          <span className="h-1 w-1 rounded-full bg-white/35" />
        </div>
        <div className="h-20 w-px bg-white/15" />
        <span className="text-[10px] font-semibold text-white/70">05</span>
      </div> */}

      {/* Main Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-5 pt-28 md:px-10 lg:px-20">
        <div className="max-w-4xl">
          {/* <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mb-7 text-[10px] font-bold uppercase tracking-[0.45em] text-[#d6ad61]"
          >
            Cinematic Videography
          </motion.p> */}

          <motion.h1
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="max-w-4xl font-serif text-[3.8rem] font-light leading-[0.9] tracking-[-0.06em] text-[#f5efe4] sm:text-[4.3rem] md:text-[5.8rem] lg:text-[6.8rem]"
          >
            We Don&apos;t Just
            <br />
            Capture Moments,
            <br />
            <span className="text-[#d6ad61]">We Tell Stories.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.75,
              delay: 0.35,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mt-8 max-w-lg text-sm leading-7 text-white/70 md:text-base"
          >
          Cinematic videography and professional editing for weddings, brands, creators, churches, and unforgettable moments.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.75,
              delay: 0.55,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center bg-[#d6ad61] px-8 py-4 text-[10px] font-bold uppercase tracking-[0.35em] text-black transition hover:bg-white"
            >
              View Films →
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center border border-white/25 px-8 py-4 text-[10px] font-bold uppercase tracking-[0.35em] text-white transition hover:border-[#d6ad61] hover:bg-[#d6ad61] hover:text-black"
            >
              Book a Shoot
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Social Links */}
      <div className="absolute bottom-16 right-6 z-20 hidden flex-col gap-5 text-white/70 md:flex">
        <Link href="https://instagram.com/visuals_byiyanu/" className="transition hover:text-[#d6ad61]">
          <FaInstagram size={16} />
        </Link>
        <Link href="#" className="transition hover:text-[#d6ad61]">
          <FaYoutube size={17} />
        </Link>
        <Link href="#" className="transition hover:text-[#d6ad61]">
          <FaVimeoV size={16} />
        </Link>
      </div>
    </section>
  );
}