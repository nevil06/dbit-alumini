"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import CustomCursor from "@/components/ui/CustomCursor";
import { useState } from "react";

export default function HeroSection() {
  const [isHoveringHero, setIsHoveringHero] = useState(false);

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden cursor-auto md:cursor-none"
      style={{ height: "100svh", minHeight: "560px" }}
      onMouseEnter={() => setIsHoveringHero(true)}
      onMouseLeave={() => setIsHoveringHero(false)}
    >
      {isHoveringHero && <CustomCursor />}

      <div className="hero-video-wrapper">
        <iframe
          src="https://www.youtube.com/embed/0BlhrLlBEck?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&playsinline=1&playlist=0BlhrLlBEck&modestbranding=1&disablekb=1"
          title="DBIT Campus"
          allow="autoplay; encrypted-media"
          allowFullScreen={false}
        />
      </div>

      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(180deg, rgba(7,42,99,0.64) 0%, rgba(7,42,99,0.52) 38%, rgba(7,42,99,0.78) 100%)",
        }}
      />

      <div
        className="absolute bottom-0 left-0 right-0 h-36 z-[2]"
        style={{
          background: "linear-gradient(to top, #F8FAFC, transparent)",
        }}
      />

      <div className="relative z-[3] h-full flex flex-col items-center justify-center text-center px-6 sm:px-10 lg:px-14 max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-5"
        >
          <span
            className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] uppercase px-3 py-1 rounded-full"
            style={{
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.16)",
              color: "rgba(255,255,255,0.88)",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#F4B400]" />
            DBIT Alumni Association - Est. 2001
          </span>
        </motion.div>

        <motion.h1
          className="font-[family-name:var(--font-sora)] font-bold text-white leading-[1.02] max-w-4xl mx-auto text-6xl md:text-7xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          Once a DBITian.{" "}
          <span className="gradient-text">Always Connected.</span>
        </motion.h1>

        <motion.p
          className="mt-5 text-white/74 max-w-xl leading-relaxed mx-auto"
          style={{ fontSize: "clamp(0.98rem, 1.7vw, 1.08rem)" }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75 }}
        >
          Celebrating the legacy, achievements, and lifelong bond of DBIT alumni
          across the world. Your story does not end at graduation. It continues here.
        </motion.p>

        <motion.div
          className="mt-8 flex flex-col sm:flex-row gap-4 items-center justify-center w-full"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.0 }}
        >
          <Link
            href="/members"
            className="inline-flex items-center justify-center gap-3 px-7 py-3.5 sm:px-9 sm:py-4 rounded-full font-semibold text-[15px] tracking-wide transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(244,180,0,0.35)] min-w-[220px]"
            style={{
              background: "linear-gradient(135deg, #F4B400 0%, #FFB300 100%)",
              color: "#072A63",
            }}
          >
            Join Alumni Network
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center justify-center gap-3 px-7 py-3.5 sm:px-9 sm:py-4 rounded-full font-semibold text-[15px] tracking-wide text-white transition-all duration-300 hover:-translate-y-0.5 min-w-[220px]"
            style={{
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.2)",
              backdropFilter: "blur(6px)",
            }}
          >
            Explore Community
          </Link>
        </motion.div>

        <motion.div
          className="mt-10 grid w-full max-w-2xl grid-cols-3 gap-3 rounded-2xl px-4 py-4"
          style={{
            background: "rgba(7,42,99,0.26)",
            border: "1px solid rgba(255,255,255,0.12)",
            backdropFilter: "blur(8px)",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.3 }}
        >
          {[
            { val: "10,000+", label: "Alumni" },
            { val: "18+", label: "Countries" },
            { val: "50+", label: "Startups" },
          ].map(({ val, label }) => (
            <div key={label} className="text-center">
              <p className="font-[family-name:var(--font-sora)] font-bold text-white text-xl sm:text-2xl">
                {val}
              </p>
              <p className="text-white/55 text-[10px] tracking-[0.18em] uppercase mt-1">
                {label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[3] flex flex-col items-center gap-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
      >
        <span className="text-white/40 text-[10px] tracking-widest uppercase mb-1">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown size={20} className="text-[#F4B400]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
