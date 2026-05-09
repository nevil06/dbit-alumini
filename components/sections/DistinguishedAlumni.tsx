"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { distinguishedAlumni } from "@/lib/data/alumni";

export default function DistinguishedAlumni() {
  const featured = distinguishedAlumni.slice(0, 8);

  return (
    <section className="py-32 md:py-48 bg-[#F8FAFC]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Distinguished Alumni"
          title="DBITians Who Changed the Game"
          subtitle="From DBIT classrooms to boardrooms, laboratories, and global stages — our alumni are shaping the future."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {featured.map((alumni, i) => (
            <motion.div
              key={alumni.id}
              className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col items-center text-center h-full"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* Avatar */}
              <div className="w-16 h-16 rounded-full bg-[#142B6F] flex items-center justify-center text-white text-xl font-bold mb-4 flex-shrink-0">
                {alumni.initials}
              </div>
              
              {/* Badge */}
              <span className="bg-[#D4AF37] text-[#142B6F] px-3 py-1 rounded-md text-[11px] font-bold tracking-wide mb-6">
                Alumni Founded
              </span>

              {/* Name & Dept */}
              <div className="mb-6">
                <h3 className="text-[17px] font-bold text-[#142B6F] leading-tight mb-1.5">
                  {alumni.name}
                </h3>
                <p className="text-[#D4AF37] text-[13px] font-semibold">
                  {alumni.department} · {alumni.batch}
                </p>
              </div>

              {/* Company & Role */}
              <div className="mb-6 flex-grow flex flex-col justify-center">
                <h4 className="text-[15px] font-bold text-[#142B6F] leading-tight mb-1">
                  {alumni.company}
                </h4>
                <p className="text-slate-500 text-[14px] font-medium">
                  {alumni.designation}
                </p>
              </div>

              {/* Bottom Link */}
              {alumni.website ? (
                <a
                  href={alumni.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 text-[#D4AF37] font-bold text-[14px] hover:opacity-80 transition-opacity mt-auto"
                >
                  <ExternalLink size={16} className="mb-[2px]" />
                  Visit
                </a>
              ) : (
                <div className="mt-auto h-[24px]"></div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-20 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Link
            href="/distinguished"
            className="inline-flex items-center justify-center gap-3 px-10 py-5 sm:px-12 sm:py-6 rounded-full font-semibold text-[16px] sm:text-[18px] tracking-wide transition-all duration-300 hover:-translate-y-1 bg-[#142B6F] text-white min-w-[280px] shadow-lg hover:shadow-xl"
          >
            Meet All Distinguished Alumni
            <ExternalLink size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
