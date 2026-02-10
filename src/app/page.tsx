// src/app/page.tsx
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import { ServicesOverviewGrid } from '../components/ServicesOverview'
import AboutSection from '../components/AboutSection'
import ContactSection from '../components/ContactSection'
import SystemsWeBuilt from '../components/SystemsWeBuilt' // ← NUEVO
import InstallationsShowcase from '../components/InstallationsShowcase'
import SocialProof from '../components/SocialProof'

export default function Page() {
  return (
    <main className="bg-[#070b14] text-slate-100">
      <NavBar />
      <Hero />
      <SocialProof />
      <section id="services" className="relative isolate scroll-mt-28 border-y border-white/5 bg-[#0b1120] py-24 md:py-28">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-56 bg-gradient-to-b from-brand-500/10 to-transparent"
        />
        <div className="container-page">
          <h2 className="text-3xl font-semibold text-white">Services</h2>
          <p className="mt-3 max-w-2xl text-slate-200">
            Explore our core capabilities across software, web, infrastructure and AV.
          </p>
          <ServicesOverviewGrid tone="dark" />
        </div>
      </section>

      {/* Sección de proyectos con galería/lightbox (EN) */}
      <SystemsWeBuilt />
      <InstallationsShowcase />

      <AboutSection />
      <ContactSection />

      <Footer />
    </main>
  )
}
