// src/data/it-consulting.ts

export const IT_LEFT = [
    {
        title: 'Smart IT Strategy',
        body: [
            'We help businesses define, execute, and optimize their IT roadmap—from cloud adoption to software modernization, cybersecurity, and automation.',
        ],
    },
    {
        title: 'Tools & Platforms',
        body: [
            'Hands-on experience with DocuWare, NAF, JDE E1, Salesforce, QuickBooks, Clover, Microsoft 365, and other key enterprise tools.',
        ],
    },
    {
        title: 'Financial & Operational Insight',
        body: [
            'We support organizations with reporting, budgeting, P&L analysis, and system audits that enable data-driven decisions.',
        ],
    },
] as const

export const IT_RIGHT = [
    {
        title: 'Certifications & Alliances',
        body: [
            'Certified Microsoft and AWS consultants.',
            'Alliances with QuickBooks, Salesforce & DocuWare.',
            'Experience in government & corporate RFPs.',
        ],
    },
    {
        title: 'Project Types',
        bullets: [
            'ERP and CRM implementations',
            'IT assessments and compliance audits',
            'Digital transformation strategy',
            'Business continuity planning',
        ],
    },
] as const

export const IT_FEATURES = [
    { title: 'Digital Strategy', desc: 'From planning to execution, aligned with KPIs.' },
    { title: 'Software Selection', desc: 'We guide you through choosing the best-fit tools.' },
    { title: 'Process Automation', desc: 'Identify tasks for streamlining and efficiency.' },
    { title: 'Data-Driven Decisions', desc: 'Dashboards, insights and smart reporting.' },
] as const

export const IT_PILLS = [
    { label: 'Clear diagnostics and recommendations', icon: 'Stethoscope' },
    { label: 'Strong understanding of data and finance', icon: 'BarChart3' },
    { label: 'Tailored plans for any business size', icon: 'Layers' },
    { label: 'Integration across your entire stack', icon: 'Puzzle' },
] as const

// Optional logos for the brands strip (place SVGs in /public/brands/*.svg)
export const IT_BRANDS = [
    { name: 'Microsoft', slug: 'microsoft' },
    { name: 'AWS', slug: 'aws' },
    { name: 'Salesforce', slug: 'salesforce' },
    { name: 'QuickBooks', slug: 'quickbooks' },
    { name: 'DocuWare', slug: 'docuware' },
    { name: 'Microsoft 365', slug: 'microsoft-365' },
] as const