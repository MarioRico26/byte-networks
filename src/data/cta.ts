import { localizeHref, type Locale } from '@/i18n/config'

export const PRIMARY_CTA = {
  label: 'Start a project',
  href: '#contact',
}

export const SECONDARY_CTA = {
  label: 'See our work',
  href: '#systems',
}

export const CTA_STYLES = {
  primary:
    'inline-flex items-center justify-center gap-2 rounded-2xl bg-brand-500 px-6 py-3 text-base font-semibold text-white shadow-soft-xl ring-1 ring-brand-300/30 transition duration-200 hover:-translate-y-0.5 hover:bg-brand-400',
  secondary:
    'rounded-2xl border border-white/18 bg-white/[0.04] px-6 py-3 text-base font-semibold text-slate-100 transition duration-200 hover:-translate-y-0.5 hover:bg-white/[0.09]',
}

const CTA_COPY: Record<Locale, { primary: string; secondary: string }> = {
  en: {
    primary: 'Start a project',
    secondary: 'See our work',
  },
  es: {
    primary: 'Iniciar proyecto',
    secondary: 'Ver nuestro trabajo',
  },
}

export function getCtas(locale: Locale) {
  return {
    primary: {
      label: CTA_COPY[locale].primary,
      href: localizeHref('#contact', locale),
    },
    secondary: {
      label: CTA_COPY[locale].secondary,
      href: localizeHref('#systems', locale),
    },
  }
}
