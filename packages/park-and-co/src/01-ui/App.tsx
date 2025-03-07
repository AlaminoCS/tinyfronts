import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from 'cargo-components'
import { parkAndCoTheme } from './styles/theme'
import HomePage from './components/05-pages/HomePage'

const App: React.FC = () => (
  <ThemeProvider theme={parkAndCoTheme}>
    <GlobalStyles />
    <HomePage />
  </ThemeProvider>
)

export default App
