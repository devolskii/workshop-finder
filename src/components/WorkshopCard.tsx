import type { Workshop } from "../data/workshops";
import { CalendarIcon, CheckIcon } from "./Icons";

type WorkshopCardProps = {
  workshop: Workshop;
  isSelected: boolean;
  onSelect: (id: string) => void;
};

const buttonBase =
  "flex h-11 w-full items-center justify-center gap-2 rounded-md border text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink sm:w-32";

export default function WorkshopCard({ workshop, isSelected, onSelect }: WorkshopCardProps) {
  const soldOut = workshop.seats === 0;
  const cardClass = [
    "flex flex-col gap-4 rounded-lg bg-white p-4 sm:flex-row sm:items-center sm:gap-6 sm:p-6",
    isSelected ? "border-2 border-brand" : "border border-line",
    soldOut && "bg-[#EEE]",
  ]
    .filter(Boolean)
    .join(" ");
  const mutedText = soldOut ? "text-soft" : "";

  return (
    <article className={cardClass}>
      <div className="flex min-w-0 flex-1 flex-col gap-2.5">
        <div className="flex items-center gap-3 text-[11px]">
          <span className={`font-bold uppercase ${soldOut ? "text-soft" : "text-brand"}`}>
            {workshop.category}
          </span>
          {soldOut && <span className="text-soft">SOLD OUT</span>}
        </div>
        <h3 className={`text-lg leading-tight font-semibold sm:text-[21px] ${mutedText}`}>
          {workshop.title}
        </h3>
        <p className="flex items-center gap-2 text-xs text-muted">
          <CalendarIcon />
          <span>{workshop.schedule}</span>
        </p>
      </div>
      <div className="flex items-center justify-between gap-4 sm:w-36 sm:flex-col sm:items-end sm:justify-start sm:gap-2.5">
        <span className={`text-xs font-medium ${mutedText}`}>{workshop.seats} seats available</span>
        {soldOut ? (
          <button
            type="button"
            className={`${buttonBase} w-auto min-w-32 cursor-not-allowed border-[#E6E6E6] bg-[#E6E6E6] text-soft sm:w-32`}
            disabled
          >
            Unavailable
          </button>
        ) : isSelected ? (
          <button
            type="button"
            className={`${buttonBase} w-auto min-w-32 cursor-pointer border-brand bg-brand-tint text-brand sm:w-32`}
            aria-pressed="true"
            onClick={() => onSelect(workshop.id)}
          >
            <CheckIcon />
            Selected
          </button>
        ) : (
          <button
            type="button"
            className={`${buttonBase} w-auto min-w-32 cursor-pointer border-brand bg-brand text-white sm:w-32`}
            aria-pressed="false"
            onClick={() => onSelect(workshop.id)}
          >
            Select
          </button>
        )}
      </div>
    </article>
  );
}
