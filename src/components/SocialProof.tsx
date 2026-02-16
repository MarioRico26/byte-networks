'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Quote } from 'lucide-react'
import { getCtas, CTA_STYLES } from '@/data/cta'
import { type Locale } from '@/i18n/config'

const LOGOS = [
  { name: 'Mission Cleaning', src: '/logos/clients/mission-cleaning.svg' },
  { name: 'Kline Brothers', src: '/logos/clients/kline-brothers.svg' },
  { name: 'Glimmerglass Pools', src: '/logos/clients/glimmerglass.svg' },
  { name: 'Byte Ledger', src: '/logos/clients/byte-ledger.svg' },
]

const TESTIMONIALS: Record<Locale, Array<{ project: string; quote: string; authors: string[] }>> = {
  en: [
    {
      project: 'Mission Cleaning Website',
      quote:
        'Byte Networks did an outstanding job on our website. The design is clean, modern, and fast, exactly what we needed to look professional from the first click. The process was clear, the timeline was met, and every revision was handled without hassle. Since launching, we have seen more inquiries coming through the contact form and fewer calls asking basic questions because the site explains our services clearly.',
      authors: ['Nick M. | Owner, Mission Cleaning'],
    },
    {
      project: 'Kline Task Manager',
      quote:
        'The Kline Task Manager system has been a game-changer for our office. We can now organize tasks, photos, and customer communication much faster and with far more structure. It gives us complete field tracking and reduces mistakes caused by missing information. Before, we wasted time chasing updates or searching for photos. Now, in minutes, we can see what was done, what is next, and who handled it. That has helped us respond to customers faster and close out jobs with far less back-and-forth.',
      authors: ['Ashley M. | Office Manager, Kline Brothers'],
    },
    {
      project: 'Glimmerglass Online Order System',
      quote:
        'Byte Networks automated nearly our entire operational workflow with a custom-built system. We went from scattered order tracking to a CRM-like platform that gives us real control: order status, history, files, and notifications all in one place. The impact was immediate, fewer internal messages to find the status, faster responses to dealers, and much clearer visibility end-to-end. Everything is now documented and easy to access, which has improved our organization and strengthened our dealer relationships.',
      authors: [
        'Mike G. | Project Manager, Glimmerglass Fiberglass Pools',
        'Jarrod L. | General Manager, Glimmerglass Fiberglass Pools',
      ],
    },
    {
      project: 'Byte Ledger at Ocean International Market',
      quote:
        'Byte Ledger is one of the best solutions I have seen in a long time. It is easy, intuitive, and fast. The minimalist design does not take away from functionality at all. Everything is exactly where it should be. It saves us time creating quotes and invoices, looks professional in front of customers, and gives us clearer control over payments and balances. Since using it, our process is more organized and follow-ups are straightforward.',
      authors: ['Malena A. | Owner, Ocean International Market'],
    },
  ],
  es: [
    {
      project: 'Sitio web de Mission Cleaning',
      quote:
        'Byte Networks hizo un trabajo excelente en nuestro sitio web. El diseño es limpio, moderno y rápido, exactamente lo que necesitábamos para vernos profesionales desde el primer clic. El proceso fue claro, se cumplió el cronograma y cada revisión se manejó sin complicaciones. Desde el lanzamiento, recibimos más consultas por el formulario y menos llamadas con dudas básicas porque el sitio explica nuestros servicios con claridad.',
      authors: ['Nick M. | Owner, Mission Cleaning'],
    },
    {
      project: 'Kline Task Manager',
      quote:
        'El sistema Kline Task Manager cambió por completo nuestra operación de oficina. Ahora organizamos tareas, fotos y comunicación con clientes mucho más rápido y con mayor estructura. Tenemos trazabilidad total en campo y menos errores por información faltante. Antes perdíamos tiempo persiguiendo actualizaciones o buscando fotos. Ahora, en minutos, vemos qué se hizo, qué sigue y quién lo atendió. Eso nos permite responder más rápido y cerrar trabajos con menos ida y vuelta.',
      authors: ['Ashley M. | Office Manager, Kline Brothers'],
    },
    {
      project: 'Sistema de pedidos online de Glimmerglass',
      quote:
        'Byte Networks automatizó casi todo nuestro flujo operativo con un sistema a medida. Pasamos de un seguimiento disperso a una plataforma tipo CRM con control real: estado de pedidos, historial, archivos y notificaciones en un solo lugar. El impacto fue inmediato: menos mensajes internos para buscar estados, respuestas más rápidas a distribuidores y visibilidad de punta a punta. Todo queda documentado y accesible, lo que mejoró nuestra organización y fortaleció la relación con distribuidores.',
      authors: [
        'Mike G. | Project Manager, Glimmerglass Fiberglass Pools',
        'Jarrod L. | General Manager, Glimmerglass Fiberglass Pools',
      ],
    },
    {
      project: 'Byte Ledger en Ocean International Market',
      quote:
        'Byte Ledger es una de las mejores soluciones que he visto en mucho tiempo. Es fácil, intuitiva y rápida. El diseño minimalista no sacrifica funcionalidad en absoluto. Todo está exactamente donde debe estar. Nos ahorra tiempo al crear cotizaciones y facturas, se ve profesional ante clientes y nos da más control sobre pagos y balances. Desde que lo usamos, nuestro proceso está más organizado y los seguimientos son más simples.',
      authors: ['Malena A. | Owner, Ocean International Market'],
    },
  ],
}

const COPY: Record<Locale, { badge: string; title: string; body: string }> = {
  en: {
    badge: 'Social Proof',
    title: 'Trusted for clean execution and modern delivery',
    body: 'Product development, websites, and on-site installations delivered with the same quality standard.',
  },
  es: {
    badge: 'Prueba Social',
    title: 'Confianza construida con ejecución limpia y entrega moderna',
    body: 'Desarrollo de producto, sitios web e instalaciones en sitio bajo un mismo estándar de calidad.',
  },
}

export default function SocialProof({ locale = 'en' }: { locale?: Locale }) {
  const ctas = getCtas(locale)
  const copy = COPY[locale]
  const testimonials = TESTIMONIALS[locale]

  return (
    <section className="section-shell overflow-hidden bg-[#070f1e]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-72 bg-gradient-to-b from-brand-500/12 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-16 -z-10 h-56 w-56 rounded-full bg-brand-500/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 bottom-10 -z-10 h-64 w-64 rounded-full bg-accent-500/8 blur-3xl"
      />

      <div className="container-page">
        <div className="text-center">
          <p className="section-kicker">{copy.badge}</p>
          <h2 className="section-title">{copy.title}</h2>
          <p className="section-body mx-auto">{copy.body}</p>
        </div>

        <div className="mt-11 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {LOGOS.map((logo) => (
            <div
              key={logo.name}
              className="grid h-28 place-items-center rounded-3xl border border-white/12 bg-[#101a33] px-5 shadow-[0_16px_30px_-24px_rgba(8,12,24,0.85)]"
              aria-label={logo.name}
            >
              <Image src={logo.src} alt={`${logo.name} logo`} width={240} height={72} className="h-auto w-full max-w-[220px]" />
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {testimonials.map((item) => (
            <article
              key={item.project}
              className="rounded-3xl border border-white/12 bg-[#0f1933] p-7 shadow-[0_18px_40px_-30px_rgba(8,12,24,0.95)] md:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-brand-200">{item.project}</h3>
                <Quote className="h-5 w-5 text-accent-400/90" />
              </div>
              <p className="mt-5 text-[15px] leading-8 text-slate-100/95">&ldquo;{item.quote}&rdquo;</p>
              <div className="mt-6 space-y-1.5">
                {item.authors.map((author) => (
                  <p key={author} className="text-[11px] uppercase tracking-[0.12em] text-slate-300">
                    {author}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href={ctas.primary.href} className={CTA_STYLES.primary}>
            {ctas.primary.label}
          </Link>
          <Link
            href={ctas.secondary.href}
            className={CTA_STYLES.secondary}
          >
            {ctas.secondary.label}
          </Link>
        </div>
      </div>
    </section>
  )
}
