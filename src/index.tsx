import React from 'react'

import Navigation from './navigation'
import Providers from './providers'

type AppProps = {}

const App: React.FC<AppProps> = ({}): JSX.Element => {
  return (
    <Providers>
      <Navigation />
    </Providers>
  )
}

export default App
