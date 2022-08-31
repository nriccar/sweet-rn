import * as React from 'react'
import { render } from '@testing-library/react-native'

import App from '../screens/app'

it('renders correctly', () => {
  const { getByText } = render(<App />)

  expect(getByText(/hello world!/i)).toBeTruthy()
})
