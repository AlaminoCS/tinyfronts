import React from 'react'
import { ThemeProvider } from 'styled-components'
import { parkAndCoTheme } from './styles/theme'
import { GlobalStyles } from 'cargo-components'
import HomePage from './components/05-pages/HomePage'

// teste de remoção de comentário

const App: React.FC = () => (
  <ThemeProvider theme={parkAndCoTheme}>
    <GlobalStyles />
    <HomePage />
  </ThemeProvider>
)

export default App
