export const CATEGORIES = ["Frontend", "Accessibility", "Design"] as const;

export type Workshop = {
  id: string;
  category: (typeof CATEGORIES)[number];
  title: string;
  schedule: string;
  seats: number;
};

export const WORKSHOPS: Workshop[] = [
  { id: "css-layout-lab", category: "Frontend", title: "CSS Layout Lab", schedule: "Nov 12 · 10:00–12:00 · Online", seats: 8 },
  { id: "design-handoff", category: "Design", title: "Design Handoff", schedule: "Nov 13 · 10:00–12:00 · Online", seats: 12 },
  { id: "accessible-forms", category: "Accessibility", title: "Accessible Forms", schedule: "Nov 14 · 14:00–16:00 · Online", seats: 5 },
  { id: "javascript-basics", category: "Frontend", title: "JavaScript Basics", schedule: "Nov 18 · 10:00–12:00 · Online", seats: 0 },
];
