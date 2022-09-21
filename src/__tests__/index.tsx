import * as React from 'react'
import { fireEvent, render } from '@testing-library/react-native'

import App from '@app/screens/app'
import StylesProvider from '@app/style'

import { translate, changeLanguage } from '@app/locale'

jest.mock('@react-native-async-storage/async-storage', () => {
  return {
    getItem: async (...args: any) => args,
    setItem: async (...args: any) => args,
    removeItem: async (...args: any) => args,
  }
})

jest.mock('react-native-localization')
jest.mock('@app/locale', () => ({
  translate: jest.fn(),
  changeLanguage: jest.fn(),
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

  const changeLanguageMock = changeLanguage as jest.MockedFunction<
    typeof changeLanguage
  >
  changeLanguageMock.mockImplementation(jest.fn())

  const { getByText } = render(
    <StylesProvider>
      <App />
    </StylesProvider>,
  )

  expect(translateMock).toHaveBeenCalledTimes(3)
  expect(translateMock).toHaveBeenCalledWith('welcome')
  expect(translateMock).toHaveBeenCalledWith('app_name')
  expect(translateMock).toHaveBeenCalledWith('description')

  fireEvent.press(getByText(/español/i))
  expect(changeLanguage).toHaveBeenCalledTimes(1)
})
