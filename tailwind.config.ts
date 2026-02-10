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
                brand: {
                    50:  '#eef5ff',
                    100: '#dceafe',
                    200: '#bfd6ff',
                    300: '#95baff',
                    400: '#6f9dff',
                    500: '#3f6fcf',
                    600: '#3575e6',
                    700: '#285bc2',
                    800: '#21499b',
                    900: '#1c3c7a',
                },
                accent: {
                    50:  '#fff8eb',
                    100: '#feefcb',
                    200: '#fcdd95',
                    300: '#f9c45f',
                    400: '#f7af36',
                    500: '#f59e0b',
                    600: '#de8605',
                    700: '#b76606',
                    800: '#944f0d',
                    900: '#7a420f',
                },
                gold: {
                    300: '#fde68a',
                    400: '#fbbf24',
                    500: '#f59e0b',
                },
            },
            fontFamily: {
                display: ['var(--font-display)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
                body: ['var(--font-body)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
                mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular', 'monospace'],
            },
            backgroundImage: {
                'grid-radial':
                    'radial-gradient(circle at center, rgba(244,247,255,0.08) 0, rgba(244,247,255,0.05) 30%, rgba(244,247,255,0.02) 60%, transparent 72%)',
                glow:
                    'radial-gradient(56% 56% at 74% 16%, rgba(63,111,207,0.32) 0%, rgba(63,111,207,0) 72%), radial-gradient(44% 44% at 12% 88%, rgba(245,158,11,0.16) 0%, rgba(245,158,11,0) 66%), linear-gradient(180deg, #0e1630 0%, #070b14 64%)',
            },
            boxShadow: {
                'soft-xl': '0 18px 42px -22px rgba(63, 111, 207, 0.7)',
            },
        },
    },
    plugins: [],
} satisfies Config
