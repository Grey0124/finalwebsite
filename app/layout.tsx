import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Poppins as FontSans } from 'next/font/google'
import "./globals.css";
import { Toaster } from '@/components/ui/toaster'
import React from "react";
import { ThemeProvider } from '@/components/shared/theme-provider'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Makers Market",
  description: "Artisan shop and creative classes",
};

const fontSans = FontSans({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-sans',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
