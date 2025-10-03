import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

const plusJakartaSansMono = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lunbi",
  description: "Lunbi - AI powered chatbot",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plusJakartaSans.variable} ${plusJakartaSansMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
