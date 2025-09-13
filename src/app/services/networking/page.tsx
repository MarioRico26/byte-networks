'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import FloatingQuote from '../../../components/FloatingQuote'
import NetworkTopologyGraph from '../../../components/NetworkTopologyGraph'
import {
    Wifi, ShieldCheck, Cable, SignalHigh, MonitorSmartphone, Router, Phone, Globe2, ArrowRight
} from 'lucide-react'

/* --- Tiny heatmap background (SVG) --- */
function HeatmapBG() {
    return (
        <svg className="absolute inset-0 -z-20 h-full w-full opacity-[0.15]" aria-hidden viewBox="0 0 1200 600">
            <defs>
                <linearGradient id="hm-g" x1="0" x2="1">
                    <stop offset="0%" stopColor="#22D3EE"/>
                    <stop offset="100%" stopColor="#8B5CF6"/>
                </linearGradient>
            </defs>
            {Array.from({ length: 20 }).map((_, r) =>
                Array.from({ length: 40 }).map((__, c) => {
                    const x = 20 + c * 28
                    const y = 20 + r * 26
                    const d = Math.hypot(x - 600, y - 260)
                    const a = Math.max(0, 1 - d / 520) * 0.8
                    return <rect key={`${r}-${c}`} x={x} y={y} width="18" height="18" rx="4" fill="url(#hm-g)" opacity={a}/>
                })
            )}
        </svg>
    )
}

const capabilities = [
    { icon: ShieldCheck, title: 'Firewall & Security', desc: 'UTM/NGFW, VPNs, IDS/IPS, content filtering, MFA.' },
    { icon: Wifi,         title: 'Wi-Fi Design',       desc: 'Site survey, roaming, band-steering, RF tuning, VLANs.' },
    { icon: Cable,        title: 'Structured Cabling', desc: 'Racks, patch panels, labeling, PoE budgets and tidy runs.' },
    { icon: MonitorSmartphone, title: 'Monitoring',    desc: 'PRTG/Zabbix, SNMP/NetFlow, alerts and trend reports.' },
    { icon: Phone,        title: 'IP Telephony',       desc: 'VoIP/IP-PBX, SIP trunks, QoS and unified comms.' },
    { icon: Router,       title: 'SD-WAN & Edge',      desc: 'Resilient links, traffic shaping, failover and HA.' },
    { icon: SignalHigh,   title: 'Bridges & Outdoor',  desc: 'Point-to-point/mesh, weatherproof enclosures, PoE.' },
    { icon: Globe2,       title: 'Guest & POS',        desc: 'Captive portal, isolation, PCI-minded segmentation.' },
]

const process = [
    ['Assess',   'Floorplans, RF constraints, growth and risks.'],
    ['Design',   'AP placement, cabling, VLANs, security zones.'],
    ['Deploy',   'Install, configure, and validate with heatmaps.'],
    ['Handover', 'Docs, diagrams, and admin training.'],
    ['Operate',  'Monitoring, SLAs, alerts and updates.'],
]

export default function NetworkingPage() {
    return (
        <main className="relative">
            {/* HERO with animated gradient + heatmap */}
            <section className="relative isolate overflow-hidden">
                <div className="pointer-events-none absolute inset-0 -z-30 bg-animate" />
                <HeatmapBG />
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
                            Networking & Wi-Fi <span className="text-brand-400">engineered for reliability</span>
                        </h1>
                        <p className="mt-4 max-w-3xl text-lg text-neutral-300">
                            Enterprise-grade networks that scale: secure firewalls, seamless roaming, segmented VLANs, and
                            proactive monitoring—designed for uptime and clarity.
                        </p>
                    </motion.div>

                    <div className="mt-8 flex flex-wrap gap-2">
                        {['Cisco', 'Fortinet', 'Ubiquiti', 'Aruba', 'MikroTik', 'SonicWall'].map((v) => (
                            <span key={v} className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-neutral-200">
                {v}
              </span>
                        ))}
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

            {/* NEW: Topology preview (interactive graph) */}
            <section className="container-page py-6">
                <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2">
                    <div className="card-glass p-6">
                        <h3 className="text-lg font-semibold">Interactive topology (demo)</h3>
                        <p className="mt-2 text-sm text-neutral-300">
                            A simplified view of traffic flows across core components. Animated links represent packet movement,
                            while badges show key zones and services.
                        </p>
                        <div className="mt-6">
                            <NetworkTopologyGraph />
                        </div>
                        <p className="mt-3 text-xs text-neutral-400">
                            *Illustrative; actual deployments include detailed VLAN and security diagrams.
                        </p>
                    </div>

                    {/* METRICS / HIGHLIGHTS */}
                    <div className="card-glass p-6">
                        <h3 className="text-lg font-semibold">Operational metrics</h3>
                        <p className="mt-2 text-sm text-neutral-300">Targets we design for in typical deployments.</p>
                        {[
                            ['Wi-Fi coverage in target areas', 95],
                            ['Core network uptime (SLA)', 99.9],
                            ['Critical alert response within', 30], // minutes
                            ['Guest isolation & segmentation', 100],
                        ].map(([label, val]) => (
                            <div key={label as string} className="mt-4">
                                <div className="flex justify-between text-xs text-neutral-400">
                                    <span>{label}</span>
                                    <span>{typeof val === 'number' && val <= 100 ? `${val}%` : (val === 99.9 ? '99.9%' : `${val}m`)}</span>
                                </div>
                                <div className="mt-2 h-2 rounded-full bg-white/10">
                                    <div
                                        className="h-2 rounded-full bg-brand-500"
                                        style={{ width: `${Math.min(Number(val), 100)}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* DELIVERY PROCESS */}
            <section className="container-page py-12">
                <h3 className="text-lg font-semibold">Delivery process</h3>
                <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-5">
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
                        <h3 className="text-lg font-semibold">Need rock-solid networking?</h3>
                        <p className="mt-1 text-sm text-neutral-300">
                            Get a lightweight site survey and a clear plan to boost reliability and coverage.
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

            {/* Floating CTA button */}
            <FloatingQuote />
        </main>
    )
}