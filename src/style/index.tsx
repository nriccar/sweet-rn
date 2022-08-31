import React from 'react'
import { ThemeProvider } from 'styled-components/native'

import { theme } from './theme'

type StylesProviderProps = {
  children: JSX.Element
}

const StylesProvider: React.FC<StylesProviderProps> = ({
  children,
}): JSX.Element => <ThemeProvider theme={theme}>{children}</ThemeProvider>

export default StylesProvider
