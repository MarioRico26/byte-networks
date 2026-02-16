'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import {
    Globe,
    Database,
    AudioLines,
    Wifi,
    Lightbulb,
    Wrench,
    ArrowLeft,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

/** Nombre del icono permitido para este hero */
export type IconKey =
    | 'Globe'
    | 'Database'
    | 'AudioLines'
    | 'Wifi'
    | 'Lightbulb'
    | 'Wrench'

const ICONS: Record<IconKey, LucideIcon> = {
    Globe,
    Database,
    AudioLines,
    Wifi,
    Lightbulb,
    Wrench,
}

type Props = {
    title: string
    subtitle: string
    /** nombre del icono (no la función) */
    iconName?: IconKey
    /** imagen tenue de fondo (heat-map) opcional */
    heatmapSrc?: string
    backHref?: string
    backLabel?: string
}

export default function ServiceHero({
                                        title,
                                        subtitle,
                                        iconName,
                                        heatmapSrc,
                                        backHref = '/#services',
                                        backLabel = 'Back to Services',
                                    }: Props) {
    const Icon = iconName ? ICONS[iconName] : undefined

    return (
        <section className="relative isolate overflow-hidden">
            {/* Base gradient */}
            <div className="pointer-events-none absolute inset-0 -z-20 bg-animate" />

            {/* Heat-map tenue opcional */}
            {heatmapSrc && (
                <div className="pointer-events-none absolute inset-0 -z-15">
                    <Image
                        src={heatmapSrc}
                        alt=""
                        fill
                        priority={false}
                        className="object-cover opacity-25 mix-blend-overlay"
                    />
                    {/* Fade sutil para legibilidad */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20" />
                </div>
            )}

            {/* Cool aurora */}
            <motion.div
                aria-hidden
                className="absolute -top-24 right-10 -z-10 h-72 w-72 rounded-full bg-gradient-to-br from-brand-500/28 via-cyan-400/18 to-fuchsia-400/14 blur-3xl"
                animate={{ x: [0, 14, -10, 0], y: [0, 10, -12, 0] }}
                transition={{ repeat: Infinity, duration: 18, ease: 'linear' }}
            />
            <motion.div
                aria-hidden
                className="absolute -bottom-16 left-8 -z-10 h-80 w-80 rounded-full bg-gradient-to-tr from-fuchsia-400/14 via-brand-500/18 to-cyan-400/16 blur-3xl"
                animate={{ x: [0, -10, 8, 0], y: [0, -12, 6, 0] }}
                transition={{ repeat: Infinity, duration: 22, ease: 'linear' }}
            />

            <div className="container-page py-10">
                {/* Breadcrumb */}
                <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-4 text-sm"
                >
                    <Link href={backHref} className="inline-flex items-center gap-2 text-neutral-400 hover:text-white">
                        <ArrowLeft className="h-4 w-4" />
                        {backLabel}
                    </Link>
                </motion.div>

                {/* Header */}
                <div className="flex items-start gap-4">
                    {Icon && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.05 }}
                            className="grid h-12 w-12 place-items-center rounded-xl border border-white/10 bg-white/10"
                        >
                            <Icon className="h-6 w-6 text-brand-400" />
                        </motion.div>
                    )}

                    <div>
                        <motion.h1
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-3xl font-semibold tracking-tight"
                        >
                            {title}
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.05 }}
                            className="mt-2 max-w-3xl text-neutral-300"
                        >
                            {subtitle}
                        </motion.p>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </section>
    )
}
