import { changeLanguage, getLanguage, locales } from '@swrn/locale'
import React, { createContext, useEffect, useState } from 'react'
import { LayoutAnimation, UIManager, Platform } from 'react-native'

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true)
}

type ILanguageContext = [string, React.Dispatch<React.SetStateAction<string>>]

export const LanguageContext = createContext<ILanguageContext>(['en', () => {}])
LanguageContext.displayName = 'LanguageContext'

type LanguageProviderProps = {
  children: JSX.Element[] | JSX.Element
}

export const LanguageProvider: React.FC<LanguageProviderProps> = (
  props,
): JSX.Element => {
  const [language, setLanguage] = useState<string>('en')

  useEffect(() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.linear)
    changeLanguage(language)
  }, [language])

  return (
    <LanguageContext.Provider value={[language, setLanguage]} {...props}>
      {props.children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = React.useContext(LanguageContext)

  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }

  return context
}
