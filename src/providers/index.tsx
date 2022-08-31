import React from 'react'

import ContextsProviders from '../contexts'
import StylesProvider from '../style'

type ProvidersProps = {
  children: JSX.Element
}

const Providers: React.FC<ProvidersProps> = ({ children }): JSX.Element => (
  <StylesProvider>
    <ContextsProviders>{children}</ContextsProviders>
  </StylesProvider>
)

export default Providers
