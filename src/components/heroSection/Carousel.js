import { Button, Skeleton } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useEffect, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import Api from '../../api/Api';
import { CoinState } from '../../context/CoinContext';
import NumberUtils from '../../utils/NumberUtils';
import InvestmentModal from './InvestmentModal';


const useStyles = makeStyles((theme) => ({
    carousel: {
        height: '50%',
        display: 'flex',
        alignItems: 'center',
    },
    item: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        cursor: 'pointer',
        textTransform: 'uppercase',
        color: '#fff',
    }
}))

const Carousel = () => {

    const [top, setTop] = useState([]);
    const [loading, setLoading] = useState(true)
    const [modalOpen, setModalOpen] = useState(false)

    const classes = useStyles();

    const getTopCrypto = async () => {
        try {
            const { data } = await new Api().getTop({ limit: 10, currency: 'BRL' });
            setTop(data.Data);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getTopCrypto();
    }, [])

    const { setSelectedCoin, selectedCoin } = CoinState();

    const items = top?.map((coin) => {
        let profit = coin.RAW?.BRL?.CHANGEPCT24HOUR >= 0
        return (
            <Button
                onClick={() => {
                    setSelectedCoin(coin)
                    setModalOpen(true)
                }}
            >
                <div className={classes.item}
                >
                    <img src={`https://www.cryptocompare.com/${coin.CoinInfo?.ImageUrl}`}
                        alt={coin.CoinInfo?.CoinName}
                        height="80"
                        style={{ marginBottom: 10 }}
                    />
                    <span>
                        {coin.CoinInfo?.Name}
                        &nbsp;
                        <span
                            style={{
                                color: profit ? '#11aa11' : '#aa1111',
                                fontWeight: 'bold',
                            }}
                        >
                            {profit && "+"}{coin?.RAW?.BRL?.CHANGEPCT24HOUR?.toFixed(2)}%
                        </span>
                    </span>
                    <span
                        style={{ marginTop: 2 }}
                    >
                        {coin.DISPLAY?.BRL?.TOSYMBOL} {NumberUtils.formatRawMoney(coin.RAW?.BRL?.PRICE)}
                    </span>

                </div>
            </Button>
        )
    })

    const responsive = {
        0: { items: 2 },
        520: { items: 4 },
        720: { items: 6 },
    }

    return (
        <div className={classes.carousel}>
            {loading ? (
                <div
                    style={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                    }}
                >
                    <Skeleton width={"80px"} height={"80px"} variant="rectangular" />
                    <Skeleton width={"80px"} height={"80px"} variant="rectangular" />
                    <Skeleton width={"80px"} height={"80px"} variant="rectangular" />
                    <Skeleton width={"80px"} height={"80px"} variant="rectangular" />
                    <Skeleton width={"80px"} height={"80px"} variant="rectangular" />
                    <Skeleton width={"80px"} height={"80px"} variant="rectangular" />
                    <Skeleton width={"80px"} height={"80px"} variant="rectangular" />
                    <Skeleton width={"80px"} height={"80px"} variant="rectangular" />
                </div>
            ) : (
                <AliceCarousel
                    mouseTracking
                    infinite
                    autoPlayInterval={1000}
                    animationDuration={1500}
                    disableDotsControls
                    disableButtonsControls
                    responsive={responsive}
                    autoPlay
                    items={items}
                />
            )}

            <InvestmentModal
                open={modalOpen}
                setOpen={setModalOpen}
                title={`Investimento ${selectedCoin?.CoinInfo?.FullName}`}
                key={selectedCoin?.CoinInfo?.Name}
            />
        </div>
    )
}

export default Carousel