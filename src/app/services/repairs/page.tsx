// src/app/services/repairs/page.tsx
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import FloatingQuote from '../../../components/FloatingQuote'
import * as L from 'lucide-react'
import type { SVGProps, ComponentType } from 'react'

/* ========= icon loader seguro (evita crashes si falta un ícono) ========= */
type IconComp = ComponentType<SVGProps<SVGSVGElement>>
function getIcon(name: keyof typeof L | string): IconComp {
  const Icon = (L as Record<string, unknown>)[name as string]
  return (Icon ?? L.Circle) as IconComp
}

/* ========= Visual #1: Before / After (patch panel significativo) ========= */
function BeforeAfterRack() {
  const AlertCircle = getIcon('AlertCircle')
  const Check = getIcon('Check')

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {/* BEFORE */}
      <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
        <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-neutral-200">
          <span className="inline-flex h-2 w-2 rounded-full bg-amber-400" />
          Before
        </div>
        <svg viewBox="0 0 360 140" className="h-32 w-full">
          <defs>
            <linearGradient id="mess" x1="0" x2="1">
              <stop offset="0%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#EF4444" />
            </linearGradient>
            <linearGradient id="portsG" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="rgba(255,255,255,.35)" />
              <stop offset="100%" stopColor="rgba(255,255,255,.15)" />
            </linearGradient>
          </defs>

          {/* patch panel izquierdo (desordenado) */}
          <rect x="14" y="18" width="90" height="104" rx="8" fill="url(#portsG)" stroke="rgba(255,255,255,.15)" />
          {[0,1,2,3].map((r) => (
            <rect key={r} x="22" y={26+r*24} width="74" height="16" rx="4" fill="rgba(255,255,255,.12)" />
          ))}

          {/* cables cruzados */}
          {[0,1,2,3,4,5,6,7].map((i) => {
            const y = 34 + (i%4)*24 + (i%2 ? -6 : 6)
            const y2 = 34 + ((i+2)%4)*24 + (i%2 ? 8 : -8)
            return (
              <path
                key={i}
                d={`M98,${y} C 150,${y+40} 210,${y2-40} 330,${y2}`}
                stroke="url(#mess)"
                strokeWidth="2"
                opacity="0.75"
                fill="none"
              />
            )
          })}

          {/* alertas rojas */}
          {[0,1,2].map((i)=>(
            <circle key={i} cx={140 + i*48} cy={40 + (i%2)*36} r="3.5" fill="#EF4444" />
          ))}
        </svg>
        <div className="mt-2 flex items-center gap-2 text-xs text-neutral-400">
          <AlertCircle className="h-4 w-4 text-amber-300" />
          Tangled patch leads, ad-hoc power, unlabeled runs.
        </div>
      </div>

      {/* AFTER */}
      <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
        <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-neutral-200">
          <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          After
        </div>
        <svg viewBox="0 0 360 140" className="h-32 w-full">
          <defs>
            <linearGradient id="ok" x1="0" x2="1">
              <stop offset="0%" stopColor="#22D3EE" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
          </defs>

          {/* patch panel limpio */}
          <rect x="24" y="20" width="90" height="100" rx="8" fill="rgba(255,255,255,.08)" stroke="rgba(255,255,255,.15)"/>
          {[0,1,2,3].map((r) => (
            <rect key={r} x="30" y={28+r*22} width="78" height="16" rx="4" fill="rgba(255,255,255,.18)" />
          ))}

          {/* cables paralelos */}
          {[0,1,2,3].map((i)=>(
            <path key={i} d={`M118,${36+i*22} H320`} stroke="url(#ok)" strokeWidth="3" />
          ))}

          {/* LEDs */}
          {[0,1,2,3].map((i)=>(
            <circle key={i} cx="317" cy={36+i*22} r="3" fill="#22C55E" />
          ))}
        </svg>
        <div className="mt-2 flex items-center gap-2 text-xs text-neutral-400">
          <Check className="h-4 w-4 text-emerald-400" />
          Labeled, documented, power-managed — ready for growth.
        </div>
      </div>
    </div>
  )
}

/* ========= Visual #2: Diagnostics mejorado ========= */
function Gauge({ label, value, icon: Icon }: { label: string; value: number; icon: IconComp }) {
  const r = 30
  const c = 2 * Math.PI * r
  const offset = c - (value / 100) * c
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-3">
      <div className="flex items-center justify-between">
        <div className="text-xs text-neutral-400">{label}</div>
        <Icon className="h-4 w-4 text-brand-400" />
      </div>
      <div className="mt-2 grid grid-cols-[64px_1fr] items-center gap-3">
        <svg width="64" height="64" viewBox="0 0 80 80">
          <circle cx="40" cy="40" r={r} stroke="rgba(255,255,255,.15)" strokeWidth="8" fill="none" />
          <motion.circle
            cx="40" cy="40" r={r}
            stroke="url(#grad)"
            strokeWidth="8"
            strokeLinecap="round"
            fill="none"
            strokeDasharray={c}
            strokeDashoffset={offset}
            initial={{ strokeDashoffset: c }}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 0.8 }}
          />
          <defs>
            <linearGradient id="grad" x1="0" x2="1">
              <stop offset="0%" stopColor="#22D3EE"/>
              <stop offset="100%" stopColor="#8B5CF6"/>
            </linearGradient>
          </defs>
          <text x="40" y="44" textAnchor="middle" className="fill-white text-[12px] font-semibold">{value}%</text>
        </svg>

        {/* sparkline */}
        <svg viewBox="0 0 140 50" className="h-14 w-full">
          <defs>
            <linearGradient id="spark" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="rgba(139,92,246,.5)"/>
              <stop offset="100%" stopColor="rgba(34,211,238,.0)"/>
            </linearGradient>
          </defs>
          <path
            d="M0,32 L15,28 30,36 45,22 60,30 75,18 90,26 105,20 120,24 140,16"
            stroke="rgba(167,139,250,.9)" strokeWidth="2" fill="url(#spark)"
          />
        </svg>
      </div>
    </div>
  )
}

function DiagnosticsPro() {
  const Cpu = getIcon('Cpu')
  const Activity = getIcon('Activity')
  const HardDrive = getIcon('HardDrive')
  const Shield = getIcon('Shield')
  const Update = getIcon('Download')

  return (
    <div className="card-glass relative overflow-hidden p-5">
      <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand-500/20 blur-3xl" />
      <div className="mb-3 flex items-center justify-between">
        <div>
          <h4 className="text-sm font-semibold text-neutral-200">Diagnostics</h4>
          <p className="text-xs text-neutral-400">Live health snapshot</p>
        </div>
        <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[11px] text-neutral-300">
          <L.Check className="h-3.5 w-3.5 text-emerald-400" /> Ok
        </span>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        <Gauge label="CPU" value={34} icon={Cpu} />
        <Gauge label="RAM" value={62} icon={Activity} />
        <Gauge label="SSD" value={78} icon={HardDrive} />
      </div>

      <div className="mt-4 grid grid-cols-1 gap-3 text-xs text-neutral-300 sm:grid-cols-2">
        <div className="rounded-lg border border-white/10 bg-white/5 p-3">
          <div className="flex items-center justify-between text-neutral-400">
            <span>Malware scan</span>
            <Shield className="h-3.5 w-3.5 text-brand-400" />
          </div>
          <div className="mt-1 font-semibold">Clean</div>
        </div>
        <div className="rounded-lg border border-white/10 bg-white/5 p-3">
          <div className="flex items-center justify-between text-neutral-400">
            <span>Updates</span>
            <Update className="h-3.5 w-3.5 text-brand-400" />
          </div>
          <div className="mt-1 font-semibold">Up to date</div>
        </div>
      </div>
    </div>
  )
}

/* ========= Visual #3: CCTV Wall con “clip” simulado ========= */
function CctvWallMock() {
  const Dot = getIcon('Dot')
  const AlertTriangle = getIcon('AlertTriangle')
  const Play = getIcon('Play')

  const cams = [
    { name: 'Front Door', ts: '14:22', motion: true },
    { name: 'Warehouse', ts: '14:22', motion: false },
    { name: 'Parking', ts: '14:22', motion: true },
    { name: 'Back Alley', ts: '14:22', motion: false },
    { name: 'Lobby', ts: '14:22', motion: false },
    { name: 'Office', ts: '14:22', motion: false },
  ] as const

  return (
    <div className="card-glass relative overflow-hidden p-5">
      <div className="pointer-events-none absolute -left-20 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="mb-3 flex items-center justify-between">
        <div>
          <h4 className="text-sm font-semibold text-neutral-200">CCTV Wall</h4>
          <p className="text-xs text-neutral-400">6 streams • 1080p • retention: 30d</p>
        </div>
        <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[11px] text-neutral-300">
          <Dot className="h-3.5 w-3.5 text-red-400" /> Rec
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {cams.map((c, i) => (
          <motion.div
            key={c.name}
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.03 }}
            className="relative h-24 overflow-hidden rounded-lg border border-white/10 bg-neutral-950/40"
          >
            {/* “video” simulado */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,.08),transparent_60%),radial-gradient(circle_at_70%_80%,rgba(255,255,255,.06),transparent_55%)]" />
            <motion.div
              aria-hidden
              className="absolute inset-0 bg-[repeating-linear-gradient(transparent,transparent_3px,rgba(255,255,255,.03)_4px)]"
              animate={{ opacity: [0.25, 0.45, 0.25] }}
              transition={{ repeat: Infinity, duration: 2.8 }}
            />
            {/* sujeto en movimiento */}
            {c.motion && (
              <motion.div
                className="absolute bottom-3 left-0 h-3 w-9 rounded-full bg-amber-300/40 blur-[2px]"
                animate={{ x: ['-10%', '110%'] }}
                transition={{ repeat: Infinity, duration: 3.6 + i * 0.4, ease: 'linear' }}
              />
            )}

            {/* Overlay UI */}
            <button
              className="absolute left-2 top-2 inline-flex items-center gap-1 rounded bg-black/40 px-2 py-0.5 text-[10px] text-white/95"
              title="Play clip"
            >
              <Play className="h-3.5 w-3.5" /> {c.name}
            </button>
            <div className="absolute bottom-2 right-2 rounded bg-black/40 px-1.5 py-0.5 text-[10px] text-white/90">
              {c.ts}
            </div>
            {c.motion && (
              <div className="absolute right-2 top-2 inline-flex items-center gap-1 rounded bg-amber-500/20 px-1.5 py-0.5 text-[10px] text-amber-300">
                <AlertTriangle className="h-3.5 w-3.5" /> Motion
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

/* ========= Contenido (prioridad a Computers + CCTV) ========= */
const AREAS = [
  { id: 'pc-mac',     label: 'PC & Mac',      title: 'PC & Mac Repairs',            desc: 'Hardware & software troubleshooting, component replacement, OS restore, malware cleanup, and performance tuning.', icon: 'Laptop' },
  { id: 'cctv',       label: 'CCTV',          title: 'CCTV & Cameras',              desc: 'Professional camera installs, clean wiring, NVR setup, secure remote access, motion alerts, and retention planning.', icon: 'Camera' },
  { id: 'security',   label: 'Security',      title: 'Security Setup',              desc: 'Endpoint protection, firewalls, access controls, backups and recovery — practical security for peace of mind.', icon: 'ShieldCheck' },
  { id: 'install',    label: 'Install',       title: 'Device Installations',        desc: 'Smart TVs, printers, NAS and cloud storage, tablets and peripherals — configured and ready to use.', icon: 'Plug' },
  { id: 'recovery',   label: 'Data',          title: 'Data Recovery & Backups',     desc: 'Drive diagnostics, safe recovery attempts, backup strategies and offsite retention tailored to your needs.', icon: 'HardDrive' },
  { id: 'diagnostics',label: 'Tune-ups',      title: 'Diagnostics & Tune-ups',      desc: 'Health checks, OS updates, cleanup, thermal refresh and preventative maintenance to keep systems fast.', icon: 'Gauge' },
] as const

export default function RepairsInstallationsPage() {
  const ArrowRight = getIcon('ArrowRight')

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

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-4"
          >
            <h1 className="max-w-5xl font-display text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              Repairs & Installations <span className="text-brand-400">focused on Computers & CCTV</span>
            </h1>
            <p className="mt-4 max-w-3xl text-lg text-neutral-300">
              On-site fixes, clean installs, and tidy wiring — with an emphasis on reliable workstations and secure surveillance.
            </p>
          </motion.div>

          {/* Quick jump chips */}
          <div className="mt-6 flex flex-wrap gap-2">
            {AREAS.map(a => (
              <a
                key={a.id}
                href={`#${a.id}`}
                className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-neutral-200 hover:bg-white/10"
              >
                {a.label}
              </a>
            ))}
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </section>

      {/* BEFORE / AFTER mejorado */}
      <section className="container-page py-8">
        <BeforeAfterRack />
      </section>

      {/* Visual Showcase (PC diagnostics + CCTV wall) */}
      <section className="container-page py-6">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <DiagnosticsPro />
          <CctvWallMock />
        </div>
      </section>

      {/* Service areas */}
      <section className="container-page py-10">
        <h2 className="text-2xl font-semibold">Service areas</h2>
        <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {AREAS.map((a, i) => {
            const Icon = getIcon(a.icon)
            return (
              <motion.article
                id={a.id}
                key={a.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.45, delay: i * 0.04 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
              >
                <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand-500/20 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
                <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl border border-white/10 bg-white/10">
                  <Icon className="h-6 w-6 text-brand-400" />
                </div>
                <div className="text-xs uppercase tracking-wide text-neutral-400">{a.label}</div>
                <h3 className="mt-1 text-base font-semibold">{a.title}</h3>
                <p className="mt-2 text-sm text-neutral-300">{a.desc}</p>

                <Link
                  href="/#contact"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-300 hover:text-brand-200"
                >
                  Book a visit <L.ArrowRight className="h-4 w-4" />
                </Link>
              </motion.article>
            )
          })}
        </div>
      </section>

      {/* CTA final */}
      <section className="container-page pb-28 pt-4">
        <div className="card-glass flex flex-col items-start gap-4 p-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-lg font-semibold">Need a clean install or a quick fix?</h3>
            <p className="mt-1 text-sm text-neutral-300">
              Book a site visit and we’ll give you a clear, no-surprises plan.
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

      {/* Floating CTA */}
      <FloatingQuote />
    </main>
  )
}