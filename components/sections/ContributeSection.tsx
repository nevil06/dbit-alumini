"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { GraduationCap, Mic, HandHeart, Users, ArrowRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const ways = [
  {
    icon: <Users size={28} />,
    title: "Mentorship",
    description: "Guide current students with your industry experience and help shape the next generation of engineers.",
    color: "#0B3D91",
  },
  {
    icon: <GraduationCap size={28} />,
    title: "Scholarships",
    description: "Support deserving students by funding scholarships that can transform their academic journey.",
    color: "#1565C0",
  },
  {
    icon: <Mic size={28} />,
    title: "Guest Lectures",
    description: "Share your expertise through talks, workshops, and campus sessions that widen student perspective.",
    color: "#072A63",
  },
  {
    icon: <HandHeart size={28} />,
    title: "Placement Support",
    description: "Refer, recruit, and advocate for DBIT students inside your organization when opportunities open up.",
    color: "#234B8F",
  },
];

export default function ContributeSection() {
  return (
    <section
      className="section-shell relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0F172A 0%, #111C31 100%)" }}
    >
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent)" }}
      />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 70% 50%, rgba(11,61,145,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 relative z-10 w-full">
        <SectionHeader
          eyebrow="Give Back"
          title="Give Back to the Institution That Shaped Your Journey"
          subtitle="Every contribution, whether time, support, or funding, helps strengthen the path for the students who follow."
          light
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8 mb-12">
            {ways.map((w, i) => (
              <motion.div
                key={w.title}
                className="group rounded-3xl premium-card-dark p-8 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
              >
                <div className="space-y-6 flex flex-col items-center text-center">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-white mx-auto"
                    style={{ background: `linear-gradient(135deg, ${w.color} 0%, ${w.color}dd 100%)` }}
                  >
                    {w.icon}
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold tracking-tight text-white">
                      {w.title}
                    </h3>
                    <p className="text-lg leading-relaxed text-white/70">
                      {w.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        <motion.div
          className="text-center mt-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Link
            href="/contribute"
            className="inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-full font-semibold text-[15px] tracking-wide transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(244,180,0,0.3)] min-w-[250px]"
            style={{
              background: "linear-gradient(135deg, #F4B400, #FFB300)",
              color: "#072A63",
            }}
          >
            Start Contributing Today
            <ArrowRight size={16} />
          </Link>
          <p className="mt-4 text-white/40 text-xs tracking-wide">
            Join 500+ alumni already making a difference
          </p>
        </motion.div>
      </div>
    </section>
  );
}
