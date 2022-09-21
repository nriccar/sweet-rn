import { changeLanguage } from '@app/locale'
import React, { createContext, useEffect, useState } from 'react'
import { LayoutAnimation } from 'react-native'

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
