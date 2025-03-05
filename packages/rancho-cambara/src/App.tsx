import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from 'cargo-components'
import { ranchoCambaraTheme } from './theme'
import Count from './components/Count'

const App: React.FC = () => (
  <ThemeProvider theme={ranchoCambaraTheme}>
    <GlobalStyles />
    <h1>Rancho Cambará</h1>
    <Count />
  </ThemeProvider>
)

export default App
