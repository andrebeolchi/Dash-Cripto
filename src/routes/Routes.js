
import { makeStyles } from '@mui/styles'
import React from 'react'
import Chart from '../components/chart/Chart'
import Header from '../components/header/Header'
import HeroSection from '../components/heroSection/HeroSection'
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
            <HeroSection />
            <Chart />
        </div>
    )
}

export default Rotas