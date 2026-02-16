import { type Locale } from '@/i18n/config'

const COPY: Record<Locale, { rights: string; built: string }> = {
    en: {
        rights: 'All rights reserved.',
        built: 'Built with Next.js + Tailwind',
    },
    es: {
        rights: 'Todos los derechos reservados.',
        built: 'Construido con Next.js + Tailwind',
    },
}

export default function Footer({ locale = 'en' }: { locale?: Locale }) {
    const copy = COPY[locale]
    return (
        <footer className="mt-20 border-t border-white/10 bg-[#070d1a] py-10">
            <div className="container-page flex flex-col items-center justify-between gap-4 sm:flex-row">
                <p className="text-sm text-neutral-400">
                    © {new Date().getFullYear()} Byte Networks. {copy.rights}
                </p>
                <div className="rounded-full border border-white/12 bg-white/[0.04] px-3 py-1 text-xs text-neutral-300">{copy.built}</div>
            </div>
        </footer>
    )
}
