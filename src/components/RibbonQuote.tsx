'use client'

import { motion } from 'framer-motion'

export default function RibbonQuote({
                                        text = 'We bridge the gap between business goals and technology execution.',
                                    }: {
    text?: string
}) {
    return (
        <section className="relative isolate">
            <motion.div
                initial={{ opacity: 0, y: -8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-r from-brand-700 via-brand-600 to-brand-500"
            >
                <div className="container-page py-10 text-center">
                    <blockquote className="text-balance text-2xl font-semibold leading-snug text-white md:text-3xl">
                        “{text}”
                    </blockquote>
                </div>
            </motion.div>
            {/* subtle divider */}
            <div className="pointer-events-none absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        </section>
    )
}
