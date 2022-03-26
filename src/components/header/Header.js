import { AppBar, Container, Toolbar, Typography } from '@mui/material'
import React from 'react'

const Header = () => {
    return (
        <AppBar color='transparent'
            position='static'
            title="Navbar"
        >
            <Container>
                <Toolbar>
                    <Typography variant='span' color='secondary' fontSize={20}>
                        Crypto
                        <Typography variant="span" color='primary'>
                            Dash
                        </Typography>
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header