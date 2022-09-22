<h1 align="center">
  🚀
  <br>
  Sweet React Native
</h1>
<p align="center">
  Sweet React Native is a template for react native featuring Multi-language, Dark-Light Themes, <br> Typescript, Context, Styled Components, Jest, Detox, Eslint, Husky, Prettier, and more.
</p>

<div align="center">
  <img src="https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" />
  <img src="https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white" />
  <img src="https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white" />
  <img src="https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E" />
</div>
<br>
<p align="center">
  • <a href="https://www.youtube.com/shorts/-fnGqfFWh2k">Video Demo</a> •
</p>

<p align="center">
    <img src="./src/assets/demo-dark.png" width="350" />
    <img src="./src/assets/demo-light.png" width="350" />
</p>

<br>
<br>
  <div align="center">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" width="100" />
  </div>
  <p align="center">
    PRs and suggestions are always welcome.
  </p>
<br>

## 📚 Table of Contents

- [Installation](#installation)
- [Run project](#run-project)
- [Imports](#imports)
- [Languages](#languages)
  - [Translate function](#translate-function)
  - [Translate with params](#translate-with-params)
  - [Change the language](#change-language)
  - [Get current language](#get-current-language)
- [Themes](#themes)

## Installation

Before starting, please make sure you have the [environment set up for react-native cli](https://reactnative.dev/docs/environment-setup).

Next, run the CLI command to create a new project:

```sh
npx create-sweetrn
```

`create-sweetrn` cli will guide you trought the steps to create your project. You will be able to choose the project name and a custom package bundle id (optional).

#### Install dependencies

```sh
npm install
cd ios
pod install
```

## Run project

#### Available Scripts

- npm start - start metro bundler (react-native start)

## Imports

Absolute imports are configured in `tsconfig.json` and `babel.config.js`. You can import whatever you want from `src` folder using the alias `@app` - `@app/components` for example.
If you want to change this alias, refer to `tsconfig.json` and `babel.config.js` file.

## Languages

Languages files are located in `src/locale`. In there you will see a `index.ts` file that exports all the languages. You can add as many languages as you want, just make sure to add the `lang_code.json` file to `src/locale`, and include it in locales in `src/locale/index.ts`.

#### Translate function

The translate function - `src/locale` - is a simple function that receives a key as a string and returns the text that key refer to in the json file.

```js
// en.json
{
  "hello_world": "Hello World!"
}

//
import { translate } from '@app/locale'
const text = translate('hello_world') // Hello World!
```

#### Translate with params

The translate function also accepts params, so that the translations can be more flexible.

```js
// en.json
{
  "there": "there",
  "app_name": "Sweet React Native",
  "hello_user_with_age": "Hello {0}, do you like {1} already?",
}

//
import { translate } from '@app/locale'
const text = translate('hello_user_with_age', ['there', 'app_name']) // Hello there, do you like Sweet React Native already?
```

Note that the params are an array of string of keys which refer to a translation in the file.

#### Change language

You may change the language of the app by using the `useLanguage` hook. This hook returns a function that receives a string with the language code and changes the language of the app.

```js
import { changeLanguage, translate } from '@app/locale'
import { useLanguage } from '@app/contexts/language'

[...]

const [, setLanguage] = useLanguage()

const handleLanguageChange = (value: 'en' | 'es') => {
  changeLanguage(value)
  setLanguage(value)
}
```

A fix for using just the hook is on the way. For now, you will have to use the `changeLanguage` too.

#### Get current language

You may get the current language of the app by using the `getLanguage` function from `src/locale`.

```js
import { getLanguage } from '@app/locale'
const currentLanguage = getLanguage() // en
```

Also, there's a `getAvailableLanguages` function that returns an array of strings with the available languages.

```js
import { getAvailableLanguages } from '@app/locale'
const availableLanguages = getAvailableLanguages() // [en, es]
```

## Themes

The dark-light theme is configured using the `useTheme` hook. This hook returns an object with the current theme and a function to change the theme.

```js

import { useTheme } from '@app/contexts/theme'

[...]

const [theme, setTheme] = useTheme()
```

You will find the palettes for each theme on `src/style/palette`. Note that there's a `defaultPalette` object for the shared colors between the themes.

There's also an example of a Switch component on `src/screens/app`.

```jsx
import Switch from '@app/components/switch'

import sun from '@app/assets/icons/sun.png'
import moon from '@app/assets/icons/moon.png'

[...]

const handleThemeChange = (value: boolean) => {
  setTheme(value ? 'light' : 'dark')
}

[...]

<Switch
  thumbImages={[sun, moon]}
  onSwitch={handleThemeChange}
  trackColors={['#767577', '#f5dd4b']}
  thumbColors={['#767577', '#f4f3f4']}
/>
```

<!-- | Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key | -->

<br>
<br>

## 🚧 Roadmap 🚧

- Fix the `useLanguage` hook, so that it doesn't require the `changeLanguage` function.
- Document providers, context, hooks, components, eslint, husky, prettier.
