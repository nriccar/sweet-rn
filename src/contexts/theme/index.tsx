import React, { createContext, useState } from 'react'
import { useAsyncStorage } from '@app/hooks/useLocalStorage'

export type Theme = 'light' | 'dark'

type IThemeContext = [Theme, React.Dispatch<React.SetStateAction<Theme>>]

export const ThemeContext = createContext<IThemeContext>(['light', () => {}])
ThemeContext.displayName = 'ThemeContext'

type ThemeProviderProps = {
  children: JSX.Element[] | JSX.Element
}

export const ThemeProvider: React.FC<ThemeProviderProps> = (
  props,
): JSX.Element => {
  const [theme, setTheme] = useAsyncStorage('@theme', 'light') as IThemeContext

  return (
    <ThemeContext.Provider value={[theme, setTheme]} {...props}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = React.useContext(ThemeContext)

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }

  return context
}
