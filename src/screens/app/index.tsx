import * as React from 'react'

import Lottie from 'lottie-react-native'
import styled from 'styled-components/native'
import { AnyStyledComponent } from 'styled-components'
import { StackScreenProps } from '@react-navigation/stack'

import { changeLanguage, getLanguage, translate } from '@swrn/locale'
import { useLanguage } from '@swrn/contexts/language'

import Typography from '@swrn/components/typography'

type AppProps = {
  navigation?: StackScreenProps<{ App: {} }, 'App'>['navigation']
  route?: StackScreenProps<{ App: {} }, 'App'>['route']
}

type Language = {
  value: string
  label: string
}

const languages: Language[] = [
  {
    value: 'en',
    label: 'English',
  },
  {
    value: 'es',
    label: 'Español',
  },
]

const App: React.FC<AppProps> = (): JSX.Element => {
  const [, setLanguage] = useLanguage()

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
        <Title variant="subtitle">{translate('welcome')}</Title>
        <Title variant="title">{translate('app_name')}</Title>
        <Description variant="body">{translate('description')}</Description>
      </TextsContainer>

      <LanguagesContainer>
        {languages.map(({ value, label }) => (
          <LanguageButton
            key={`app-languages-button-${label}`}
            onPress={() => {
              changeLanguage(value)
              setLanguage(value)
            }}
          >
            <LanguageText variant="button">{label}</LanguageText>
          </LanguageButton>
        ))}
      </LanguagesContainer>
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

const RockerContainer = styled.TouchableOpacity`
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

const LanguagesContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex: 0.3;
`

const LanguageButton = styled.TouchableOpacity`
  margin: 0 20px;
  padding: 10px 20px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.palette.brand[0]};
  box-shadow: 0 3px 5px ${({ theme }) => theme.palette.blacks[5]};
`

const LanguageText = styled(Typography)`
  color: ${({ theme }) => theme.palette.whites[0]};
`

export default App
