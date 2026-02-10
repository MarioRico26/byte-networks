// src/app/layout.tsx
import type { Metadata } from 'next'
import './globals.css'
import { fontDisplay, fontBody, fontMono } from './fonts'

export const metadata: Metadata = {
    title: 'Byte Networks',
    description: 'Modern solutions in software, websites, and automation',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${fontDisplay.variable} ${fontBody.variable} ${fontMono.variable} min-h-screen selection:bg-brand-500/35`}
      >
        <div className="fixed inset-0 -z-10 bg-grid-radial" />
        <div className="fixed inset-0 -z-20 bg-glow" />
        {children}
      </body>
    </html>
  )
}
