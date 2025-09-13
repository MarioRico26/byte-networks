export type IconName = 'Globe' | 'Code2' | 'Wifi' | 'AudioLines' | 'Briefcase' | 'Wrench'

export type ServiceItem = {
    slug: string
    title: string
    blurb: string
    icon: IconName
}

export const HOME_SERVICES: ServiceItem[] = [
    {
        slug: 'web-development',
        title: 'Web Development',
        blurb: 'High-performance, SEO-ready websites built with Next.js.',
        icon: 'Globe',
    },
    {
        slug: 'custom-software',
        title: 'Custom Software',
        blurb: 'Tailored applications, portals and automations for your workflow.',
        icon: 'Code2',
    },
    {
        slug: 'networking',
        title: 'Networking & Wi-Fi',
        blurb: 'Secure firewalls, seamless roaming and proactive monitoring.',
        icon: 'Wifi',
    },
    {
        slug: 'audio-systems',
        title: 'Audio Systems',
        blurb: 'Multi-room, theaters and outdoor sound—tuned to your space.',
        icon: 'AudioLines',
    },
    {
        slug: 'it-consulting',
        title: 'IT Consulting',
        blurb: 'Strategy, selection and delivery that aligns with your KPIs.',
        icon: 'Briefcase',
    },
    {
        slug: 'repairs-installations',
        title: 'Repairs & Installations',
        blurb: 'On-site fixes, clean installs, tidy racks and documentation.',
        icon: 'Wrench',
    },
]