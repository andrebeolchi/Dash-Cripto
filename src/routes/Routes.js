
import { makeStyles } from '@mui/styles'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from '../components/header/Header'
import Index from '../pages'
import { theme } from '../utils/Theme'

const Rotas = () => {

    const useStyles = makeStyles(() => ({
        App: {
            backgroundColor: theme.palette.background.default,
            color: theme.palette.primary.main,
            minHeight: '100vh',
        },
    }))

    const classes = useStyles()

    return (
        <div className={classes.App}>
            <Header />
            <Routes>
                <Route path="/" element={<Index />} />
            </Routes>
        </div>
    )
}

export default Rotas