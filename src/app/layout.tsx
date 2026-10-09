import type { CSSProperties } from "react";
import type { Metadata, Viewport } from "next";
import { Geist, Instrument_Serif } from "next/font/google";
import { brand } from "@/brand/brand.config";
import { WhatsAppButton } from "@/components/whatsapp-button";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: brand.seo.title,
  description: brand.seo.description,
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const brandVariables = {
  "--brand-background": brand.colors.background,
  "--brand-surface": brand.colors.surface,
  "--brand-foreground": brand.colors.foreground,
  "--brand-muted": brand.colors.muted,
  "--brand-line": brand.colors.line,
  "--brand-accent": brand.colors.accent,
  "--brand-accent-foreground": brand.colors.accentForeground,
  colorScheme: brand.colorScheme,
} as CSSProperties;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      style={brandVariables}
      className={`${geistSans.variable} ${instrumentSerif.variable} antialiased`}
    >
      <body className="min-h-[100dvh] bg-background text-foreground">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
