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
                    50:  '#eef3ff',
                    100: '#dde7fb',
                    200: '#c2d3f3',
                    300: '#9eb7e6',
                    400: '#6f92d8',
                    500: '#3f6fcf',
                    600: '#335bb0',
                    700: '#2a4a91',
                    800: '#223d74',
                    900: '#1b315d',
                },
                accent: {
                    50:  '#eff3ff',
                    100: '#dde7fb',
                    200: '#c8d7f5',
                    300: '#a6bde9',
                    400: '#7f9cd9',
                    500: '#3f6fcf',
                    600: '#335cb1',
                    700: '#2b4c93',
                    800: '#243f79',
                    900: '#1d335f',
                },
                cyan: {
                    50: '#ecf3ff',
                    100: '#dbe6fb',
                    200: '#bfd1ef',
                    300: '#9ab5dc',
                    400: '#7f9fcd',
                    500: '#6286b5',
                    600: '#506f95',
                    700: '#425b79',
                    800: '#36495f',
                    900: '#2c3d4f',
                },
                fuchsia: {
                    50: '#eff2ff',
                    100: '#e0e6fb',
                    200: '#ccd7ef',
                    300: '#adbee0',
                    400: '#92a4ce',
                    500: '#7486b3',
                    600: '#607095',
                    700: '#505d79',
                    800: '#414b60',
                    900: '#353d4e',
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
                    'radial-gradient(56% 56% at 74% 16%, rgba(63,111,207,0.3) 0%, rgba(63,111,207,0) 72%), radial-gradient(44% 44% at 12% 88%, rgba(111,146,216,0.16) 0%, rgba(111,146,216,0) 66%), linear-gradient(180deg, #0e1630 0%, #070b14 64%)',
            },
            boxShadow: {
                'soft-xl': '0 18px 42px -22px rgba(63, 111, 207, 0.6)',
            },
        },
    },
    plugins: [],
} satisfies Config
