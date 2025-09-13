'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import FloatingQuote from '../../../components/FloatingQuote'
import {
    Boxes, Workflow, Plug, ShieldCheck, Database, TerminalSquare,
    Gauge, Cloud, Layers, Cog, ArrowRight
} from 'lucide-react'

/** --- Content data --- */
const capabilities = [
    { icon: Boxes, title: 'Line-of-business apps', desc: 'Portals, CRMs/ERPs, operational tools and dashboards.' },
    { icon: Workflow, title: 'Workflow automation', desc: 'Trigger-based jobs, approvals, data sync & notifications.' },
    { icon: Plug, title: 'Integrations & APIs', desc: 'REST/GraphQL, webhooks, event-driven & background workers.' },
    { icon: ShieldCheck, title: 'Security by design', desc: 'AuthN/Z, encryption, audit logs and compliance in mind.' },
    { icon: Database, title: 'Data platforms', desc: 'PostgreSQL, SQL Server, Oracle, MongoDB, Redis and caches.' },
    { icon: TerminalSquare, title: 'Cross-platform', desc: 'Desktop (Electron/Tauri), mobile (React Native), web.' },
    { icon: Cloud, title: 'Cloud-native', desc: 'AWS/Azure/GCP, containers, serverless & managed services.' },
    { icon: Gauge, title: 'Ops & Reliability', desc: 'CI/CD, monitoring, error tracking and SLOs defined.' },
]

const process = [
    { step: 'Discover', desc: 'Problem framing, KPIs, risks, success criteria.' },
    { step: 'Design', desc: 'Domain model, API contracts, UX & architecture.' },
    { step: 'Build', desc: 'Agile delivery with tests and code reviews.' },
    { step: 'Harden', desc: 'Security, performance, accessibility, resiliency.' },
    { step: 'Launch', desc: 'Rollout, observability, documentation & training.' },
    { step: 'Evolve', desc: 'Roadmap, analytics insights and iteration.' },
]

const techRow1 = ['Node.js', '.NET', 'Python', 'Java', 'Go', 'TypeScript']
const techRow2 = ['React', 'Vue', 'Angular', 'React Native', 'Electron', 'Tauri']
const techRow3 = ['PostgreSQL', 'SQL Server', 'Oracle', 'MongoDB', 'Redis', 'Kafka']

/** --- Small helper for ticker --- */
function TechTicker({ items, delay = 0 }: { items: string[]; delay?: number }) {
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

/** --- Animated radial integrations graph --- */
function IntegrationsGraph() {
    const nodes = [
        { label: 'Salesforce', pos: [50, -70] },
        { label: 'QuickBooks', pos: [-100, -10] },
        { label: 'Microsoft 365', pos: [110, 10] },
        { label: 'DocuWare', pos: [-60, 80] },
        { label: 'Stripe', pos: [0, -110] },
        { label: 'Twilio', pos: [80, 100] },
    ]
    return (
        <div className="relative h-[340px] w-full">
            {/* Center node */}
            <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
                <div className="grid place-items-center rounded-2xl border border-white/10 bg-white/10 px-6 py-4">
                    <div className="text-xs text-neutral-400">Core</div>
                    <div className="font-semibold">Your App</div>
                </div>
            </div>

            {/* Animated connection lines */}
            <motion.svg
                className="absolute inset-0"
                viewBox="0 0 400 340"
                preserveAspectRatio="xMidYMid meet"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                {nodes.map((n, i) => {
                    // center (200,170)
                    const cx = 200; const cy = 170
                    const x = cx + n.pos[0] * 1.2
                    const y = cy + n.pos[1] * 1.2
                    const path = `M ${cx} ${cy} Q ${(cx + x) / 2} ${(cy + y) / 2 - 10} ${x} ${y}`
                    return (
                        <motion.path
                            key={`p-${i}`}
                            d={path}
                            stroke="url(#pulse)"
                            strokeWidth="1.6"
                            fill="none"
                            strokeLinecap="round"
                            initial={{ pathLength: 0, opacity: 0.6 }}
                            animate={{ pathLength: 1, opacity: [0.6, 1, 0.6] }}
                            transition={{ duration: 2.2, delay: i * 0.2, repeat: Infinity, repeatType: 'reverse' }}
                        />
                    )
                })}
                <defs>
                    <linearGradient id="pulse" x1="0" x2="1">
                        <stop offset="0%" stopColor="#8B5CF6" />
                        <stop offset="100%" stopColor="#22D3EE" />
                    </linearGradient>
                </defs>
            </motion.svg>

            {/* Orbiting nodes */}
            {nodes.map((n, i) => (
                <motion.div
                    key={n.label}
                    className="absolute z-10"
                    style={{
                        left: `calc(50% + ${n.pos[0]}px)`,
                        top: `calc(50% + ${n.pos[1]}px)`,
                    }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                    <div className="rounded-xl border border-white/10 bg-white/10 px-3 py-1.5 text-xs text-neutral-200 backdrop-blur">
                        {n.label}
                    </div>
                </motion.div>
            ))}
        </div>
    )
}

export default function CustomSoftwarePage() {
    return (
        <main className="relative">
            {/* HERO */}
            <section className="relative isolate overflow-hidden">
                <div className="pointer-events-none absolute inset-0 -z-30 bg-animate" />
                <motion.div
                    aria-hidden
                    className="absolute -top-24 right-10 -z-20 h-72 w-72 rounded-full bg-gradient-to-br from-brand-500/30 via-fuchsia-500/20 to-cyan-400/20 blur-3xl"
                    animate={{ x: [0, 14, -10, 0], y: [0, 10, -12, 0] }}
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
                            Custom Software <span className="text-brand-400">built around your business</span>
                        </h1>
                        <p className="mt-4 max-w-3xl text-lg text-neutral-300">
                            We design and deliver tailored systems—secure, scalable, and delightful to use.
                            From internal tools to customer-facing platforms, we ship software that drives outcomes.
                        </p>
                    </motion.div>

                    {/* Tech ticker */}
                    <div className="mt-10 space-y-2">
                        <TechTicker items={techRow1} />
                        <TechTicker items={techRow2} delay={0.4} />
                        <TechTicker items={techRow3} delay={0.8} />
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
                    variants={{
                        hidden: { opacity: 0 },
                        show: { opacity: 1, transition: { staggerChildren: 0.08 } },
                    }}
                    className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4"
                >
                    {capabilities.map(({ icon: Icon, title, desc }) => (
                        <motion.article
                            key={title}
                            variants={{
                                hidden: { opacity: 0, y: 10 },
                                show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
                            }}
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

            {/* INTEGRATIONS GRAPH + HIGHLIGHTS */}
            <section className="container-page py-10">
                <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2">
                    <div className="card-glass p-6">
                        <h3 className="text-lg font-semibold">Integrations that click</h3>
                        <p className="mt-2 text-sm text-neutral-300">
                            Seamless connections to your ecosystem. We build resilient, observable integrations with clear contracts.
                        </p>
                        <div className="mt-6">
                            <IntegrationsGraph />
                        </div>
                    </div>

                    <div className="card-glass p-6">
                        <h3 className="text-lg font-semibold">Quality & Security</h3>
                        <div className="mt-4 space-y-4">
                            {[
                                ['Automated tests coverage', 85],
                                ['Security checklist completion', 100],
                                ['API contract validation', 100],
                                ['Performance budget compliance', 92],
                            ].map(([label, value]) => (
                                <div key={label as string}>
                                    <div className="flex justify-between text-xs text-neutral-400">
                                        <span>{label}</span><span>{value}%</span>
                                    </div>
                                    <div className="mt-2 h-2 rounded-full bg-white/10">
                                        <div className="h-2 rounded-full bg-brand-500" style={{ width: `${value}%` }} />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
                            <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                                <div className="text-xs text-neutral-400">Architecture</div>
                                <div className="mt-1 font-semibold">Domain-driven, scalable</div>
                            </div>
                            <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                                <div className="text-xs text-neutral-400">Operations</div>
                                <div className="mt-1 font-semibold">CI/CD, tracing, SLOs</div>
                            </div>
                            <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                                <div className="text-xs text-neutral-400">Security</div>
                                <div className="mt-1 font-semibold">AuthN/Z, encryption</div>
                            </div>
                            <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                                <div className="text-xs text-neutral-400">Performance</div>
                                <div className="mt-1 font-semibold">Caching & budgets</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PROCESS */}
            <section className="container-page py-12">
                <h3 className="text-lg font-semibold">Delivery process</h3>
                <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-6">
                    {process.map(({ step, desc }, i) => (
                        <motion.div
                            key={step}
                            initial={{ opacity: 0, y: 8 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.45, delay: i * 0.05 }}
                            className="rounded-2xl border border-white/10 bg-white/5 p-4"
                        >
                            <div className="flex items-center gap-2 text-xs text-neutral-400">
                                <Layers className="h-3.5 w-3.5 text-brand-400" /> Step {i + 1}
                            </div>
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
                        <h3 className="text-lg font-semibold">Let’s build software that users love to use.</h3>
                        <p className="mt-1 text-sm text-neutral-300">
                            Share your goals—get a clear plan, timeline, and quote.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <Link
                            href="/#contact"
                            className="inline-flex items-center gap-2 rounded-2xl bg-brand-500 px-5 py-2 text-sm font-semibold text-white ring-1 ring-brand-400/40 transition hover:bg-brand-600"
                        >
                            <Cog className="h-4 w-4" />
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