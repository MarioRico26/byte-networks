'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import FloatingQuote from '../../../components/FloatingQuote'
import {
    Code2, Rocket, ShieldCheck, Paintbrush, BarChart, Layers, Server, HardDrive
} from 'lucide-react'

const features = [
    { icon: Code2,      title: 'Frontend Tech',           desc: 'TypeScript, React, Next.js, Vite, Tailwind CSS.' },
    { icon: Layers,     title: 'Enterprise Architecture', desc: 'Scalable, secure, and flexible foundations for long-term growth.' },
    { icon: Paintbrush, title: 'UI/UX Design',            desc: 'Accessible, minimalist interfaces with polished visuals.' },
    { icon: BarChart,   title: 'SEO & Performance',       desc: 'Core Web Vitals, SSR/ISR, optimized images and assets.' },
    { icon: ShieldCheck,title: 'Security & Standards',    desc: 'OWASP-minded, secure headers, auth, and compliance baked in.' },
    { icon: Rocket,     title: 'Support & Scalability',   desc: 'Maintenance, enhancements, and CI/CD ready to evolve.' },
    { icon: Server,     title: 'Backend Development',     desc: 'Node.js, REST/GraphQL APIs, PostgreSQL, MongoDB.' },
    { icon: HardDrive,  title: 'Full-Stack Solutions',    desc: 'Tight integration across frontend, backend, and automations.' },
]

const process = [
    { step: 'Discover',  desc: 'Goals, audience, KPIs, and scope.' },
    { step: 'Design',    desc: 'Architecture, UI, content, and SEO plan.' },
    { step: 'Build',     desc: 'Agile development with automated QA.' },
    { step: 'Launch',    desc: 'Hardening, monitoring, and analytics.' },
    { step: 'Evolve',    desc: 'Roadmap and continuous improvements.' },
]

export default function WebDevPage() {
    return (
        <main className="relative">
            {/* HERO with animated auroras */}
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
                        <h1 className="max-w-4xl font-display text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
                            Web Development <span className="text-brand-400">that performs</span>
                        </h1>
                        <p className="mt-4 max-w-2xl text-lg text-neutral-300">
                            Next.js with SEO, performance, and accessibility built in. We craft elegant experiences
                            that convert and scale.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-2">
                            {['Next.js', 'TypeScript', 'Tailwind', 'Node.js', 'PostgreSQL', 'Vercel/AWS'].map((t) => (
                                <span key={t} className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-neutral-200">
                  {t}
                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>

                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </section>

            {/* FEATURES GRID */}
            <section className="container-page py-12">
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: '-80px' }}
                    variants={{
                        hidden: { opacity: 0 },
                        show: { opacity: 1, transition: { staggerChildren: 0.08 } }
                    }}
                    className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4"
                >
                    {features.map(({ icon: Icon, title, desc }) => (
                        <motion.article
                            key={title}
                            variants={{
                                hidden: { opacity: 0, y: 10 },
                                show: { opacity: 1, y: 0, transition: { duration: 0.45 } }
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

            {/* METRICS */}
            <section className="container-page py-10">
                <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2">
                    <div className="card-glass p-6">
                        <h3 className="text-lg font-semibold">Performance & SEO Targets</h3>
                        <p className="mt-2 text-sm text-neutral-300">We aim for 90+ in Core Web Vitals.</p>
                        {[
                            ['Lighthouse Performance', 94],
                            ['Accessibility', 98],
                            ['Best Practices', 100],
                            ['SEO', 97],
                        ].map(([label, value]) => (
                            <div key={label as string} className="mt-4">
                                <div className="flex justify-between text-xs text-neutral-400">
                                    <span>{label}</span><span>{value}%</span>
                                </div>
                                <div className="mt-2 h-2 rounded-full bg-white/10">
                                    <div
                                        className="h-2 rounded-full bg-brand-500"
                                        style={{ width: `${value}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                        <p className="mt-4 text-xs text-neutral-400">*Representative targets for our deliveries.</p>
                    </div>

                    <div className="card-glass p-6">
                        <h3 className="text-lg font-semibold">What You Get</h3>
                        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-neutral-300">
                            <li>App Router with SSR/ISR and optimized assets</li>
                            <li>Accessible forms and consistent design system</li>
                            <li>Analytics + conversion events configured</li>
                            <li>CI/CD environments (preview & production)</li>
                            <li>Clear documentation and hand-off</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* PROCESS */}
            <section className="container-page py-12">
                <h3 className="text-lg font-semibold">Process</h3>
                <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-5">
                    {process.map(({ step, desc }, i) => (
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
                        <h3 className="text-lg font-semibold">Ready to ship something great?</h3>
                        <p className="mt-1 text-sm text-neutral-300">
                            We’ll help you launch a fast, secure, and conversion-focused website.
                        </p>
                    </div>
                    <div className="flex gap-3">
                        <Link
                            href="/#contact"
                            className="rounded-2xl bg-brand-500 px-5 py-2 text-sm font-semibold text-white ring-1 ring-brand-400/40 transition hover:bg-brand-600"
                        >
                            Get a quote
                        </Link>
                        <Link
                            href="/#services"
                            className="rounded-2xl border border-white/15 bg-white/5 px-5 py-2 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10"
                        >
                            See all services
                        </Link>
                    </div>
                </div>
            </section>

            {/* Floating CTA button */}
            <FloatingQuote />
        </main>
    )
}