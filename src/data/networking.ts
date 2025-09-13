// src/data/networking.ts
import type { LucideIcon } from 'lucide-react'
import {
    Server,
    Wifi,
    Layers,
    ShieldCheck,
    Map,
    RefreshCcw,
    Activity,
    Phone,
} from 'lucide-react'

export const NETWORK_LEFT = [
    {
        title: 'Enterprise-Grade Solutions',
        body: [
            'We design and deploy enterprise-grade network systems, ensuring stability, scalability, and performance.',
            'Our structured cabling and equipment layout follow best practices for data centers and businesses of all sizes.',
        ],
    },
    {
        title: 'Wi-Fi for Any Scale',
        body: [
            'From residential mesh networks to commercial-grade access points with seamless roaming and VLAN segregation — tailored to your needs.',
        ],
    },
    {
        title: 'Monitoring & Support',
        body: [
            'Remote monitoring and proactive support to ensure uptime and fast incident resolution, using tools like PRTG and Zabbix.',
        ],
    },
] as const

export const NETWORK_RIGHT = [
    {
        title: 'Firewall & Security',
        body: [
            'Robust firewall and UTM solutions to safeguard your business from external threats, with brands like Cisco, Fortinet, and SonicWall.',
        ],
    },
    {
        title: 'IP Phones & Communication',
        body: [
            'VoIP/IP-PBX systems with Cisco, Avaya, and Grandstream technologies — unified communications and SIP integration.',
        ],
    },
    {
        title: 'Special Projects',
        body: [
            'Wireless bridges, outdoor Wi-Fi, POS and guest networks with full compliance and captive portals.',
        ],
    },
] as const

export type NetFeature = {
    title: string
    desc: string
    icon: LucideIcon
}

export const NETWORK_FEATURES: NetFeature[] = [
    { title: 'Structured Cabling & Racks', desc: 'Clean layouts, labeling and rack builds that scale.', icon: Server },
    { title: 'Mesh & Seamless Roaming', desc: 'Consistent Wi-Fi experience across sites and floors.', icon: Wifi },
    { title: 'VLANs & Segmentation', desc: 'Traffic isolation, guest networks and RBAC.', icon: Layers },
    { title: 'Firewalls & UTM', desc: 'Perimeter security, IDS/IPS, VPN and web filtering.', icon: ShieldCheck },
    { title: 'Site Survey & Heatmaps', desc: 'Coverage planning to avoid dead zones.', icon: Map },
    { title: 'Redundancy & Failover', desc: 'Dual WAN, HA and quick recovery plans.', icon: RefreshCcw },
    { title: 'Monitoring & Alerts', desc: 'Telemetry, SLAs and alerting with clear runbooks.', icon: Activity },
    { title: 'VoIP & IP-PBX', desc: 'SIP trunks, IVR, call queues and extensions.', icon: Phone },
]

export const NETWORK_BRANDS = [
    { name: 'Cisco', slug: 'cisco' },
    { name: 'Fortinet', slug: 'fortinet' },
    { name: 'SonicWall', slug: 'sonicwall' },
    { name: 'Ubiquiti (UniFi)', slug: 'ubiquiti' },
    { name: 'Aruba', slug: 'aruba' },
    { name: 'TP-Link (Omada)', slug: 'tplink-omada' },
    { name: 'MikroTik', slug: 'mikrotik' },
    { name: 'Grandstream', slug: 'grandstream' },
] as const