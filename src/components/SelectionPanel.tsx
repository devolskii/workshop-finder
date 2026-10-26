import { useNavigate } from "react-router-dom";
import type { Workshop } from "../data/workshops";
import { ArrowRightIcon } from "./Icons";

type SelectionPanelProps = {
  workshops: Workshop[];
  onRemove: (id: string) => void;
};

export default function SelectionPanel({ workshops, onRemove }: SelectionPanelProps) {
  const navigate = useNavigate();

  return (
    <aside
      className="flex w-full shrink-0 flex-col items-start gap-5 rounded-lg border border-line bg-white p-4 sm:p-6 lg:w-88"
      aria-label="Your selection"
    >
      <div className="flex items-center justify-between self-stretch">
        <h2 className="text-lg font-semibold">Selected Workshop(s)</h2>
        <span className="flex size-6.5 items-center justify-center rounded bg-brand-tint text-[13px] font-semibold text-brand">
          {workshops.length}
        </span>
      </div>
      <hr className="m-0 h-px self-stretch border-0 bg-line" />
      {workshops.length > 0 ? (
        <>
          <div className="flex w-full flex-col gap-5">
            {workshops.map((workshop) => (
              <div key={workshop.id} className="flex flex-col gap-2.5 self-stretch">
                <h3 className="text-xl leading-[130%] font-semibold">{workshop.title}</h3>
                <p className="text-[13px] text-muted">{workshop.category}</p>
                <p className="text-[13px]">{workshop.schedule}</p>
                <div className="flex items-start justify-between">
                  <span className="text-xs text-muted">{workshop.seats} seats available</span>
                  <button
                    type="button"
                    className="cursor-pointer border-0 bg-transparent p-0 text-xs text-brand underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
                    onClick={() => onRemove(workshop.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <button
            type="button"
            className="flex h-11 w-full cursor-pointer items-center justify-center gap-2 rounded-md border border-brand bg-brand text-sm font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
            onClick={() =>
              navigate(`/enroll/${workshops.map((workshop) => workshop.id).join(",")}`)
            }
          >
            <ArrowRightIcon />
            Enroll in workshop(s)
          </button>
          <p className="text-xs leading-normal text-muted">Your seat is confirmed after enrollment.</p>
        </>
      ) : (
        <p className="text-xs leading-normal text-muted">
          No workshop selected yet. Choose one from the list.
        </p>
      )}
    </aside>
  );
}
