import * as React from 'react'
import { render } from '@testing-library/react-native'

import App from '@swrn/screens/app'
import StylesProvider from '@swrn/style'

jest.mock('../locale', () => ({
  translate: jest.fn(key => key),
}))
jest.mock('react-native-localization')
jest.mock('@react-native-async-storage/async-storage', () => {
  return {
    getItem: async (...args: any) => args,
    setItem: async (...args: any) => args,
    removeItem: async (...args: any) => args,
  }
})

it('renders correctly', () => {
  const { getByText } = render(
    <StylesProvider>
      <App />
    </StylesProvider>,
  )

  expect(getByText(/welcome/i)).toBeTruthy()
  expect(getByText(/description/i)).toBeTruthy()
})
