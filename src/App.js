import { ThemeProvider } from '@mui/material'
import React from 'react'
import './normalize.css'
import Rotas from './routes/Routes'
import { theme } from './utils/Theme'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Rotas />
    </ThemeProvider>
  )
}

export default App