"use client";

import { motion } from "framer-motion";
import { Users, Globe, Rocket, Award, Heart, Briefcase } from "lucide-react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { impactStats } from "@/lib/data/stats";

const iconMap: Record<string, React.ReactNode> = {
  users:     <Users size={28} />,
  globe:     <Globe size={28} />,
  rocket:    <Rocket size={28} />,
  award:     <Award size={28} />,
  heart:     <Heart size={28} />,
  briefcase: <Briefcase size={28} />,
};

export default function ImpactStats() {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ background: "linear-gradient(160deg, #072A63 0%, #0B3D91 50%, #0F172A 100%)" }}
    >
      {/* Decorative circles */}
      <div
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #F4B400 0%, transparent 70%)" }}
      />
      <div
        className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full opacity-8 pointer-events-none"
        style={{ background: "radial-gradient(circle, #F4B400 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <span
            className="inline-block text-xs font-semibold tracking-[0.2em] uppercase mb-3 px-3 py-1 rounded-full"
            style={{
              color: "#F4B400",
              background: "rgba(244,180,0,0.15)",
              border: "1px solid rgba(244,180,0,0.3)",
            }}
          >
            By the Numbers
          </span>
          <h2
            className="font-[family-name:var(--font-sora)] font-bold text-white"
            style={{ fontSize: "clamp(1.8rem,4vw,3rem)" }}
          >
            Our Alumni Impact, Worldwide
          </h2>
          <p className="mt-4 text-white/60 max-w-xl mx-auto text-base">
            A community of changemakers, innovators, and leaders — united by the Boscoite spirit.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 lg:gap-8">
          {impactStats.map((stat, i) => (
            <motion.div
              key={stat.id}
              className="relative rounded-2xl p-6 lg:p-8 text-center overflow-hidden group"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
                backdropFilter: "blur(12px)",
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
                style={{ background: "rgba(244,180,0,0.05)", border: "1px solid rgba(244,180,0,0.3)" }}
              />

              {/* Icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 text-[#F4B400]"
                style={{ background: "rgba(244,180,0,0.12)", border: "1px solid rgba(244,180,0,0.2)" }}
              >
                {iconMap[stat.icon]}
              </div>

              {/* Counter */}
              <div
                className="font-[family-name:var(--font-sora)] font-extrabold text-[#F4B400] mb-1"
                style={{ fontSize: "clamp(1.8rem,4vw,2.8rem)" }}
              >
                <AnimatedCounter value={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
              </div>

              <p className="font-semibold text-white text-sm mb-1">{stat.label}</p>
              <p className="text-white/45 text-xs leading-relaxed">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
