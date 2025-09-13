// src/data/services.ts

export type IconKey =
    | 'Globe'
    | 'Database'
    | 'AudioLines'
    | 'Wifi'
    | 'Lightbulb'
    | 'Wrench'
    | 'Laptop'
    | 'Camera'
    | 'ShieldCheck'
    | 'Plug'
    | 'HardDrive'
    | 'Gauge'

export type ServiceCard = {
    slug: string
    href: `/services/${string}`
    icon: IconKey
    title: string
    blurb: string
}

export const SERVICES: ServiceCard[] = [
    {
        slug: 'web-dev',
        href: '/services/web-development',
        icon: 'Globe',
        title: 'Web Development',
        blurb: 'Modern, fast, SEO-friendly websites built with Next.js and Tailwind.',
    },
    {
        slug: 'custom-software',
        href: '/services/custom-software',
        icon: 'Database',
        title: 'Custom Software',
        blurb: 'Portals, CRMs and workflows tailored to your business.',
    },
    {
        slug: 'networking-wifi',
        href: '/services/networking', // 👈 coincide con tu carpeta
        icon: 'Wifi',
        title: 'Networking & Wi-Fi',
        blurb: 'Enterprise-grade wired/wireless networks with security.',
    },
    {
        slug: 'audio-systems',
        href: '/services/audio-systems', // 👈 coincide con tu carpeta
        icon: 'AudioLines',
        title: 'Audio Systems',
        blurb: 'Indoor/outdoor audio, multi-zone Sonos, clean installs.',
    },
    {
        slug: 'it-consulting',
        href: '/services/it-consulting',
        icon: 'Lightbulb',
        title: 'IT Consulting',
        blurb: 'Architecture, security, and transformation guidance.',
    },
    {
        slug: 'repairs',
        href: '/services/repairs',
        icon: 'Wrench',
        title: 'Repairs & Installations',
        blurb: 'On-site fixes and neat installs for PCs, CCTV and more.',
    },
]

// Opcional: alias si otros componentes importan este nombre
export const HOME_SERVICES = SERVICES