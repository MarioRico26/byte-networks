'use client'

import { motion } from 'framer-motion'
import { PhoneCall, Clock, AlertTriangle, MapPin } from 'lucide-react'
import Link from 'next/link'

type Props = {
    phone?: string          // texto que se muestra
    telHref?: string        // para el enlace tel:
    coverage?: string       // zona
    hours?: string          // horario
    className?: string
}

/**
 * EmergencyBar – reusable emergency contact strip
 * - Sutil glow + glass card
 * - Badges (Same-day, After-hours)
 * - CTA "Call now" (tel:)
 */
export default function EmergencyBar({
                                         phone = '609-713-7333',
                                         telHref = '+16097137333',
                                         coverage = 'Tri-state area & remote',
                                         hours = 'Same-day & after-hours available',
                                         className = '',
                                     }: Props) {
    return (
        <section className={`container-page ${className}`}>
            <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="card-glass relative overflow-hidden px-5 py-4"
                aria-label="Emergency contact"
            >
                {/* soft aurora glow */}
                <div className="pointer-events-none absolute -left-20 top-1/2 h-44 w-44 -translate-y-1/2 rounded-full bg-brand-500/20 blur-3xl" />
                <div className="pointer-events-none absolute -right-24 -top-10 h-52 w-52 rounded-full bg-cyan-400/20 blur-3xl" />

                <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
                    <div className="flex items-start gap-3">
                        <div className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/10">
                            <PhoneCall className="h-5 w-5 text-brand-400" />
                        </div>
                        <div>
                            <div className="text-sm text-neutral-400">Emergency Line</div>
                            <div className="mt-0.5 text-xl font-semibold tracking-tight">
                                {phone}
                            </div>
                            <div className="mt-1 flex flex-wrap gap-2 text-xs text-neutral-300">
                <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-0.5">
                  <Clock className="h-3.5 w-3.5" /> {hours}
                </span>
                                <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-0.5">
                  <AlertTriangle className="h-3.5 w-3.5 text-amber-300" /> Priority dispatch
                </span>
                                <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-0.5">
                  <MapPin className="h-3.5 w-3.5" /> {coverage}
                </span>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <Link
                            href={`tel:${telHref}`}
                            className="inline-flex items-center gap-2 rounded-2xl bg-brand-500 px-5 py-2 text-sm font-semibold text-white ring-1 ring-brand-400/40 transition hover:bg-brand-600"
                        >
                            <PhoneCall className="h-4 w-4" /> Call now
                        </Link>
                        <Link
                            href="/#contact"
                            className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-5 py-2 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10"
                        >
                            Request a quote
                        </Link>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}