import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://agentic-46106db7.vercel.app"),
  title: "ICEEM | Désinfection UV-C & Robotique médicale en Tunisie",
  description:
    "ICEEM conçoit, intègre et maintient des solutions robotisées de désinfection UV-C pour les hôpitaux et environnements critiques en Tunisie.",
  keywords: [
    "ICEEM",
    "désinfection UV-C",
    "robot SteriPro",
    "Tunisie",
    "ingénierie biomédicale",
  ],
  openGraph: {
    title: "ICEEM | Désinfection UV-C & Robotique médicale en Tunisie",
    description:
      "Réduisez les infections nosocomiales grâce aux robots UV-C et services d'intégration ICEEM.",
    url: "https://agentic-46106db7.vercel.app",
    siteName: "ICEEM",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ICEEM | Désinfection UV-C & Robotique médicale en Tunisie",
    description:
      "Solutions de désinfection robotisée, ingénierie et support continu pour les établissements de santé.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
