// src/data/projects.ts
export type Project = {
    id: string
    title: string
    tag: string
    url: string
    blurb: string
    images: string[]   // rutas relativas a /public
    featured?: boolean
    highlights?: string[]
    metrics?: { label: string; value: string; detail?: string }[]
    cta?: string
  }
  
  export const PROJECTS: Project[] = [
    {
      id: 'byte-ledger',
      title: 'Byte Ledger',
      tag: 'Product',
      url: 'https://byteledger.bytenetworks.net',
      blurb: 'Our first commercial product for operations, invoicing control, and financial visibility.',
      images: [
        '/screenshots/byte-ledger/1.webp',
        '/screenshots/byte-ledger/2.webp',
        '/screenshots/byte-ledger/3.webp',
        '/screenshots/byte-ledger/4.webp',
        '/screenshots/byte-ledger/5.webp',
        '/screenshots/byte-ledger/6.webp',
        '/screenshots/byte-ledger/7.webp',
        '/screenshots/byte-ledger/8.webp',
        '/screenshots/byte-ledger/9.webp',
      ],
      featured: true,
      metrics: [
        { label: 'Quotes & Invoices', value: 'Faster', detail: 'Owner-reported time savings in daily operations.' },
        { label: 'Payments & Balances', value: 'Clearer', detail: 'Improved control and visibility for follow-ups.' },
        { label: 'Overall Workflow', value: 'More Organized', detail: 'Client reports cleaner and more predictable execution.' },
      ],
      highlights: [
        'Unified jobs, expenses, and invoice lifecycle',
        'Approval workflows with clean audit history',
        'Real-time dashboards for business decisions',
      ],
      cta: 'Visit Byte Ledger',
    },
    {
      id: 'glimmerglass',
      title: 'GlimmerGlass Order System',
      tag: 'B2B Portal',
      url: 'https://glimmerglass-order-system.vercel.app',
      blurb: 'Dealer order portal with status timeline, media uploads, and dealer notifications.',
      images: [
        '/screenshots/glimmerglass/1.webp',
        '/screenshots/glimmerglass/2.webp',
        '/screenshots/glimmerglass/3.webp',
        '/screenshots/glimmerglass/4.webp',
        '/screenshots/glimmerglass/5.webp',
      ],
    },
    {
      id: 'kline',
      title: 'Kline Task Manager',
      tag: 'Ops / Field',
      url: 'https://kline-task-manager.vercel.app',
      blurb: 'Tasks by property, file attachments, email alerts, and clean UX for field teams.',
      images: [
        '/screenshots/kline/1.webp',
        '/screenshots/kline/2.webp',
        '/screenshots/kline/3.webp',
        '/screenshots/kline/4.webp',
      ],
    },
    {
      id: 'mission',
      title: 'Mission Cleaning Company',
      tag: 'Website',
      url: 'https://www.missioncleaningcompany.com',
      blurb: 'Modern marketing site with clear services, contact capture, and fast performance.',
      images: [
        '/screenshots/mission/1.webp',
        '/screenshots/mission/2.webp',
        '/screenshots/mission/3.webp',
      ],
    },
  ]
