import LocalizedStrings from 'react-native-localization'
import AsyncStorage from '@react-native-async-storage/async-storage'

import en from './en.json'
import es from './es.json'

type Language = 'en' | 'es'

const locales = new LocalizedStrings({
  en,
  es,
})

export const changeLanguage = (languageKey: Language) => {
  locales.setLanguage(languageKey)
  AsyncStorage.setItem('@language', languageKey)
}

export const getAvailableLanguages = (): string[] =>
  locales.getAvailableLanguages()

export const getLanguage = (): string => locales.getLanguage()

type LocalesKeys = keyof typeof locales

export const translate = (key: LocalesKeys, params?: string[]) => {
  if (Array.isArray(locales)) {
    return locales.map(t => t[key]).join(' ')
  }

  const locale = locales[key] as string

  if (params) {
    const parsedParams = params.map(k => {
      const paramKey = k as LocalesKeys
      const paramLocale = locales[paramKey] as string
      return paramLocale
    })

    return locales.formatString(locale, ...parsedParams)
  }

  return locale
}
