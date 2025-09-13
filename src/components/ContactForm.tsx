'use client'

import { useState } from 'react'
import { Loader2, CheckCircle2, AlertTriangle } from 'lucide-react'

const SERVICES = [
    'Web Development',
    'Custom Software',
    'Audio Systems',
    'Networking & Wi-Fi',
    'IT Consulting',
    'Repairs & Installations',
    'Other',
] as const

type State = 'idle' | 'sending' | 'success' | 'error'

export default function ContactForm() {
    const [state, setState] = useState<State>('idle')
    const [error, setError] = useState<string | null>(null)

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
            setError(err?.message || 'Something went wrong')
            setState('error')
        }
    }

    return (
        <form onSubmit={onSubmit} className="card-glass p-6">
            {/* Honeypot anti-spam */}
            <input type="text" name="honeypot" className="hidden" tabIndex={-1} autoComplete="off" />

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                    <label htmlFor="name" className="text-sm text-neutral-300">Name *</label>
                    <input
                        id="name" name="name" required
                        className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white placeholder-neutral-400 outline-none focus:ring-2 focus:ring-brand-500/40"
                        placeholder="Jane Doe"
                    />
                </div>

                <div>
                    <label htmlFor="email" className="text-sm text-neutral-300">Email *</label>
                    <input
                        id="email" name="email" type="email" required
                        className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white placeholder-neutral-400 outline-none focus:ring-2 focus:ring-brand-500/40"
                        placeholder="jane@company.com"
                    />
                </div>

                <div>
                    <label htmlFor="phone" className="text-sm text-neutral-300">Phone</label>
                    <input
                        id="phone" name="phone"
                        className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white placeholder-neutral-400 outline-none focus:ring-2 focus:ring-brand-500/40"
                        placeholder="+1 609 713 7333"
                    />
                </div>

                <div>
                    <label htmlFor="company" className="text-sm text-neutral-300">Company</label>
                    <input
                        id="company" name="company"
                        className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white placeholder-neutral-400 outline-none focus:ring-2 focus:ring-brand-500/40"
                        placeholder="Acme Inc."
                    />
                </div>

                <div className="sm:col-span-2">
                    <label htmlFor="service" className="text-sm text-neutral-300">Service</label>
                    <select
                        id="service" name="service" defaultValue=""
                        className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white outline-none focus:ring-2 focus:ring-brand-500/40"
                    >
                        <option value="" disabled>Choose a service</option>
                        {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                </div>

                <div className="sm:col-span-2">
                    <label htmlFor="message" className="text-sm text-neutral-300">Message *</label>
                    <textarea
                        id="message" name="message" required rows={5}
                        className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white placeholder-neutral-400 outline-none focus:ring-2 focus:ring-brand-500/40"
                        placeholder="Tell us briefly about your project or issue…"
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
                    {state === 'sending' ? 'Sending…' : 'Send message'}
                </button>

                <p className="text-sm text-neutral-400">
                    or email us at <a href="mailto:info@bytenetworks.net" className="underline underline-offset-4">info@bytenetworks.net</a>
                </p>
            </div>

            <div className="mt-4 min-h-[28px]" aria-live="polite" aria-atomic="true">
                {state === 'success' && (
                    <p className="inline-flex items-center gap-2 text-emerald-300">
                        <CheckCircle2 className="h-4 w-4" /> Thanks! We received your request.
                    </p>
                )}
                {state === 'error' && (
                    <p className="inline-flex items-center gap-2 text-amber-300">
                        <AlertTriangle className="h-4 w-4" /> {error ?? 'Something went wrong.'}
                    </p>
                )}
            </div>
        </form>
    )
}