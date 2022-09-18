import * as React from 'react'
import styled from 'styled-components/native'
import { StackScreenProps } from '@react-navigation/stack'

import { translate } from '../../locale'

import Typography from '../../components/typography'
import Log from '../../utils/log'

type AppProps = {
  navigation?: StackScreenProps<{ App: {} }, 'App'>['navigation']
  route?: StackScreenProps<{ App: {} }, 'App'>['route']
}

const App: React.FC<AppProps> = (): JSX.Element => {
  Log('App', 'success')

  return (
    <Container test={true}>
      <Title variant="title">
        {translate('hello')} {translate('world')}
      </Title>
    </Container>
  )
}

type ContainerProps = {
  test: boolean
}
const Container = styled.View<ContainerProps>`
  background-color: ${({ theme }) => theme.palette.brand};
  flex: ${({ test }) => (test ? 1 : 0.5)};
`

const Title = styled(Typography)`
  color: ${({ theme }) => theme.palette.whites[0]};
`

export default App
