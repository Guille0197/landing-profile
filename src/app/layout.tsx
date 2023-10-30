import "./globals.css";
import "node_modules/flag-icons/css/flag-icons.min.css";
import type { Metadata } from "next";
import { Sora } from "next/font/google";
import i18nextConfig from "../../next-i18next.config";

const sora = Sora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Guillermo Navarro - Lading Page",
  description: "My Personal Landing Page",
  icons: "/images/gnlogo.jpg",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentLocale = i18nextConfig.i18n.defaultLocale;
  return (
    <html lang={currentLocale} suppressHydrationWarning>
      <body className={sora.className}>
        <div className="max-w-xl mx-auto">{children}</div>
      </body>
    </html>
  );
}
