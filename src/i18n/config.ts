export const LOCALES = ['en', 'es'] as const
export type Locale = (typeof LOCALES)[number]

export const DEFAULT_LOCALE: Locale = 'en'

export function isLocale(value: string): value is Locale {
  return LOCALES.includes(value as Locale)
}

export function localePrefix(locale: Locale): string {
  return locale === 'es' ? '/es' : ''
}

export function localizeHref(href: string, locale: Locale): string {
  if (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')) return href
  const prefix = localePrefix(locale)
  if (href.startsWith('#')) return `${prefix}${href}`
  if (href.startsWith('/')) return `${prefix}${href}`
  return href
}
