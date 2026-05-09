"use client";

import { motion } from "framer-motion";
import { Users, Globe, Rocket, Award, Heart, Briefcase } from "lucide-react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import SectionHeader from "@/components/ui/SectionHeader";
import { impactStats } from "@/lib/data/stats";

const iconMap: Record<string, React.ReactNode> = {
  users: <Users size={28} />,
  globe: <Globe size={28} />,
  rocket: <Rocket size={28} />,
  award: <Award size={28} />,
  heart: <Heart size={28} />,
  briefcase: <Briefcase size={28} />,
};

export default function ImpactStats() {
  return (
    <section
      className="section-shell relative overflow-hidden"
      style={{ background: "#F8FAFC" }}
    >
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(11,61,145,0.12), transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 w-full">
        <SectionHeader
          eyebrow="By the Numbers"
          title="Our Alumni Impact, Worldwide"
          subtitle="A community of changemakers, innovators, and leaders connected by the same DBIT foundation."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {impactStats.map((stat, i) => (
            <motion.div
              key={stat.id}
              className="group rounded-3xl premium-card p-8 transition-all duration-500 hover:-translate-y-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
            >
              <div className="space-y-6 flex flex-col items-center text-center">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-white mx-auto"
                  style={{ background: "linear-gradient(135deg, #142B6F 0%, #0B3D91 100%)" }}
                >
                  {iconMap[stat.icon]}
                </div>

                <div className="space-y-3">
                  <div
                    className="font-[family-name:var(--font-sora)] text-4xl md:text-5xl font-semibold tracking-tight text-[#142B6F]"
                  >
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight text-[#142B6F]">
                    {stat.label}
                  </h3>
                  <p className="text-lg leading-relaxed text-slate-600">
                    {stat.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
