import "./globals.css";
import Navbar from "@/components/Navbar";
import { Inter } from "next/font/google";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="max-w-3xl mx-auto py-20">{children}</main>
      </body>
    </html>
  );
}
