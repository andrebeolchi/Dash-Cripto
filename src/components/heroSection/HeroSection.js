import { Container, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import background from '../../assets/background.png';
import Carousel from './Carousel';

const HeroSection = () => {
    const useStyles = makeStyles(() => ({
        image:{
            backgroundImage: `url(${background})`,
            backgroundSize: 'cover',
            height: '100vh'
        },
        content: {
            height: "100%",
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            userSelect: "none",
            paddingTop: "5%"
        },
        title: {
            display: 'flex',
            height: '40%',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center',
            // marginBottom: 20,
            userSelect: "none",
        }
    }))

    const classes = useStyles();

    return (
        <div className={classes.image}>
            <Container className={classes.content}>
                <div className={classes.title}>
                    <Typography
                        variant='h2'
                        color='primary'
                        fontWeight='bold'
                        marginBottom={1}
                        fontSize={100}
                    >
                        Crypto
                        <Typography
                            variant='span'
                            color='secondary'
                            fontWeight={'regular'}
                            fontSize={100}
                        >
                            Dash
                        </Typography>
                    </Typography>
                    <Typography
                        variant='subtitle2'
                        fontWeight='light'
                        textTransform={'capitalize'}
                        fontSize={24}
                    >
                        A melhor forma de gerenciar suas cryptos
                    </Typography>
                </div>
                <Carousel />
            </Container>
        </div>

    )
}

export default HeroSection