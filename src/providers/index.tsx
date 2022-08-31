import React from 'react'
import { SafeAreaView } from 'react-native'

import ContextsProviders from '../contexts'
import StylesProvider from '../style'

type ProvidersProps = {
  children: JSX.Element
}

const Providers: React.FC<ProvidersProps> = ({ children }): JSX.Element => (
  <SafeAreaView>
    <StylesProvider>
      <ContextsProviders>{children}</ContextsProviders>
    </StylesProvider>
  </SafeAreaView>
)

export default Providers
