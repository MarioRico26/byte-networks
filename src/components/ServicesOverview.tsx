'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'
import {
    Globe,
    Database,
    AudioLines,
    Wifi,
    Lightbulb,
    Wrench,
    Laptop,
    Camera,
    ShieldCheck,
    Plug,
    HardDrive,
    Gauge,
} from 'lucide-react'
import { SERVICES, type IconKey } from '@/data/services'
import { type Locale } from '@/i18n/config'

const ICONS: Record<IconKey, LucideIcon> = {
    Globe,
    Database,
    AudioLines,
    Wifi,
    Lightbulb,
    Wrench,
    Laptop,
    Camera,
    ShieldCheck,
    Plug,
    HardDrive,
    Gauge,
}

export default function ServicesOverview() {
    return <ServicesOverviewGrid tone="dark" />
}

type ServicesOverviewProps = {
    tone?: 'dark' | 'light'
    locale?: Locale
}

const SERVICE_ES: Record<string, { title: string; blurb: string }> = {
    'web-dev': {
        title: 'Desarrollo Web',
        blurb: 'Sitios web modernos, rápidos y optimizados para SEO construidos con Next.js y Tailwind.',
    },
    'custom-software': {
        title: 'Software a Medida',
        blurb: 'Portales, CRMs y flujos adaptados a la operación de tu empresa.',
    },
    'networking-wifi': {
        title: 'Redes y Wi-Fi',
        blurb: 'Infraestructura cableada e inalámbrica nivel empresarial con seguridad.',
    },
    'audio-systems': {
        title: 'Sistemas de Audio',
        blurb: 'Audio residencial y comercial, multi-zona y con instalaciones limpias.',
    },
    'it-consulting': {
        title: 'Consultoría IT',
        blurb: 'Arquitectura, seguridad y guía técnica para transformación digital.',
    },
    'repairs': {
        title: 'Reparaciones e Instalaciones',
        blurb: 'Soporte en sitio e instalaciones ordenadas para PCs, CCTV y más.',
    },
}

export function ServicesOverviewGrid({ tone = 'dark', locale = 'en' }: ServicesOverviewProps) {
    const isLight = tone === 'light'
    const learnMore = locale === 'es' ? 'Ver más' : 'Learn more'

    return (
        <div className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((svc, i) => {
                const Icon = ICONS[svc.icon]
                const translated = locale === 'es' ? SERVICE_ES[svc.slug] : null
                const title = translated?.title ?? svc.title
                const blurb = translated?.blurb ?? svc.blurb
                return (
                    <motion.article
                        key={svc.slug}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.45, delay: i * 0.04 }}
                        className={`group relative overflow-hidden rounded-2xl p-6 backdrop-blur-md ${
                            isLight
                                ? 'border border-slate-300/80 bg-white/88 shadow-[0_20px_40px_-30px_rgba(30,64,175,0.35)]'
                                : 'border border-white/12 bg-[#10192f] shadow-[0_16px_30px_-24px_rgba(0,0,0,0.82)]'
                        }`}
                    >
                        {/* overlay que hace clickable toda la card */}
                        <Link href={svc.href} className="absolute inset-0 z-10" aria-label={`Go to ${title}`} />

                        <div
                            className={`pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100 ${
                                isLight ? 'bg-brand-500/16' : 'bg-brand-500/14'
                            }`}
                        />
                        <div
                            className={`mb-4 grid h-12 w-12 place-items-center rounded-xl ${
                                isLight ? 'border border-slate-200 bg-brand-50' : 'border border-white/12 bg-[#152241]'
                            }`}
                        >
                            <Icon className={`h-6 w-6 ${isLight ? 'text-brand-600' : 'text-brand-400'}`} />
                        </div>
                        <h3 className={`text-lg font-semibold tracking-tight ${isLight ? 'text-slate-900' : 'text-white'}`}>{title}</h3>
                        <p className={`mt-2 max-w-[48ch] text-sm ${isLight ? 'text-slate-600' : 'text-slate-200'}`}>
                            {blurb}
                        </p>

                        <div
                            className={`relative z-20 mt-4 inline-flex items-center gap-2 text-sm font-semibold ${
                                isLight ? 'text-brand-700 group-hover:text-brand-600' : 'text-brand-300 group-hover:text-brand-200'
                            }`}
                        >
                            {learnMore} →
                        </div>
                    </motion.article>
                )
            })}
        </div>
    )
}
