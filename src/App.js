import { ThemeProvider } from '@mui/material'
import axios from 'axios'
import React from 'react'
import './App.css'
import './normalize.css'
import Rotas from './routes/Routes'
import { theme } from './utils/Theme'

const App = () => {
  axios.defaults.baseURL = 'https://min-api.cryptocompare.com/';
  axios.defaults.headers.common['Authorization'] = `Apikey ${process.env.REACT_API_KEY}`;
  axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

  return (
    <ThemeProvider theme={theme}>
      <Rotas />
    </ThemeProvider>
  )
}

export default App