'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import FloatingQuote from '../../../components/FloatingQuote'
import MiniPlayer from '../../../components/MiniPlayer'
import {
    Music, SlidersHorizontal, Waves, Smartphone, Speaker, Radio, Cable, Settings2, ArrowRight
} from 'lucide-react'

const capabilities = [
    { icon: Speaker,            title: 'Multi-room audio',     desc: 'Independent zones with synchronized playback when desired.' },
    { icon: Music,              title: 'Home theater',         desc: 'Immersive setups with AVR, sub calibration, and acoustic care.' },
    { icon: Waves,              title: 'Outdoor sound',        desc: 'Weatherproof speakers, discreet wiring, and balanced coverage.' },
    { icon: SlidersHorizontal,  title: 'Calibration & DSP',    desc: 'Room EQ, crossovers, level matching, dynamic range control.' },
    { icon: Smartphone,         title: 'Control & apps',       desc: 'Phone/voice control, scenes, favorites, parental controls.' },
    { icon: Settings2,          title: 'Source integration',   desc: 'TV, streamers, turntables, assistants—seamlessly aligned.' },
    { icon: Cable,              title: 'Networked audio',      desc: 'Reliable Wi-Fi/Ethernet backbones, PoE amps and hubs.' },
    { icon: Radio,              title: 'Clean installs',       desc: 'Neat racks, labeled wiring, proper power & ventilation.' },
]

const process = [
    ['Survey', 'Space, usage, wiring, and aesthetics.'],
    ['Design', 'Zones, speakers, amplification, control paths.'],
    ['Install', 'Precision wiring, safe mounting, tidy racks.'],
    ['Tune', 'EQ, levels, room correction, listening tests.'],
    ['Handover', 'App setup, quick tips, docs & diagrams.'],
    ['Support', 'Monitoring options, upgrades, on-site help.'],
]

// ticker helper
function BrandTicker({ items, delay = 0 }: { items: string[]; delay?: number }) {
    return (
        <div className="relative overflow-hidden">
            <motion.div
                className="flex gap-2"
                initial={{ x: 0 }}
                animate={{ x: ['0%', '-50%'] }}
                transition={{ repeat: Infinity, ease: 'linear', duration: 20, delay }}
            >
                {[...items, ...items].map((t, i) => (
                    <span
                        key={`${t}-${i}`}
                        className="whitespace-nowrap rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-neutral-200"
                    >
            {t}
          </span>
                ))}
            </motion.div>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-neutral-950 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-neutral-950 to-transparent" />
        </div>
    )
}

// tiny EQ curve sketch
function FrequencySketch() {
    const path = 'M 8 120 C 60 30, 160 30, 210 120 S 360 210, 420 120 S 580 40, 740 120'
    return (
        <motion.svg
            viewBox="0 0 760 240"
            className="h-40 w-full"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
        >
            <defs>
                <linearGradient id="eq-grad" x1="0" x2="1">
                    <stop offset="0%" stopColor="#22D3EE" />
                    <stop offset="100%" stopColor="#8B5CF6" />
                </linearGradient>
            </defs>
            <motion.path
                d={path}
                fill="none"
                stroke="url(#eq-grad)"
                strokeWidth="3"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1.6, ease: 'easeInOut' }}
            />
            <line x1="0" y1="120" x2="760" y2="120" stroke="white" strokeOpacity="0.08" />
            <line x1="380" y1="0" x2="380" y2="240" stroke="white" strokeOpacity="0.08" />
        </motion.svg>
    )
}

export default function AudioSystemsPage() {
    return (
        <main className="relative">
            {/* HERO */}
            <section className="relative isolate overflow-hidden">
                <div className="pointer-events-none absolute inset-0 -z-30 bg-animate" />
                <motion.div
                    aria-hidden
                    className="absolute -top-24 right-10 -z-20 h-72 w-72 rounded-full bg-gradient-to-br from-brand-500/30 via-fuchsia-500/20 to-cyan-400/20 blur-3xl"
                    animate={{ x: [0, 12, -10, 0], y: [0, 8, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 18, ease: 'linear' }}
                />
                <motion.div
                    aria-hidden
                    className="absolute -bottom-16 left-8 -z-20 h-80 w-80 rounded-full bg-gradient-to-tr from-cyan-400/20 via-brand-500/20 to-fuchsia-500/20 blur-3xl"
                    animate={{ x: [0, -10, 8, 0], y: [0, -12, 6, 0] }}
                    transition={{ repeat: Infinity, duration: 22, ease: 'linear' }}
                />

                <div className="container-page py-14">
                    <Link href="/" className="text-sm text-neutral-400 hover:text-white">← Back to Home</Link>

                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mt-4"
                    >
                        <h1 className="max-w-5xl font-display text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
                            Audio Systems <span className="text-brand-400">designed for pure listening</span>
                        </h1>
                        <p className="mt-4 max-w-3xl text-lg text-neutral-300">
                            Multi-room music, home theater, and outdoor sound—calibrated and integrated so everything feels effortless.
                        </p>
                    </motion.div>

                    {/* Mini decorative player */}
                    <div className="mt-8">
                        <MiniPlayer />
                    </div>
                </div>

                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </section>

            {/* CAPABILITIES */}
            <section className="container-page py-12">
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: '-80px' }}
                    variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.08 } } }}
                    className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4"
                >
                    {capabilities.map(({ icon: Icon, title, desc }) => (
                        <motion.article
                            key={title}
                            variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0, transition: { duration: 0.45 } } }}
                            whileHover={{ y: -4 }}
                            className="card-glass p-6"
                        >
                            <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl border border-white/10 bg-white/10">
                                <Icon className="h-6 w-6 text-brand-400" />
                            </div>
                            <h3 className="text-base font-semibold">{title}</h3>
                            <p className="mt-2 text-sm text-neutral-300">{desc}</p>
                        </motion.article>
                    ))}
                </motion.div>
            </section>

            {/* BRANDS + TUNING GRAPH */}
            <section className="container-page py-10">
                <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2">
                    <div className="card-glass p-6">
                        <h3 className="text-lg font-semibold">Brands we love</h3>
                        <p className="mt-2 text-sm text-neutral-300">We pick gear for reliability, sound quality, and clean integrations.</p>
                        <div className="mt-4 space-y-2">
                            <BrandTicker items={['Sonos', 'Denon', 'Marantz', 'Yamaha', 'Bose', 'Polk Audio', 'Klipsch', 'KEF']} />
                            <BrandTicker items={['Audio-Technica', 'SVS', 'Definitive Tech', 'Bluesound', 'NAD', 'Pioneer', 'Onkyo']} delay={0.4} />
                        </div>
                    </div>

                    <div className="card-glass p-6">
                        <h3 className="text-lg font-semibold">Tuning & response</h3>
                        <p className="mt-2 text-sm text-neutral-300">
                            Room correction and EQ make a bigger difference than raw power. We calibrate for clarity without harshness.
                        </p>
                        <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-3">
                            <FrequencySketch />
                        </div>
                        <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-neutral-300">
                            <li>✓ Level matching</li>
                            <li>✓ Crossover alignment</li>
                            <li>✓ Sub integration</li>
                            <li>✓ Voice clarity</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* PROCESS */}
            <section className="container-page py-12">
                <h3 className="text-lg font-semibold">Delivery process</h3>
                <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-6">
                    {process.map(([step, desc], i) => (
                        <motion.div
                            key={step}
                            initial={{ opacity: 0, y: 8 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.45, delay: i * 0.05 }}
                            className="rounded-2xl border border-white/10 bg-white/5 p-4"
                        >
                            <div className="text-xs text-neutral-400">Step {i + 1}</div>
                            <div className="mt-1 font-semibold">{step}</div>
                            <p className="mt-1 text-sm text-neutral-300">{desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="container-page pb-28 pt-4">
                <div className="card-glass flex flex-col items-start gap-4 p-6 md:flex-row md:items-center md:justify-between">
                    <div>
                        <h3 className="text-lg font-semibold">Make every room sound amazing.</h3>
                        <p className="mt-1 text-sm text-neutral-300">
                            Tell us how you listen—we’ll design zones and tune them to your space.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <Link
                            href="/#contact"
                            className="inline-flex items-center gap-2 rounded-2xl bg-brand-500 px-5 py-2 text-sm font-semibold text-white ring-1 ring-brand-400/40 transition hover:bg-brand-600"
                        >
                            Get a quote
                        </Link>
                        <Link
                            href="/#services"
                            className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-5 py-2 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10"
                        >
                            See all services <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </section>

            <FloatingQuote />
        </main>
    )
}