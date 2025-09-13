'use client'

import { motion } from 'framer-motion'

export default function AudioVisualizer({
                                            barCount = 48,
                                            className = '',
                                        }: {
    barCount?: number
    className?: string
}) {
    const bars = Array.from({ length: barCount })

    return (
        <div className={`relative h-24 w-full overflow-hidden ${className}`}>
            <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-white/10 via-white/5 to-transparent" />
            <div className="flex h-full w-full items-end justify-between gap-[3px]">
                {bars.map((_, i) => {
                    const delay = i * 0.03
                    const dur = 2.2 + (i % 6) * 0.15
                    return (
                        <motion.div
                            key={i}
                            className="relative w-[calc((100%_-_3px_*_47)/48)] origin-bottom"
                            initial={{ scaleY: 0.3, opacity: 0.85 }}
                            animate={{ scaleY: [0.3, 0.95, 0.4, 0.75, 0.35] }}
                            transition={{ repeat: Infinity, duration: dur, delay, ease: 'easeInOut' }}
                        >
                            <div className="h-full w-full rounded-sm bg-gradient-to-t from-brand-500 to-cyan-400 shadow-[0_0_20px_-6px_rgba(34,211,238,0.45)]" />
                        </motion.div>
                    )
                })}
            </div>
        </div>
    )
}