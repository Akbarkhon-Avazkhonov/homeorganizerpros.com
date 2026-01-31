import React from "react"
import type { Metadata } from 'next'
import { Outfit, Lexend } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import CookieConsent from '@/components/cookie-consent'
import './globals.css'

const outfit = Outfit({ subsets: ["latin"], variable: '--font-serif' })
const lexend = Lexend({ subsets: ["latin"], variable: '--font-sans' })

export const metadata: Metadata = {
  title: 'HomeOrganizerPros - Master Your Space',
  description: 'Curated systems for a clutter-free life. From the pantry to the powder room, we provide the blueprints for perfection.',
  generator: 'v0.app',
  icons: {
    icon: '/favicon.jpg',
    apple: '/favicon.jpg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${lexend.variable} font-sans antialiased`}>
        {children}
        <CookieConsent />
        <Analytics />
      </body>
    </html>
  )
}
