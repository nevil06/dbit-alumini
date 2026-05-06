"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, Tag, ArrowRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { newsItems } from "@/lib/data/news";

export default function Newsroom() {
  return (
    <section className="py-[72px] md:py-[90px] lg:py-[120px]" style={{ background: "#FFFFFF" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Newsroom"
          title="Stories from the DBITian Community"
          subtitle="Events, reunions, achievements and milestones that keep our alumni family thriving."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, i) => (
            <motion.article
              key={item.id}
              className="group rounded-2xl overflow-hidden card-hover"
              style={{
                background: "#FFFFFF",
                border: "1px solid rgba(11,61,145,0.08)",
                boxShadow: "0 2px 16px rgba(11,61,145,0.05)",
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* Image / Gradient placeholder */}
              <div
                className="relative h-44 overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${item.tagColor}22 0%, ${item.tagColor}44 100%)`,
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl"
                    style={{ background: `${item.tagColor}25`, border: `2px solid ${item.tagColor}40` }}
                  >
                    {i === 0 ? "🎉" : i === 1 ? "🏆" : i === 2 ? "🎓" : i === 3 ? "🏏" : i === 4 ? "⭐" : "🎭"}
                  </div>
                </div>
                {/* Category tag */}
                <span
                  className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full text-white"
                  style={{ background: item.tagColor }}
                >
                  {item.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center gap-3 mb-3 text-xs text-gray-400">
                  <span className="flex items-center gap-1">
                    <Calendar size={11} />
                    {item.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Tag size={11} />
                    {item.category}
                  </span>
                </div>

                <h3
                  className="font-[family-name:var(--font-sora)] font-bold text-base leading-snug mb-3 group-hover:text-[#0B3D91] transition-colors"
                  style={{ color: "#0F172A" }}
                >
                  {item.title}
                </h3>

                <p className="text-sm leading-relaxed mb-4" style={{ color: "#4A5568" }}>
                  {item.excerpt}
                </p>

                <Link
                  href={item.href || "#"}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold transition-all group/link"
                  style={{ color: "#0B3D91" }}
                >
                  Read More
                  <ArrowRight
                    size={12}
                    className="group-hover/link:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Link
            href="/newsroom"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 sm:px-10 sm:py-5 rounded-full font-semibold text-[15px] border-2 tracking-wide transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            style={{
              borderColor: "#0B3D91",
              color: "#0B3D91",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.background = "#0B3D91";
              (e.currentTarget as HTMLElement).style.color = "#FFFFFF";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.background = "transparent";
              (e.currentTarget as HTMLElement).style.color = "#0B3D91";
            }}
          >
            View All News & Events
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
