"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { distinguishedAlumni } from "@/lib/data/alumni";

export default function DistinguishedAlumni() {
  const featured = distinguishedAlumni.slice(0, 8);

  return (
    <section className="section-shell" style={{ background: "#F3F6FB" }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 w-full">
        <SectionHeader
          eyebrow="Distinguished Alumni"
          title="DBITians Who Changed the Game"
          subtitle="From DBIT classrooms to boardrooms, laboratories, and global stages, our alumni are shaping the future."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {featured.map((alumni, i) => (
            <motion.div
              key={alumni.id}
              className="group rounded-3xl premium-card p-8 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
            >
              <div className="space-y-6 flex flex-col items-center text-center flex-grow">
                <div className="w-16 h-16 rounded-2xl bg-[#142B6F] flex items-center justify-center text-white text-xl font-semibold mx-auto">
                  {alumni.initials}
                </div>

                <div className="space-y-3">
                  <span className="inline-flex items-center justify-center bg-[#DCE5F7] text-[#142B6F] px-3 py-1 rounded-full text-[11px] font-semibold tracking-[0.12em] uppercase mx-auto">
                    Alumni Founded
                  </span>
                  <h3 className="text-2xl font-bold tracking-tight text-[#142B6F]">
                    {alumni.name}
                  </h3>
                  <p className="text-lg leading-relaxed text-slate-600">
                    {alumni.company} · {alumni.designation}
                  </p>
                  <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#0B3D91]">
                    {alumni.department} - {alumni.batch}
                  </p>
                </div>
              </div>

              {alumni.website ? (
                <a
                  href={alumni.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-[#0B3D91] mt-8 mx-auto"
                >
                  Visit Profile
                  <ExternalLink size={14} />
                </a>
              ) : (
                <div className="mt-8 h-5" />
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Link
            href="/distinguished"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-semibold text-[15px] tracking-wide transition-all duration-300 hover:-translate-y-0.5 bg-[#142B6F] text-white min-w-[250px] shadow-lg hover:shadow-xl"
          >
            Meet All Distinguished Alumni
            <ExternalLink size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
