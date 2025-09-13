'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Play, Pause, SkipBack, SkipForward, Volume2, Music2 } from 'lucide-react'

function formatTime(total: number) {
    const s = Math.floor(total % 60)
    const m = Math.floor(total / 60)
    return `${m}:${s.toString().padStart(2, '0')}`
}

export default function MiniPlayer() {
    // purely visual; no audio tag — simulated progress
    const duration = 142 // seconds (fake)
    const [playing, setPlaying] = useState(true)
    const [progress, setProgress] = useState(0) // 0..1
    const rafRef = useRef<number | null>(null)
    const lastTs = useRef<number | null>(null)

    // animate progress while "playing"
    useEffect(() => {
        const loop = (ts: number) => {
            if (lastTs.current == null) lastTs.current = ts
            const dt = (ts - lastTs.current) / 1000
            lastTs.current = ts
            setProgress(p => {
                const next = p + dt / duration
                return next >= 1 ? 0 : next
            })
            rafRef.current = requestAnimationFrame(loop)
        }
        if (playing) rafRef.current = requestAnimationFrame(loop)
        return () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current)
            lastTs.current = null
        }
    }, [playing, duration])

    const current = useMemo(() => Math.floor(progress * duration), [progress, duration])

    // click-to-seek (visual)
    const trackRef = useRef<HTMLDivElement>(null)
    const onSeek = (e: React.MouseEvent) => {
        if (!trackRef.current) return
        const rect = trackRef.current.getBoundingClientRect()
        const x = e.clientX - rect.left
        const p = Math.min(1, Math.max(0, x / rect.width))
        setProgress(p)
    }

    return (
        <div className="card-glass relative overflow-hidden">
            {/* subtle gradient wash */}
            <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-white/10 via-white/5 to-transparent" />
            <div className="flex flex-col gap-4 p-4 sm:flex-row sm:items-center sm:gap-6">
                {/* artwork placeholder */}
                <div className="grid h-14 w-14 place-items-center rounded-xl border border-white/10 bg-white/10 shadow-inner">
                    <Music2 className="h-6 w-6 text-brand-400" />
                </div>

                {/* title + progress */}
                <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-3">
                        <div className="truncate font-medium">Ambient Flow — Demo</div>
                        <div className="text-xs tabular-nums text-neutral-400">
                            {formatTime(current)} / {formatTime(duration)}
                        </div>
                    </div>

                    {/* progress track */}
                    <div
                        ref={trackRef}
                        onClick={onSeek}
                        className="mt-2 h-2 cursor-pointer rounded-full bg-white/10"
                    >
                        <motion.div
                            className="h-2 rounded-full bg-brand-500"
                            initial={false}
                            animate={{ width: `${progress * 100}%` }}
                            transition={{ type: 'tween', ease: 'linear', duration: 0.15 }}
                        />
                    </div>
                </div>

                {/* controls */}
                <div className="flex items-center gap-2 sm:gap-3">
                    <button
                        type="button"
                        className="rounded-lg border border-white/10 bg-white/5 p-2 text-white/80 hover:bg-white/10"
                        aria-label="Previous"
                    >
                        <SkipBack className="h-4 w-4" />
                    </button>

                    <button
                        type="button"
                        onClick={() => setPlaying(p => !p)}
                        className="inline-flex items-center justify-center rounded-xl bg-brand-500 p-2 text-white shadow-[0_10px_30px_-12px_rgba(139,92,246,0.55)] ring-1 ring-brand-400/40 transition hover:bg-brand-600"
                        aria-label={playing ? 'Pause' : 'Play'}
                    >
                        {playing ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                    </button>

                    <button
                        type="button"
                        className="rounded-lg border border-white/10 bg-white/5 p-2 text-white/80 hover:bg-white/10"
                        aria-label="Next"
                    >
                        <SkipForward className="h-4 w-4" />
                    </button>

                    <div className="hidden items-center gap-2 pl-2 sm:flex">
                        <Volume2 className="h-4 w-4 text-neutral-300" />
                        {/* tiny volume bar (static visual) */}
                        <div className="h-1.5 w-16 rounded-full bg-white/10">
                            <div className="h-1.5 w-10 rounded-full bg-white/30" />
                        </div>
                    </div>
                </div>
            </div>

            {/* mini equalizer when playing */}
            <div className="px-4 pb-4">
                <div className="mt-2 flex h-8 items-end justify-between gap-[3px]">
                    {Array.from({ length: 36 }).map((_, i) => {
                        const delay = i * 0.025
                        const dur = 1.6 + (i % 5) * 0.12
                        return (
                            <motion.div
                                key={i}
                                className="w-[calc((100%_-_3px_*_35)/36)] origin-bottom rounded-sm bg-gradient-to-t from-brand-500 to-cyan-400"
                                initial={{ scaleY: 0.2, opacity: 0.8 }}
                                animate={
                                    playing
                                        ? { scaleY: [0.2, 0.95, 0.35, 0.7, 0.25] }
                                        : { scaleY: 0.25 }
                                }
                                transition={{ repeat: playing ? Infinity : 0, duration: dur, delay, ease: 'easeInOut' }}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}