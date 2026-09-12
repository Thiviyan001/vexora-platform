import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "VEXORA — Student Success, Reimagined",
  description:
    "VEXORA is a National Student Success Ecosystem built to help students learn, innovate, lead, and shape the future.",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
