import {
  FiArrowRight,
  FiBookmark,
  FiCalendar,
  FiCheck,
  FiCheckCircle,
  FiChevronDown,
  FiSearch,
  FiX,
} from "react-icons/fi";

export function BookmarkIcon() {
  return <FiBookmark size={18} color="#202020" aria-hidden="true" />;
}

export function SearchIcon() {
  return <FiSearch size={18} color="#626262" aria-hidden="true" />;
}

export function ChevronDownIcon() {
  return <FiChevronDown size={16} color="#202020" aria-hidden="true" />;
}

export function CalendarIcon() {
  return <FiCalendar size={15} color="#626262" aria-hidden="true" />;
}

export function CheckIcon() {
  return <FiCheck size={16} color="#CC0000" aria-hidden="true" />;
}

export function CircleCheckIcon() {
  return <FiCheckCircle size={16} color="#CC0000" aria-hidden="true" />;
}

export function ArrowRightIcon() {
  return <FiArrowRight size={16} color="white" aria-hidden="true" />;
}

export function SearchXIcon() {
  return (
    <span className="relative inline-flex size-6 items-center justify-center" aria-hidden="true">
      <FiSearch size={24} color="#626262" />
      <FiX className="absolute right-0 top-0 bg-white" size={12} color="#626262" />
    </span>
  );
}
