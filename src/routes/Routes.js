
import { makeStyles } from '@mui/styles'
import React from 'react'
import {
    BrowserRouter, Route, Routes
} from 'react-router-dom'
import Header from '../components/header/Header'
import Index from '../pages'
import { Color } from '../utils/ColorUtil'

const Rotas = () => {

    const useStyles = makeStyles(() => ({
        App: {
            backgroundColor: Color.backgroundColor,
            color: Color.text,
            minHeight: '100vh',
        },
    }))

    const classes = useStyles()

    return (
        <BrowserRouter>
            <div className={classes.App}>
                <Header />
                <Routes>
                    <Route path="/" element={<Index />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default Rotas