'use client'

import { motion } from 'framer-motion'

/**
 * Animated consulting diagram (fixed):
 * - Proper gradient stops (stopOpacity)
 * - SVG rotation uses transformOrigin: '160px 160px'
 */
export default function ConsultingDiagram() {
    const nodes = [
        { label: 'People',   r: 84,  color: '#22D3EE', dur: 26 },
        { label: 'Process',  r: 96,  color: '#8B5CF6', dur: 28 },
        { label: 'Tech',     r: 72,  color: '#22D3EE', dur: 30 },
        { label: 'Risk',     r: 108, color: '#8B5CF6', dur: 32 },
        { label: 'Finance',  r: 60,  color: '#22D3EE', dur: 34 },
    ]

    return (
        <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6">
            <svg viewBox="0 0 320 320" className="mx-auto block h-72 w-72">
                <defs>
                    {/* Fixed: use stopOpacity instead of rgba() */}
                    <radialGradient id="c-grad" cx="50%" cy="50%">
                        <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.70" />
                        <stop offset="100%" stopColor="#22D3EE" stopOpacity="0.20" />
                    </radialGradient>
                    <linearGradient id="ring" x1="0" x2="1">
                        <stop offset="0%" stopColor="#22D3EE" />
                        <stop offset="100%" stopColor="#8B5CF6" />
                    </linearGradient>
                </defs>

                {/* center glow */}
                <circle cx="160" cy="160" r="38" fill="url(#c-grad)" />

                {/* rings */}
                {[40, 70, 100, 130].map((r) => (
                    <circle
                        key={r}
                        cx="160"
                        cy="160"
                        r={r}
                        stroke="url(#ring)"
                        strokeOpacity="0.25"
                        strokeWidth="1.5"
                        fill="none"
                    />
                ))}

                {/* orbiting nodes */}
                {nodes.map((n, i) => (
                    <motion.g
                        key={n.label}
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: n.dur, ease: 'linear' }}
                        style={{ transformOrigin: '160px 160px' }} // crucial for SVG
                    >
                        <g transform="translate(160,160)">
                            <circle cx={n.r} cy="0" r="7" fill={n.color} />
                            <text
                                x={n.r + 12}
                                y="4"
                                fontSize="10"
                                fill="#fff"
                                opacity="0.9"
                                style={{ fontFamily: 'Inter, ui-sans-serif, system-ui' }}
                            >
                                {n.label}
                            </text>
                        </g>
                    </motion.g>
                ))}

                {/* center label */}
                <text
                    x="160"
                    y="160"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize="12"
                    fill="#fff"
                    opacity="0.9"
                    style={{ fontFamily: 'Inter, ui-sans-serif, system-ui' }}
                >
                    Strategy
                </text>
            </svg>

            <p className="mt-2 text-center text-xs text-neutral-400">
                People • Process • Technology • Risk • Finance in balance.
            </p>
        </div>
    )
}