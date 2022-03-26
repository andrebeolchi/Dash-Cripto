import { blue } from '@material-ui/core/colors'
import { AppBar, Container, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { FaChartBar } from 'react-icons/fa'

const Header = () => {
    return (
        <AppBar color={'primary'}
            position='static'
            title="Navbar"
        >
            <Container>
                <Toolbar flex flexDirection={'row'} alignItems={'center'} justifyItems={'center'}>
                    <FaChartBar size={24} color={blue[600]} />
                    <Typography marginLeft={1} variant='span' color='primary' fontSize={20} >
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