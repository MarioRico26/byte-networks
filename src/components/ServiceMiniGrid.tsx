'use client'

import { motion } from 'framer-motion'
import {
    MonitorSmartphone,
    Wifi,
    AudioLines,
    Camera,
    Package,
    ShieldCheck,
    type LucideIcon,
} from 'lucide-react'
import type { RepairCard, MiniIcon } from '@/data/repairs'

const ICONS: Record<MiniIcon, LucideIcon> = {
    MonitorSmartphone,
    Wifi,
    AudioLines,
    Camera,
    Package,
    ShieldCheck,
}

export default function ServiceMiniGrid({ items }: { items: readonly RepairCard[] }) {
    return (
        <section className="mt-8">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((it) => {
                    const Icon = ICONS[it.icon]
                    return (
                        <motion.article
                            key={it.title}
                            initial={{ opacity: 0, y: 8 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.45 }}
                            whileHover={{ y: -3 }}
                            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
                        >
                            <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl border border-white/10 bg-white/10">
                                <Icon className="h-6 w-6 text-brand-400" />
                            </div>
                            <h3 className="text-lg font-semibold">{it.title}</h3>
                            <p className="mt-2 text-sm text-neutral-300">{it.desc}</p>
                        </motion.article>
                    )
                })}
            </div>
        </section>
    )
}