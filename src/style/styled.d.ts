import 'styled-components/native'
import { palette } from './palette'
import { Theme } from '@app/contexts/theme'

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: typeof palette[Theme]
  }
}
