import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next Auth v5 Implementation",
  description: "@adhikareeprayush",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
