'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

type BrandItem = { name: string; slug: string }

export default function BrandStrip({ items, title = 'Some Brands & Technologies We Use' }: { items: readonly BrandItem[]; title?: string }) {
    return (
        <section className="mt-16 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
            <h2 className="text-xl font-semibold">{title}</h2>

            <motion.ul
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.06 } } }}
                className="mt-6 grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-6"
            >
                {items.map((b) => (
                    <motion.li
                        key={b.slug}
                        variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}
                        className="flex flex-col items-center gap-2"
                    >
                        <div className="relative grid h-20 w-20 place-items-center rounded-xl border border-white/10 bg-white/10">
                            <Image
                                src={`/brands/${b.slug}.svg`}
                                alt={b.name}
                                width={48}
                                height={48}
                                className="opacity-80 transition hover:opacity-100"
                                onError={({ currentTarget }) => {
                                    // si no existe el logo, ocultamos la imagen y dejamos las iniciales
                                    (currentTarget as HTMLImageElement).style.display = 'none'
                                }}
                                priority={false}
                            />
                            {/* Fallback: iniciales */}
                            <span className="pointer-events-none absolute text-sm font-medium text-neutral-200">
                {initials(b.name)}
              </span>
                        </div>
                        <span className="text-xs text-neutral-300">{b.name}</span>
                    </motion.li>
                ))}
            </motion.ul>
        </section>
    )
}

function initials(name: string) {
    const parts = name.split(/\s+/).filter(Boolean)
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase()
    return (parts[0][0] + parts[1][0]).toUpperCase()
}