import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import Header from "@/components/Header/Header";
import TanStackProvider from "@/components/TanStackProvider/TanStackProvider";
// import Footer from "@/components/Footer/Footer";
import AuthProvider from "@/components/AuthProvider/AuthProvider";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Welcome to E-Pharmacy",
  description:
    "E-Pharmacy is a simple and efficient application designed for booking necessary medication.",
  openGraph: {
    title: "Welcome to E-Pharmacy ",
    description:
      "E-Pharmacy is a simple and efficient application designed for booking necessary medication.",
    images: [
      {
        url: "https://08-zustand-phi-bice.vercel.app/",
        width: 1200,
        height: 630,
        alt: "Welcome to E-Pharmacy",
      },
    ],
    url: "https://08-zustand-phi-bice.vercel.app/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode; modal: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} `}>
        <TanStackProvider>
          <AuthProvider>
            <main>{children}</main>
          </AuthProvider>
        </TanStackProvider>
      </body>
    </html>
  );
}
