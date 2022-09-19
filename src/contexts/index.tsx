import React from 'react'

import { ThemeProvider } from './theme'
import { LanguageProvider } from './language'
import { ModalProvider } from './modal'

type ContextsProvidersProps = {
  children: JSX.Element[] | JSX.Element
}

const ContextsProviders: React.FC<ContextsProvidersProps> = ({
  children,
}): JSX.Element => (
  <ModalProvider>
    <LanguageProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </LanguageProvider>
  </ModalProvider>
)

export default ContextsProviders
