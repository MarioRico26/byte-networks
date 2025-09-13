'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { CalendarClock } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

type Props = {
    href: string
    label?: string
    /** aparece después de scrollear X px (default 200) */
    showAfter?: number
}

export default function StickyCTA({ href, label = 'Book a site survey', showAfter = 200 }: Props) {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > showAfter)
        onScroll()
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [showAfter])

    return (
        <>
            {/* Desktop: lateral derecho */}
            <AnimatePresence>
                {visible && (
                    <motion.aside
                        initial={{ x: 80, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: 80, opacity: 0 }}
                        transition={{ type: 'spring', stiffness: 260, damping: 24 }}
                        className="fixed right-5 top-1/2 hidden -translate-y-1/2 lg:block"
                    >
                        <Link
                            href={href}
                            className="shadow-soft inline-flex items-center gap-2 rounded-2xl bg-brand-500 px-4 py-3 text-sm font-medium text-white ring-1 ring-brand-400/30 transition hover:bg-brand-600"
                        >
                            <CalendarClock className="h-4 w-4" />
                            {label}
                        </Link>
                    </motion.aside>
                )}
            </AnimatePresence>

            {/* Mobile: pill flotante inferior */}
            <AnimatePresence>
                {visible && (
                    <motion.div
                        initial={{ y: 80, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 80, opacity: 0 }}
                        transition={{ type: 'spring', stiffness: 260, damping: 24 }}
                        className="fixed inset-x-0 bottom-4 z-50 mx-auto flex justify-center lg:hidden"
                    >
                        <Link
                            href={href}
                            className="shadow-soft inline-flex items-center gap-2 rounded-full bg-brand-500 px-5 py-3 text-sm font-medium text-white ring-1 ring-brand-400/30 transition hover:bg-brand-600"
                        >
                            <CalendarClock className="h-4 w-4" />
                            {label}
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}