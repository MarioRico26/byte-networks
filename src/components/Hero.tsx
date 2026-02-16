'use client'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import TextRotatorLux from './TextRotatorLux'
import { getCtas, CTA_STYLES } from '@/data/cta'
import { type Locale } from '@/i18n/config'

const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}
const item = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const COPY: Record<
  Locale,
  {
    badge: string
    headlinePrefix: string
    headlineSuffix: string
    words: string[]
    inspo: string[]
    features: Array<{ title: string; desc: string }>
  }
> = {
  en: {
    badge: 'Technology Partner',
    headlinePrefix: 'We build',
    headlineSuffix: 'that drive your business forward',
    words: ['websites', 'custom software', 'client portals', 'internal tools', 'automation workflows', 'analytics dashboards'],
    inspo: [
      'Innovation with purpose.',
      'Speed, security, and scalability.',
      'Design that converts.',
      'Architecture for long-term growth.',
      'Small changes, big impact.',
      'Ship fast. Learn faster.',
    ],
    features: [
      { title: 'Elegant websites', desc: 'Next.js + SEO + performance' },
      { title: 'Portals & CRMs', desc: 'Custom systems with authentication' },
      { title: 'Automation', desc: 'Integrations, workflows, dashboards' },
    ],
  },
  es: {
    badge: 'Aliado Tecnologico',
    headlinePrefix: 'Construimos',
    headlineSuffix: 'que impulsan tu negocio',
    words: ['sitios web', 'software a medida', 'portales para clientes', 'herramientas internas', 'flujos de automatización', 'dashboards analíticos'],
    inspo: [
      'Innovación con propósito.',
      'Velocidad, seguridad y escalabilidad.',
      'Diseño que convierte.',
      'Arquitectura para crecimiento sostenible.',
      'Pequeños cambios, gran impacto.',
      'Entregamos rápido. Mejoramos más rápido.',
    ],
    features: [
      { title: 'Sitios web elegantes', desc: 'Next.js + SEO + rendimiento' },
      { title: 'Portales y CRMs', desc: 'Sistemas a medida con autenticación' },
      { title: 'Automatización', desc: 'Integraciones, flujos y tableros' },
    ],
  },
}

export default function Hero({ locale = 'en' }: { locale?: Locale }) {
    const ctas = getCtas(locale)
    const copy = COPY[locale]
    const headlineWords = copy.words.map((word, idx) => (
      <span key={`w-${idx}`} className="bg-gradient-to-r from-brand-400 to-cyan-300 bg-clip-text text-transparent">
        {word}
      </span>
    ))

    return (
        <section className="relative isolate overflow-hidden">
            <div className="pointer-events-none absolute inset-0 -z-30 bg-animate" />
            <motion.div
                aria-hidden
                className="absolute -top-20 right-10 -z-20 h-72 w-72 rounded-full bg-gradient-to-br from-brand-500/32 via-brand-400/18 to-cyan-400/12 blur-3xl"
                animate={{ x: [0, 14, -10, 0], y: [0, 10, -12, 0] }}
                transition={{ repeat: Infinity, duration: 18, ease: 'linear' }}
            />
            <motion.div
                aria-hidden
                className="absolute -bottom-16 left-8 -z-20 h-80 w-80 rounded-full bg-gradient-to-tr from-cyan-400/16 via-brand-500/16 to-brand-400/10 blur-3xl"
                animate={{ x: [0, -10, 8, 0], y: [0, -12, 6, 0] }}
                transition={{ repeat: Infinity, duration: 22, ease: 'linear' }}
            />

            <motion.div variants={container} initial="hidden" animate="show" className="container-page flex min-h-[84vh] flex-col items-center justify-center text-center">
                <motion.div variants={item} className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-300/35 bg-brand-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-brand-100">
                    {copy.badge}
                </motion.div>

                <motion.h1 variants={item} className="max-w-6xl font-display text-5xl font-semibold leading-[1.08] tracking-tight md:text-6xl lg:text-7xl">
                    {copy.headlinePrefix}{' '}
                    <TextRotatorLux
                        items={headlineWords}
                        intervalMs={5600}   // más relajado
                        durationMs={1400}   // transición sedosa
                        glint
                    />
                    {' '}{copy.headlineSuffix}
                </motion.h1>

                <motion.p variants={item} className="mt-7 max-w-3xl text-lg leading-8 text-slate-200">
                    <TextRotatorLux items={copy.inspo} intervalMs={6200} durationMs={1400} />
                </motion.p>

                <motion.div variants={item} className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:gap-3">
                    <Link
                        href={ctas.primary.href}
                        className={CTA_STYLES.primary}
                    >
                        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full before:content-['']" />
                        <span className="relative">{ctas.primary.label}</span>
                    </Link>
                    <Link
                        href={ctas.secondary.href}
                        className={CTA_STYLES.secondary}
                    >
                        {ctas.secondary.label} <span className="ml-2 inline-block align-middle"><ArrowRight className="h-4 w-4" /></span>
                    </Link>
                </motion.div>

                <motion.div variants={item} className="mt-14 grid w-full max-w-6xl grid-cols-1 gap-4 sm:grid-cols-3">
                    {copy.features.map((c, i) => (
                        <motion.div
                          key={i}
                          whileHover={{ y: -3 }}
                          className="rounded-2xl border border-white/12 bg-[#0d1730]/85 p-5 text-left shadow-[0_16px_28px_-24px_rgba(0,0,0,0.8)]"
                        >
                            <h3 className="text-lg font-semibold text-white">{c.title}</h3>
                            <p className="mt-1 text-sm text-slate-300">{c.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </section>
    )
}
