"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  light?: boolean;
  centered?: boolean;
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  light = false,
  centered = true,
}: SectionHeaderProps) {
  return (
    <motion.div
      className={`mb-12 ${centered ? "text-center flex flex-col items-center justify-center w-full mx-auto" : "text-left"}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {eyebrow && (
        <span
          className="inline-block text-[11px] font-semibold tracking-[0.18em] uppercase mb-4 px-3 py-1 rounded-full"
          style={{
            color: light ? "#F4B400" : "#0B3D91",
            background: light ? "rgba(244, 180, 0, 0.12)" : "rgba(11, 61, 145, 0.07)",
            border: light
              ? "1px solid rgba(244, 180, 0, 0.25)"
              : "1px solid rgba(11, 61, 145, 0.12)",
          }}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-[family-name:var(--font-sora)] font-semibold leading-[1.08] text-4xl md:text-5xl max-w-4xl ${centered ? "mx-auto text-center" : ""}`}
        style={{
          color: light ? "#FFFFFF" : "#142B6F",
        }}
      >
        {title}
      </h2>
      <motion.div
        className="mt-6 mb-6 mx-auto rounded-full"
        style={{
          width: centered ? "auto" : "fit-content",
          display: "flex",
          justifyContent: centered ? "center" : "flex-start",
        }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div
          style={{
            height: "2px",
            width: "64px",
            borderRadius: "2px",
            background: light
              ? "linear-gradient(90deg, rgba(255,255,255,0.35), #F4B400)"
              : "linear-gradient(90deg, #0B3D91, #F4B400)",
          }}
        />
      </motion.div>
      {subtitle && (
        <p
          className={`leading-relaxed text-lg max-w-2xl w-full block ${centered ? "mx-auto text-center" : ""}`}
          style={{
            color: light ? "rgba(255,255,255,0.72)" : "#475569",
          }}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
