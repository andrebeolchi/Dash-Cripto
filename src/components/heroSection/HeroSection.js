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
            paddingTop: 100,
            justifyContent: 'space-around',
        },
        title: {
            display: 'flex',
            height: '40%',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center',
            marginBottom: 20,
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
                    >
                        Crypto
                        <Typography
                            variant='span'
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