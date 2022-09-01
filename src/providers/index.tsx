import React from 'react'
import styled from 'styled-components/native'

import ContextsProviders from '../contexts'
import StylesProvider from '../style'

type ProvidersProps = {
  children: JSX.Element
}

const Providers: React.FC<ProvidersProps> = ({ children }): JSX.Element => (
  <StylesProvider>
    <ContextsProviders>
      <Container>{children}</Container>
    </ContextsProviders>
  </StylesProvider>
)

const Container = styled.SafeAreaView`
  flex: 1;
`

export default Providers
