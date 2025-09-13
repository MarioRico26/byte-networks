// src/data/repairs.ts

export type MiniIcon =
    | 'MonitorSmartphone'
    | 'Wifi'
    | 'AudioLines'
    | 'Camera'
    | 'Package'
    | 'ShieldCheck'

export type RepairCard = {
    title: string
    desc: string
    icon: MiniIcon
}

export const REPAIR_CARDS: readonly RepairCard[] = [
    {
        title: 'PC & Mac Repairs',
        desc: 'Hardware & software fixes, part replacement, formatting and system restores.',
        icon: 'MonitorSmartphone',
    },
    {
        title: 'Wi-Fi & Networking',
        desc: 'Home/office network installs, router configuration and coverage optimization.',
        icon: 'Wifi',
    },
    {
        title: 'Audio Systems',
        desc: 'Indoor/outdoor speakers, multi-zone Sonos, AV receivers and calibration.',
        icon: 'AudioLines',
    },
    {
        title: 'CCTV & Cameras',
        desc: 'Surveillance setup, wiring, remote/mobile access and monitoring.',
        icon: 'Camera',
    },
    {
        title: 'Device Installations',
        desc: 'Smart TVs, printers, NAS, cloud storage, tablets—configured and ready.',
        icon: 'Package',
    },
    {
        title: 'Security Setup',
        desc: 'Firewall, antivirus, access control and backups for peace of mind.',
        icon: 'ShieldCheck',
    },
]

export const REPAIRS_LEFT = [
    {
        title: 'Diagnostics First',
        body: [
            'We start with clear diagnostics to avoid guesswork. You get a transparent plan with scope, parts (if needed) and timeline.',
        ],
    },
    {
        title: 'Data Safety',
        body: [
            'Backups, cloning and encryption best practices. We protect your data before any major change or repair.',
        ],
    },
    {
        title: 'On-site & Remote',
        body: [
            'Same-day on-site visits available. For quick wins, we can connect securely and fix issues remotely.',
        ],
    },
] as const

export const REPAIRS_RIGHT = [
    {
        title: 'Clean Installations',
        body: [
            'Neat wiring, labeled terminations and rack builds. We leave everything accessible and future-proof.',
        ],
    },
    {
        title: 'Compliance & Security',
        body: [
            'Firewall policies, VPN, MFA and backups aligned to best practices—both residential and business.',
        ],
    },
    {
        title: 'Support That Stays',
        body: [
            'We document what we do and provide ongoing care options so you’re not left alone after Day 1.',
        ],
    },
] as const

export const REPAIRS_BRANDS = [
    { name: 'Apple', slug: 'apple' },
    { name: 'Microsoft', slug: 'microsoft' },
    { name: 'Ubiquiti', slug: 'ubiquiti' },
    { name: 'Synology', slug: 'synology' },
    { name: 'TP-Link', slug: 'tplink' },
    { name: 'Hikvision', slug: 'hikvision' },
] as const