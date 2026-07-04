import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./globals.css";
import CrisisBar from "@/components/CrisisBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-heading",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Manageable Living | Sober Living Homes in Texas",
  description: "Providing safe, structured, and supportive sober living environments across League City and Kemah, Texas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-bs-theme="dark" className={`${cormorant.variable} ${dmSans.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <CrisisBar />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
