import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "UI/UX Pro Max Dashboard",
  description: "ui-ux-pro-max 스킬 통계 및 사용법 대시보드",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
