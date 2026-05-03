import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Clinic Manager | Digital Orchestration for Modern Clinics",
  description: "A robust, offline-first clinical workspace designed for seamless coordination between doctors, pharmacy, and management.",
  keywords: ["clinic management", "healthcare app", "doctor software", "pharmacy billing", "offline-first"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
