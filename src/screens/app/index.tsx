import * as React from 'react'

import Lottie from 'lottie-react-native'
import styled from 'styled-components/native'
import { AnyStyledComponent } from 'styled-components'
import { StackScreenProps } from '@react-navigation/stack'

import { translate } from '@swrn/locale'

import Typography from '@swrn/components/typography'
import Log from '@swrn/utils/log'

type AppProps = {
  navigation?: StackScreenProps<{ App: {} }, 'App'>['navigation']
  route?: StackScreenProps<{ App: {} }, 'App'>['route']
}

const App: React.FC<AppProps> = (): JSX.Element => {
  return (
    <Container>
      <RockerContainer>
        <Rocket
          source={require('@swrn/assets/lottie/rocket.json')}
          resizeMode="contain"
          autoPlay
          loop
        />
      </RockerContainer>

      <TextsContainer>
        <Title variant="title">{translate('welcome', ['app_name'])}</Title>
        <Description variant="body">{translate('description')}</Description>
      </TextsContainer>
    </Container>
  )
}

const Container = styled.View`
  background-color: ${({ theme }) => theme.palette.whites[4]};
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
`

const RockerContainer = styled.View`
  flex: 2;
  justify-content: center;
  align-items: center;
`

const Rocket = styled(Lottie as unknown as AnyStyledComponent)`
  height: 450px;
`

const TextsContainer = styled.View`
  flex: 1;
`

const Title = styled(Typography)`
  text-align: center;
`

const Description = styled(Typography)`
  text-align: center;
  margin-top: 15px;
`

export default App
