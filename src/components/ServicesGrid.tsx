'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import type { IconName } from '@/data/services-list'
import { HOME_SERVICES } from '@/data/services-list'
import {
    Globe, Code2, Wifi, AudioLines, Briefcase, Wrench, type LucideIcon
} from 'lucide-react'

const ICONS: Record<IconName, LucideIcon> = {
    Globe,
    Code2,
    Wifi,
    AudioLines,
    Briefcase,
    Wrench,
}

export default function ServicesGrid() {
    return (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {HOME_SERVICES.map((s, i) => {
                const Icon = ICONS[s.icon]
                return (
                    <motion.article
                        key={s.slug}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.45, delay: i * 0.03 }}
                        className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
                    >
                        {/* glow on hover */}
                        <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand-500/20 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl border border-white/10 bg-white/10">
                            <Icon className="h-6 w-6 text-brand-400" />
                        </div>
                        <h3 className="text-base font-semibold">{s.title}</h3>
                        <p className="mt-2 text-sm text-neutral-300">{s.blurb}</p>

                        <Link
                            href={`/services/${s.slug}`}
                            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-300 hover:text-brand-200"
                        >
                            Explore service →
                        </Link>
                    </motion.article>
                )
            })}
        </div>
    )
}