import * as React from 'react'

import Lottie from 'lottie-react-native'
import styled from 'styled-components/native'
import { AnyStyledComponent } from 'styled-components'
import { StackScreenProps } from '@react-navigation/stack'

import { changeLanguage, translate } from '@swrn/locale'
import { useLanguage } from '@swrn/contexts/language'
import { useTheme } from '@swrn/contexts/theme'

import Typography from '@swrn/components/typography'
import Switch from '@swrn/components/switch'

import sun from '@swrn/assets/icons/sun.png'
import moon from '@swrn/assets/icons/moon.png'

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

  const handleLanguageChange = (value: 'en' | 'es') => {
    changeLanguage(value)
    setLanguage(value)
  }

  const [theme, setTheme] = useTheme()

  const handleThemeChange = (value: boolean) => {
    setTheme(value ? 'light' : 'dark')
  }

  const rocket =
    theme === 'light'
      ? require('@swrn/assets/lottie/rocket.json')
      : require('@swrn/assets/lottie/rocket_dark.json')

  return (
    <Container>
      <RockerContainer>
        <Rocket source={rocket} resizeMode="contain" autoPlay loop />
      </RockerContainer>

      <TextsContainer>
        <Title variant="subtitle">{translate('welcome')}</Title>
        <Title variant="title">{translate('app_name')}</Title>
        <Description variant="body">{translate('description')}</Description>
      </TextsContainer>

      <ButtonsContainer>
        <Switch
          thumbImages={[sun, moon]}
          onSwitch={handleThemeChange}
          trackColors={['#767577', '#f5dd4b']}
          thumbColors={['#81b0ff', '#f4f3f4']}
        />

        <LanguagesContainer>
          {languages.map(({ value, label }) => (
            <LanguageButton
              key={`app-languages-button-${label}`}
              onPress={() => handleLanguageChange(value as 'en' | 'es')}
            >
              <LanguageText variant="button">{label}</LanguageText>
            </LanguageButton>
          ))}
        </LanguagesContainer>
      </ButtonsContainer>
    </Container>
  )
}

const Container = styled.View`
  background-color: ${({ theme }) => theme.palette.background};
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
`

const RockerContainer = styled.TouchableOpacity`
  flex: 0.5;
  justify-content: center;
  align-items: center;
`

const Rocket = styled(Lottie as unknown as AnyStyledComponent)`
  height: 450px;
`

const TextsContainer = styled.View`
  flex: 0.3;
`

const Title = styled(Typography)`
  text-align: center;
`

const Description = styled(Typography)`
  text-align: center;
  margin-top: 15px;
`

const ButtonsContainer = styled.View`
  flex: 0.2;
  align-items: center;
`

const LanguagesContainer = styled.View`
  flex-direction: row;
  margin-bottom: 30px;
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
