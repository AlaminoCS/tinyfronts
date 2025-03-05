import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'cargo-components/src/styles/GlobalStyles'
import { ranchoCambaraTheme } from './theme'

const App: React.FC = () => (
  <ThemeProvider theme={ranchoCambaraTheme}>
    <GlobalStyles />
    <h1>Rancho Cambará!</h1>
    <p>Este é um microfrontend dedicado ao cliente Rancho Cambará.</p>
  </ThemeProvider>
)

export default App
