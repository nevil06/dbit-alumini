"use client";

const memories = [
  { label: "MILAN Reunion", color: "#0B3D91", year: "2024" },
  { label: "Graduation Day", color: "#072A63", year: "2025" },
  { label: "Alumni Cricket", color: "#1565C0", year: "2023" },
  { label: "Tech Workshop", color: "#0B3D91", year: "2024" },
  { label: "Kannadotsava", color: "#072A63", year: "2021" },
  { label: "Campus Life", color: "#1565C0", year: "2022" },
  { label: "MILAN 2022", color: "#0B3D91", year: "2022" },
  { label: "Award Ceremony", color: "#072A63", year: "2025" },
  { label: "Hackathon", color: "#1565C0", year: "2023" },
  { label: "Cultural Fest", color: "#0B3D91", year: "2022" },
  { label: "Industry Visit", color: "#072A63", year: "2024" },
  { label: "Sports Meet", color: "#1565C0", year: "2023" },
];

const row2 = [...memories].reverse();

// Gradient placeholder card when real images aren't available
function MemoryCard({ item, index }: { item: typeof memories[0]; index: number }) {
  const patterns = [
    "radial-gradient(circle at 30% 40%, #0B3D91 0%, #072A63 60%, #0A1628 100%)",
    "radial-gradient(circle at 70% 60%, #1565C0 0%, #0B3D91 50%, #072A63 100%)",
    "linear-gradient(135deg, #072A63 0%, #0B3D91 50%, #1565C0 100%)",
    "radial-gradient(ellipse at 50% 20%, #1E3A8A 0%, #0B3D91 40%, #0A1628 100%)",
  ];

  const icons = ["🎓", "🏏", "🚀", "🏆", "🎭", "💡", "🤝", "📸", "⚡", "🌟", "🎯", "🏅"];

  return (
    <div
      className="relative flex-shrink-0 rounded-2xl overflow-hidden group cursor-pointer"
      style={{
        width: "220px",
        height: "160px",
        marginRight: "16px",
        background: patterns[index % patterns.length],
      }}
    >
      {/* Overlay on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: "rgba(244,180,0,0.15)" }}
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
        <span className="text-4xl mb-2">{icons[index % icons.length]}</span>
        <p className="font-[family-name:var(--font-sora)] font-bold text-white text-sm text-center leading-tight">
          {item.label}
        </p>
        <span
          className="mt-1.5 text-[10px] font-medium px-2 py-0.5 rounded-full"
          style={{ background: "rgba(244,180,0,0.25)", color: "#F4B400" }}
        >
          {item.year}
        </span>
      </div>

      {/* Shimmer line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
        style={{ background: "linear-gradient(90deg,#F4B400,#FFD54F)" }}
      />
    </div>
  );
}

export default function MemoriesMarquee() {
  return (
    <section
      className="relative pt-12 pb-24 overflow-hidden"
      style={{ background: "#0F172A" }}
      aria-label="Alumni Memories Gallery"
    >
      {/* Header */}
      <div className="text-center mb-8 px-4">
        <span
          className="inline-block text-xs font-semibold tracking-[0.2em] uppercase mb-2 px-3 py-1 rounded-full"
          style={{
            color: "#F4B400",
            background: "rgba(244,180,0,0.12)",
            border: "1px solid rgba(244,180,0,0.2)",
          }}
        >
          Memories
        </span>
        <h2
          className="font-[family-name:var(--font-sora)] font-bold text-white"
          style={{ fontSize: "clamp(1.4rem,3vw,2rem)" }}
        >
          Nostalgia in Every Frame
        </h2>
      </div>

      {/* Row 1 — Left to Right */}
      <div className="marquee-container relative mb-12 shadow-2xl">
        {/* Edge fades for cinematic marquee effect */}
        <div
          className="absolute left-0 top-0 bottom-0 w-32 md:w-48 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #0F172A 0%, rgba(15,23,42,0.8) 20%, transparent 100%)" }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-32 md:w-48 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #0F172A 0%, rgba(15,23,42,0.8) 20%, transparent 100%)" }}
        />
        <div className="marquee-track" style={{ animationDuration: "40s" }}>
          {[...memories, ...memories, ...memories].map((item, i) => (
            <MemoryCard key={`r1-${i}`} item={item} index={i % memories.length} />
          ))}
        </div>
      </div>
      
      {/* Bottom fade transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none" style={{ background: "linear-gradient(to top, #072A63, transparent)" }} />

      <div className="h-16" />
    </section>
  );
}
