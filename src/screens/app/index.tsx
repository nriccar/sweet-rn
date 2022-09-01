import * as React from 'react'
import styled from 'styled-components/native'
import { StackScreenProps } from '@react-navigation/stack'

import Typography from '../../components/typography'
import Log from '../../utils/log'

type AppProps = {
  navigation?: StackScreenProps<{ App: {} }, 'App'>['navigation']
  route?: StackScreenProps<{ App: {} }, 'App'>['route']
}

const App: React.FC<AppProps> = ({ navigation, route }): JSX.Element => {
  Log('App', 'success')

  return (
    <Container>
      <Title variant="title">Hello World!</Title>
    </Container>
  )
}

const Container = styled.View`
  background-color: ${({ theme }) => theme.palette.brand};
  flex: 1;
`

const Title = styled(Typography)`
  color: ${({ theme }) => theme.palette.whites[0]};
`

export default App
