"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Briefcase, Users, Lightbulb, ArrowRight } from "lucide-react";

const pillars = [
  {
    icon: <Briefcase size={28} />,
    title: "Job Board",
    description:
      "Alumni-exclusive job postings from companies founded or led by DBITians. Refer, hire, and grow together.",
    cta: "Browse Opportunities",
    href: "/alumni-assist",
    color: "#0B3D91",
  },
  {
    icon: <Users size={28} />,
    title: "Mentorship",
    description:
      "Connect with experienced alumni mentors for career guidance, startup advice, and professional development.",
    cta: "Find a Mentor",
    href: "/alumni-assist",
    color: "#1565C0",
  },
  {
    icon: <Lightbulb size={28} />,
    title: "Network",
    description:
      "Build lasting professional relationships with 10,000+ DBITians across 18 countries.",
    cta: "Join the Network",
    href: "/members",
    color: "#072A63",
  },
];

export default function AlumniAssist() {
  return (
    <section
      className="py-[72px] md:py-[90px] lg:py-[120px]"
      style={{ background: "#F0F4FF" }}
    >
      <div className="max-w-7xl mx-auto px-[20px] md:px-[48px] lg:px-[80px]">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span
            className="inline-block text-xs font-semibold tracking-[0.2em] uppercase mb-3 px-3 py-1 rounded-full"
            style={{
              color: "#0B3D91",
              background: "rgba(11,61,145,0.08)",
              border: "1px solid rgba(11,61,145,0.2)",
            }}
          >
            Alumni Assist
          </span>
          <h2
            className="font-[family-name:var(--font-sora)] font-bold"
            style={{ color: "#072A63", fontSize: "clamp(1.8rem,4vw,3rem)" }}
          >
            Your Network is Your Net Worth
          </h2>
          <p className="mt-4 text-[#4A5568] max-w-xl mx-auto">
            Leverage the DBIT alumni ecosystem for career growth, mentorship, and lifelong professional connections.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[20px] md:gap-[24px] lg:gap-[32px]">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              className="rounded-[2rem] p-[32px] group card-hover flex flex-col items-start"
              style={{
                background: "#FFFFFF",
                border: "1px solid rgba(11,61,145,0.06)",
                boxShadow: "0 10px 40px rgba(11,61,145,0.04)",
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <div
                className="w-16 h-16 rounded-[1.25rem] flex items-center justify-center mb-[20px] text-white shadow-sm"
                style={{ background: `linear-gradient(135deg, ${p.color}, ${p.color}bb)` }}
              >
                {p.icon}
              </div>
              <h3
                className="font-[family-name:var(--font-sora)] font-bold text-2xl mb-5 tracking-tight mt-2"
                style={{ color: "#0F172A" }}
              >
                {p.title}
              </h3>
              <p className="text-[#4A5568] text-[15px] leading-[1.7] mb-8 flex-grow mt-3">{p.description}</p>
              <Link
                href={p.href}
                className="inline-flex items-center gap-2 text-sm font-semibold transition-all group/link"
                style={{ color: p.color }}
              >
                {p.cta}
                <ArrowRight
                  size={14}
                  className="group-hover/link:translate-x-1 transition-transform"
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
