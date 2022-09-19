import React from 'react'
import { StatusBar } from 'react-native'
import styled from 'styled-components/native'

import ContextsProviders from '../contexts'
import StylesProvider from '../style'

type ProvidersProps = {
  children: JSX.Element
}

const Providers: React.FC<ProvidersProps> = ({ children }): JSX.Element => (
  <ContextsProviders>
    <StylesProvider>
      <Container>{children}</Container>
    </StylesProvider>
  </ContextsProviders>
)

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.palette.background};
`

export default Providers
