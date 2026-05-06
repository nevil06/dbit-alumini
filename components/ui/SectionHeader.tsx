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
      className={`mb-14 ${centered ? "text-center" : "text-left"}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {eyebrow && (
        <span
          className="inline-block text-xs font-semibold tracking-[0.2em] uppercase mb-3 px-3 py-1 rounded-full"
          style={{
            color: "#F4B400",
            background: "rgba(244, 180, 0, 0.12)",
            border: "1px solid rgba(244, 180, 0, 0.25)",
          }}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className="font-[family-name:var(--font-sora)] font-bold leading-tight"
        style={{
          fontSize: "clamp(1.8rem, 4vw, 3rem)",
          color: light ? "#FFFFFF" : "#072A63",
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="mt-4 leading-relaxed max-w-2xl mx-auto"
          style={{
            color: light ? "rgba(255,255,255,0.72)" : "#4A5568",
            fontSize: "clamp(0.95rem, 1.8vw, 1.1rem)",
          }}
        >
          {subtitle}
        </p>
      )}
      <motion.div
        className="mt-5 mx-auto rounded-full"
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
            height: "3px",
            width: "60px",
            borderRadius: "2px",
            background: "linear-gradient(90deg, #0B3D91, #F4B400)",
          }}
        />
      </motion.div>
    </motion.div>
  );
}
