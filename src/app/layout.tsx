import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CycleProvider } from "@/context/CycleContext";
import { Navbar } from "@/components/layout/Navbar";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";
import { Footer } from "@/components/layout/Footer";
import { LogPeriodModal } from "@/components/tracker/LogPeriodModal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LunaFlow | Menstrual Period Tracker & Phase Insights",
  description: "Responsive menstrual cycle tracker, delay analysis, hormonal phase insights, and privacy-first wellness guidance.",
  keywords: ["period tracker", "menstrual cycle", "cycle delay", "ovulation predictor", "luteal phase", "women wellness"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-50/50 dark:bg-slate-950 text-slate-900 dark:text-white font-sans">
        <CycleProvider>
          <Navbar />
          <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
            {children}
          </main>
          <LogPeriodModal />
          <MobileBottomNav />
          <Footer />
        </CycleProvider>
      </body>
    </html>
  );
}
