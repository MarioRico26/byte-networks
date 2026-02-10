'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Images as ImagesIcon, X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react'
import { PRIMARY_CTA, CTA_STYLES } from '@/data/cta'
import { PROJECTS, type Project } from '@/data/projects'

type LightboxState = { projectId: string; index: number }
type MotionProfile = {
  isMobile: boolean
  reducedMotion: boolean
  fadeDurationMs: number
  inactiveScale: number
  inactiveBlurPx: number
  inactiveShiftY: number
}

const isExternalUrl = (url: string) => url.startsWith('http')

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
    fadeDurationMs: isMobile ? 1600 : 2600,
    inactiveScale: isMobile ? 1.012 : 1.03,
    inactiveBlurPx: isMobile ? 0.9 : 1.8,
    inactiveShiftY: isMobile ? 4 : 8,
  }
}

function useAutoRotate(total: number, intervalMs: number, initialDelayMs = intervalMs, disabled = false) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    setIndex(0)
  }, [total])

  useEffect(() => {
    if (paused || total < 2 || disabled) return
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
  }, [paused, total, intervalMs, initialDelayMs, disabled])

  return {
    index,
    setIndex,
    pause: () => setPaused(true),
    resume: () => setPaused(false),
  }
}

function SmoothImageStack({
  images,
  index,
  altPrefix,
  sizes,
  contain = false,
  motion,
}: {
  images: string[]
  index: number
  altPrefix: string
  sizes: string
  contain?: boolean
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
            alt={`${altPrefix} screenshot ${i + 1}`}
            fill
            sizes={sizes}
            loading="eager"
            className={contain ? 'object-contain p-2 md:p-3' : 'object-cover'}
            priority={false}
          />
        </div>
      ))}
    </div>
  )
}

export default function SystemsWeBuilt() {
  return (
    <section className="relative isolate py-24 md:py-28" id="systems">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-10 -z-10 h-80 w-80 rounded-full bg-gradient-to-br from-brand-500/24 via-brand-400/12 to-accent-500/12 blur-3xl"
      />

      <div className="container-page">
        <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-brand-300/70">Systems</div>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">Systems we&apos;ve built</h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-neutral-100">
              Real products built for operations. Galleries rotate automatically with smooth transitions.
            </p>
          </div>
          <Link href={PRIMARY_CTA.href} className={CTA_STYLES.secondary}>
            {PRIMARY_CTA.label} <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <ProjectGrid projects={PROJECTS} />
      </div>
    </section>
  )
}

function ProjectGrid({ projects }: { projects: Project[] }) {
  const [lightbox, setLightbox] = useState<LightboxState | null>(null)
  const projectMap = useMemo(() => new Map(projects.map((p) => [p.id, p])), [projects])
  const featured = useMemo(() => projects.find((p) => p.featured), [projects])
  const list = useMemo(() => projects.filter((p) => !p.featured), [projects])
  const motion = useMotionProfile()

  const openLightbox = useCallback((projectId: string, index: number) => {
    setLightbox({ projectId, index })
  }, [])

  const closeLightbox = useCallback(() => setLightbox(null), [])

  const setIndex = useCallback((index: number) => {
    setLightbox((prev) => (prev ? { ...prev, index } : prev))
  }, [])

  const goPrev = useCallback(() => {
    setLightbox((prev) => {
      if (!prev) return prev
      const p = projectMap.get(prev.projectId)
      if (!p) return prev
      return { projectId: p.id, index: (prev.index - 1 + p.images.length) % p.images.length }
    })
  }, [projectMap])

  const goNext = useCallback(() => {
    setLightbox((prev) => {
      if (!prev) return prev
      const p = projectMap.get(prev.projectId)
      if (!p) return prev
      return { projectId: p.id, index: (prev.index + 1) % p.images.length }
    })
  }, [projectMap])

  useEffect(() => {
    if (!lightbox) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
    }
  }, [lightbox])

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (!lightbox) return
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowLeft') goPrev()
      if (e.key === 'ArrowRight') goNext()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightbox, closeLightbox, goPrev, goNext])

  const currentProject = lightbox ? projectMap.get(lightbox.projectId) : null

  return (
    <>
      {featured && <FeaturedProject project={featured} onOpenGallery={openLightbox} motion={motion} />}

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {list.map((p, order) => (
          <ProjectCard key={p.id} project={p} order={order} onOpenGallery={openLightbox} motion={motion} />
        ))}
      </div>

      {lightbox && currentProject && (
        <LightboxModal
          project={currentProject}
          index={lightbox.index}
          onClose={closeLightbox}
          onPrev={goPrev}
          onNext={goNext}
          onSelect={setIndex}
        />
      )}
    </>
  )
}

function FeaturedProject({
  project,
  onOpenGallery,
  motion,
}: {
  project: Project
  onOpenGallery: (projectId: string, index: number) => void
  motion: MotionProfile
}) {
  const ctaLabel = project.cta ?? 'Visit product'
  const rotateMs = motion.isMobile ? 6900 : 9800
  const delayMs = motion.isMobile ? 1800 : 3200
  const { index, setIndex, pause, resume } = useAutoRotate(project.images.length, rotateMs, delayMs, motion.reducedMotion)

  return (
    <article className="mt-12 overflow-hidden rounded-3xl border border-brand-300/22 bg-gradient-to-br from-brand-500/12 via-[#101a35]/80 to-[#0b1226]/90 px-6 py-10 shadow-soft md:px-10 md:py-12 lg:px-12">
      <div className="grid gap-12 xl:grid-cols-[0.9fr_1.1fr] xl:items-start">
        <div className="xl:pr-2">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-200/35 bg-brand-500/14 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-brand-100">
            <Sparkles className="h-3.5 w-3.5" /> Product spotlight
          </div>
          <p className="mt-3 text-sm text-brand-100/90">Byte Ledger is live in production and available now.</p>

          <div className="mt-7 text-xs uppercase tracking-[0.3em] text-neutral-300">{project.tag}</div>
          <h3 className="mt-3 text-3xl font-semibold md:text-4xl">{project.title}</h3>
          <p className="mt-5 max-w-xl text-lg leading-8 text-neutral-200">{project.blurb}</p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href={project.url}
              target={isExternalUrl(project.url) ? '_blank' : undefined}
              rel={isExternalUrl(project.url) ? 'noreferrer' : undefined}
              className={CTA_STYLES.primary}
            >
              <span className="relative">{ctaLabel}</span> <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link href={PRIMARY_CTA.href} className={CTA_STYLES.secondary}>
              {PRIMARY_CTA.label}
            </Link>
          </div>

          <button
            onClick={() => onOpenGallery(project.id, index)}
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-200 hover:text-brand-100"
            aria-label={`Open gallery of ${project.title}`}
          >
            <ImagesIcon className="h-4 w-4" /> Open full gallery ({project.images.length})
          </button>
        </div>

        <div>
          <figure
            className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-[#070d1c]/90"
            onMouseEnter={pause}
            onMouseLeave={resume}
          >
            <SmoothImageStack
              images={project.images}
              index={index}
              altPrefix={project.title}
              sizes="(min-width:1024px) 46vw, 100vw"
              contain
              motion={motion}
            />
            <button
              onClick={() => onOpenGallery(project.id, index)}
              className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full border border-white/20 bg-black/45 px-3 py-1 text-xs text-white/95 backdrop-blur"
              aria-label={`Open screenshot ${index + 1} of ${project.title}`}
            >
              <ImagesIcon className="h-3.5 w-3.5" /> {index + 1}/{project.images.length}
            </button>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/35 to-transparent" />
          </figure>

          <div className="mt-4 flex gap-2.5 overflow-x-auto pb-1">
            {project.images.map((src, i) => (
              <button
                key={src}
                onClick={() => setIndex(i)}
                className={`relative h-14 w-24 overflow-hidden rounded-lg border ${
                  i === index ? 'border-brand-300' : 'border-white/10'
                } bg-neutral-900`}
                aria-label={`Select screenshot ${i + 1}`}
              >
                <Image src={src} alt="" fill sizes="96px" className="object-cover" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {project.metrics && project.metrics.length > 0 && (
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {project.metrics.map((metric) => (
            <article key={metric.label} className="h-full rounded-2xl border border-white/12 bg-[#101b35] p-5">
              <div className="font-mono text-2xl font-semibold tracking-tight text-brand-100">{metric.value}</div>
              <div className="mt-1 text-[11px] uppercase tracking-[0.12em] text-slate-200">{metric.label}</div>
              {metric.detail && <p className="mt-2 text-sm leading-6 text-slate-200">{metric.detail}</p>}
            </article>
          ))}
        </div>
      )}

      {project.highlights && project.highlights.length > 0 && (
        <ul className="mt-9 grid grid-cols-1 gap-3 text-sm text-slate-100 sm:grid-cols-2 lg:grid-cols-3">
          {project.highlights.map((item) => (
            <li key={item} className="flex items-start gap-2 rounded-xl border border-white/10 bg-[#0d162d] px-4 py-3">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent-500" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </article>
  )
}

function ProjectCard({
  project,
  order,
  onOpenGallery,
  motion,
}: {
  project: Project
  order: number
  onOpenGallery: (projectId: string, index: number) => void
  motion: MotionProfile
}) {
  const ctaLabel = project.cta ?? 'View project'
  const rotateMs = motion.isMobile ? 6400 : 9400
  const initialDelay = (motion.isMobile ? 1200 : 2200) + order * (motion.isMobile ? 480 : 760)
  const { index, setIndex, pause, resume } = useAutoRotate(project.images.length, rotateMs, initialDelay, motion.reducedMotion)

  return (
    <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.02] shadow-soft">
      <figure
        className="relative aspect-[16/10] overflow-hidden bg-neutral-950/90"
        onMouseEnter={pause}
        onMouseLeave={resume}
      >
        <SmoothImageStack
          images={project.images}
          index={index}
          altPrefix={project.title}
          sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
          contain
          motion={motion}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/15 to-transparent" />
        <button
          onClick={() => onOpenGallery(project.id, index)}
          className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full border border-white/20 bg-black/50 px-3 py-1 text-xs text-white/95 backdrop-blur transition hover:bg-black/60"
          aria-label={`Open gallery of ${project.title}`}
        >
          <ImagesIcon className="h-4 w-4" /> {index + 1}/{project.images.length}
        </button>
      </figure>

      <div className="p-6">
        <div className="text-xs uppercase tracking-[0.3em] text-neutral-300">{project.tag}</div>
        <h3 className="mt-2 text-xl font-semibold">{project.title}</h3>
        <p className="mt-2 text-sm text-neutral-200">{project.blurb}</p>

        <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
          {project.images.slice(0, 5).map((img, i) => (
            <button
              key={img}
              onClick={() => setIndex(i)}
              className={`relative h-14 w-20 overflow-hidden rounded-lg border ${
                i === index ? 'border-brand-300' : 'border-white/10'
              } bg-neutral-900`}
              aria-label={`Select screenshot ${i + 1} of ${project.title}`}
            >
              <Image src={img} alt="" fill sizes="80px" className="object-cover" />
            </button>
          ))}
        </div>

        <Link
          href={project.url}
          target={isExternalUrl(project.url) ? '_blank' : undefined}
          rel={isExternalUrl(project.url) ? 'noreferrer' : undefined}
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-300 hover:text-brand-200"
        >
          {ctaLabel} <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-brand-500/15 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
    </article>
  )
}

function LightboxModal({
  project,
  index,
  onClose,
  onPrev,
  onNext,
  onSelect,
}: {
  project: Project
  index: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
  onSelect: (index: number) => void
}) {
  const currentSrc = project.images[index]

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 p-4"
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} gallery`}
      onClick={onClose}
    >
      <div className="relative w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute right-3 top-3 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/70"
          aria-label="Close gallery"
        >
          <X className="h-5 w-5" />
        </button>

        <button
          onClick={onPrev}
          className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white hover:bg-black/70"
          aria-label="Previous image"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={onNext}
          className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white hover:bg-black/70"
          aria-label="Next image"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        <figure className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-white/10 bg-neutral-950">
          <Image
            key={currentSrc}
            src={currentSrc}
            alt={`${project.title} screenshot ${index + 1}`}
            fill
            sizes="(min-width:1024px) 80vw, 100vw"
            className="object-contain"
            priority
          />
        </figure>

        <div className="mt-3 flex gap-2 overflow-x-auto">
          {project.images.map((src, i) => (
            <button
              key={src}
              onClick={() => onSelect(i)}
              className={`relative h-14 w-24 overflow-hidden rounded border ${
                i === index ? 'border-brand-400' : 'border-white/10'
              } bg-neutral-900`}
              aria-label={`Screenshot ${i + 1}`}
              aria-current={i === index ? 'true' : undefined}
            >
              <Image src={src} alt="" fill sizes="96px" className="object-cover" />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
