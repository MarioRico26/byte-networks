import { Mail, PhoneCall, Clock } from 'lucide-react'
import ContactForm from '@/components/ContactForm' // <-- usa alias @/ para evitar rutas relativas

export default function ContactSection() {
    return (
        <section id="contact" className="container-page py-24">
            <div className="mb-8">
                <h2 className="text-3xl font-semibold">Contact</h2>
                <p className="mt-3 max-w-2xl text-neutral-300">
                    Tell us about your project and we’ll reply within 1–2 business days.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.2fr]">
                {/* Info panel */}
                <aside className="card-glass p-6">
                    <div className="space-y-5">
                        <a
                            href="mailto:info@bytenetworks.net"
                            className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 transition hover:bg-white/10"
                        >
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-brand-500/20 ring-1 ring-brand-400/30">
                <Mail className="h-5 w-5 text-brand-300" />
              </span>
                            <div>
                                <div className="text-sm text-neutral-400">Email</div>
                                <div className="font-semibold text-white group-hover:underline">info@bytenetworks.net</div>
                            </div>
                        </a>

                        <a
                            href="tel:+16097137333"
                            className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 transition hover:bg-white/10"
                        >
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-brand-500/20 ring-1 ring-brand-400/30">
                <PhoneCall className="h-5 w-5 text-brand-300" />
              </span>
                            <div>
                                <div className="text-sm text-neutral-400">Phone</div>
                                <div className="font-semibold text-white group-hover:underline">+1 (609) 713-7333</div>
                            </div>
                        </a>

                        <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-white/10">
                <Clock className="h-5 w-5 text-white/80" />
              </span>
                            <div>
                                <div className="text-sm text-neutral-400">Response time</div>
                                <div className="font-semibold text-white">1–2 business days</div>
                            </div>
                        </div>

                        <p className="text-xs text-neutral-400">
                            By submitting, you agree to be contacted regarding your request. We never share your details.
                        </p>
                    </div>
                </aside>

                {/* Functional form */}
                <div>
                    <ContactForm />
                </div>
            </div>
        </section>
    )
}