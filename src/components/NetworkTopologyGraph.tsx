'use client'

import { motion } from 'framer-motion'

type NodeSpec = { id: string; label: string; x: number; y: number }

const NODES: NodeSpec[] = [
    { id: 'core',     label: 'Core',         x: 0,    y: 0 },
    { id: 'internet', label: 'Internet',     x: 0,    y: -130 },
    { id: 'firewall', label: 'Firewall',     x: -120, y: -20 },
    { id: 'switch',   label: 'Core Switch',  x: 120,  y: -20 },
    { id: 'aps',      label: 'AP Cluster',   x: 160,  y:  80 },
    { id: 'servers',  label: 'Servers',      x: -100, y:  90 },
    { id: 'voip',     label: 'VoIP / IP-PBX',x: 0,    y:  130 },
    { id: 'vlanG',    label: 'Guest VLAN',   x: -170, y:  40 },
    { id: 'vlanM',    label: 'Mgmt VLAN',    x:  170, y:  40 },
]

// Pairs to connect (source -> target)
const LINKS: Array<[string, string]> = [
    ['internet', 'firewall'],
    ['firewall', 'core'],
    ['core', 'switch'],
    ['switch', 'aps'],
    ['core', 'servers'],
    ['core', 'voip'],
    ['core', 'vlanG'],
    ['core', 'vlanM'],
]

// SVG space (centered coordinates → translate to this box)
const VIEW_W = 520
const VIEW_H = 380
const CX = VIEW_W / 2
const CY = VIEW_H / 2

function findNode(id: string) {
    const n = NODES.find(n => n.id === id)
    if (!n) throw new Error(`Node ${id} not found`)
    return n
}

export default function NetworkTopologyGraph() {
    return (
        <div className="relative h-[380px] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
            {/* Subtle grid dots */}
            <svg className="absolute inset-0 -z-10 h-full w-full opacity-[0.15]" aria-hidden>
                <defs>
                    <pattern id="dots" width="24" height="24" patternUnits="userSpaceOnUse">
                        <circle cx="1" cy="1" r="1" fill="url(#grad)" />
                    </pattern>
                    <linearGradient id="grad" x1="0" x2="1">
                        <stop offset="0%" stopColor="#22D3EE" />
                        <stop offset="100%" stopColor="#8B5CF6" />
                    </linearGradient>
                </defs>
                <rect width="100%" height="100%" fill="url(#dots)" />
            </svg>

            {/* Links (animated) */}
            <motion.svg
                className="absolute inset-0"
                viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
                preserveAspectRatio="xMidYMid meet"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                <defs>
                    <linearGradient id="linkGrad" x1="0" x2="1">
                        <stop offset="0%" stopColor="#22D3EE" />
                        <stop offset="100%" stopColor="#8B5CF6" />
                    </linearGradient>
                </defs>

                {LINKS.map(([from, to], i) => {
                    const a = findNode(from)
                    const b = findNode(to)
                    // translate to SVG coords
                    const ax = CX + a.x, ay = CY + a.y
                    const bx = CX + b.x, by = CY + b.y
                    // curve control (slight lift)
                    const cx1 = (ax + bx) / 2
                    const cy1 = (ay + by) / 2 - 18
                    const d = `M ${ax} ${ay} Q ${cx1} ${cy1} ${bx} ${by}`

                    return (
                        <g key={`${from}-${to}`}>
                            {/* base glow */}
                            <path d={d} stroke="url(#linkGrad)" strokeOpacity="0.25" strokeWidth="3" fill="none" />
                            {/* animated packets (dash offset) */}
                            <motion.path
                                d={d}
                                stroke="url(#linkGrad)"
                                strokeWidth="2"
                                strokeDasharray="6 12"
                                strokeLinecap="round"
                                fill="none"
                                initial={{ strokeDashoffset: 0, opacity: 0.9 }}
                                animate={{ strokeDashoffset: -18 }}
                                transition={{ repeat: Infinity, duration: 1.8 + i * 0.1, ease: 'linear' }}
                            />
                        </g>
                    )
                })}
            </motion.svg>

            {/* Nodes (absolute labels) */}
            {NODES.map((n, i) => (
                <motion.div
                    key={n.id}
                    initial={{ opacity: 0, y: 6 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: i * 0.03 }}
                    className="absolute z-10"
                    style={{
                        left: `calc(50% + ${n.x}px)`,
                        top: `calc(50% + ${n.y}px)`,
                        transform: 'translate(-50%, -50%)'
                    }}
                >
                    <div className={`rounded-xl px-3 py-1.5 text-xs backdrop-blur ${
                        n.id === 'core'
                            ? 'border border-white/15 bg-white/10 font-semibold'
                            : 'border border-white/10 bg-white/5 text-neutral-200'
                    }`}>
                        {n.label}
                    </div>
                </motion.div>
            ))}
        </div>
    )
}