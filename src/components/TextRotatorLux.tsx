'use client'

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useEffect, useRef, useState, type ReactNode } from 'react'

type Props = {
    items: ReactNode[]
    /** Tiempo entre frases (ms) */
    intervalMs?: number
    /** Duración de la transición (ms) */
    durationMs?: number
    className?: string
    pauseOnHover?: boolean
    /** Muestra un destello (glint) al entrar */
    glint?: boolean
}

/**
 * TextRotatorLux
 * - Efecto sedoso: cross-fade + leve scale + blur
 * - Glint opcional que cruza el texto al aparecer
 * - Clave por índice para forzar el swap de todos los ítems
 * - Pausa al hover y soporte de reduced motion
 */
export default function TextRotatorLux({
                                           items,
                                           intervalMs = 5200,   // más lento
                                           durationMs = 1400,    // transición larga y suave
                                           className = '',
                                           pauseOnHover = true,
                                           glint = true,
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
            className={`relative inline-flex min-h-[1.3em] items-center overflow-hidden align-middle ${className}`}
            role="status"
            aria-live="polite"
        >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
            key={i} // fuerza cambio en cada tick
            initial={{
                opacity: 0,
                scale: 0.985,
                filter: reduce ? 'blur(0px)' : 'blur(5px)',
                letterSpacing: reduce ? '0em' : '0.015em',
            }}
            animate={{
                opacity: 1,
                scale: 1,
                filter: 'blur(0px)',
                letterSpacing: '0em',
            }}
            exit={{
                opacity: 0,
                scale: 1.01,
                filter: reduce ? 'blur(0px)' : 'blur(5px)',
                letterSpacing: reduce ? '0em' : '0.01em',
            }}
            transition={{ duration: dur, ease }}
            className="relative inline-flex items-center leading-[1.15] pb-[0.04em]"
        >
          {items[i]}

            {/* Glint (destello) */}
            {glint && !reduce && (
                <motion.span
                    key={`g-${i}`}
                    aria-hidden
                    className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    initial={{ x: '-120%', opacity: 0 }}
                    animate={{ x: '120%', opacity: [0, 0.9, 0] }}
                    transition={{ duration: Math.max(dur * 0.9, 0.6), ease }}
                />
            )}
        </motion.span>
      </AnimatePresence>
    </span>
    )
}
