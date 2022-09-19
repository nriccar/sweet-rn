import React from 'react'
import { LogBox } from 'react-native'
import { UIManager, Platform } from 'react-native'

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true)
}

import Navigation from './navigation'
import Providers from './providers'

const App: React.FC = (): JSX.Element => {
  LogBox.ignoreAllLogs()

  return (
    <Providers>
      <Navigation />
    </Providers>
  )
}

export default App
