import "./globals.css";
import "node_modules/flag-icons/css/flag-icons.min.css";
import type { Metadata } from "next";
import { Sora } from "next/font/google";
import i18nextConfig from "../../next-i18next.config";

const sora = Sora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Guillermo Navarro - Software Engineer",
  description:
    "Explore the finest web and application solutions. From elegant web designs to powerful and fast applications. Don't wait any longer to turn your project idea into a digital success!🚀",
  icons: {
    icon: "./images/favicon.png",
    apple: "./images/favicon.png",
    shortcut: "./images/favicon.png",
  },
  keywords: [
    "Next.js",
    "React",
    "Typescript",
    "Programmer",
    "Programador",
    "Software Engineer",
    "Software Developer",
    "Desarrollador",
    "Web",
    "Developer",
  ],
  creator: "Guillermo Navarro",
  applicationName: "Guillermo Navarro - Software Engineer",
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
