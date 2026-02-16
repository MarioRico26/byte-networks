'use client'

import { motion } from 'framer-motion'
import { ShieldCheck, ServerCog, Repeat2, TrendingUp } from 'lucide-react'
import { type Locale } from '@/i18n/config'

const COPY: Record<
  Locale,
  {
    title: string
    body: string
    bullets: Array<{ icon: typeof TrendingUp; title: string; desc: string }>
    principlesTitle: string
    principlesBody: string
    principles: string[]
    lifecycle: string
    lifecycleSteps: string[]
    footnote: string
  }
> = {
  en: {
    title: 'About Us',
    body: 'We provide smart, scalable, and elegant IT services that empower organizations to grow with confidence. Our team blends deep technology expertise with a human-centric approach to deliver high-impact solutions.',
    bullets: [
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
    ],
    principlesTitle: 'Our Principles',
    principlesBody: 'How we make work that lasts:',
    principles: ['Clarity over hype', 'Reliability first', 'Security by design', 'Performance & UX', 'Documented & maintainable'],
    lifecycle: 'Engagement lifecycle',
    lifecycleSteps: ['Discover', 'Design', 'Deliver', 'Evolve'],
    footnote: 'Transparent collaboration, documentation, and knowledge transfer included in every project.',
  },
  es: {
    title: 'Sobre Nosotros',
    body: 'Entregamos servicios IT inteligentes, escalables y elegantes para que las organizaciones crezcan con confianza. Combinamos experiencia técnica profunda con un enfoque humano para crear soluciones de alto impacto.',
    bullets: [
      {
        icon: TrendingUp,
        title: 'Continuidad operativa y transformación digital',
        desc: 'Hojas de ruta orientadas a resultados, con entregas por etapas para reducir riesgo y maximizar ROI.',
      },
      {
        icon: ServerCog,
        title: 'Arquitectura IT e infraestructura experta',
        desc: 'Diseños cloud, on-prem e híbridos con redes seguras e integraciones robustas.',
      },
      {
        icon: ShieldCheck,
        title: 'Consultoría enfocada en seguridad y escalabilidad',
        desc: 'Seguridad por diseño, gobernanza y mejores prácticas en cada proyecto.',
      },
    ],
    principlesTitle: 'Nuestros Principios',
    principlesBody: 'Cómo construimos soluciones duraderas:',
    principles: ['Claridad antes que ruido', 'Confiabilidad primero', 'Seguridad por diseño', 'Rendimiento y UX', 'Documentado y mantenible'],
    lifecycle: 'Ciclo de trabajo',
    lifecycleSteps: ['Descubrir', 'Diseñar', 'Entregar', 'Evolucionar'],
    footnote: 'Colaboración transparente, documentación y transferencia de conocimiento en cada proyecto.',
  },
}

export default function AboutSection({ locale = 'en' }: { locale?: Locale }) {
    const copy = COPY[locale]
    return (
        <section id="about" className="section-shell scroll-mt-28 overflow-hidden">
            <div aria-hidden className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-gradient-to-br from-brand-500/25 via-fuchsia-500/15 to-cyan-400/15 blur-3xl" />
            <div className="container-page grid grid-cols-1 gap-10 lg:grid-cols-5">
                <div className="lg:col-span-3">
                    <div className="section-kicker">{locale === 'es' ? 'Compania' : 'Company'}</div>
                    <h2 className="section-title">{copy.title}</h2>
                    <p className="section-body max-w-3xl text-neutral-300">
                        {copy.body}
                    </p>

                    <div className="mt-8 space-y-6">
                        {copy.bullets.map(({ icon: Icon, title, desc }) => (
                            <motion.div key={title} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }} className="flex gap-4 rounded-2xl border border-white/12 bg-[#0f1933]/88 p-5 shadow-[0_16px_32px_-26px_rgba(0,0,0,0.84)]">
                <span className="grid h-12 w-12 flex-none place-items-center rounded-xl border border-white/10 bg-white/10">
                  <Icon className="h-6 w-6 text-brand-400" />
                </span>
                                <div>
                                    <h3 className="text-base font-semibold">{title}</h3>
                                    <p className="mt-1 text-sm text-slate-200">{desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="lg:col-span-2">
                    <div className="card-premium p-6">
                        <h3 className="text-base font-semibold">{copy.principlesTitle}</h3>
                        <p className="mt-2 text-sm text-slate-200">{copy.principlesBody}</p>
                        <div className="mt-4 flex flex-wrap gap-2">
                            {copy.principles.map((p) => (
                                <span key={p} className="rounded-full border border-white/15 bg-white/[0.04] px-3 py-1 text-xs text-slate-200">{p}</span>
                            ))}
                        </div>

                        <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.04] p-4">
                            <div className="text-sm text-slate-200">{copy.lifecycle}</div>
                            <div className="mt-3 grid grid-cols-4 gap-2 text-center text-xs">
                                {copy.lifecycleSteps.map((step) => (
                                    <div key={step} className="rounded-lg border border-white/10 bg-white/[0.06] px-3 py-2">
                                        <Repeat2 className="mx-auto mb-1 h-4 w-4 text-brand-400" />
                                        {step}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-4 text-xs text-slate-300">
                            {copy.footnote}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
