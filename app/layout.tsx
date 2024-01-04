import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/global/header/Navbar";

const mont = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "yourVoice",
  description:
    "YourVoice is a place where you can earn money by uploading your work via text, mp3, and/or mp4 format(s).",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={mont.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
