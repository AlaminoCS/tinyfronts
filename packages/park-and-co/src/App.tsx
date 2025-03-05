import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from 'cargo-components'
import { parkAndCoTheme } from './theme'
import Count from './components/Count'

const App: React.FC = () => (
  <ThemeProvider theme={parkAndCoTheme}>
    <GlobalStyles />
    <h1>Park&Co Estacionamentos</h1>
    <Count />
  </ThemeProvider>
)

export default App
