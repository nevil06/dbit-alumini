"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, Tag, ArrowRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { newsItems } from "@/lib/data/news";

const storyMarks = ["Event", "Award", "Milestone", "Sports", "Spotlight", "Culture"];

export default function Newsroom() {
  return (
    <section className="section-shell" style={{ background: "#F8FAFC" }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 w-full">
        <SectionHeader
          eyebrow="Newsroom"
          title="Stories from the DBITian Community"
          subtitle="Events, reunions, achievements, and milestones that keep the alumni network active."
        />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {newsItems.map((item, i) => (
              <motion.article
                key={item.id}
                className="group rounded-3xl premium-card overflow-hidden transition-all duration-500 hover:-translate-y-2 flex flex-col h-full"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
              >
                <div
                  className="relative min-h-40 px-8 py-7 flex flex-col items-center justify-center gap-3"
                  style={{
                    background: `linear-gradient(180deg, ${item.tagColor}12 0%, ${item.tagColor}20 100%)`,
                  }}
                >
                  <span
                    className="text-[10px] font-semibold uppercase tracking-[0.18em] px-3 py-1 rounded-full"
                    style={{ background: `${item.tagColor}16`, color: item.tagColor }}
                  >
                    {item.tag}
                  </span>
                  <p className="font-[family-name:var(--font-sora)] text-2xl font-semibold text-[#142B6F] text-center">
                    {storyMarks[i]}
                  </p>
                </div>

                <div className="p-8 flex flex-col h-full">
                  <div className="flex items-center justify-center gap-4 mb-6 text-[12px] text-slate-500 uppercase tracking-[0.14em] w-full">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={12} />
                      {item.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Tag size={12} />
                      {item.category}
                    </span>
                  </div>

                  <div className="space-y-3 flex-grow flex flex-col items-center text-center">
                    <h3 className="text-2xl font-bold tracking-tight text-[#142B6F]">
                      {item.title}
                    </h3>

                    <p className="text-lg leading-relaxed text-slate-600">
                      {item.excerpt}
                    </p>
                  </div>

                  <Link
                    href={item.href || "#"}
                    className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-[#0B3D91] mt-8 mx-auto"
                  >
                    Read More
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.article>
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
            href="/newsroom"
            className="inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-full font-semibold text-[15px] border tracking-wide transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
            style={{
              borderColor: "rgba(11,61,145,0.18)",
              color: "#0B3D91",
              background: "rgba(255,255,255,0.72)",
            }}
          >
            View All News and Events
            <ArrowRight size={15} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
