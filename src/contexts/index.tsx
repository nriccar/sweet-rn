import React from 'react'

import { LanguageProvider } from './language'
import { ModalProvider } from './modal'

type ContextsProvidersProps = {
  children: JSX.Element[] | JSX.Element
}

const ContextsProviders: React.FC<ContextsProvidersProps> = ({
  children,
}): JSX.Element => (
  <ModalProvider>
    <LanguageProvider>{children}</LanguageProvider>
  </ModalProvider>
)

export default ContextsProviders
