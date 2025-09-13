// src/data/categories.ts
export type IconName =
    | 'Globe'
    | 'Database'
    | 'Wifi'
    | 'AudioLines'
    | 'Wrench'
    | 'Lightbulb'
    | 'Camera'

export type CategoryItem = {
    title: string
    desc: string
    href: string
    icon: IconName
}

export type ServiceCategory = {
    key: string
    title: string
    blurb: string
    items: CategoryItem[]
}

export const SERVICE_CATEGORIES: ServiceCategory[] = [
    {
        key: 'dev',
        title: 'Development',
        blurb:
            'Modern web and custom software tailored to your business, built for performance and scale.',
        items: [
            {
                title: 'Web Development',
                desc: 'Next.js, SEO, accessibility and performance best practices.',
                href: '/#services', // si ya tienes la página, usa '/services/web-development'
                icon: 'Globe',
            },
            {
                title: 'Custom Software',
                desc: 'APIs, portals & LOB apps with secure integrations.',
                href: '/#services', // o '/services/custom-software'
                icon: 'Database',
            },
        ],
    },
    {
        key: 'infra',
        title: 'IT & Infrastructure',
        blurb:
            'Enterprise-grade networking and pragmatic consulting to align tech with business outcomes.',
        items: [
            {
                title: 'Networking & Wi-Fi',
                desc: 'VLANs, roaming Wi-Fi, firewalls/UTM and monitoring.',
                href: '/#services', // o '/services/networking-wifi'
                icon: 'Wifi',
            },
            {
                title: 'IT Consulting',
                desc: 'Assessments, software selection, automation and analytics.',
                href: '/#services', // o '/services/it-consulting'
                icon: 'Lightbulb',
            },
        ],
    },
    {
        key: 'av',
        title: 'AV & Smart Spaces',
        blurb:
            'Clean installations and seamless control for homes, offices and venues.',
        items: [
            {
                title: 'Audio Systems',
                desc: 'Multi-zone audio, theaters, calibration and app control.',
                href: '/#services', // o '/services/audio-systems'
                icon: 'AudioLines',
            },
            {
                title: 'CCTV & Cameras',
                desc: 'Wiring, remote/mobile access and monitoring.',
                href: '/#services', // o '/services/repairs-installations'
                icon: 'Camera',
            },
        ],
    },
    {
        key: 'support',
        title: 'Support & Repairs',
        blurb:
            'Fast, reliable fixes and professional setups with neat wiring and documentation.',
        items: [
            {
                title: 'Repairs & Installations',
                desc: 'PC/Mac, devices, Wi-Fi, audio and more — ready to use.',
                href: '/#services', // o '/services/repairs-installations'
                icon: 'Wrench',
            },
        ],
    },
]