'use client'

import { motion } from 'framer-motion'
import { ShieldCheck, ServerCog, Repeat2, TrendingUp } from 'lucide-react'

const bullets = [
    {
        icon: TrendingUp,
        title: 'Business continuity & digital transformation',
        desc: 'Roadmaps that prioritize outcomes with staged delivery to minimize risk and maximize ROI.',
    },
    {
        icon: ServerCog,
        title: 'Expert IT architecture & infrastructure planning',
        desc: 'Cloud, on-prem and hybrid designs with secure networks and robust integrations.',
    },
    {
        icon: ShieldCheck,
        title: 'Consulting focused on security & scalability',
        desc: 'Security by design, governance and best practices baked into every engagement.',
    },
]

const principles = ['Clarity over hype', 'Reliability first', 'Security by design', 'Performance & UX', 'Documented & maintainable']

export default function AboutSection() {
    return (
        <section id="about" className="relative isolate overflow-hidden py-24 scroll-mt-28">
            <div aria-hidden className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-gradient-to-br from-brand-500/25 via-fuchsia-500/15 to-cyan-400/15 blur-3xl" />
            <div className="container-page grid grid-cols-1 gap-10 lg:grid-cols-5">
                <div className="lg:col-span-3">
                    <h2 className="text-3xl font-semibold">About Us</h2>
                    <p className="mt-4 max-w-3xl text-lg text-neutral-300">
                        We provide smart, scalable, and elegant IT services that empower organizations to grow with confidence.
                        Our team blends deep technology expertise with a human-centric approach to deliver high-impact solutions.
                    </p>

                    <div className="mt-8 space-y-6">
                        {bullets.map(({ icon: Icon, title, desc }) => (
                            <motion.div key={title} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }} className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                <span className="grid h-12 w-12 flex-none place-items-center rounded-xl border border-white/10 bg-white/10">
                  <Icon className="h-6 w-6 text-brand-400" />
                </span>
                                <div>
                                    <h3 className="text-base font-semibold">{title}</h3>
                                    <p className="mt-1 text-sm text-neutral-300">{desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="lg:col-span-2">
                    <div className="card-glass p-6">
                        <h3 className="text-base font-semibold">Our Principles</h3>
                        <p className="mt-2 text-sm text-neutral-300">How we make work that lasts:</p>
                        <div className="mt-4 flex flex-wrap gap-2">
                            {principles.map((p) => (
                                <span key={p} className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-neutral-200">{p}</span>
                            ))}
                        </div>

                        <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4">
                            <div className="text-sm text-neutral-300">Engagement lifecycle</div>
                            <div className="mt-3 grid grid-cols-4 gap-2 text-center text-xs">
                                {['Discover', 'Design', 'Deliver', 'Evolve'].map((step) => (
                                    <div key={step} className="rounded-lg border border-white/10 bg-white/10 px-3 py-2">
                                        <Repeat2 className="mx-auto mb-1 h-4 w-4 text-brand-400" />
                                        {step}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-4 text-xs text-neutral-400">
                            Transparent collaboration, documentation, and knowledge transfer included in every project.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}