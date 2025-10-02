import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wei Jian's Portfolio",
  description: "A portfolio website designed to showcase projects created by Wei Jian.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
