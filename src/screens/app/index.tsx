import * as React from 'react'

import Lottie from 'lottie-react-native'
import styled from 'styled-components/native'
import { AnyStyledComponent } from 'styled-components'
import { StackScreenProps } from '@react-navigation/stack'

import { changeLanguage, translate } from '@app/locale'
import { useLanguage } from '@app/contexts/language'
import { useTheme } from '@app/contexts/theme'

import Typography from '@app/components/typography'
import Switch from '@app/components/switch'

import sun from '@app/assets/icons/sun.png'
import moon from '@app/assets/icons/moon.png'
import Button from '@app/components/button'

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
      ? require('@app/assets/lottie/rocket.json')
      : require('@app/assets/lottie/rocket_dark.json')

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
          thumbColors={['#ffffff', '#828080']}
        />

        <LanguagesContainer>
          {languages.map(({ value, label }) => (
            <LanguageButton
              text={label}
              key={`app-languages-button-${label}`}
              onPress={() => handleLanguageChange(value as 'en' | 'es')}
            />
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

const LanguageButton = styled(Button)``

export default App
