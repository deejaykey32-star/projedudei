import type { Metadata, Viewport } from "next";
import "./globals.css";
import { KurakSpeechProvider } from "@/components/KurakSpeechContext";
import KurakDock from "@/components/KurakDock";
import PwaRegister from "@/components/PwaRegister";

export const metadata: Metadata = {
  title: "Projedudei - AI Project & Product Master z Kurakiem",
  description:
    "Aplikacja edukacyjna dla Project Managerów, Scrum Masterów i Product Ownerów: nauka kontaktu z klientami, tworzenia aplikacji z AI bez zespołów koderów oraz przygotowanie do certyfikacji z mentorem Kurakiem trzymającym aktówkę.",
  manifest: "/manifest.json",
  applicationName: "Projedudei",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Projedudei",
  },
  icons: {
    icon: "/icon-192.png",
    apple: "/apple-touch-icon.png",
  },
  keywords: [
    "projedudei",
    "project manager",
    "scrum master",
    "product owner",
    "vibe coding",
    "ai applications",
    "cloudflare pages",
    "kurak",
  ],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f172a",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Projedudei" />
        <meta name="application-name" content="Projedudei" />
      </head>
      <body className="bg-slate-900 font-sans text-slate-100 antialiased selection:bg-amber-400 selection:text-slate-900">
        <KurakSpeechProvider>
          <PwaRegister />
          <div className="mx-auto flex min-h-dvh w-full max-w-2xl flex-col px-4 pb-28 pt-6 sm:px-6">
            {children}
          </div>
          <KurakDock />
        </KurakSpeechProvider>
      </body>
    </html>
  );
}
