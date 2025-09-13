import type { Config } from 'tailwindcss'

export default {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                // NUEVA PALETA
                brand: {
                    50:  '#eff6ff',
                    100: '#dbeafe',
                    200: '#bfdbfe',
                    300: '#93c5fd',
                    400: '#60a5fa',
                    500: '#3b82f6', // azul primario
                    600: '#2563eb',
                    700: '#1d4ed8',
                    800: '#1e40af',
                    900: '#1e3a8a',
                },
                accent: {
                    50:  '#fff7ed',
                    100: '#ffedd5',
                    200: '#fed7aa',
                    300: '#fdba74',
                    400: '#fb923c',
                    500: '#f59e0b', // naranja
                    600: '#ea580c',
                    700: '#c2410c',
                    800: '#9a3412',
                    900: '#7c2d12',
                },
                gold: {
                    300: '#fde68a',
                    400: '#fbbf24', // amarillo
                    500: '#f59e0b',
                },
            },
            fontFamily: {
                display: ['var(--font-display)', 'ui-sans-serif', 'system-ui', 'Inter'],
                body: ['var(--font-body)', 'Inter', 'system-ui', 'sans-serif'],
            },
            backgroundImage: {
                'grid-radial':
                    'radial-gradient(circle at center, rgba(255,255,255,0.08) 0, rgba(255,255,255,0.06) 30%, rgba(255,255,255,0.03) 60%, transparent 70%)',
                // glow en azul + naranja
                glow:
                    'radial-gradient(60% 60% at 70% 20%, rgba(37,99,235,0.33) 0%, rgba(37,99,235,0) 70%), radial-gradient(45% 45% at 20% 80%, rgba(245,158,11,0.22) 0%, rgba(245,158,11,0) 60%)',
            },
            boxShadow: {
                'soft-xl': '0 10px 40px -12px rgba(37, 99, 235, 0.35)',
            },
        },
    },
    plugins: [],
} satisfies Config