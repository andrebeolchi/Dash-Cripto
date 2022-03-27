
import { makeStyles } from '@mui/styles'
import React from 'react'
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
            <Index />
        </div>
    )
}

export default Rotas