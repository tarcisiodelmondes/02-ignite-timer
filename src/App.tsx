import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './themes/default'
import { GlobalStyle } from './themes/global'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
    </ThemeProvider>
  )
}
