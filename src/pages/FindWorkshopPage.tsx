import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import type { ChangeEvent } from "react";
import { CATEGORIES, WORKSHOPS } from "../data/workshops";
import type { LayoutContext } from "../components/Layout";
import { ChevronDownIcon, SearchIcon, SearchXIcon } from "../components/Icons";
import SelectionPanel from "../components/SelectionPanel";
import WorkshopCard from "../components/WorkshopCard";

const fieldBox =
  "relative flex h-13 items-center gap-2.5 rounded-md border border-muted bg-white px-4 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-brand";

export default function FindWorkshopPage() {
  const { selectedIds, setSelectedIds } = useOutletContext<LayoutContext>();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");

  const searchTerms = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
  const results = WORKSHOPS.filter(
    (workshop) => {
      const searchableText =
        `${workshop.title} ${workshop.category} ${workshop.schedule}`.toLowerCase();

      return (
        (!category || workshop.category === category) &&
        searchTerms.every((term) => searchableText.includes(term))
      );
    }
  );
  const selectedWorkshops = WORKSHOPS.filter((workshop) => selectedIds.includes(workshop.id));

  const toggleWorkshop = (id: string) => {
    setSelectedIds((currentIds) =>
      currentIds.includes(id)
        ? currentIds.filter((selectedId) => selectedId !== id)
        : [...currentIds, id]
    );
  };

  const clearFilters = () => {
    setQuery("");
    setCategory("");
  };

  return (
    <>
      <section className="flex flex-col items-start gap-3 self-stretch">
        <p className="text-[11px] font-bold text-brand">LEARN. CONNECT. BUILD.</p>
        <h1 className="text-[32px] leading-[112%] font-normal sm:text-4xl md:text-[44px]">
          Make room for a new skill.
        </h1>
        <p className="text-base leading-normal text-muted">
          Practical workshops. Small groups. A place for everyone.
        </p>
      </section>

      <section
        className="flex flex-col items-stretch gap-4 self-stretch md:flex-row md:items-start"
        aria-label="Search and filters"
      >
        <div className="flex flex-1 flex-col gap-2">
          <label className="text-xs font-semibold" htmlFor="workshop-search">Search by keyword</label>
          <div className={fieldBox}>
            <SearchIcon />
            <input
              id="workshop-search"
              className="h-full min-w-0 flex-1 border-0 bg-transparent text-base text-ink outline-none placeholder:text-muted"
              type="search"
              placeholder="Search workshops..."
              value={query}
              onChange={(event: ChangeEvent<HTMLInputElement>) => setQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 md:w-70">
          <label className="text-xs font-semibold" htmlFor="workshop-category">Category</label>
          <div className={fieldBox}>
            <select
              id="workshop-category"
              className="absolute inset-0 h-full w-full cursor-pointer appearance-none border-0 bg-transparent pr-10 pl-4 text-base text-ink outline-none"
              value={category}
              onChange={(event: ChangeEvent<HTMLSelectElement>) => setCategory(event.target.value)}
            >
              <option value="">All categories</option>
              {CATEGORIES.map((name) => (
                <option key={name} value={name}>{name}</option>
              ))}
            </select>
            <span className="pointer-events-none ml-auto">
              <ChevronDownIcon />
            </span>
          </div>
        </div>
      </section>

      <div className="flex flex-col items-stretch gap-6 self-stretch lg:flex-row lg:items-start lg:gap-8">
        <section className="flex min-w-0 flex-1 flex-col gap-4" aria-label="Upcoming workshops">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Upcoming workshops</h2>
            <span className="text-xs text-muted" aria-live="polite">
              {results.length} {results.length === 1 ? "result" : "results"}
            </span>
          </div>

          {results.length > 0 ? (
            <>
              <div className="flex flex-col gap-4">
                {results.map((workshop) => (
                  <WorkshopCard
                    key={workshop.id}
                    workshop={workshop}
                    isSelected={selectedIds.includes(workshop.id)}
                    onSelect={toggleWorkshop}
                  />
                ))}
              </div>
              <p className="text-[11px] text-muted">All times shown in your local timezone (GMT).</p>
            </>
          ) : (
            <div className="flex items-start gap-4 rounded-lg border border-dashed border-line bg-white p-4 sm:p-6">
              <SearchXIcon />
              <div className="flex flex-1 flex-col items-start gap-2">
                <h3 className="text-base font-semibold">No workshops found</h3>
                <p className="text-[13px] leading-normal text-muted">
                  {searchTerms.length > 0 ? `No matches for “${query.trim()}”. ` : "No matches. "}
                  Try another keyword or category.
                </p>
                <button
                  type="button"
                  className="cursor-pointer border-0 bg-transparent p-0 text-[13px] font-semibold text-brand underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
                  onClick={clearFilters}
                >
                  Clear search &amp; filters
                </button>
              </div>
            </div>
          )}
        </section>

        <SelectionPanel
          workshops={selectedWorkshops}
          onRemove={toggleWorkshop}
        />
      </div>
    </>
  );
}
