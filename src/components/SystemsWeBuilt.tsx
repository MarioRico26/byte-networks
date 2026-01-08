'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Images as ImagesIcon, X, ChevronLeft, ChevronRight } from 'lucide-react'
import { PROJECTS, type Project } from '@/data/projects'

export default function SystemsWeBuilt() {
  return (
    <section className="container-page py-20" id="systems">
      <h2 className="text-3xl font-semibold">Systems we’ve built</h2>
      <p className="mt-3 max-w-2xl text-neutral-300">
        Recent, real-world products built for operations: portals, internal tools, and public sites.
      </p>
      <ProjectGrid projects={PROJECTS} />
    </section>
  )
}

function ProjectGrid({ projects }: { projects: Project[] }) {
  const [lightbox, setLightbox] = useState<{ projectId: string; index: number } | null>(null)

  const openLightbox = useCallback((projectId: string, index: number) => {
    setLightbox({ projectId, index })
  }, [])

  const closeLightbox = useCallback(() => setLightbox(null), [])

  const goPrev = useCallback(() => {
    if (!lightbox) return
    const p = PROJECTS.find(x => x.id === lightbox.projectId)
    if (!p) return
    setLightbox({ projectId: p.id, index: (lightbox.index - 1 + p.images.length) % p.images.length })
  }, [lightbox])

  const goNext = useCallback(() => {
    if (!lightbox) return
    const p = PROJECTS.find(x => x.id === lightbox.projectId)
    if (!p) return
    setLightbox({ projectId: p.id, index: (lightbox.index + 1) % p.images.length })
  }, [lightbox])

  // keyboard navigation
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

  return (
    <>
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
        {projects.map((p) => (
          <article
            key={p.id}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md"
          >
            {/* Lead screenshot */}
            <figure className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={p.images[0]}
                alt={`${p.title} screenshot`}
                fill
                sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                priority={false}
              />
              <button
                onClick={() => openLightbox(p.id, 0)}
                className="absolute right-3 top-3 inline-flex items-center gap-1 rounded bg-black/50 px-2 py-1 text-xs text-white/95 backdrop-blur transition hover:bg-black/60"
                aria-label={`Open gallery of ${p.title}`}
              >
                <ImagesIcon className="h-4 w-4" /> Gallery
              </button>
            </figure>

            {/* Body */}
            <div className="p-5">
              <div className="text-xs uppercase tracking-wide text-neutral-400">{p.tag}</div>
              <h3 className="mt-1 text-lg font-semibold">{p.title}</h3>
              <p className="mt-1 text-sm text-neutral-300">{p.blurb}</p>

              {/* Thumbs */}
              <div className="mt-4 flex gap-2">
                {p.images.slice(0, 3).map((img, i) => (
                  <button
                    key={img}
                    onClick={() => openLightbox(p.id, i)}
                    className="relative h-16 w-24 overflow-hidden rounded border border-white/10 bg-neutral-900"
                    aria-label={`Open screenshot ${i + 1} of ${p.title}`}
                  >
                    <Image
                      src={img}
                      alt=""
                      fill
                      sizes="96px"
                      className="object-cover transition-transform duration-500 hover:scale-[1.05]"
                    />
                  </button>
                ))}
              </div>

              {/* External link */}
              <Link
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-300 hover:text-brand-200"
              >
                View project <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Hover aura */}
            <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-brand-500/15 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
          </article>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox && <LightboxModal ctx={lightbox} onClose={closeLightbox} onPrev={goPrev} onNext={goNext} />}
    </>
  )
}

function LightboxModal({
  ctx,
  onClose,
  onPrev,
  onNext,
}: {
  ctx: { projectId: string; index: number }
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}) {
  const project = useMemo(() => PROJECTS.find(p => p.id === ctx.projectId), [ctx.projectId])
  if (!project) return null
  const currentSrc = project.images[ctx.index]

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 p-4"
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} gallery`}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl"
        onClick={(e) => e.stopPropagation()}
      >
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

        <figure className="relative aspect-[16/9] overflow-hidden rounded-xl border border-white/10 bg-neutral-950">
          <Image
            key={currentSrc}
            src={currentSrc}
            alt={`${project.title} screenshot ${ctx.index + 1}`}
            fill
            sizes="(min-width:1024px) 80vw, 100vw"
            className="object-contain"
            priority
          />
        </figure>

        {/* Strip */}
        <div className="mt-3 flex gap-2 overflow-x-auto">
          {project.images.map((src, i) => (
            <button
              key={src}
              onClick={() => {
                // cambiar índice dentro del modal
                const evt = new CustomEvent('noop')
                // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                evt
              }}
              className={`relative h-14 w-24 overflow-hidden rounded border ${i === ctx.index ? 'border-brand-400' : 'border-white/10'} bg-neutral-900`}
              aria-label={`Screenshot ${i + 1}`}
            >
              <Image src={src} alt="" fill sizes="96px" className="object-cover" />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}