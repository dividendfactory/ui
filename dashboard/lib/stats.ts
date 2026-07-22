export type StatItem = {
  label: string;
  value: number;
  hint: string;
};

// Row counts from src/ui-ux-pro-max/data/*.csv (excluding header row).
export const stats: StatItem[] = [
  { label: "UI 스타일", value: 84, hint: "styles.csv" },
  { label: "컬러 팔레트", value: 192, hint: "colors.csv" },
  { label: "폰트 페어링", value: 74, hint: "typography.csv" },
  { label: "UX 가이드라인", value: 98, hint: "ux-guidelines.csv" },
  { label: "차트 타입", value: 25, hint: "charts.csv" },
  { label: "지원 스택", value: 22, hint: "data/stacks/" },
  { label: "아이콘 항목", value: 104, hint: "icons.csv" },
  { label: "제품 타입", value: 192, hint: "products.csv" },
];

export const stacks = [
  "html-tailwind",
  "react",
  "nextjs",
  "astro",
  "vue",
  "nuxtjs",
  "nuxt-ui",
  "svelte",
  "swiftui",
  "react-native",
  "flutter",
  "shadcn",
  "jetpack-compose",
  "threejs",
  "angular",
  "laravel",
  "javafx",
  "wpf",
  "winui",
  "avalonia",
  "uno",
  "uwp",
];

export const searchDomains = [
  { domain: "product", desc: "제품 타입별 추천 (SaaS, 이커머스, 포트폴리오)" },
  { domain: "style", desc: "UI 스타일 + AI 프롬프트 + CSS 키워드" },
  { domain: "typography", desc: "Google Fonts import 포함 폰트 페어링" },
  { domain: "color", desc: "제품 타입별 컬러 팔레트" },
  { domain: "landing", desc: "페이지 구조 및 CTA 전략" },
  { domain: "chart", desc: "차트 타입과 라이브러리 추천" },
  { domain: "ux", desc: "베스트 프랙티스와 안티패턴" },
  { domain: "icons", desc: "아이콘 추천 (Phosphor, Heroicons, Lucide)" },
  { domain: "react", desc: "React/Next.js 성능 패턴" },
  { domain: "web", desc: "iOS/Android/React Native 앱 인터페이스 가이드" },
  { domain: "google-fonts", desc: "개별 Google Fonts 조회" },
  { domain: "gsap", desc: "강도별 GSAP 애니메이션 스켈레톤" },
];
