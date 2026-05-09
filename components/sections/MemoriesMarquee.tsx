"use client";

import SectionHeader from "@/components/ui/SectionHeader";

const memories = [
  { label: "MILAN Reunion", year: "2024" },
  { label: "Graduation Day", year: "2025" },
  { label: "Alumni Cricket", year: "2023" },
  { label: "Tech Workshop", year: "2024" },
  { label: "Kannadotsava", year: "2021" },
  { label: "Campus Life", year: "2022" },
  { label: "MILAN 2022", year: "2022" },
  { label: "Award Ceremony", year: "2025" },
  { label: "Hackathon", year: "2023" },
  { label: "Cultural Fest", year: "2022" },
  { label: "Industry Visit", year: "2024" },
  { label: "Sports Meet", year: "2023" },
];

function MemoryCard({ item, index }: { item: typeof memories[0]; index: number }) {
  const patterns = [
    "linear-gradient(135deg, #173676 0%, #0E295E 100%)",
    "linear-gradient(135deg, #214A94 0%, #102A59 100%)",
    "linear-gradient(135deg, #143B7A 0%, #112345 100%)",
    "linear-gradient(135deg, #264F8F 0%, #162A52 100%)",
  ];

  const accents = ["Archive", "Reunion", "Campus", "Community"];

  return (
    <div
      className="relative flex-shrink-0 rounded-3xl overflow-hidden group transition-all duration-500 hover:-translate-y-2"
      style={{
        width: "260px",
        height: "164px",
        marginRight: "18px",
        background: patterns[index % patterns.length],
        border: "1px solid rgba(255,255,255,0.08)",
        boxShadow: "0 20px 40px rgba(2,6,23,0.18)",
      }}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.08))" }}
      />

      <div className="absolute inset-0 flex flex-col justify-between p-6">
        <span className="text-[10px] uppercase tracking-[0.22em] text-white/55">
          {accents[index % accents.length]}
        </span>
        <div className="space-y-3">
          <p className="font-[family-name:var(--font-sora)] font-semibold text-white text-2xl leading-tight">
            {item.label}
          </p>
          <span
            className="inline-flex text-[11px] font-medium px-3 py-1 rounded-full"
            style={{ background: "rgba(244,180,0,0.16)", color: "#F4B400" }}
          >
            {item.year}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function MemoriesMarquee() {
  return (
    <section
      className="section-shell relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0F172A 0%, #13213A 100%)" }}
      aria-label="Alumni Memories Gallery"
    >
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.14), transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 w-full">
        <SectionHeader
          eyebrow="Memories"
          title="Moments That Still Hold the Campus Together"
          subtitle="A quieter look at the reunions, traditions, and milestones that keep the alumni story alive."
          light
        />

        <div className="marquee-container relative">
          <div
            className="absolute left-0 top-0 bottom-0 w-20 md:w-32 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to right, #0F172A 0%, rgba(15,23,42,0.88) 25%, transparent 100%)" }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-20 md:w-32 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to left, #13213A 0%, rgba(19,33,58,0.88) 25%, transparent 100%)" }}
          />

          <div className="marquee-track" style={{ animationDuration: "48s" }}>
            {[...memories, ...memories, ...memories].map((item, i) => (
              <MemoryCard key={`r1-${i}`} item={item} index={i % memories.length} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
