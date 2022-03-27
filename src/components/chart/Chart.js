import { CircularProgress } from '@material-ui/core';
import { makeStyles } from '@mui/styles';
import { React, useEffect, useState } from 'react';
import Api from '../../api/Api';
import { CoinState } from '../../context/CoinContext';
import { theme } from '../../utils/Theme';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            alignItems: 'center',
        }
    },

    marketData: {
        alignSelf: "start",
        padding: 25,
        paddingTop: 10,
        width: "100%",
        [theme.breakpoints.down("md")]: {
            display: "flex",
            justifyContent: "space-around",
        },
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
            alignItems: "center",
        },
        [theme.breakpoints.down("xs")]: {
            alignItems: "start",
        },
    },
})

const Chart = () => {

    const classes = useStyles();

    const [historicalData, setHistoricalData] = useState([]);
    const [days, setDays] = useState(365);

    const {selectedCoin} = CoinState()

    const getHistoricalData = async () => {
        try {
            const { data } = await new Api().getHistoricalData({
                fsym: selectedCoin?.RAW?.BRL?.FROMSYMBOL,
                tsym: 'BRL',
                limit: days,
            });
            setHistoricalData(data.Data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (selectedCoin) {
            getHistoricalData();
        }
    }, [selectedCoin])

    return (
        <div className={classes.container}>
            {selectedCoin ? (
                <div className={classes.chart}>

                </div>
            ) : (
                <div className={classes.marketData}>
                    <CircularProgress />
                </div>
            )}
        </div>
    );
}

export default Chart