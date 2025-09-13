// src/components/ServiceCategories.tsx
'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
    Globe,
    Database,
    Wifi,
    AudioLines,
    Wrench,
    Lightbulb,
    Camera,
    ArrowRight,
    type LucideIcon,
} from 'lucide-react'
import Link from 'next/link'
import { SERVICE_CATEGORIES, type IconName } from '@/data/categories'

const ICONS: Record<IconName, LucideIcon> = {
    Globe,
    Database,
    Wifi,
    AudioLines,
    Wrench,
    Lightbulb,
    Camera,
}

export default function ServiceCategories() {
    const [active, setActive] = useState(SERVICE_CATEGORIES[0].key)
    const current = SERVICE_CATEGORIES.find((c) => c.key === active)!

    return (
        <section id="categories" className="container-page py-24">
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
                <div>
                    <h2 className="text-3xl font-semibold">Service Categories</h2>
                    <p className="mt-3 max-w-2xl text-neutral-300">
                        A clear structure to find what you need faster.
                    </p>
                </div>
                <div className="flex flex-wrap gap-2">
                    {SERVICE_CATEGORIES.map((cat) => {
                        const selected = active === cat.key
                        return (
                            <button
                                key={cat.key}
                                onClick={() => setActive(cat.key)}
                                className={`rounded-full px-4 py-2 text-sm transition ${
                                    selected
                                        ? 'bg-brand-500 text-white ring-1 ring-brand-400/40'
                                        : 'border border-white/15 bg-white/5 text-neutral-200 backdrop-blur hover:bg-white/10'
                                }`}
                            >
                                {cat.title}
                            </button>
                        )
                    })}
                </div>
            </div>

            <p className="mt-6 max-w-3xl text-neutral-300">{current.blurb}</p>

            <AnimatePresence mode="wait">
                <motion.div
                    key={current.key}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.35 }}
                    className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
                >
                    {current.items.map((item) => {
                        const Icon = ICONS[item.icon]
                        return (
                            <motion.article
                                key={item.title}
                                whileHover={{ y: -3 }}
                                className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
                            >
                                <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl border border-white/10 bg-white/10">
                                    <Icon className="h-6 w-6 text-brand-400" />
                                </div>
                                <h3 className="text-lg font-semibold">{item.title}</h3>
                                <p className="mt-2 text-sm text-neutral-300">{item.desc}</p>

                                <Link
                                    href={item.href}
                                    className="mt-4 inline-flex items-center gap-2 text-sm text-brand-300 hover:text-brand-200"
                                >
                                    View details <ArrowRight className="h-4 w-4" />
                                </Link>
                            </motion.article>
                        )
                    })}
                </motion.div>
            </AnimatePresence>
        </section>
    )
}