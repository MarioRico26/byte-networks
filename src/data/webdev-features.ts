// src/data/webdev-features.ts
import type { LucideIcon } from 'lucide-react'
import {
    Code2,
    Layers,
    Palette,
    Search,
    ShieldCheck,
    LifeBuoy,
    Server,
    Boxes,
} from 'lucide-react'

export type WebDevFeature = {
    title: string
    desc: string
    icon: LucideIcon
}

export const WEBDEV_FEATURES: WebDevFeature[] = [
    {
        title: 'Frontend Tech',
        desc: 'HTML, CSS, JavaScript, React, Vite, Next.js, Tailwind CSS',
        icon: Code2,
    },
    {
        title: 'Enterprise Architecture',
        desc: 'Scalable, secure and flexible architectures for long-term growth',
        icon: Layers,
    },
    {
        title: 'UI/UX Design',
        desc: 'Minimalist, user-friendly interfaces with modern visual polish',
        icon: Palette,
    },
    {
        title: 'SEO & Performance',
        desc: 'Fast loading speeds, best practices and search optimization',
        icon: Search,
    },
    {
        title: 'Security & Standards',
        desc: 'Built with compliance, security and reliability in mind',
        icon: ShieldCheck,
    },
    {
        title: 'Support & Scalability',
        desc: 'Ongoing updates, maintenance, and business growth in mind',
        icon: LifeBuoy,
    },
    {
        title: 'Backend Development',
        desc: 'Node.js, Express, APIs, SQL, PostgreSQL, MongoDB',
        icon: Server,
    },
    {
        title: 'Fullstack Solutions',
        desc: 'Frontend + backend integration with scalable architecture',
        icon: Boxes,
    },
]