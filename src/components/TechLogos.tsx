'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

type TechItem = { name: string; slug: string }

export default function TechLogos({ items }: { items: readonly TechItem[] }) {
    return (
        <section className="mt-16 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
            <h2 className="text-xl font-semibold">Technologies We Use</h2>
            <motion.ul
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                variants={{
                    hidden: { opacity: 0 },
                    show: { opacity: 1, transition: { staggerChildren: 0.06 } },
                }}
                className="mt-6 grid grid-cols-3 gap-6 sm:grid-cols-4 md:grid-cols-6"
            >
                {items.map((t) => (
                    <motion.li
                        key={t.slug}
                        variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}
                        className="flex flex-col items-center gap-2"
                    >
                        <div className="relative grid h-16 w-16 place-items-center rounded-full border border-white/10 bg-white/10">
                            <Image
                                src={`/tech/${t.slug}.svg`}
                                alt={t.name}
                                width={36}
                                height={36}
                                className="opacity-80 transition hover:opacity-100"
                                onError={({ currentTarget }) => {
                                    // Si no existe el archivo, oculta la imagen y deja el fallback (initials)
                                    (currentTarget as HTMLImageElement).style.display = 'none'
                                }}
                            />
                            {/* Fallback initials */}
                            <span className="pointer-events-none absolute text-xs font-medium text-neutral-200">
                {initials(t.name)}
              </span>
                        </div>
                        <span className="text-xs text-neutral-300">{t.name}</span>
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