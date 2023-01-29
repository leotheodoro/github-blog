import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './contexts/UserContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <UserProvider>
        <BrowserRouter>
          <Router />
          <GlobalStyle />
        </BrowserRouter>
      </UserProvider>
    </ThemeProvider>
  )
}
