import type { Metadata, Viewport } from "next";

// Font tự host qua Fontsource, đều có bộ chữ tiếng Việt
import "@fontsource/baloo-2/700.css";
import "@fontsource/baloo-2/800.css";
import "@fontsource/nunito/400.css";
import "@fontsource/nunito/600.css";
import "@fontsource/nunito/700.css";
import "@fontsource/nunito/800.css";
import "@fontsource/patrick-hand/400.css";

import "./globals.css";

export const metadata: Metadata = {
  title: "Sổ tay dùng Claude",
  description:
    "Hướng dẫn dễ thương, từng bước một: nhờ Claude làm việc, viết luận, bật Skills, cài Plugins và nối với app khác.",
};

export const viewport: Viewport = {
  themeColor: "#FDF2F4",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
