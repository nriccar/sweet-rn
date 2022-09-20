import * as React from 'react'
import { render } from '@testing-library/react-native'

import App from '@swrn/screens/app'
import StylesProvider from '@swrn/style'

import { translate } from '@swrn/locale'

jest.mock('@react-native-async-storage/async-storage', () => {
  return {
    getItem: async (...args: any) => args,
    setItem: async (...args: any) => args,
    removeItem: async (...args: any) => args,
  }
})

jest.mock('react-native-localization')
jest.mock('@swrn/locale', () => ({
  translate: jest.fn(),
}))

afterEach(() => {
  jest.clearAllMocks()
})

it('app renders correctly', () => {
  render(
    <StylesProvider>
      <App />
    </StylesProvider>,
  )
})

it('translations works', () => {
  const translateMock = translate as jest.MockedFunction<typeof translate>
  translateMock.mockImplementation(jest.fn())

  render(
    <StylesProvider>
      <App />
    </StylesProvider>,
  )

  expect(translateMock).toHaveBeenCalledTimes(3)
  expect(translateMock).toHaveBeenCalledWith('welcome')
  expect(translateMock).toHaveBeenCalledWith('app_name')
  expect(translateMock).toHaveBeenCalledWith('description')
})
