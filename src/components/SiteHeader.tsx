import { Link, NavLink } from "react-router-dom";
import { BookmarkIcon } from "./Icons";

type SiteHeaderProps = {
  selectionCount: number;
};

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  isActive ? "font-semibold text-brand" : "font-normal text-muted";

export default function SiteHeader({ selectionCount }: SiteHeaderProps) {
  return (
    <header className="flex flex-col gap-3 border-b border-line bg-white px-4 py-4 sm:px-8 md:h-22 md:flex-row md:items-center md:justify-between md:py-0 lg:px-20">
      <Link to="/" className="flex items-center gap-3">
        <span className="flex size-8 shrink-0 gap-[3px] bg-brand p-[7px]" aria-hidden="true">
          <span className="h-[18px] w-1 shrink-0 bg-white" />
          <span className="flex flex-col gap-[3px]">
            <span className="h-[7px] w-[11px] bg-white" />
            <span className="h-2 w-[7px] bg-white" />
          </span>
        </span>
        <span className="text-lg font-bold md:text-xl">Workshop Finder</span>
      </Link>
      <nav
        className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm md:gap-x-8"
        aria-label="Main"
      >
        <NavLink to="/" end className={navLinkClass}>Find a workshop</NavLink>
        <NavLink to="/how-it-works" className={navLinkClass}>How it works</NavLink>
        <Link to="/" className="ml-auto flex items-center gap-2 md:ml-0">
          <BookmarkIcon />
          <span>My selection ({selectionCount})</span>
        </Link>
      </nav>
    </header>
  );
}
