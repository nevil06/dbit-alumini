"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Briefcase, Users, Lightbulb, ArrowRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const pillars = [
  {
    icon: <Briefcase size={28} />,
    title: "Job Board",
    description:
      "Alumni-exclusive job postings from companies founded or led by DBITians. Refer, hire, and grow together.",
    cta: "Browse Opportunities",
    href: "/alumni-assist",
    color: "#142B6F",
  },
  {
    icon: <Users size={28} />,
    title: "Mentorship",
    description:
      "Connect with experienced alumni mentors for career guidance, startup advice, and professional development.",
    cta: "Find a Mentor",
    href: "/alumni-assist",
    color: "#0B3D91",
  },
  {
    icon: <Lightbulb size={28} />,
    title: "Network",
    description:
      "Build lasting professional relationships with 10,000+ DBITians across 18 countries.",
    cta: "Join the Network",
    href: "/members",
    color: "#234B8F",
  },
];

export default function AlumniAssist() {
  return (
    <section className="section-shell" style={{ background: "#FFFFFF" }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 w-full">
        <SectionHeader
          eyebrow="Alumni Assist"
          title="Your Network Should Feel Useful, Not Distant"
          subtitle="Use the alumni ecosystem for career support, mentorship, and meaningful professional connections."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                className="group rounded-3xl premium-card p-8 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
              >
                <div className="space-y-6 flex flex-col items-center text-center">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-white mx-auto"
                    style={{ background: `linear-gradient(135deg, ${p.color} 0%, ${p.color}dd 100%)` }}
                  >
                    {p.icon}
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold tracking-tight text-[#142B6F]">
                      {p.title}
                    </h3>

                    <p className="text-lg leading-relaxed text-slate-600">
                      {p.description}
                    </p>
                  </div>
                </div>

                <Link
                  href={p.href}
                  className="inline-flex items-center justify-center gap-2 text-sm font-semibold transition-all mt-8 mx-auto"
                  style={{ color: p.color }}
                >
                  {p.cta}
                  <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
      </div>
    </section>
  );
}
