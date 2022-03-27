import { Container, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import background from '../../assets/background.png';
import Carousel from './Carousel';

const HeroSection = () => {
    const useStyles = makeStyles(() => ({
        image:{
            backgroundImage: `url(${background})`,
            backgroundSize: 'cover',
        },
        content: {
            height: 400,
            display: 'flex',
            flexDirection: 'column',
            paddingTop: 25,
            justifyContent: 'space-around',
            userSelect: "none",
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
                        style={{ 
                            fontWeight: 'bold',
                            marginBottom: 15,
                        }}
                    >
                        Crypto
                        <Typography
                            variant='string'
                            color='secondary'
                            fontWeight={'regular'}
                        >
                            Dash
                        </Typography>
                    </Typography>
                    <Typography
                        variant='subtitle2'
                        fontWeight='light'
                        textTransform={'capitalize'}
                        fontSize={16}
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