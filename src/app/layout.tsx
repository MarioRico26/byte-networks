// src/app/layout.tsx
import type { Metadata } from 'next'
import './globals.css'
import { fontDisplay, fontBody } from './fonts'

export const metadata: Metadata = {
    title: 'Byte Networks',
    description: 'Modern solutions in software, websites, and automation',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className={`${fontDisplay.variable} ${fontBody.variable} min-h-screen bg-neutral-950 text-neutral-100 selection:bg-brand-500/30`}>
        {/* fondos sutiles del tema oscuro */}
        <div className="fixed inset-0 -z-10 bg-grid-radial" />
        <div className="fixed inset-0 -z-20 bg-glow" />
        {children}
        </body>
        </html>
    )
}