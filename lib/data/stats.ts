export interface Stat {
  id: number;
  label: string;
  value: number;
  suffix: string;
  prefix?: string;
  description: string;
  icon: string;
}

export const impactStats: Stat[] = [
  {
    id: 1,
    label: "Alumni Network",
    value: 10000,
    suffix: "+",
    description: "Boscoites connected worldwide",
    icon: "users",
  },
  {
    id: 2,
    label: "Countries Represented",
    value: 18,
    suffix: "+",
    description: "Global alumni presence",
    icon: "globe",
  },
  {
    id: 3,
    label: "Startups Founded",
    value: 50,
    suffix: "+",
    description: "Entrepreneurial ventures launched",
    icon: "rocket",
  },
  {
    id: 4,
    label: "Industry Leaders",
    value: 200,
    suffix: "+",
    description: "CXOs, Directors & Senior Leaders",
    icon: "award",
  },
  {
    id: 5,
    label: "Active Mentors",
    value: 120,
    suffix: "+",
    description: "Alumni guiding the next generation",
    icon: "heart",
  },
  {
    id: 6,
    label: "Placement Rate",
    value: 85,
    suffix: "%",
    description: "Alumni-supported placement success",
    icon: "briefcase",
  },
];
