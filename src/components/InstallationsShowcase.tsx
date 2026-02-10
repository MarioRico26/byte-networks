'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Camera, Music4, Store } from 'lucide-react'
import { PRIMARY_CTA, SECONDARY_CTA, CTA_STYLES } from '@/data/cta'

type InstallationCard = {
  title: string
  blurb: string
  images: string[]
  icon: React.ComponentType<{ className?: string }>
}
type MotionProfile = {
  isMobile: boolean
  reducedMotion: boolean
  fadeDurationMs: number
  inactiveScale: number
  inactiveBlurPx: number
  inactiveShiftY: number
}

const installationCards: InstallationCard[] = [
  {
    title: 'CCTV Systems',
    blurb: 'Secure camera installs with clean routing, calibration, and final client handoff.',
    images: ['/screenshots/cameras/1.webp', '/screenshots/cameras/2.webp', '/screenshots/cameras/3.webp'],
    icon: Camera,
  },
  {
    title: 'Audio Systems',
    blurb: 'Commercial and residential audio setups with clean wiring and balanced sound coverage.',
    images: [
      '/screenshots/audio/1.webp',
      '/screenshots/audio/2.webp',
      '/screenshots/audio/3.webp',
      '/screenshots/audio/4.webp',
      '/screenshots/audio/5.webp',
      '/screenshots/audio/6.webp',
      '/screenshots/audio/7.webp',
    ],
    icon: Music4,
  },
  {
    title: 'Digital Kiosks',
    blurb: 'On-site kiosk deployments integrated with software workflows for GlimmerGlass.',
    images: ['/screenshots/others/1.webp', '/screenshots/glimmerglass/4.webp', '/screenshots/glimmerglass/5.webp'],
    icon: Store,
  },
]

function useMotionProfile(): MotionProfile {
  const [isMobile, setIsMobile] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const mobileMq = window.matchMedia('(max-width: 768px)')
    const reducedMq = window.matchMedia('(prefers-reduced-motion: reduce)')

    const apply = () => {
      setIsMobile(mobileMq.matches)
      setReducedMotion(reducedMq.matches)
    }

    apply()
    mobileMq.addEventListener('change', apply)
    reducedMq.addEventListener('change', apply)
    return () => {
      mobileMq.removeEventListener('change', apply)
      reducedMq.removeEventListener('change', apply)
    }
  }, [])

  if (reducedMotion) {
    return {
      isMobile,
      reducedMotion: true,
      fadeDurationMs: 260,
      inactiveScale: 1,
      inactiveBlurPx: 0,
      inactiveShiftY: 0,
    }
  }

  return {
    isMobile,
    reducedMotion: false,
    fadeDurationMs: isMobile ? 1500 : 2600,
    inactiveScale: isMobile ? 1.012 : 1.03,
    inactiveBlurPx: isMobile ? 0.9 : 1.8,
    inactiveShiftY: isMobile ? 4 : 8,
  }
}

function useAutoRotate(total: number, intervalMs: number, initialDelayMs = intervalMs, disabled = false) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (total < 2 || disabled) return
    let intervalRef: number | null = null
    const timeoutRef = window.setTimeout(() => {
      setIndex((prev) => (prev + 1) % total)
      intervalRef = window.setInterval(() => {
        setIndex((prev) => (prev + 1) % total)
      }, intervalMs)
    }, initialDelayMs)

    return () => {
      window.clearTimeout(timeoutRef)
      if (intervalRef !== null) window.clearInterval(intervalRef)
    }
  }, [total, intervalMs, initialDelayMs, disabled])

  return { index, setIndex }
}

function SmoothImageStack({
  images,
  index,
  altPrefix,
  motion,
}: {
  images: string[]
  index: number
  altPrefix: string
  motion: MotionProfile
}) {
  return (
    <div className="absolute inset-0">
      {images.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 transition-[opacity,transform,filter] ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{
            opacity: i === index ? 1 : 0,
            transform:
              i === index
                ? 'translate3d(0,0,0) scale(1)'
                : `translate3d(0,${motion.inactiveShiftY}px,0) scale(${motion.inactiveScale})`,
            filter:
              i === index
                ? 'blur(0px) saturate(1) brightness(1)'
                : `blur(${motion.inactiveBlurPx}px) saturate(0.94) brightness(0.88)`,
            transitionDuration: `${motion.fadeDurationMs}ms`,
          }}
        >
          <Image
            src={src}
            alt={`${altPrefix} installation image ${i + 1}`}
            fill
            sizes="(min-width:1024px) 30vw, (min-width:640px) 50vw, 100vw"
            loading="eager"
            className="object-cover"
          />
        </div>
      ))}
    </div>
  )
}

function RotatingInstallationCard({
  card,
  order,
  motion,
}: {
  card: InstallationCard
  order: number
  motion: MotionProfile
}) {
  const rotateMs = motion.isMobile ? 7000 : 10200
  const initialDelay = (motion.isMobile ? 1400 : 2600) + order * (motion.isMobile ? 520 : 760)
  const { index, setIndex } = useAutoRotate(card.images.length, rotateMs, initialDelay, motion.reducedMotion)
  const Icon = card.icon

  return (
    <article className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
      <figure className="relative aspect-[16/10] overflow-hidden border-b border-white/10 bg-neutral-950/80">
        <SmoothImageStack images={card.images} index={index} altPrefix={card.title} motion={motion} />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/10" />
        <div className="absolute right-3 top-3 rounded-full border border-white/20 bg-black/45 px-3 py-1 text-xs text-white/90">
          {index + 1}/{card.images.length}
        </div>
      </figure>

      <div className="p-5">
        <div className="mb-3 grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/10">
          <Icon className="h-5 w-5 text-brand-300" />
        </div>
        <h3 className="text-base font-semibold uppercase tracking-[0.12em] text-neutral-100">{card.title}</h3>
        <p className="mt-2 text-sm text-neutral-300">{card.blurb}</p>

        <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
          {card.images.map((src, i) => (
            <button
              key={src}
              onClick={() => setIndex(i)}
              className={`relative h-12 w-16 overflow-hidden rounded-md border ${
                i === index ? 'border-brand-300' : 'border-white/10'
              }`}
              aria-label={`Select ${card.title} image ${i + 1}`}
            >
              <Image src={src} alt="" fill sizes="64px" className="object-cover" />
            </button>
          ))}
        </div>
      </div>
    </article>
  )
}

export default function InstallationsShowcase() {
  const motion = useMotionProfile()

  return (
    <section id="installations" className="relative isolate py-24 scroll-mt-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-16 -z-10 h-72 w-72 rounded-full bg-gradient-to-br from-cyan-400/20 via-brand-500/15 to-transparent blur-3xl"
      />

      <div className="container-page">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-brand-300/70">Field Work</div>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">Clean installations. Professional finish.</h2>
            <p className="mt-3 max-w-3xl text-neutral-300">
              Our on-site execution is part of the brand: clean cable management, documented setup, and reliable final
              delivery for CCTV, audio, and digital kiosks.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href={PRIMARY_CTA.href} className={CTA_STYLES.primary}>
              {PRIMARY_CTA.label}
            </Link>
            <Link href={SECONDARY_CTA.href} className={CTA_STYLES.secondary}>
              {SECONDARY_CTA.label}
            </Link>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {installationCards.map((card, i) => (
            <RotatingInstallationCard key={card.title} card={card} order={i} motion={motion} />
          ))}
        </div>
      </div>
    </section>
  )
}
