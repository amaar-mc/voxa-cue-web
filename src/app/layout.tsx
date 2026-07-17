import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Voxa Cue | Private coaching, right on cue",
    template: "%s | Voxa Cue",
  },
  description:
    "Voxa Cue turns live speaking pace, contextual fillers, and timing into discreet haptic guidance you can feel without looking away.",
  applicationName: "Voxa Cue",
  keywords: [
    "public speaking coach",
    "haptic wearable",
    "presentation coach",
    "speech analytics",
    "Voxa Cue",
  ],
  authors: [{ name: "Voxa Cue" }],
  creator: "Voxa Cue",
  openGraph: {
    title: "Voxa Cue | Private coaching, right on cue",
    description:
      "Your iPhone listens. Voxa Cue gives private haptic guidance on pace, fillers, and time.",
    type: "website",
    siteName: "Voxa Cue",
  },
  twitter: {
    card: "summary_large_image",
    title: "Voxa Cue | Private coaching, right on cue",
    description:
      "Your iPhone listens. Voxa Cue gives private haptic guidance on pace, fillers, and time.",
  },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#F3F4F1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={manrope.variable}>
      <body>{children}</body>
    </html>
  );
}
