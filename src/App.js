import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import './normalize.css'

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
      </div>
    </BrowserRouter>
  )
}

export default App