'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Mail, PhoneCall } from 'lucide-react'

const BYTE_LEDGER_URL = 'https://byteledger.bytenetworks.net'

/** Pill con borde/shine reutilizable (estilo glass) */
function GlassPill({
                       href,
                       icon: Icon,
                       children,
                       className = '',
                   }: {
    href: string
    icon: React.ComponentType<{ className?: string }>
    children: React.ReactNode
    className?: string
}) {
    return (
        <a
            href={href}
            className={`group relative inline-flex items-center gap-3 rounded-[18px] p-[2px] ${className}`}
        >
            {/* Borde en gradiente */}
            <span className="absolute inset-0 rounded-[18px] bg-gradient-to-r from-brand-400 via-cyan-400 to-brand-400 opacity-70 blur-[1px] transition-opacity group-hover:opacity-100" />
            {/* Fondo vidrio */}
            <span className="relative inline-flex items-center gap-3 rounded-[16px] bg-neutral-900/70 px-4 py-2.5 text-[15px] font-medium text-white ring-1 ring-white/15 backdrop-blur-md transition-colors group-hover:bg-neutral-900/80 md:px-5 md:py-3 md:text-base">
        <span className="grid h-7 w-7 place-items-center rounded-md bg-white/10 ring-1 ring-white/15 md:h-8 md:w-8">
          <Icon className="h-4 w-4 text-brand-200 md:h-4 md:w-4" />
        </span>
        <span>{children}</span>
                {/* Shine */}
                <span className="pointer-events-none absolute inset-0 -translate-x-[120%] rounded-[16px] bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 transition-all duration-700 group-hover:translate-x-[120%] group-hover:opacity-100" />
      </span>
            {/* Glow bajo el pill */}
            <span className="pointer-events-none absolute -bottom-2 left-1/2 h-7 w-[80%] -translate-x-1/2 rounded-full bg-brand-500/25 opacity-0 blur-[12px] transition-opacity group-hover:opacity-100" />
        </a>
    )
}

/** Pill resaltado (relleno en gradiente) para el teléfono */
function SolidPill({
                       href,
                       icon: Icon,
                       children,
                   }: {
    href: string
    icon: React.ComponentType<{ className?: string }>
    children: React.ReactNode
}) {
    return (
        <a
            href={href}
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-[16px] bg-gradient-to-r from-brand-500 via-indigo-500 to-cyan-500 px-5 py-2.5 text-[15px] font-semibold text-white shadow-[0_10px_30px_-12px_rgba(79,70,229,.55)] ring-1 ring-white/20 transition hover:brightness-[1.08] md:px-6 md:py-3 md:text-base"
        >
      <span className="grid h-7 w-7 place-items-center rounded-md bg-white/15 ring-1 ring-white/25 md:h-8 md:w-8">
        <Icon className="h-4 w-4" />
      </span>
            <span>{children}</span>
            {/* Shine */}
            <span className="pointer-events-none absolute inset-0 -translate-x-[120%] bg-gradient-to-r from-transparent via-white/35 to-transparent opacity-0 transition-all duration-700 group-hover:translate-x-[120%] group-hover:opacity-100" />
        </a>
    )
}

export default function NavBar() {
    const [open, setOpen] = useState(false)

    return (
        <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-neutral-950/60 backdrop-blur-md">
            <div className="container-page flex h-16 items-center justify-between md:h-20">
                {/* Brand */}
                <Link href="/" className="flex items-center gap-2">
                    {/* Usa /public/logo.svg si existe; si no, texto marca */}
                    <Image
                        src="/logo.svg"
                        alt="Byte Networks"
                        width={28}
                        height={28}
                        className="hidden sm:block"
                        onError={({ currentTarget }) => {
                            // oculta la imagen si no existe para evitar layout feo
                            (currentTarget as HTMLImageElement).style.display = 'none'
                        }}
                    />
                    <span className="font-display text-lg tracking-tight md:text-xl">
            <span className="font-semibold">Byte</span>{' '}
                        <span className="text-brand-400">Networks</span>
          </span>
                </Link>

                {/* Nav principal */}
                <nav className="hidden items-center gap-8 text-[15px] text-neutral-300 md:flex">
                    <a href="#services" className="hover:text-white">Services</a>
                    <a href="#systems" className="hover:text-white">Systems</a>
                    <a href="#installations" className="hover:text-white">Installations</a>
                    <a
                        href={BYTE_LEDGER_URL}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center rounded-full border border-brand-300/40 bg-brand-500/15 px-3 py-1 text-brand-100 transition hover:bg-brand-500/25"
                    >
                        Byte Ledger
                    </a>
                    <a href="#about" className="hover:text-white">About</a>
                    <a href="#contact" className="hover:text-white">Contact</a>
                </nav>

                {/* Chips de contacto (desktop) */}
                <div className="hidden items-center gap-3 md:flex">
                    <GlassPill href="mailto:info@bytenetworks.net" icon={Mail}>
                        info@bytenetworks.net
                    </GlassPill>
                    <SolidPill href="tel:+16097137333" icon={PhoneCall}>
                        609-713-7333
                    </SolidPill>
                </div>

                {/* Toggle móvil */}
                <button
                    className="inline-flex items-center justify-center rounded-lg p-2 text-neutral-200 md:hidden"
                    onClick={() => setOpen((v) => !v)}
                    aria-label="Toggle navigation"
                >
                    {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            {/* Menú móvil expandido */}
            {open && (
                <div className="border-t border-white/10 bg-neutral-950/85 backdrop-blur-md md:hidden">
                    <nav className="container-page flex flex-col gap-1 py-4 text-neutral-300">
                        <a href="#services" className="rounded-lg px-2 py-2 hover:bg-white/5 hover:text-white" onClick={() => setOpen(false)}>Services</a>
                        <a href="#systems" className="rounded-lg px-2 py-2 hover:bg-white/5 hover:text-white" onClick={() => setOpen(false)}>Systems</a>
                        <a href="#installations" className="rounded-lg px-2 py-2 hover:bg-white/5 hover:text-white" onClick={() => setOpen(false)}>Installations</a>
                        <a
                            href={BYTE_LEDGER_URL}
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-lg border border-brand-300/30 bg-brand-500/10 px-2 py-2 text-brand-100 hover:bg-brand-500/20"
                            onClick={() => setOpen(false)}
                        >
                            Byte Ledger
                        </a>
                        <a href="#about" className="rounded-lg px-2 py-2 hover:bg-white/5 hover:text-white" onClick={() => setOpen(false)}>About</a>
                        <a href="#contact" className="rounded-lg px-2 py-2 hover:bg-white/5 hover:text-white" onClick={() => setOpen(false)}>Contact</a>

                        {/* Chips grandes también en móvil */}
                        <div className="mt-3 flex flex-col gap-2">
                            <GlassPill href="mailto:info@bytenetworks.net" icon={Mail} className="w-full">
                                info@bytenetworks.net
                            </GlassPill>
                            <SolidPill href="tel:+16097137333" icon={PhoneCall}>
                                609-713-7333
                            </SolidPill>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    )
}
