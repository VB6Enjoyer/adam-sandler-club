import type React from "react"
import type { Metadata } from "next"
import { Bebas_Neue, Space_Grotesk } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

// <CHANGE> Added 90s-inspired fonts: Bebas Neue for headers (bold, impactful) and Space Grotesk for body (modern grotesk with vintage feel)
const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
})

export const metadata: Metadata = {
  title: "Adam Sandler Club | Concordia, Argentina",
  description: "Heavy downtuned beatdown hardcore meets 90s Midwest emo. From Concordia, Argentina.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${spaceGrotesk.variable}`}>
      <body className="font-[family-name:var(--font-space)] antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
