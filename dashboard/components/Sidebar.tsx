"use client";

export type Tab = "overview" | "run" | "usage";

const NAV_ITEMS: { id: Tab; label: string }[] = [
  { id: "overview", label: "개요" },
  { id: "run", label: "실행" },
  { id: "usage", label: "사용법" },
];

export function Sidebar({
  active,
  onChange,
}: {
  active: Tab;
  onChange: (tab: Tab) => void;
}) {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-mark">U</div>
        <div className="brand-name">UI/UX Pro Max</div>
      </div>
      <nav className="nav">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            className="nav-item"
            data-active={active === item.id}
            onClick={() => onChange(item.id)}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </aside>
  );
}
