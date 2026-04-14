import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ЭкоРеклама — Легальная реклама на асфальте в Санкт-Петербурге",
  description:
    "Первый сервис легальной экологичной рекламы на асфальте в Санкт-Петербурге. Водосмываемые трафареты, без штрафов, с гарантией результата.",
  keywords: [
    "реклама на асфальте",
    "экореклама",
    "трафаретная реклама",
    "Санкт-Петербург",
    "легальная реклама",
    "экологичная реклама",
  ],
  openGraph: {
    title: "ЭкоРеклама — Легальная реклама на асфальте",
    description: "Первый в Петербурге. Законно. Экологично. Заметно.",
    locale: "ru_RU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="antialiased">
      <body>{children}</body>
    </html>
  );
}
