'use client'

import { motion } from 'framer-motion'
import { ShieldCheck, Zap, Rocket, Users } from 'lucide-react'

type Stat = {
    label: string
    value: string
    icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

const DEFAULT_STATS: Stat[] = [
    { label: 'Projects delivered', value: '50+', icon: Rocket },
    { label: 'Avg. client satisfaction', value: '4.9/5', icon: Users },
    { label: 'Uptime targets', value: '99.9%', icon: Zap },
    { label: 'Security-first', value: 'By design', icon: ShieldCheck },
]

export default function StatsStrip({ stats = DEFAULT_STATS }: { stats?: Stat[] }) {
    return (
        <section className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
            <motion.ul
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                variants={{
                    hidden: { opacity: 0 },
                    show: { opacity: 1, transition: { staggerChildren: 0.08 } },
                }}
                className="grid grid-cols-2 gap-6 sm:grid-cols-4"
            >
                {stats.map((s) => {
                    const Icon = s.icon
                    return (
                        <motion.li
                            key={s.label}
                            variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}
                            className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3"
                        >
                            {Icon && (
                                <span className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/10">
                  <Icon className="h-5 w-5 text-brand-400" />
                </span>
                            )}
                            <div>
                                <div className="text-lg font-semibold">{s.value}</div>
                                <div className="text-xs text-neutral-300">{s.label}</div>
                            </div>
                        </motion.li>
                    )
                })}
            </motion.ul>
        </section>
    )
}