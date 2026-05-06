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
      style={{ height: "100svh", minHeight: "600px" }}
      onMouseEnter={() => setIsHoveringHero(true)}
      onMouseLeave={() => setIsHoveringHero(false)}
    >
      {/* Cinematic Custom Cursor (visible only when hovering this section) */}
      {isHoveringHero && <CustomCursor />}
      {/* ── YouTube video background ── */}
      <div className="hero-video-wrapper">
        <iframe
          src="https://www.youtube.com/embed/0BlhrLlBEck?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&playsinline=1&playlist=0BlhrLlBEck&modestbranding=1&disablekb=1"
          title="DBIT Campus"
          allow="autoplay; encrypted-media"
          allowFullScreen={false}
        />
      </div>

      {/* ── Cinematic overlay ── */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(170deg, rgba(7,42,99,0.72) 0%, rgba(0,0,0,0.48) 50%, rgba(7,42,99,0.85) 100%)",
        }}
      />
      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 z-[2]"
        style={{
          background: "linear-gradient(to top, #F8FAFC, transparent)",
        }}
      />

      {/* ── Hero Content ── */}
      <div className="relative z-[3] h-full flex flex-col items-center justify-center text-center px-[20px] md:px-[48px] lg:px-[80px] max-w-7xl mx-auto w-full">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-6"
        >
          <span
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase px-4 py-1.5 rounded-full"
            style={{
              background: "rgba(244,180,0,0.18)",
              border: "1px solid rgba(244,180,0,0.4)",
              color: "#F4B400",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#F4B400] animate-pulse" />
            DBIT Alumni Association · Est. 2001
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          className="font-[family-name:var(--font-sora)] font-extrabold text-white leading-[1.1] max-w-5xl"
          style={{ fontSize: "clamp(2.2rem, 7vw, 5.5rem)" }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          Once a DBITian.{" "}
          <span className="gradient-text">Always Connected.</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="mt-6 text-white/75 max-w-2xl leading-relaxed"
          style={{ fontSize: "clamp(0.95rem, 2vw, 1.2rem)" }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75 }}
        >
          Celebrating the legacy, achievements, and lifelong bond of DBIT Alumni
          across the world. Your story doesn&apos;t end at graduation — it begins.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="mt-10 flex flex-col sm:flex-row gap-5 items-center justify-center w-full"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.0 }}
        >
          <Link
            href="/members"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 sm:px-10 sm:py-5 rounded-full font-semibold text-[15px] tracking-wide transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(244,180,0,0.5)] min-w-[240px]"
            style={{
              background: "linear-gradient(135deg, #F4B400 0%, #FFB300 100%)",
              color: "#072A63",
            }}
          >
            Join Alumni Network
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 sm:px-10 sm:py-5 rounded-full font-semibold text-[15px] tracking-wide text-white transition-all duration-300 hover:-translate-y-1 min-w-[240px]"
            style={{
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.3)",
              backdropFilter: "blur(8px)",
            }}
          >
            Explore Community
          </Link>
        </motion.div>

        {/* Stats ribbon */}
        <motion.div
          className="mt-14 flex flex-wrap items-center justify-center gap-8"
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
              <p className="font-[family-name:var(--font-sora)] font-bold text-white text-2xl">
                {val}
              </p>
              <p className="text-white/55 text-xs tracking-wider uppercase mt-0.5">
                {label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-[3] flex flex-col items-center gap-1"
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
          <ChevronDown size={22} className="text-[#F4B400]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
