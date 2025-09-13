'use client'

import { motion } from 'framer-motion'
import {
    Stethoscope,
    BarChart3,
    Layers,
    Puzzle,
    CheckCircle2,
    type LucideIcon,
} from 'lucide-react'

const ICONS: Record<string, LucideIcon> = {
    Stethoscope,
    BarChart3,
    Layers,
    Puzzle,
}

export default function ValuePills({
                                       title = 'Why Work With Byte Networks?',
                                       items,
                                   }: {
    title?: string
    items: { label: string; icon?: string }[]
}) {
    return (
        <section className="mt-14">
            <h2 className="text-xl font-semibold">{title}</h2>
            <motion.ul
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.06 } } }}
                className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
            >
                {items.map((it) => {
                    const Icon = (it.icon && ICONS[it.icon]) || CheckCircle2
                    return (
                        <motion.li
                            key={it.label}
                            variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}
                            className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-md"
                        >
              <span className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/10">
                <Icon className="h-5 w-5 text-brand-400" />
              </span>
                            <span className="text-sm">{it.label}</span>
                        </motion.li>
                    )
                })}
            </motion.ul>
        </section>
    )
}