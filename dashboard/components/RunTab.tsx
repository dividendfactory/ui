"use client";

import { useState } from "react";
import { SEARCH_DOMAIN_VALUES, SEARCH_STACK_VALUES, type SearchResponse } from "@/lib/search";

type Mode = "domain" | "stack";

export function RunTab() {
  const [mode, setMode] = useState<Mode>("domain");
  const [query, setQuery] = useState("SaaS dashboard");
  const [domain, setDomain] = useState<string>(SEARCH_DOMAIN_VALUES[0]);
  const [stack, setStack] = useState<string>(SEARCH_STACK_VALUES[0]);
  const [maxResults, setMaxResults] = useState(3);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<SearchResponse | null>(null);

  async function runSearch() {
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const response = await fetch("/api/search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query,
          maxResults,
          ...(mode === "domain" ? { domain } : { stack }),
        }),
      });
      const data = await response.json();
      if (!response.ok) {
        setError(data.error || "검색 실행에 실패했습니다.");
        return;
      }
      setResult(data);
    } catch {
      setError("서버에 연결할 수 없습니다.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="content">
      <div>
        <h1 className="page-title">실행</h1>
        <p className="page-subtitle">
          search.py를 직접 실행해 디자인 데이터베이스를 검색합니다.
        </p>
      </div>

      <div className="card">
        <h2 className="section-title">검색 조건</h2>
        <div className="run-form">
          <div className="field-row">
            <label className="field-label" htmlFor="query">
              검색어
            </label>
            <input
              id="query"
              className="text-input"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="예: SaaS dashboard"
            />
          </div>

          <div className="mode-toggle">
            <button
              type="button"
              className="nav-item"
              data-active={mode === "domain"}
              onClick={() => setMode("domain")}
            >
              도메인으로 검색
            </button>
            <button
              type="button"
              className="nav-item"
              data-active={mode === "stack"}
              onClick={() => setMode("stack")}
            >
              스택으로 검색
            </button>
          </div>

          {mode === "domain" ? (
            <div className="field-row">
              <label className="field-label" htmlFor="domain">
                도메인
              </label>
              <select
                id="domain"
                className="text-input"
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
              >
                {SEARCH_DOMAIN_VALUES.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </div>
          ) : (
            <div className="field-row">
              <label className="field-label" htmlFor="stack">
                스택
              </label>
              <select
                id="stack"
                className="text-input"
                value={stack}
                onChange={(e) => setStack(e.target.value)}
              >
                {SEARCH_STACK_VALUES.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
          )}

          <div className="field-row">
            <label className="field-label" htmlFor="max-results">
              최대 결과 수
            </label>
            <input
              id="max-results"
              className="text-input"
              type="number"
              min={1}
              max={10}
              value={maxResults}
              onChange={(e) => setMaxResults(Number(e.target.value))}
            />
          </div>

          <button
            type="button"
            className="run-button"
            onClick={runSearch}
            disabled={loading || !query.trim()}
          >
            {loading ? "실행 중…" : "실행"}
          </button>
        </div>
      </div>

      {error && (
        <div className="card error-card">
          <span className="stat-hint">{error}</span>
        </div>
      )}

      {result && (
        <div className="card">
          <h2 className="section-title">
            결과 {result.count}건 · {result.file}
          </h2>
          <div className="result-list-wrap">
            {result.results.map((item, i) => (
              <div className="kv-card" key={i}>
                {Object.entries(item).map(([key, value]) => (
                  <div className="kv-row" key={key}>
                    <span className="kv-key">{key}</span>
                    <span className="kv-value">{String(value).slice(0, 240)}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
