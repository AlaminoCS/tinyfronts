import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'cargo-components/src/styles/GlobalStyles'
import { parkAndCoTheme } from './theme'

const App: React.FC = () => (
  <ThemeProvider theme={parkAndCoTheme}>
    <GlobalStyles />
    <h1>Park&Co Estacionamentos!</h1>
    <p>Este é um microfrontend dedicado ao cliente Park&Co.</p>
  </ThemeProvider>
)

export default App
