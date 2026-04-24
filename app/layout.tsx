import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "./providers";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const dinAlternate = localFont({
  src: "../public/fonts/DINAlternate-Bold.ttf",
  variable: "--font-din-alternate",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://significanz.dk"),
  title: {
    default: "Significanz | Enabling Meaningful Impact",
    template: "%s | Significanz",
  },
  description:
    "Significanz helps leaders and organizations create meaningful impact through interactions that matter. Executive coaching, team development, and organizational enablement.",
  keywords: [
    "executive coaching",
    "leadership development",
    "organizational development",
    "team coaching",
    "meaningful impact",
    "enablement",
    "leadership coaching",
  ],
  authors: [{ name: "Significanz" }],
  creator: "Transparo",
  openGraph: {
    type: "website",
    locale: "en",
    url: "https://significanz.dk",
    siteName: "Significanz",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "mJjNWhfGFM-SJ-sEBDoKR41ACgu77_umPFQZ4_olcDQ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${dinAlternate.variable}`}>
      <body className="antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
