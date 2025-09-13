'use client'

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'

type Props = {
    items: ReactNode[]
    /** Tiempo entre frases (ms) */
    intervalMs?: number
    /** Duración de la transición (ms) */
    durationMs?: number
    className?: string
    pauseOnHover?: boolean
}

/**
 * RotatingWords (modo "lux")
 * - Transición muy suave: cross-fade + leve translate + blur
 * - Clave por índice para garantizar rotación de todos los items
 * - Altura fija para evitar layout shift
 * - Pausa opcional al hover
 * - Respeta prefers-reduced-motion
 */
export default function RotatingWords({
                                          items,
                                          intervalMs = 4200,   // ⬅️ más lento
                                          durationMs = 1100,    // ⬅️ transición más larga y elegante
                                          className = '',
                                          pauseOnHover = true,
                                      }: Props) {
    const [i, setI] = useState(0)
    const timer = useRef<NodeJS.Timeout | null>(null)
    const paused = useRef(false)
    const reduce = useReducedMotion()

    useEffect(() => {
        if (timer.current) clearInterval(timer.current)
        timer.current = setInterval(() => {
            if (!paused.current) setI(v => (v + 1) % items.length)
        }, intervalMs)
        return () => { if (timer.current) clearInterval(timer.current) }
    }, [items.length, intervalMs])

    const onEnter = () => { if (pauseOnHover) paused.current = true }
    const onLeave = () => { if (pauseOnHover) paused.current = false }

    const dur = reduce ? 0.01 : durationMs / 1000
    const ease = [0.16, 1, 0.3, 1] // easeOutExpo-ish

    return (
        <span
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
            className={`relative inline-block h-[1.15em] overflow-hidden align-top ${className}`}
            role="status"
            aria-live="polite"
        >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
            key={i} // 👈 garantiza cambio en cada tick
            initial={{ opacity: 0, y: reduce ? 0 : '15%', filter: reduce ? 'blur(0px)' : 'blur(6px)' }}
            animate={{ opacity: 1, y: '0%', filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: reduce ? 0 : '-15%', filter: reduce ? 'blur(0px)' : 'blur(6px)' }}
            transition={{ duration: dur, ease }}
            className="inline-block"
        >
          {items[i]}
        </motion.span>
      </AnimatePresence>
    </span>
    )
}