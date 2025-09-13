// src/data/audio-systems.ts

export const AUDIO_LEFT = [
    {
        title: 'Smart Audio Zones',
        body: [
            'We specialize in multi-zone audio installations using systems like Sonos, Yamaha MusicCast, and Denon HEOS. Control each zone independently or synchronize them for immersive, whole-home audio.',
        ],
    },
    {
        title: 'Wireless & Centralized',
        body: [
            'From ceiling speakers to high-end soundbars, we integrate wireless solutions that blend into your environment and connect seamlessly via Wi-Fi, Ethernet, or controller hubs.',
        ],
    },
    {
        title: 'Mobile & Voice Control',
        body: [
            'All systems can be controlled via apps or voice assistants like Alexa, Google Assistant, and Siri for effortless audio experiences.',
        ],
    },
] as const

export const AUDIO_RIGHT = [
    {
        title: 'Custom Installations',
        body: [
            'We offer tailored setups for indoor/outdoor spaces, commercial environments, and entertainment rooms, ensuring perfect sound quality and aesthetics.',
        ],
    },
    {
        title: 'System Integration',
        body: [
            'Audio systems are integrated with your home network, automation platform, and mobile ecosystem for unified control.',
        ],
    },
    {
        title: 'Full Support',
        body: [
            'From planning and wiring to testing and app setup, we offer complete service including upgrades and maintenance.',
        ],
    },
] as const

// Marcas (pon los SVG en /public/brands/<slug>.svg si los tienes; hay fallback)
export const AUDIO_BRANDS = [
    { name: 'Sonos', slug: 'sonos' },
    { name: 'Bose', slug: 'bose' },
    { name: 'Yamaha', slug: 'yamaha' },
    { name: 'Polk Audio', slug: 'polk-audio' },
    { name: 'Denon', slug: 'denon' },
    { name: 'Klipsch', slug: 'klipsch' },
] as const