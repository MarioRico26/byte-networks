'use client'

import { motion } from 'framer-motion'
import { Search, PenTool, Hammer, ShieldCheck, Rocket } from 'lucide-react'

type Step = {
    title: string
    desc: string
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

const STEPS: Step[] = [
    {
        title: 'Discover',
        desc: 'Workshops, requirements and success metrics aligned with your goals.',
        icon: Search,
    },
    {
        title: 'Design',
        desc: 'Architecture, UX/UI and technical plan with timelines and risks.',
        icon: PenTool,
    },
    {
        title: 'Build',
        desc: 'Agile delivery with frequent demos and clear release notes.',
        icon: Hammer,
    },
    {
        title: 'Test',
        desc: 'Automated tests, security checks and performance validations.',
        icon: ShieldCheck,
    },
    {
        title: 'Launch',
        desc: 'Zero-downtime deploys, monitoring, docs and handover.',
        icon: Rocket,
    },
]

export default function ProcessTimeline({ steps = STEPS }: { steps?: Step[] }) {
    return (
        <section className="mt-16">
            <h2 className="text-xl font-semibold">Our Process</h2>

            <motion.ol
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                variants={{
                    hidden: { opacity: 0 },
                    show: { opacity: 1, transition: { staggerChildren: 0.08 } },
                }}
                className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-5"
            >
                {steps.map((s, i) => {
                    const Icon = s.icon
                    return (
                        <motion.li
                            key={s.title}
                            variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
                            className="relative rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md"
                        >
                            {/* Step number */}
                            <div className="absolute -top-3 left-5 rounded-full border border-white/10 bg-white/10 px-2 py-0.5 text-xs text-neutral-300">
                                {String(i + 1).padStart(2, '0')}
                            </div>

                            {/* Icon */}
                            <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl border border-white/10 bg-white/10">
                                <Icon className="h-6 w-6 text-brand-400" />
                            </div>

                            <h3 className="text-base font-semibold">{s.title}</h3>
                            <p className="mt-1 text-sm text-neutral-300">{s.desc}</p>
                        </motion.li>
                    )
                })}
            </motion.ol>
        </section>
    )
}