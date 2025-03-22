import React from 'react'
import { ThemeProvider } from 'styled-components'
import ParkAndCoStyles, { parkAndCoTheme } from './styles/theme'
import HomePage from './components/05-pages/HomePage'

const App: React.FC = () => (
  <ThemeProvider theme={parkAndCoTheme}>
    <ParkAndCoStyles />
    <HomePage />
  </ThemeProvider>
)

export default App
