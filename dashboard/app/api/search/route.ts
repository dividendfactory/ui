import { NextRequest, NextResponse } from "next/server";
import { execFile } from "node:child_process";
import path from "node:path";
import {
  SEARCH_DOMAIN_VALUES,
  SEARCH_STACK_VALUES,
  type SearchResponse,
} from "@/lib/search";

const SCRIPT_PATH = path.join(
  process.cwd(),
  "..",
  "src",
  "ui-ux-pro-max",
  "scripts",
  "search.py",
);

function runSearch(args: string[]): Promise<{ stdout: string; stderr: string }> {
  return new Promise((resolve, reject) => {
    execFile(
      "python3",
      args,
      { timeout: 10_000, maxBuffer: 5 * 1024 * 1024 },
      (error, stdout, stderr) => {
        if (error) {
          reject(new Error(stderr.trim() || error.message));
          return;
        }
        resolve({ stdout, stderr });
      },
    );
  });
}

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);

  const query = typeof body?.query === "string" ? body.query.trim() : "";
  const domain = typeof body?.domain === "string" ? body.domain : "";
  const stack = typeof body?.stack === "string" ? body.stack : "";
  const maxResultsRaw = Number(body?.maxResults);
  const maxResults = Number.isFinite(maxResultsRaw) ? maxResultsRaw : 3;

  if (!query || query.length > 200) {
    return NextResponse.json(
      { error: "검색어를 1~200자로 입력하세요." },
      { status: 400 },
    );
  }
  if (domain && !(SEARCH_DOMAIN_VALUES as readonly string[]).includes(domain)) {
    return NextResponse.json({ error: "알 수 없는 도메인입니다." }, { status: 400 });
  }
  if (stack && !(SEARCH_STACK_VALUES as readonly string[]).includes(stack)) {
    return NextResponse.json({ error: "알 수 없는 스택입니다." }, { status: 400 });
  }
  if (domain && stack) {
    return NextResponse.json(
      { error: "도메인과 스택은 동시에 지정할 수 없습니다." },
      { status: 400 },
    );
  }

  const clampedMax = Math.min(Math.max(Math.round(maxResults), 1), 10);
  const args = [SCRIPT_PATH, query];
  if (domain) args.push("--domain", domain);
  if (stack) args.push("--stack", stack);
  args.push("--max-results", String(clampedMax), "--json");

  try {
    const { stdout } = await runSearch(args);
    const parsed = JSON.parse(stdout) as SearchResponse;
    return NextResponse.json(parsed);
  } catch (error) {
    const message = error instanceof Error ? error.message : "검색 실행에 실패했습니다.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
