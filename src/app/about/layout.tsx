import type { Metadata } from "next";
import "../globals.css";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "About",
  description: "About Me",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div>
      {children}
    </div>
  );
}
