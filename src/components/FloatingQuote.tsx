'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { MessageSquareQuote } from 'lucide-react'

export default function FloatingQuote() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: 'spring', stiffness: 120, damping: 16, delay: 0.2 }}
            className="fixed bottom-6 right-6 z-50"
        >
            <Link
                href="/#contact"
                className="group relative inline-flex items-center gap-2 rounded-2xl bg-brand-500 px-5 py-3 text-sm font-semibold text-white shadow-2xl ring-1 ring-brand-400/40 transition hover:translate-y-[-2px] hover:bg-brand-600"
            >
                {/* brillo sutil */}
                <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                <MessageSquareQuote className="h-[18px] w-[18px]" />
                <span>Get a quote</span>
            </Link>
        </motion.div>
    )
}