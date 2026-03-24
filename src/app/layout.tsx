import type { Metadata } from "next";
export const runtime = 'nodejs';
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ReduxProvider } from "./Provider";
import { I18nProvider } from "./I18nProvider";

const inter = Inter({
  variable: "--font-main",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Agromatic | Premium Agri-Tech Marketplace",
  description: "Experience the next level of agricultural and aromatic shopping with Agromatic.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable}`}>
        <ReduxProvider>
          <I18nProvider>
            {children}
          </I18nProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
