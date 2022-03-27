import { Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Chart as ChJs, registerables } from 'chart.js';
import { React, useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import Api from '../../api/Api';
import { CoinState } from '../../context/CoinContext';
import NumberUtils from '../../utils/NumberUtils';
import { theme } from '../../utils/Theme';
ChJs.register(...registerables);

const useStyles = makeStyles({
    container: {
        display: 'flex',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            alignItems: 'center',
        }
    },
    chart: {
        width: '75%',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 25,
        padding: 40,
        [theme.breakpoints.down('md')]: {
            width: '100%',
            marginTop: 0,
            padding: 20,
            paddingTop: 0,
        }
    }
})

const Chart = () => {

    const classes = useStyles();

    const [historicalData, setHistoricalData] = useState(null);
    const [days, setDays] = useState(365);

    const { selectedCoin, boughtAmount, boughtPrice, currency } = CoinState()

    const getHistoricalData = async () => {
        try {
            const { data } = await new Api().getHistoricalData({
                fsym: selectedCoin?.RAW?.BRL?.FROMSYMBOL,
                tsym: currency,
                limit: days,
            });
            setHistoricalData(data.Data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (boughtPrice) {
            getHistoricalData();
        }
    }, [days, boughtPrice])

    return (
        <div className={classes.container}>
            <div className={classes.chart}>
                {!historicalData ? (
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}>
                        Selecione uma Criptomoeda para calcular o rendimento.
                    </div>
                ) : (
                    <>
                        <Line
                            data={{
                                labels: historicalData?.map((coin) => {
                                    let date = new Date(coin.time * 1000);
                                    let time = date.getHours() + ":" + date.getMinutes();

                                    return days === 1 ? time : date.toLocaleDateString();
                                }),
                                datasets: [{
                                    data: historicalData?.map((coin) => NumberUtils.calculateProfit({ sellValue: coin?.close, boughtPrice, boughtAmount })),
                                    label: `(${days} dias) Rendimento do ${selectedCoin?.CoinInfo?.FullName}`,

                                    backgroundColor: historicalData?.map((coin) => NumberUtils.calculateProfit({ sellValue: coin?.close, boughtPrice, boughtAmount }) > 0 ? '#00ff00' : '#ff0000'),
                                    borderColor: historicalData?.map((coin) => NumberUtils.calculateProfit({ sellValue: coin?.close, boughtPrice, boughtAmount }) > 0 ? '#00ff00' : '#ff0000'),
                                }],

                            }}
                        />

                        <div style={{
                            display: 'flex',
                            marginTop: 20,
                            justifyContent: 'space-around',
                            width: '100%',
                        }}>
                            <Button
                                variant={days === 1 ? "contained" : "outlined"}
                                color='secondary'
                                onClick={() => setDays(1)}>
                                24 Horas
                            </Button>
                            <Button
                                variant={days === 30 ? "contained" : "outlined"}
                                color='secondary'
                                onClick={() => setDays(30)}
                            >
                                30 Dias
                            </Button>
                            <Button
                                variant={days === 90 ? "contained" : "outlined"}
                                color='secondary'
                                onClick={() => setDays(90)}>
                                3 Meses
                            </Button>
                            <Button
                                variant={days === 365 ? "contained" : "outlined"}
                                color='secondary'
                                onClick={() => setDays(365)}>
                                1 Ano
                            </Button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default Chart