"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink, Building2, GraduationCap } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { distinguishedAlumni } from "@/lib/data/alumni";

export default function DistinguishedAlumni() {
  const featured = distinguishedAlumni.slice(0, 6);

  return (
    <section className="py-24" style={{ background: "#F8FAFC" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Distinguished Alumni"
          title="Boscoites Who Changed the Game"
          subtitle="From DBIT classrooms to boardrooms, laboratories, and global stages — our alumni are shaping the future."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((alumni, i) => (
            <motion.div
              key={alumni.id}
              className="relative rounded-2xl overflow-hidden group card-hover"
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

              <div className="p-6">
                {/* Avatar + Name */}
                <div className="flex items-start gap-4 mb-5">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-white font-bold text-lg flex-shrink-0 font-[family-name:var(--font-sora)]"
                    style={{
                      background: `linear-gradient(135deg, ${alumni.color}, ${alumni.color}bb)`,
                      boxShadow: `0 4px 16px ${alumni.color}40`,
                    }}
                  >
                    {alumni.initials}
                  </div>
                  <div>
                    <h3
                      className="font-[family-name:var(--font-sora)] font-bold text-base leading-tight"
                      style={{ color: "#0F172A" }}
                    >
                      {alumni.name}
                    </h3>
                    <div className="flex items-center gap-1.5 mt-1.5 flex-wrap">
                      <span
                        className="inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-full"
                        style={{
                          background: `${alumni.color}15`,
                          color: alumni.color,
                          border: `1px solid ${alumni.color}30`,
                        }}
                      >
                        <GraduationCap size={10} />
                        {alumni.department} · {alumni.batch}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Company */}
                <div
                  className="flex items-center gap-2 mb-4 px-3 py-2 rounded-xl"
                  style={{ background: "rgba(11,61,145,0.04)" }}
                >
                  <Building2 size={14} style={{ color: "#0B3D91" }} />
                  <div>
                    <p className="font-semibold text-xs" style={{ color: "#0B3D91" }}>
                      {alumni.company}
                    </p>
                    <p className="text-[10px] text-gray-400">{alumni.designation}</p>
                  </div>
                </div>

                {/* Achievement */}
                <p className="text-sm leading-relaxed mb-5" style={{ color: "#4A5568" }}>
                  {alumni.achievement}
                </p>

                {/* Link */}
                {alumni.website && (
                  <a
                    href={alumni.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold transition-colors duration-200 group/link"
                    style={{ color: "#0B3D91" }}
                  >
                    <span className="group-hover/link:underline">Visit Venture</span>
                    <ExternalLink size={11} />
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

        {/* View All */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Link
            href="/distinguished"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #0B3D91, #1565C0)",
              color: "#FFFFFF",
              boxShadow: "0 4px 20px rgba(11,61,145,0.25)",
            }}
          >
            Meet All Distinguished Alumni
            <ExternalLink size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
