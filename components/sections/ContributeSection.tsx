"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { GraduationCap, Mic, HandHeart, Users, ArrowRight } from "lucide-react";

const ways = [
  {
    icon: <Users size={24} />,
    title: "Mentorship",
    description: "Guide current students with your industry experience and help shape the next generation of engineers.",
    color: "#0B3D91",
  },
  {
    icon: <GraduationCap size={24} />,
    title: "Scholarships",
    description: "Sponsor deserving students by funding scholarships that can transform their academic journey.",
    color: "#1565C0",
  },
  {
    icon: <Mic size={24} />,
    title: "Guest Lectures",
    description: "Share your expertise by delivering talks, workshops, and sessions to inspire students on campus.",
    color: "#072A63",
  },
  {
    icon: <HandHeart size={24} />,
    title: "Placement Support",
    description: "Refer, recruit, and advocate for DBIT students in your organization to boost placement outcomes.",
    color: "#0B3D91",
  },
];

export default function ContributeSection() {
  return (
    <section
      className="py-[72px] md:py-[90px] lg:py-[120px] relative overflow-hidden"
      style={{ background: "#0F172A" }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, rgba(15,23,42,1), transparent)" }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 70% 50%, rgba(11,61,145,0.25) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-[20px] md:px-[48px] lg:px-[80px] relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16 max-w-4xl mx-auto flex flex-col items-center justify-center w-full"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span
            className="inline-block text-xs font-semibold tracking-[0.2em] uppercase mb-4 px-3 py-1 rounded-full"
            style={{
              color: "#F4B400",
              background: "rgba(244,180,0,0.12)",
              border: "1px solid rgba(244,180,0,0.25)",
            }}
          >
            Give Back
          </span>
          <h2
            className="font-[family-name:var(--font-sora)] font-extrabold text-white leading-tight text-center w-full block"
            style={{ fontSize: "clamp(1.8rem,4.5vw,3.2rem)" }}
          >
            Give Back to the Institution <br className="hidden sm:block" />
            <span className="gradient-text">That Shaped Your Journey</span>
          </h2>
          <p className="mt-5 text-white/60 leading-relaxed text-base text-center w-full block">
            DBIT gave you the foundation. Now, you have the power to build the same foundation
            for the students who walk those corridors today. Every contribution — big or small — creates a lasting impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px] md:gap-[24px] lg:gap-[32px] mb-16">
          {ways.map((w, i) => (
            <motion.div
              key={w.title}
              className="rounded-[2rem] p-[32px] group flex flex-col items-start"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(8px)",
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{
                y: -4,
                background: "rgba(255,255,255,0.08)",
                borderColor: "rgba(244,180,0,0.25)",
                transition: { duration: 0.2 },
              }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-[20px] text-white"
                style={{ background: `linear-gradient(135deg, ${w.color}, ${w.color}aa)` }}
              >
                {w.icon}
              </div>
              <h3
                className="font-[family-name:var(--font-sora)] font-bold text-white text-[1.1rem] mb-5 mt-2"
              >
                {w.title}
              </h3>
              <p className="text-white/50 text-[15px] leading-[1.7] mt-3">{w.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Link
            href="/contribute"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 sm:px-10 sm:py-5 rounded-full font-semibold text-[15px] tracking-wide transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(244,180,0,0.4)] min-w-[280px]"
            style={{
              background: "linear-gradient(135deg, #F4B400, #FFB300)",
              color: "#072A63",
            }}
          >
            Start Contributing Today
            <ArrowRight size={18} />
          </Link>
          <p className="mt-5 text-white/40 text-xs tracking-wide">
            Join 500+ alumni already making a difference
          </p>
        </motion.div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to top, rgba(15,23,42,1), transparent)" }}
      />
    </section>
  );
}
