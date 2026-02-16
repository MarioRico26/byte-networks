import NavBar from '@/components/NavBar'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'
import { ServicesOverviewGrid } from '@/components/ServicesOverview'
import AboutSection from '@/components/AboutSection'
import ContactSection from '@/components/ContactSection'
import SystemsWeBuilt from '@/components/SystemsWeBuilt'
import InstallationsShowcase from '@/components/InstallationsShowcase'
import SocialProof from '@/components/SocialProof'
import { type Locale } from '@/i18n/config'

const COPY: Record<Locale, { servicesTitle: string; servicesBody: string }> = {
  en: {
    servicesTitle: 'Services',
    servicesBody: 'Explore our core capabilities across software, web, infrastructure and AV.',
  },
  es: {
    servicesTitle: 'Servicios',
    servicesBody: 'Explora nuestras capacidades en software, web, infraestructura y sistemas AV.',
  },
}

export default function HomePage({ locale }: { locale: Locale }) {
  const copy = COPY[locale]

  return (
    <main className="bg-[#070b14] text-slate-100">
      <NavBar locale={locale} />
      <Hero locale={locale} />
      <SocialProof locale={locale} />
      <section id="services" className="section-shell scroll-mt-28 border-y border-white/5 bg-[#0b1120]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-72 bg-gradient-to-b from-brand-500/12 to-transparent"
        />
        <div aria-hidden className="pointer-events-none absolute -left-24 top-24 -z-10 h-80 w-80 rounded-full bg-brand-500/10 blur-3xl" />
        <div className="container-page">
          <div className="section-kicker">{locale === 'es' ? 'Capacidades' : 'Capabilities'}</div>
          <h2 className="section-title">{copy.servicesTitle}</h2>
          <p className="section-body max-w-2xl">{copy.servicesBody}</p>
          <ServicesOverviewGrid tone="dark" locale={locale} />
        </div>
      </section>

      <SystemsWeBuilt locale={locale} />
      <InstallationsShowcase locale={locale} />
      <AboutSection locale={locale} />
      <ContactSection locale={locale} />
      <Footer locale={locale} />
    </main>
  )
}
