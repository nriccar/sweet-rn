import * as React from 'react'
import { render } from '@testing-library/react-native'

import App from '../screens/app'
import StylesProvider from '../style'

import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock'

jest.mock('../locale', () => ({
  translate: jest.fn(key => key),
}))
jest.mock('react-native-localization')
jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage)

it('renders correctly', () => {
  const { getByText } = render(
    <StylesProvider>
      <App />
    </StylesProvider>,
  )

  expect(getByText(/hello world/i)).toBeTruthy()
})
