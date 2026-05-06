export interface NewsItem {
  id: number;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  tag: string;
  tagColor: string;
  image: string;
  href?: string;
}

export const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "MILAN 2024 — The Grand Alumni Reunion",
    category: "Alumni Meet",
    date: "December 2024",
    excerpt:
      "MILAN 2024 brought together hundreds of DBIT alumni for an unforgettable evening of nostalgia, networking, and celebration. The annual flagship event strengthened bonds across batches.",
    tag: "Featured",
    tagColor: "#F4B400",
    image: "/images/alumni_reunion.jpg",
    href: "#",
  },
  {
    id: 2,
    title: "Distinction Award Ceremony 2025 — Honoring Excellence",
    category: "Awards",
    date: "March 2025",
    excerpt:
      "Departments across DBIT — AI & DS, AI & ML, CSE, ISE, ECE, EEE, Civil, and Mechanical — celebrated outstanding student achievements at the prestigious Distinction Award Ceremony 2025.",
    tag: "Awards",
    tagColor: "#0B3D91",
    image: "/images/cultural_event.jpg",
    href: "#",
  },
  {
    id: 3,
    title: "Graduands Day Ceremony 2025 — A New Chapter Begins",
    category: "Ceremony",
    date: "February 2025",
    excerpt:
      "The Graduands Day 2025 marked the formal transition of the Class of 2025 into the DBIT Alumni Family. A heartfelt ceremony celebrated across all departments with pride and joy.",
    tag: "Ceremony",
    tagColor: "#1565C0",
    image: "/images/graduation.jpg",
    href: "#",
  },
  {
    id: 4,
    title: "Alumni Cricket Tournament 2023 — Sports & Spirit",
    category: "Sports",
    date: "September 2023",
    excerpt:
      "The DBIT Alumni Cricket Tournament 2023 was a roaring success with teams from multiple batches competing on the iconic DBIT Cricket Ground amid great camaraderie and sportsmanship.",
    tag: "Sports",
    tagColor: "#2E7D32",
    image: "/images/alumni_workshop.jpg",
    href: "#",
  },
  {
    id: 5,
    title: "Young Achiever of the Month — Alumni Spotlight Series",
    category: "Achievers",
    date: "Ongoing",
    excerpt:
      "The DBIT Alumni Association celebrates one outstanding young alumnus every month — recognizing entrepreneurship, innovation, social impact, and professional excellence.",
    tag: "Series",
    tagColor: "#7B1FA2",
    image: "/images/alumni_reunion.jpg",
    href: "#",
  },
  {
    id: 6,
    title: "Kannadotsava 2021 — Cultural Roots, Alumni Pride",
    category: "Culture",
    date: "November 2021",
    excerpt:
      "Alumni and faculty came together to celebrate Karnataka's rich cultural heritage at Kannadotsava 2021 — an event filled with folk performances, traditional attire, and shared pride.",
    tag: "Culture",
    tagColor: "#E65100",
    image: "/images/cultural_event.jpg",
    href: "#",
  },
];
