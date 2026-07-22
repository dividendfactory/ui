import { stacks, stats } from "@/lib/stats";

export function OverviewTab() {
  return (
    <div className="content">
      <div>
        <h1 className="page-title">개요</h1>
        <p className="page-subtitle">
          ui-ux-pro-max 스킬이 제공하는 검색 가능한 디자인 데이터베이스 현황입니다.
        </p>
      </div>

      <div className="stat-grid">
        {stats.map((stat) => (
          <div key={stat.label} className="card stat-card">
            <span className="stat-value">{stat.value}</span>
            <span className="stat-label">{stat.label}</span>
            <span className="stat-hint">{stat.hint}</span>
          </div>
        ))}
      </div>

      <div className="card">
        <h2 className="section-title">지원 스택 ({stacks.length}개)</h2>
        <div className="chip-row">
          {stacks.map((stack) => (
            <span key={stack} className="chip">
              {stack}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
