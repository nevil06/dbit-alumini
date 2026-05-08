"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink, Building2, GraduationCap } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { distinguishedAlumni } from "@/lib/data/alumni";

export default function DistinguishedAlumni() {
  const featured = distinguishedAlumni.slice(0, 6);

  return (
    <section className="py-20 md:py-28" style={{ background: "#F8FAFC" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Distinguished Alumni"
          title="DBITians Who Changed the Game"
          subtitle="From DBIT classrooms to boardrooms, laboratories, and global stages — our alumni are shaping the future."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {featured.map((alumni, i) => (
            <motion.div
              key={alumni.id}
              className="relative rounded-[2rem] overflow-hidden group card-hover"
              style={{
                background: "#FFFFFF",
                border: "1px solid rgba(11,61,145,0.08)",
                boxShadow: "0 4px 20px rgba(11,61,145,0.06)",
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* Top color bar */}
              <div
                className="h-1.5 w-full"
                style={{
                  background: `linear-gradient(90deg, ${alumni.color}, #F4B400)`,
                }}
              />

              <div className="p-8 flex flex-col h-full text-left">
                {/* Avatar + Name */}
                <div className="flex flex-row items-center gap-5 mb-5">
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center text-white font-bold text-2xl flex-shrink-0 shadow-md font-[family-name:var(--font-sora)]"
                    style={{ background: `linear-gradient(135deg, ${alumni.color}, ${alumni.color}bb)` }}
                  >
                    {alumni.initials}
                  </div>
                  <div className="flex flex-col items-start text-left">
                    <h3 className="font-[family-name:var(--font-sora)] font-bold text-gray-900 text-xl leading-tight mb-2">
                      {alumni.name}
                    </h3>
                    <div className="flex justify-start items-center gap-1.5 flex-wrap">
                      <span
                        className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full"
                        style={{
                          background: `${alumni.color}15`,
                          color: alumni.color,
                          border: `1px solid ${alumni.color}30`,
                        }}
                      >
                        <GraduationCap size={12} />
                        {alumni.department} · {alumni.batch}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Company */}
                <div
                  className="flex flex-row items-center justify-start gap-4 mb-4 px-4 py-3 rounded-xl w-full"
                  style={{ background: "rgba(11,61,145,0.04)" }}
                >
                  <Building2 size={24} style={{ color: "#0B3D91" }} className="flex-shrink-0" />
                  <div className="text-left">
                    <p className="font-bold text-sm" style={{ color: "#0B3D91" }}>
                      {alumni.company}
                    </p>
                    <p className="text-xs text-gray-500 mt-1 font-medium tracking-wide uppercase">{alumni.designation}</p>
                  </div>
                </div>

                {/* Achievement */}
                <p className="text-sm leading-relaxed mb-5 text-left" style={{ color: "#4A5568" }}>
                  {alumni.achievement}
                </p>

                {/* Link */}
                {alumni.website && (
                  <a
                    href={alumni.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 text-sm font-bold transition-all duration-200 group/link mt-4 w-max px-6 py-3 rounded-lg hover:bg-gray-50"
                    style={{ color: "#0B3D91", border: "1px solid rgba(11,61,145,0.1)" }}
                  >
                    <span>Visit Venture</span>
                    <ExternalLink size={14} className="group-hover/link:translate-x-1 transition-transform" />
                  </a>
                )}
              </div>

              {/* Hover reveal bottom bar */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left"
                style={{ background: `linear-gradient(90deg, ${alumni.color}, #F4B400)` }}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Link
            href="/distinguished"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 sm:px-10 sm:py-5 rounded-full font-semibold text-[15px] tracking-wide transition-all duration-300 hover:-translate-y-1"
            style={{
              background: "linear-gradient(135deg, #0B3D91, #1565C0)",
              color: "#FFFFFF",
              boxShadow: "0 8px 25px rgba(11,61,145,0.25)",
            }}
          >
            Meet All Distinguished Alumni
            <ExternalLink size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
