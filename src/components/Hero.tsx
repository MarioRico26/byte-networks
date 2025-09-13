'use client'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import TextRotatorLux from './TextRotatorLux'

const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}
const item = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function Hero() {
    const headlineWords = [
        <span key="w1" className="bg-gradient-to-r from-brand-400 to-cyan-300 bg-clip-text text-transparent">websites</span>,
        <span key="w2" className="bg-gradient-to-r from-brand-400 to-cyan-300 bg-clip-text text-transparent">custom software</span>,
        <span key="w3" className="bg-gradient-to-r from-brand-400 to-cyan-300 bg-clip-text text-transparent">client portals</span>,
        <span key="w4" className="bg-gradient-to-r from-brand-400 to-cyan-300 bg-clip-text text-transparent">internal tools</span>,
        <span key="w5" className="bg-gradient-to-r from-brand-400 to-cyan-300 bg-clip-text text-transparent">automation workflows</span>,
        <span key="w6" className="bg-gradient-to-r from-brand-400 to-cyan-300 bg-clip-text text-transparent">analytics dashboards</span>,
    ]

    const inspo = [
        'Innovation with purpose.',
        'Speed, security, and scalability.',
        'Design that converts.',
        'Architecture for long-term growth.',
        'Small changes — big impact.',
        'Ship fast. Learn faster.',
    ]

    return (
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

            <motion.div variants={container} initial="hidden" animate="show" className="container-page flex min-h-[82vh] flex-col items-center justify-center text-center">
                {/* Headline sedoso */}
                <motion.h1 variants={item} className="max-w-5xl font-display text-5xl font-semibold leading-tight tracking-tight md:text-6xl">
                    We build{' '}
                    <TextRotatorLux
                        items={headlineWords}
                        intervalMs={5600}   // más relajado
                        durationMs={1400}   // transición sedosa
                        glint
                    />
                    {' '}that drive your business forward
                </motion.h1>

                {/* Frase inspiradora sedosa */}
                <motion.p variants={item} className="mt-6 max-w-2xl text-lg text-neutral-300">
                    <TextRotatorLux items={inspo} intervalMs={6200} durationMs={1400} />
                </motion.p>

                <motion.div variants={item} className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
                    <Link
                        href="#contact"
                        className="group relative overflow-hidden rounded-2xl bg-brand-500 px-6 py-3 text-base font-medium text-white shadow-soft-xl ring-1 ring-brand-400/30 transition hover:bg-brand-600"
                    >
                        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full before:content-['']" />
                        <span className="relative">Start a project</span>
                    </Link>
                    <Link
                        href="#services"
                        className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-base font-medium text-white/90 backdrop-blur transition hover:bg-white/10"
                    >
                        See services <span className="ml-2 inline-block align-middle"><ArrowRight className="h-4 w-4" /></span>
                    </Link>
                </motion.div>

                {/* Mini features */}
                <motion.div variants={item} className="mt-14 grid w-full grid-cols-1 gap-4 sm:grid-cols-3">
                    {[
                        { title: 'Elegant websites', desc: 'Next.js + SEO + performance' },
                        { title: 'Portals & CRMs', desc: 'Custom systems with authentication' },
                        { title: 'Automation', desc: 'Integrations, workflows, dashboards' },
                    ].map((c, i) => (
                        <motion.div key={i} whileHover={{ y: -2 }} className="card-glass p-5">
                            <h3 className="text-lg font-semibold">{c.title}</h3>
                            <p className="mt-1 text-sm text-neutral-300">{c.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </section>
    )
}