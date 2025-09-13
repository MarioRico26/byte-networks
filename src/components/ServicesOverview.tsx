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
    return (
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((svc, i) => {
                const Icon = ICONS[svc.icon]
                return (
                    <motion.article
                        key={svc.slug}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.45, delay: i * 0.04 }}
                        className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
                    >
                        {/* overlay que hace clickable toda la card */}
                        <Link href={svc.href} className="absolute inset-0 z-10" aria-label={`Go to ${svc.title}`} />

                        <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand-500/20 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
                        <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl border border-white/10 bg-white/10">
                            <Icon className="h-6 w-6 text-brand-400" />
                        </div>
                        <h3 className="text-base font-semibold">{svc.title}</h3>
                        <p className="mt-2 max-w-[48ch] text-sm text-neutral-300">{svc.blurb}</p>

                        <div className="relative z-20 mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-300 group-hover:text-brand-200">
                            Learn more →
                        </div>
                    </motion.article>
                )
            })}
        </div>
    )
}