import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from '@pancakeswap-libs/uikit'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: Norse;
    src: url(/fonts/Norse.otf);
  }
  * {
    font-family: Norse;
    color: white !important;
  }
  body {
    background-color: ${({ theme }) => theme.colors.background};

    img {
      height: auto;
      max-width: 100%;
    }
    background-image: url('/images/egg/shutterstock.png');
  }
`

export default GlobalStyle
