import React from 'react'
import { ThemeProvider } from 'styled-components/native'

import { useTheme } from '@app/contexts/theme'

import { palette } from './palette'
import { StatusBar } from 'react-native'

type StylesProviderProps = {
  children: JSX.Element
}

const StylesProvider: React.FC<StylesProviderProps> = ({
  children,
}): JSX.Element => {
  const [selectedTheme] = useTheme()

  const theme = {
    selected: selectedTheme,
    palette: palette[selectedTheme],
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        backgroundColor={selectedTheme === 'light' ? '#fff' : '#000'}
        barStyle={selectedTheme === 'light' ? 'dark-content' : 'light-content'}
      />
      {children}
    </ThemeProvider>
  )
}

export default StylesProvider
