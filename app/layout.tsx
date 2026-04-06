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
  title: "My App",
  description: "A modern web application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const themeScript = `
    try {
      const root = document.documentElement;

      // Theme
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme && savedTheme !== 'colorblind') {
        root.setAttribute('data-theme', savedTheme);
      } else {
        localStorage.setItem('theme', 'dark');
        root.setAttribute('data-theme', 'dark');
      }

      // Color (default violet)
      const color = localStorage.getItem('color') || 'violet';
      root.setAttribute('data-color', color);
    } catch (e) {}
  `;

  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{ __html: themeScript }}
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
