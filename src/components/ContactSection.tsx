import { Mail, PhoneCall, Clock } from 'lucide-react'
import ContactForm from '@/components/ContactForm' // <-- usa alias @/ para evitar rutas relativas
import { type Locale } from '@/i18n/config'

const COPY: Record<
  Locale,
  {
    title: string
    body: string
    response: string
    responseValue: string
    legal: string
    email: string
    phone: string
  }
> = {
  en: {
    title: 'Contact',
    body: 'Tell us about your project and we will reply within 1-2 business days.',
    response: 'Response time',
    responseValue: '1-2 business days',
    legal: 'By submitting, you agree to be contacted regarding your request. We never share your details.',
    email: 'Email',
    phone: 'Phone',
  },
  es: {
    title: 'Contacto',
    body: 'Cuéntanos sobre tu proyecto y te responderemos en 1-2 dias habiles.',
    response: 'Tiempo de respuesta',
    responseValue: '1-2 dias habiles',
    legal: 'Al enviar, aceptas que te contactemos sobre tu solicitud. Nunca compartimos tus datos.',
    email: 'Correo',
    phone: 'Telefono',
  },
}

export default function ContactSection({ locale = 'en' }: { locale?: Locale }) {
    const copy = COPY[locale]
    return (
        <section id="contact" className="section-shell scroll-mt-28">
            <div className="container-page">
            <div className="mb-8">
                <div className="section-kicker">{locale === 'es' ? 'Conversemos' : 'Let’s Talk'}</div>
                <h2 className="section-title">{copy.title}</h2>
                <p className="section-body max-w-2xl text-neutral-300">
                    {copy.body}
                </p>
            </div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.2fr]">
                {/* Info panel */}
                <aside className="card-premium p-6">
                    <div className="space-y-5">
                        <a
                            href="mailto:info@bytenetworks.net"
                            className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 transition hover:bg-white/[0.08]"
                        >
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-brand-500/20 ring-1 ring-brand-400/30">
                <Mail className="h-5 w-5 text-brand-300" />
              </span>
                            <div>
                                <div className="text-sm text-neutral-400">{copy.email}</div>
                                <div className="font-semibold text-white group-hover:underline">info@bytenetworks.net</div>
                            </div>
                        </a>

                        <a
                            href="tel:+16097137333"
                            className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 transition hover:bg-white/[0.08]"
                        >
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-brand-500/20 ring-1 ring-brand-400/30">
                <PhoneCall className="h-5 w-5 text-brand-300" />
              </span>
                            <div>
                                <div className="text-sm text-neutral-400">{copy.phone}</div>
                                <div className="font-semibold text-white group-hover:underline">+1 (609) 713-7333</div>
                            </div>
                        </a>

                        <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3">
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-white/10">
                <Clock className="h-5 w-5 text-white/80" />
                            </span>
                            <div>
                                <div className="text-sm text-neutral-400">{copy.response}</div>
                                <div className="font-semibold text-white">{copy.responseValue}</div>
                            </div>
                        </div>

                        <p className="text-xs text-slate-300">
                            {copy.legal}
                        </p>
                    </div>
                </aside>

                {/* Functional form */}
                <div>
                    <ContactForm locale={locale} />
                </div>
            </div>
            </div>
        </section>
    )
}
