import { useState } from "react";
import { Outlet } from "react-router-dom";
import type { Dispatch, SetStateAction } from "react";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";

export type LayoutContext = {
  selectedIds: string[];
  setSelectedIds: Dispatch<SetStateAction<string[]>>;
};

export default function Layout() {
  const [selectedIds, setSelectedIds] = useState<string[]>(["accessible-forms"]);

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader selectionCount={selectedIds.length} />
      <main className="flex flex-1 flex-col items-start gap-6 px-4 pt-8 pb-10 sm:px-8 md:gap-8 md:pt-12 md:pb-14 lg:px-20">
        <Outlet context={{ selectedIds, setSelectedIds }} />
      </main>
      <SiteFooter />
    </div>
  );
}
