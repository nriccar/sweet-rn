import * as React from 'react'
import { render } from '@testing-library/react-native'

import App from '../screens/app'
import StylesProvider from '../style'

it('renders correctly', () => {
  const { getByText } = render(
    <StylesProvider>
      <App />
    </StylesProvider>,
  )

  expect(getByText(/hello world!/i)).toBeTruthy()
})
