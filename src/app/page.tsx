// src/app/page.tsx
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import ServicesOverview from '../components/ServicesOverview'
import AboutSection from '../components/AboutSection'
import ContactSection from '../components/ContactSection'
import SystemsWeBuilt from '../components/SystemsWeBuilt' // ← NUEVO

export default function Page() {
  return (
    <main>
      <NavBar />
      <Hero />

      {/* Alias para que "Categories" apunte al mismo lugar */}
      <div id="categories" className="h-0" />

      <section id="services" className="container-page scroll-mt-28 py-24">
        <h2 className="text-3xl font-semibold">Services</h2>
        <p className="mt-3 max-w-2xl text-neutral-300">
          Explore our core capabilities across software, web, infrastructure and AV.
        </p>
        <ServicesOverview />
      </section>

      {/* Sección de proyectos con galería/lightbox (EN) */}
      <SystemsWeBuilt />

      <AboutSection />
      <ContactSection />

      <Footer />
    </main>
  )
}