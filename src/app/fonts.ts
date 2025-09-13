import { Plus_Jakarta_Sans, Inter } from 'next/font/google'

export const fontDisplay = Plus_Jakarta_Sans({
    subsets: ['latin'],
    variable: '--font-display',
    weight: ['500', '600', '700', '800'],
})

export const fontBody = Inter({
    subsets: ['latin'],
    variable: '--font-body',
    weight: ['400', '500'],
})