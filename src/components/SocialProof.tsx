'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Quote } from 'lucide-react'
import { PRIMARY_CTA, SECONDARY_CTA, CTA_STYLES } from '@/data/cta'

const LOGOS = [
  { name: 'Mission Cleaning', src: '/logos/clients/mission-cleaning.svg' },
  { name: 'Kline Brothers', src: '/logos/clients/kline-brothers.svg' },
  { name: 'Glimmerglass Pools', src: '/logos/clients/glimmerglass.svg' },
  { name: 'Byte Ledger', src: '/logos/clients/byte-ledger.svg' },
]

const TESTIMONIALS = [
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
]

export default function SocialProof() {
  return (
    <section className="relative isolate overflow-hidden bg-[#070f1e] py-24 md:py-28">
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
          <p className="text-xs uppercase tracking-[0.3em] text-brand-300/75">Social Proof</p>
          <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
            Trusted for clean execution and modern delivery
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-slate-200">
            Product development, websites, and on-site installations delivered with the same quality standard.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {LOGOS.map((logo) => (
            <div
              key={logo.name}
              className="grid h-28 place-items-center rounded-3xl border border-white/10 bg-[#0f1a33] px-5 shadow-[0_14px_26px_-22px_rgba(8,12,24,0.85)]"
              aria-label={logo.name}
            >
              <Image src={logo.src} alt={`${logo.name} logo`} width={240} height={72} className="h-auto w-full max-w-[220px]" />
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {TESTIMONIALS.map((item) => (
            <article
              key={item.project}
              className="rounded-3xl border border-white/10 bg-[#0d1730] p-7 shadow-[0_18px_36px_-28px_rgba(8,12,24,0.9)] md:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-brand-200">{item.project}</h3>
                <Quote className="h-5 w-5 text-accent-400/90" />
              </div>
              <p className="mt-5 text-[15px] leading-8 text-slate-100">&ldquo;{item.quote}&rdquo;</p>
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
          <Link href={PRIMARY_CTA.href} className={CTA_STYLES.primary}>
            {PRIMARY_CTA.label}
          </Link>
          <Link
            href={SECONDARY_CTA.href}
            className={CTA_STYLES.secondary}
          >
            {SECONDARY_CTA.label}
          </Link>
        </div>
      </div>
    </section>
  )
}
