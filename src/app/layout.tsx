import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sharda | RAG Engineer · MLOps Engineer · AI Engineer",
  description:
    "Portfolio of Sharda — RAG Engineer, MLOps Engineer, and AI-powered web developer building production-ready AI systems, RAG applications, ML solutions, and intelligent applications.",
  keywords: [
    "Sharda",
    "AI Engineer",
    "ML Engineer",
    "RAG Engineer",
    "MLOps Engineer",
    "Generative AI",
    "LangChain",
    "LangGraph",
    "FastAPI",
    "Machine Learning",
  ],
  authors: [{ name: "Sharda" }],
  openGraph: {
    title: "Sharda | AI / ML Engineer",
    description:
      "RAG Engineer · MLOps Engineer · AI-Powered Web Developer",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}