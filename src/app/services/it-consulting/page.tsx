'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import FloatingQuote from '../../../components/FloatingQuote'
import ConsultingDiagram from '../../../components/ConsultingDiagram'
import {
    Lightbulb, Briefcase, ShieldCheck, Building2, ClipboardCheck,
    BarChart3, Settings2, Lock, Users, Server, Rocket, ArrowRight
} from 'lucide-react'

const capabilities = [
    { icon: Lightbulb,     title: 'Smart IT strategy',          desc: 'Roadmaps for modernization, cloud adoption, automation, and security.' },
    { icon: BarChart3,     title: 'Data & decisions',           desc: 'Dashboards, KPIs, and reporting that drive action.' },
    { icon: ClipboardCheck,title: 'Assessments & audits',       desc: 'Risk, compliance, and architecture reviews with clear recommendations.' },
    { icon: Settings2,     title: 'Tool selection',             desc: 'Pick the right platforms (ERP/CRM/Docs/Automation) with confidence.' },
    { icon: Users,         title: 'Change enablement',          desc: 'Process mapping, training, and adoption plans that stick.' },
    { icon: Lock,          title: 'Security by design',         desc: 'Zero-trust mindset, MFA, least privilege, and continuity planning.' },
    { icon: Server,        title: 'Infra & cloud planning',     desc: 'Networks, identity, storage, backups, and hybrid strategies.' },
    { icon: Briefcase,     title: 'Program leadership',         desc: 'PMO, vendor management, and measurable delivery.' },
]

const highlights = [
    { title: 'Digital Strategy',        desc: 'From planning to execution — aligned with KPIs.' },
    { title: 'Software Selection',      desc: 'We guide you through choosing the best-fit tools.' },
    { title: 'Process Automation',      desc: 'Identify tasks to streamline for speed and quality.' },
    { title: 'Data-Driven Decisions',   desc: 'Dashboards, insights, and smart reporting.' },
]

const certs = ['Microsoft 365', 'AWS', 'QuickBooks', 'Salesforce', 'DocuWare', 'Google Workspace']
const projectTypes = [
    'ERP / CRM implementations',
    'IT assessments and compliance audits',
    'Digital transformation roadmap',
    'Business continuity & DR',
]

/* --- tiny animated sparkline (innovation) --- */
function InnovationSparkline() {
    const path = 'M 4 28 C 28 8, 52 18, 76 10 S 124 32, 148 18 S 196 6, 220 22'
    return (
        <motion.svg viewBox="0 0 224 40" className="h-10 w-full" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <defs>
                <linearGradient id="grad-i" x1="0" x2="1">
                    <stop offset="0%" stopColor="#22D3EE" />
                    <stop offset="100%" stopColor="#8B5CF6" />
                </linearGradient>
            </defs>
            <motion.path
                d={path}
                fill="none"
                stroke="url(#grad-i)"
                strokeWidth="3"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1.6, ease: 'easeInOut' }}
            />
        </motion.svg>
    )
}

export default function ITConsultingPage() {
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

                    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mt-4">
                        <h1 className="max-w-5xl font-display text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
                            IT Consulting <span className="text-brand-400">that bridges business and technology</span>
                        </h1>
                        <p className="mt-4 max-w-3xl text-lg text-neutral-300">
                            We help you define, execute, and optimize your roadmap — from security and cloud to operations and automation.
                        </p>
                    </motion.div>
                </div>

                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </section>

            {/* INTRO + DIAGRAM */}
            <section className="container-page py-10">
                <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2">
                    <div className="card-glass p-6">
                        <h3 className="text-lg font-semibold">Smart IT strategy</h3>
                        <p className="mt-2 text-sm text-neutral-300">
                            Experienced enterprise architects ensure scalability, performance, and security across your stack.
                            We work hand-in-hand with executives and teams to turn goals into measurable outcomes.
                        </p>
                        <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-neutral-300">
                            <li>Cloud adoption, cost control, and modernization</li>
                            <li>Security posture: MFA, identity, segmentation, backups</li>
                            <li>Process mapping, automation, and change enablement</li>
                        </ul>

                        <div className="mt-5">
                            <h4 className="text-sm font-semibold text-neutral-200">Certifications & alliances</h4>
                            <div className="mt-2 flex flex-wrap gap-2">
                                {certs.map((c) => (
                                    <span key={c} className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-neutral-200">{c}</span>
                                ))}
                            </div>

                            <h4 className="mt-4 text-sm font-semibold text-neutral-200">Project types</h4>
                            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-neutral-300">
                                {projectTypes.map((p) => <li key={p}>{p}</li>)}
                            </ul>
                        </div>
                    </div>

                    <ConsultingDiagram />
                </div>
            </section>

            {/* NEW: Innovation matters */}
            <section className="container-page py-8">
                <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-2">
                    <div className="card-glass p-6">
                        <div className="flex items-center gap-2">
                            <Rocket className="h-5 w-5 text-brand-400" />
                            <h3 className="text-lg font-semibold">Innovation matters</h3>
                        </div>
                        <p className="mt-2 text-sm text-neutral-300">
                            We tie innovation to business outcomes. Rapid prototyping and value-first proofs-of-concept help you
                            de-risk ideas fast — before heavy investment.
                        </p>

                        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
                            {[
                                ['Prototype lead time', '≤ 2 weeks'],
                                ['Success criteria', 'Defined up-front'],
                                ['Decision cadence', 'Bi-weekly'],
                            ].map(([k, v]) => (
                                <div key={k} className="rounded-xl border border-white/10 bg-white/5 p-3">
                                    <div className="text-xs text-neutral-400">{k}</div>
                                    <div className="mt-1 font-semibold">{v}</div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-3">
                            <InnovationSparkline />
                        </div>
                    </div>

                    <div className="card-glass p-6">
                        <h3 className="text-lg font-semibold">Innovation playbook</h3>
                        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-neutral-300">
                            <li>Frame the problem and KPIs</li>
                            <li>Run a lightweight PoC (tech + UX) with clear success gates</li>
                            <li>Decide: scale, iterate, or stop (no sunk-cost traps)</li>
                            <li>Operationalize: security, observability, and handover</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* CAPABILITIES */}
            <section className="container-page py-8">
                <h3 className="text-lg font-semibold">Capabilities</h3>
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: '-80px' }}
                    variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.08 } } }}
                    className="mt-4 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4"
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
                            <h4 className="text-base font-semibold">{title}</h4>
                            <p className="mt-2 text-sm text-neutral-300">{desc}</p>
                        </motion.article>
                    ))}
                </motion.div>
            </section>

            {/* WHY WORK WITH US */}
            <section className="container-page py-10">
                <h3 className="text-lg font-semibold">Why work with Byte Networks?</h3>
                <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                    {[
                        { icon: ClipboardCheck, text: 'Clear diagnostics and recommendations' },
                        { icon: BarChart3,      text: 'Strong understanding of data & finance' },
                        { icon: Building2,      text: 'Tailored plans for any business size' },
                        { icon: ShieldCheck,    text: 'Integration across your entire stack' },
                    ].map(({ icon: Icon, text }) => (
                        <div key={text} className="card-glass flex items-center gap-3 p-4">
                            <div className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/10">
                                <Icon className="h-5 w-5 text-brand-400" />
                            </div>
                            <div className="text-sm text-neutral-200">{text}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* HIGHLIGHTS + CTA */}
            <section className="container-page pb-28 pt-4">
                <h3 className="text-lg font-semibold">Highlighted consulting services</h3>
                <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                    {highlights.map((h, i) => (
                        <motion.div
                            key={h.title}
                            initial={{ opacity: 0, y: 8 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.45, delay: i * 0.05 }}
                            className="rounded-2xl border border-white/10 bg-white/5 p-5"
                        >
                            <div className="text-base font-semibold">{h.title}</div>
                            <p className="mt-2 text-sm text-neutral-300">{h.desc}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-6 card-glass flex flex-col items-start gap-4 p-6 md:flex-row md:items-center md:justify-between">
                    <div>
                        <h4 className="text-lg font-semibold">Let’s shape your roadmap.</h4>
                        <p className="mt-1 text-sm text-neutral-300">
                            Get a lightweight assessment and a clear plan to move forward.
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