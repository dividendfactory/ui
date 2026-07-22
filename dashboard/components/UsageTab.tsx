import { searchDomains } from "@/lib/stats";

const INSTALL_STEPS = [
  {
    title: "CLI 설치",
    body: "npm install -g ui-ux-pro-max-cli",
  },
  {
    title: "프로젝트 이동",
    body: "cd /path/to/your/project",
  },
  {
    title: "AI 어시스턴트용 설치",
    body: "uipro init --ai claude",
  },
  {
    title: "채팅으로 바로 사용",
    body: 'Build a landing page for my SaaS product',
  },
];

export function UsageTab() {
  return (
    <div className="content">
      <div>
        <h1 className="page-title">사용법</h1>
        <p className="page-subtitle">
          ui-ux-pro-max 스킬을 설치하고 검색 명령을 사용하는 방법입니다.
        </p>
      </div>

      <div className="card">
        <h2 className="section-title">빠른 시작</h2>
        <div className="step-list">
          {INSTALL_STEPS.map((step, i) => (
            <div className="step" key={step.title}>
              <div className="step-num">{i + 1}</div>
              <div className="step-body">
                {step.title}
                <div className="code-block" style={{ marginTop: 6 }}>
                  {step.body}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="card">
        <h2 className="section-title">Claude Marketplace로 설치</h2>
        <div className="code-block">{`/plugin marketplace add nextlevelbuilder/ui-ux-pro-max-skill
/plugin install ui-ux-pro-max@ui-ux-pro-max-skill`}</div>
      </div>

      <div className="card">
        <h2 className="section-title">검색 명령</h2>
        <div className="code-block">{`python3 src/ui-ux-pro-max/scripts/search.py "<query>" --domain <domain> [-n <max_results>]`}</div>
        <div className="domain-list" style={{ marginTop: 12 }}>
          {searchDomains.map((d) => (
            <div className="domain-row" key={d.domain}>
              <span className="domain-name">--domain {d.domain}</span>
              <span className="domain-desc">{d.desc}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="card">
        <h2 className="section-title">스택별 검색</h2>
        <div className="code-block">{`python3 src/ui-ux-pro-max/scripts/search.py "<query>" --stack <stack>`}</div>
      </div>

      <div className="card">
        <h2 className="section-title">디자인 시스템 다이얼 (고급)</h2>
        <div className="code-block">{`python3 src/ui-ux-pro-max/scripts/search.py "<query>" \\
  --design-system --variance <1-10> --motion <1-10> --density <1-10>`}</div>
        <p className="page-subtitle" style={{ marginTop: 12 }}>
          --variance는 미니멀↔볼드 스타일 편향, --motion은 GSAP 스니펫 연결,
          --density는 spacing 토큰을 여유/조밀로 조정합니다. 설정하지 않은
          다이얼은 기본 동작을 그대로 따릅니다.
        </p>
      </div>
    </div>
  );
}
