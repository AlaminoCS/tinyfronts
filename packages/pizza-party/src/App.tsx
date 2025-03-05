import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from 'cargo-components'
import Count from './components/Count'
import { pizzaPartyTheme } from './theme'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={pizzaPartyTheme}>
      <GlobalStyles />
      <h1>Projeto Pizza Party</h1>
      <Count />
    </ThemeProvider>
  )
}

export default App
