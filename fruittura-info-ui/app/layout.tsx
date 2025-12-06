import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { ScrollToTop } from "@/components/scroll-to-top"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "Fruittura | Premium Dry Fruits & Spices Export",
  description:
    "Fruittura - Your trusted partner for premium quality dry fruits and spices. Global export of almonds, cashews, pistachios, walnuts, raisins and more.",
  keywords: "dry fruits, export, almonds, cashews, pistachios, walnuts, raisins, spices, wholesale, bulk",
  openGraph: {
    title: "Fruittura | Premium Dry Fruits & Spices Export",
    description: "Your trusted partner for premium quality dry fruits and spices export worldwide.",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        <ScrollToTop />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
