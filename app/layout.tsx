import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BumaAI - Le professeur particulier de votre enfant, disponible 24/7",
  description: "Un tuteur intelligent qui s'adapte au rythme de votre enfant, disponible quand il en a besoin, pour le prix d'un abonnement de streaming.",
  keywords: ["soutien scolaire", "aide aux devoirs", "professeur particulier", "collège", "brevet", "éducation"],
  authors: [{ name: "BumaAI" }],
  openGraph: {
    title: "BumaAI - Le professeur particulier de votre enfant",
    description: "Un tuteur intelligent qui s'adapte au rythme de votre enfant, disponible 24/7",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
