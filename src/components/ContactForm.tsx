'use client'

import { useState } from 'react'
import { Loader2, CheckCircle2, AlertTriangle } from 'lucide-react'
import { type Locale } from '@/i18n/config'

const COPY: Record<
  Locale,
  {
    services: string[]
    labels: {
      name: string
      email: string
      phone: string
      company: string
      service: string
      message: string
      chooseService: string
      sending: string
      send: string
      emailUs: string
      success: string
      errorFallback: string
      placeholderName: string
      placeholderEmail: string
      placeholderPhone: string
      placeholderCompany: string
      placeholderMessage: string
    }
  }
> = {
  en: {
    services: ['Web Development', 'Custom Software', 'Audio Systems', 'Networking & Wi-Fi', 'IT Consulting', 'Repairs & Installations', 'Other'],
    labels: {
      name: 'Name *',
      email: 'Email *',
      phone: 'Phone',
      company: 'Company',
      service: 'Service',
      message: 'Message *',
      chooseService: 'Choose a service',
      sending: 'Sending...',
      send: 'Send message',
      emailUs: 'or email us at',
      success: 'Thanks! We received your request.',
      errorFallback: 'Something went wrong.',
      placeholderName: 'Jane Doe',
      placeholderEmail: 'jane@company.com',
      placeholderPhone: '+1 609 713 7333',
      placeholderCompany: 'Acme Inc.',
      placeholderMessage: 'Tell us briefly about your project or issue...',
    },
  },
  es: {
    services: ['Desarrollo Web', 'Software a Medida', 'Sistemas de Audio', 'Redes y Wi-Fi', 'Consultoría IT', 'Reparaciones e Instalaciones', 'Otro'],
    labels: {
      name: 'Nombre *',
      email: 'Correo *',
      phone: 'Teléfono',
      company: 'Empresa',
      service: 'Servicio',
      message: 'Mensaje *',
      chooseService: 'Selecciona un servicio',
      sending: 'Enviando...',
      send: 'Enviar mensaje',
      emailUs: 'o escríbenos a',
      success: 'Gracias. Recibimos tu solicitud.',
      errorFallback: 'Ocurrió un error.',
      placeholderName: 'Juan Perez',
      placeholderEmail: 'juan@empresa.com',
      placeholderPhone: '+1 609 713 7333',
      placeholderCompany: 'Empresa XYZ',
      placeholderMessage: 'Cuéntanos brevemente sobre tu proyecto o necesidad...',
    },
  },
}

type State = 'idle' | 'sending' | 'success' | 'error'

export default function ContactForm({ locale = 'en' }: { locale?: Locale }) {
    const [state, setState] = useState<State>('idle')
    const [error, setError] = useState<string | null>(null)
    const copy = COPY[locale]

    async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setError(null)
        setState('sending')

        const form = e.currentTarget
        const data = Object.fromEntries(new FormData(form).entries())

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(data),
                cache: 'no-store',
            })
            const json = await res.json().catch(() => ({}))
            if (!res.ok || !json?.ok) {
                throw new Error(json?.error || `Request failed (${res.status})`)
            }
            setState('success')
            form.reset()
        } catch (err: any) {
            setError(err?.message || copy.labels.errorFallback)
            setState('error')
        }
    }

    return (
        <form onSubmit={onSubmit} className="card-premium p-6">
            {/* Honeypot anti-spam */}
            <input type="text" name="honeypot" className="hidden" tabIndex={-1} autoComplete="off" />

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                    <label htmlFor="name" className="text-sm text-neutral-300">{copy.labels.name}</label>
                    <input
                        id="name" name="name" required
                        className="mt-1 w-full rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-white placeholder-neutral-400 outline-none focus:ring-2 focus:ring-brand-500/40"
                        placeholder={copy.labels.placeholderName}
                    />
                </div>

                <div>
                    <label htmlFor="email" className="text-sm text-neutral-300">{copy.labels.email}</label>
                    <input
                        id="email" name="email" type="email" required
                        className="mt-1 w-full rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-white placeholder-neutral-400 outline-none focus:ring-2 focus:ring-brand-500/40"
                        placeholder={copy.labels.placeholderEmail}
                    />
                </div>

                <div>
                    <label htmlFor="phone" className="text-sm text-neutral-300">{copy.labels.phone}</label>
                    <input
                        id="phone" name="phone"
                        className="mt-1 w-full rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-white placeholder-neutral-400 outline-none focus:ring-2 focus:ring-brand-500/40"
                        placeholder={copy.labels.placeholderPhone}
                    />
                </div>

                <div>
                    <label htmlFor="company" className="text-sm text-neutral-300">{copy.labels.company}</label>
                    <input
                        id="company" name="company"
                        className="mt-1 w-full rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-white placeholder-neutral-400 outline-none focus:ring-2 focus:ring-brand-500/40"
                        placeholder={copy.labels.placeholderCompany}
                    />
                </div>

                <div className="sm:col-span-2">
                    <label htmlFor="service" className="text-sm text-neutral-300">{copy.labels.service}</label>
                    <select
                        id="service" name="service" defaultValue=""
                        className="mt-1 w-full rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-white outline-none focus:ring-2 focus:ring-brand-500/40"
                    >
                        <option value="" disabled>{copy.labels.chooseService}</option>
                        {copy.services.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                </div>

                <div className="sm:col-span-2">
                    <label htmlFor="message" className="text-sm text-neutral-300">{copy.labels.message}</label>
                    <textarea
                        id="message" name="message" required rows={5}
                        className="mt-1 w-full rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-white placeholder-neutral-400 outline-none focus:ring-2 focus:ring-brand-500/40"
                        placeholder={copy.labels.placeholderMessage}
                    />
                </div>
            </div>

            <div className="mt-5 flex items-center gap-3">
                <button
                    type="submit"
                    disabled={state === 'sending'}
                    className="inline-flex items-center gap-2 rounded-2xl bg-brand-500 px-5 py-2.5 font-semibold text-white ring-1 ring-brand-400/40 transition hover:bg-brand-600 disabled:cursor-not-allowed disabled:opacity-70"
                >
                    {state === 'sending' ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
                    {state === 'sending' ? copy.labels.sending : copy.labels.send}
                </button>

                <p className="text-sm text-neutral-400">
                    {copy.labels.emailUs} <a href="mailto:info@bytenetworks.net" className="underline underline-offset-4">info@bytenetworks.net</a>
                </p>
            </div>

            <div className="mt-4 min-h-[28px]" aria-live="polite" aria-atomic="true">
                {state === 'success' && (
                    <p className="inline-flex items-center gap-2 text-emerald-300">
                        <CheckCircle2 className="h-4 w-4" /> {copy.labels.success}
                    </p>
                )}
                {state === 'error' && (
                    <p className="inline-flex items-center gap-2 text-amber-300">
                        <AlertTriangle className="h-4 w-4" /> {error ?? copy.labels.errorFallback}
                    </p>
                )}
            </div>
        </form>
    )
}
