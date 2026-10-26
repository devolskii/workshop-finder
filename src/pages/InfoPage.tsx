import { Link, useParams } from "react-router-dom";

const PAGES = {
  "how-it-works": {
    title: "How it works",
    text: "Browse upcoming workshops, select the one you want, then enroll to confirm your seat.",
  },
  accessibility: {
    title: "Accessibility",
    text: "Workshop Finder is built to be usable by everyone. Contact us if you hit a barrier.",
  },
  enroll: {
    title: "Enrollment",
    text: "Enrollment is not connected to a backend yet. Your seat is confirmed once enrollment is complete.",
  },
} as const;

type InfoPageName = keyof typeof PAGES;

type InfoPageProps = {
  page: InfoPageName;
};

export default function InfoPage({ page }: InfoPageProps) {
  const { workshopId } = useParams();
  const content = PAGES[page];

  return (
    <section className="flex flex-col items-start gap-3 self-stretch">
      <h1 className="text-[32px] leading-[112%] font-normal md:text-[44px]">{content.title}</h1>
      <p className="text-base leading-normal text-muted">
        {content.text}
        {workshopId ? ` (Workshop: ${workshopId})` : ""}
      </p>
      <Link to="/" className="text-xs text-brand underline">Back to workshops</Link>
    </section>
  );
}
