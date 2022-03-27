
import { Button, Grid, TextField } from '@mui/material';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import NumberFormat from 'react-number-format';
import Api from '../../api/Api';
import { CoinState } from '../../context/CoinContext';
import Modal from '../modal/Modal';

const NumberFormatCustom = React.forwardRef(function NumberFormatCustom(props, ref) {
    const { onChange, ...other } = props;

    return (
        <NumberFormat
            {...other}
            getInputRef={ref}
            onValueChange={(values) => {
                onChange({
                    target: {
                        name: props.name,
                        value: values.value,
                    },
                });
            }}
            thousandSeparator="."
            decimalSeparator=','
            isNumericString
            prefix="R$"
        />
    );
});

NumberFormatCustom.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

const InvestmentModal = ({
    title,
    open,
    setOpen,
}) => {

    const { date, setDate, boughtAmount, setBoughtAmount, setBoughtPrice, currency, selectedCoin } = CoinState();

    const [loading, setLoading] = useState(false)

    const getInitialPrice = async () => {
        setLoading(true)
        try {
            let { data } = await new Api().getInitialPrice({
                date,
                fsym: selectedCoin.CoinInfo.Name,
                tsym: currency
            })
    
            setBoughtPrice(data?.[`${selectedCoin.CoinInfo.Name}`]?.[`${currency}`])
            setOpen(false)
        } finally {
            setLoading(false)
        }
    }

    return (
        <Modal
            title={title}
            open={open}
            setOpen={setOpen}
            width={500}
        >

            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        variant='outlined'
                        label='Investimento Inicial *'
                        fullWidth
                        name='boughtAmount'
                        color='secondary'
                        onChange={(e) => setBoughtAmount(e.target.value)}
                        InputProps={{
                            inputComponent: NumberFormatCustom,
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        variant='outlined'
                        onChange={(e) => setDate(new Date(e.target.value).getTime() / 1000)}
                        label='Data Inicial *'
                        fullWidth
                        color='secondary'
                        type='date'
                        InputLabelProps={{
                            shrink: true
                        }}
                    />
                </Grid>

                <Grid item xs={12}
                    style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                    }}
                >
                    <Button
                        variant='outlined'
                        color='secondary'
                        onClick={() => setOpen(false)}
                        style={{
                            marginRight: '10px',
                        }}
                    >
                        Cancelar
                    </Button>
                    <Button
                        variant='contained'
                        color='secondary'
                        disabled={!boughtAmount || !date || loading}
                        onClick={() => getInitialPrice()}
                    >
                        {loading ? (
                            "Carregando..."
                        ) : (
                            "Enviar"
                        )}
                    </Button>
                </Grid>
            </Grid>

        </Modal>
    )
}

export default InvestmentModal