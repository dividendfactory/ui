export const SEARCH_DOMAIN_VALUES = [
  "style",
  "color",
  "chart",
  "landing",
  "product",
  "ux",
  "typography",
  "icons",
  "gsap",
  "react",
  "web",
  "google-fonts",
] as const;

export const SEARCH_STACK_VALUES = [
  "react",
  "nextjs",
  "vue",
  "svelte",
  "astro",
  "swiftui",
  "react-native",
  "flutter",
  "nuxtjs",
  "nuxt-ui",
  "html-tailwind",
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
] as const;

export type SearchDomain = (typeof SEARCH_DOMAIN_VALUES)[number];
export type SearchStack = (typeof SEARCH_STACK_VALUES)[number];

export type SearchResponse = {
  domain?: string;
  stack?: string;
  query: string;
  file: string;
  count: number;
  results: Record<string, string>[];
};
