'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { getCtas } from '@/data/cta'
import { localizeHref, localePrefix, type Locale } from '@/i18n/config'

const BYTE_LEDGER_URL = 'https://byteledger.bytenetworks.net'

const COPY: Record<
  Locale,
  {
    services: string
    systems: string
    installations: string
    about: string
    contact: string
    menu: string
    close: string
  }
> = {
  en: {
    services: 'Services',
    systems: 'Systems',
    installations: 'Installations',
    about: 'About',
    contact: 'Contact',
    menu: 'Open menu',
    close: 'Close menu',
  },
  es: {
    services: 'Servicios',
    systems: 'Sistemas',
    installations: 'Instalaciones',
    about: 'Nosotros',
    contact: 'Contacto',
    menu: 'Abrir menu',
    close: 'Cerrar menu',
  },
}

function LocaleSwitch({ locale }: { locale: Locale }) {
  const homeHref = localePrefix(locale) || '/'
  const isEs = locale === 'es'

  return (
    <div className="inline-flex items-center rounded-full border border-white/15 bg-white/[0.03] p-1">
      <Link
        href="/"
        aria-current={!isEs ? 'page' : undefined}
        className={`rounded-full px-2.5 py-1 text-[11px] font-semibold tracking-[0.12em] transition ${
          !isEs ? 'bg-white text-[#0b1328]' : 'text-slate-300 hover:text-white'
        }`}
      >
        EN
      </Link>
      <Link
        href="/es"
        aria-current={isEs ? 'page' : undefined}
        className={`rounded-full px-2.5 py-1 text-[11px] font-semibold tracking-[0.12em] transition ${
          isEs ? 'bg-white text-[#0b1328]' : 'text-slate-300 hover:text-white'
        }`}
      >
        ES
      </Link>
      <span className="sr-only">Current locale home: {homeHref}</span>
    </div>
  )
}

export default function NavBar({ locale = 'en' }: { locale?: Locale }) {
  const [open, setOpen] = useState(false)
  const copy = COPY[locale]
  const ctas = getCtas(locale)
  const homeHref = localePrefix(locale) || '/'

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#070b14]/75 backdrop-blur-xl">
      <div className="container-page flex h-[74px] items-center justify-between">
        <Link href={homeHref} className="flex items-center gap-2.5">
          <Image
            src="/logo.svg"
            alt="Byte Networks"
            width={30}
            height={30}
            className="hidden sm:block"
            onError={({ currentTarget }) => {
              ;(currentTarget as HTMLImageElement).style.display = 'none'
            }}
          />
          <span className="font-display text-lg tracking-tight md:text-xl">
            <span className="font-semibold">Byte</span> <span className="text-brand-400">Networks</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] px-2 py-1 text-sm text-slate-300">
          <a href={localizeHref('#services', locale)} className="rounded-full px-3 py-1.5 transition hover:bg-white/[0.08] hover:text-white">{copy.services}</a>
          <a href={localizeHref('#systems', locale)} className="rounded-full px-3 py-1.5 transition hover:bg-white/[0.08] hover:text-white">{copy.systems}</a>
          <a href={localizeHref('#installations', locale)} className="rounded-full px-3 py-1.5 transition hover:bg-white/[0.08] hover:text-white">{copy.installations}</a>
          <a href={BYTE_LEDGER_URL} target="_blank" rel="noreferrer" className="rounded-full border border-brand-300/35 bg-brand-500/14 px-3 py-1.5 text-brand-100 transition hover:bg-brand-500/24">
            Byte Ledger
          </a>
          <a href={localizeHref('#about', locale)} className="rounded-full px-3 py-1.5 transition hover:bg-white/[0.08] hover:text-white">{copy.about}</a>
          <a href={localizeHref('#contact', locale)} className="rounded-full px-3 py-1.5 transition hover:bg-white/[0.08] hover:text-white">{copy.contact}</a>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <LocaleSwitch locale={locale} />
          <Link
            href={ctas.primary.href}
            className="hidden xl:inline-flex items-center gap-2 rounded-full bg-brand-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-400"
          >
            {ctas.primary.label} <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <LocaleSwitch locale={locale} />
          <button
            className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/[0.04] p-2 text-neutral-200"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? copy.close : copy.menu}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[#070b14]/95 backdrop-blur-xl md:hidden">
          <nav className="container-page flex flex-col gap-1 py-4 text-slate-300">
            <a href={localizeHref('#services', locale)} className="rounded-lg px-2 py-2 hover:bg-white/[0.06] hover:text-white" onClick={() => setOpen(false)}>{copy.services}</a>
            <a href={localizeHref('#systems', locale)} className="rounded-lg px-2 py-2 hover:bg-white/[0.06] hover:text-white" onClick={() => setOpen(false)}>{copy.systems}</a>
            <a href={localizeHref('#installations', locale)} className="rounded-lg px-2 py-2 hover:bg-white/[0.06] hover:text-white" onClick={() => setOpen(false)}>{copy.installations}</a>
            <a href={BYTE_LEDGER_URL} target="_blank" rel="noreferrer" className="rounded-lg border border-brand-300/30 bg-brand-500/10 px-2 py-2 text-brand-100 hover:bg-brand-500/18" onClick={() => setOpen(false)}>
              Byte Ledger
            </a>
            <a href={localizeHref('#about', locale)} className="rounded-lg px-2 py-2 hover:bg-white/[0.06] hover:text-white" onClick={() => setOpen(false)}>{copy.about}</a>
            <a href={localizeHref('#contact', locale)} className="rounded-lg px-2 py-2 hover:bg-white/[0.06] hover:text-white" onClick={() => setOpen(false)}>{copy.contact}</a>
            <Link href={ctas.primary.href} className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-brand-500 px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-400" onClick={() => setOpen(false)}>
              {ctas.primary.label} <ArrowUpRight className="h-4 w-4" />
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
