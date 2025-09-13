// src/components/ContactDock.tsx
'use client'

import { Mail, Phone } from 'lucide-react'

export default function ContactDock() {
    return (
        <div className="fixed inset-x-0 bottom-0 z-40 mx-auto block max-w-7xl px-4 pb-4 md:hidden">
            <div className="rounded-2xl border border-white/10 bg-neutral-900/85 backdrop-blur-md">
                <div className="grid grid-cols-2 gap-2 p-2">
                    <a
                        href="mailto:info@bytenetworks.net"
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-500 px-3 py-3 text-sm font-medium text-white ring-1 ring-brand-400/30 transition hover:bg-brand-600"
                    >
                        <Mail className="h-4 w-4" />
                        Email
                    </a>
                    <a
                        href="tel:+16097137333"
                        className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-3 py-3 text-sm font-medium text-white/90 backdrop-blur transition hover:bg-white/10"
                    >
                        <Phone className="h-4 w-4" />
                        Call
                    </a>
                </div>
            </div>
        </div>
    )
}