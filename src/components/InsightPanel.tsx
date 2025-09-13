'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Timer, Cloud, Workflow } from 'lucide-react'

export default function InsightPanel() {
    return (
        <section className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-3">
            {/* KPIs */}
            <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
                className="card-glass p-5 lg:col-span-2"
            >
                <h3 className="text-base font-semibold">Engagement Insights</h3>
                <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-4">
                    <Kpi icon={TrendingUp} label="Avg. ROI" value="↑ 32%" hint="12-mo rolling" />
                    <Kpi icon={Timer} label="Time to value" value="6–10 wks" hint="median" />
                    <Kpi icon={Workflow} label="Processes automated" value="45+" hint="per client" />
                    <Kpi icon={Cloud} label="Cloud adoption" value="72%" hint="workloads" />
                </div>

                {/* Sparkline */}
                <div className="mt-6">
                    <div className="flex items-center justify-between">
                        <p className="text-sm text-neutral-300">ROI trend (last 12 months)</p>
                        <span className="text-xs text-brand-300">positive momentum</span>
                    </div>
                    <div className="mt-2 h-28 w-full rounded-xl border border-white/10 bg-white/5 p-2">
                        <svg viewBox="0 0 200 80" className="h-full w-full">
                            {/* gradient area under line */}
                            <defs>
                                <linearGradient id="roiFill" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="rgb(167 139 250)" stopOpacity="0.35" />
                                    <stop offset="100%" stopColor="rgb(167 139 250)" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                            {/* area (polyline + baseline) */}
                            <path
                                d="M0,60 L15,58 L30,56 L45,57 L60,52 L75,53 L90,46 L105,50 L120,42 L135,45 L150,38 L165,40 L180,34 L200,30 L200,80 L0,80 Z"
                                fill="url(#roiFill)"
                            />
                            {/* line */}
                            <polyline
                                points="0,60 15,58 30,56 45,57 60,52 75,53 90,46 105,50 120,42 135,45 150,38 165,40 180,34 200,30"
                                fill="none"
                                stroke="rgb(167 139 250)"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                            />
                            {/* grid line */}
                            <line x1="0" y1="60" x2="200" y2="60" stroke="white" strokeOpacity="0.08" />
                        </svg>
                    </div>
                </div>
            </motion.div>

            {/* Donut + legend */}
            <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.05 }}
                className="card-glass flex flex-col items-center justify-center p-5"
            >
                <h3 className="self-start text-base font-semibold">Value Breakdown</h3>
                <div className="mt-4 grid w-full grid-cols-2 items-center gap-3">
                    <div className="relative mx-auto h-36 w-36">
                        {/*
              Donut simple sin libs: circunferencia ~ 2πr = 163.36 (r=26)
              72% ROI => 117 / 163 dasharray
            */}
                        <svg viewBox="0 0 64 64" className="h-full w-full">
                            <circle
                                cx="32"
                                cy="32"
                                r="26"
                                stroke="white"
                                strokeOpacity="0.12"
                                strokeWidth="8"
                                fill="none"
                            />
                            <circle
                                cx="32"
                                cy="32"
                                r="26"
                                stroke="rgb(167 139 250)"
                                strokeWidth="8"
                                fill="none"
                                strokeDasharray="117 163"
                                strokeLinecap="round"
                                transform="rotate(-90 32 32)"
                            />
                        </svg>
                        <div className="pointer-events-none absolute inset-0 grid place-items-center">
                            <div className="text-center">
                                <div className="text-xl font-semibold">72%</div>
                                <div className="text-xs text-neutral-300">ROI share</div>
                            </div>
                        </div>
                    </div>

                    <ul className="space-y-2 text-sm">
                        <LegendDot color="rgb(167 139 250)" label="ROI (savings & growth)" value="72%" />
                        <LegendDot color="rgba(255,255,255,0.35)" label="Enablement & training" value="18%" />
                        <LegendDot color="rgba(255,255,255,0.18)" label="Other gains" value="10%" />
                    </ul>
                </div>
            </motion.div>
        </section>
    )
}

function Kpi({
                 icon: Icon,
                 label,
                 value,
                 hint,
             }: {
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
    label: string
    value: string
    hint?: string
}) {
    return (
        <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3">
      <span className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/10">
        <Icon className="h-5 w-5 text-brand-400" />
      </span>
            <div>
                <div className="text-sm text-neutral-300">{label}</div>
                <div className="text-base font-semibold leading-tight">{value}</div>
                {hint && <div className="text-[11px] text-neutral-400">{hint}</div>}
            </div>
        </div>
    )
}

function LegendDot({ color, label, value }: { color: string; label: string; value: string }) {
    return (
        <li className="flex items-center justify-between gap-3">
      <span className="inline-flex items-center gap-2">
        <span className="inline-block h-2.5 w-2.5 rounded-full" style={{ backgroundColor: color }} />
        <span className="text-neutral-300">{label}</span>
      </span>
            <span className="text-neutral-200">{value}</span>
        </li>
    )
}