import { Link } from "react-router-dom";

export default function SiteFooter() {
  return (
    <footer className="flex flex-col gap-2 border-t border-line px-4 py-6 text-xs sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-20">
      <span className="text-muted">© 2026 Workshop Finder</span>
      <Link to="/accessibility" className="underline">Accessibility</Link>
    </footer>
  );
}
