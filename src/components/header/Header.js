import { blue } from '@material-ui/core/colors'
import { AppBar, Container, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { FaChartBar } from 'react-icons/fa'

const Header = () => {
    return (
        <AppBar color='primary'
                position='sticky'
                title="Navbar"
        >
            <Container>
                <Toolbar>
                    <FaChartBar size={24} color={blue[600]} />
                    <Typography marginLeft={1} variant='span' color='primary' fontSize={20} style={{ userSelect: "none" }} >
                        Crypto
                        <Typography variant="span" color='secondary'>
                            Dash
                        </Typography>
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header