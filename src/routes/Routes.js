import React from 'react'
import {
    BrowserRouter, Route, Routes
} from 'react-router-dom'
import Header from '../components/header/Header'
import Index from '../pages'

const Rotas = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Index />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas