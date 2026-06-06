import "./globals.css";

import AlertBanner from "@/components/AlertBanner";
import CursorGlow from "@/components/CursorGlow";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollProgress from "@/components/ScrollProgress";

export const metadata = {
  title: "Genggong Travel Indonesia | Travel Umroh Resmi Kemenag",
  description:
    "Travel Umroh terpercaya di Probolinggo. Paket Umroh murah, hotel dekat Masjid, pembimbing berpengalaman.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="bg-white text-gray-900 antialiased">

        {/* SMOOTH SCROLL */}
        <SmoothScroll />

        {/* CURSOR GLOW EFFECT */}
        <CursorGlow />

        {/* SCROLL PROGRESS BAR */}
        <ScrollProgress />

        {/* ALERT PROMO */}
        <AlertBanner />

        {/* MAIN CONTENT */}
        <main className="relative">
          {children}
        </main>

      </body>
    </html>
  );
}