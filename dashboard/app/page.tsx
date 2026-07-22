"use client";

import { useState } from "react";
import { Sidebar, type Tab } from "@/components/Sidebar";
import { OverviewTab } from "@/components/OverviewTab";
import { RunTab } from "@/components/RunTab";
import { UsageTab } from "@/components/UsageTab";

export default function Home() {
  const [tab, setTab] = useState<Tab>("overview");

  return (
    <div className="app-shell">
      <Sidebar active={tab} onChange={setTab} />
      <main className="main">
        {tab === "overview" && <OverviewTab />}
        {tab === "run" && <RunTab />}
        {tab === "usage" && <UsageTab />}
      </main>
    </div>
  );
}
