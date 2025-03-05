import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from 'cargo-components'
import { pizzaPartyTheme } from './theme'
import Count from './components/Count'

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
