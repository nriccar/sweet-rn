import React from 'react'

import Navigation from './navigation'
import Providers from './providers'

const App: React.FC = (): JSX.Element => {
  return (
    <Providers>
      <Navigation />
    </Providers>
  )
}

export default App
