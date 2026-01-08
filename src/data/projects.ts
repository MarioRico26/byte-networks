// src/data/projects.ts
export type Project = {
    id: string
    title: string
    tag: string
    url: string
    blurb: string
    images: string[]   // rutas relativas a /public
  }
  
  export const PROJECTS: Project[] = [
    {
      id: 'glimmerglass',
      title: 'GlimmerGlass Order System',
      tag: 'B2B Portal',
      url: 'https://glimmerglass-order-system.vercel.app',
      blurb: 'Dealer order portal with status timeline, media uploads, and dealer notifications.',
      images: [
        '/screenshots/glimmerglass/1.jpg',
        '/screenshots/glimmerglass/2.jpg',
        '/screenshots/glimmerglass/3.jpg',
      ],
    },
    {
      id: 'kline',
      title: 'Kline Task Manager',
      tag: 'Ops / Field',
      url: 'https://kline-task-manager.vercel.app',
      blurb: 'Tasks by property, file attachments, email alerts, and clean UX for field teams.',
      images: [
        '/screenshots/kline/1.jpg',
        '/screenshots/kline/2.jpg',
        '/screenshots/kline/3.jpg',
      ],
    },
    {
      id: 'mission',
      title: 'Mission Cleaning Company',
      tag: 'Website',
      url: 'https://www.missioncleaningcompany.com',
      blurb: 'Modern marketing site with clear services, contact capture, and fast performance.',
      images: [
        '/screenshots/mission/1.jpg',
        '/screenshots/mission/2.jpg',
        '/screenshots/mission/3.jpg',
      ],
    },
  ]