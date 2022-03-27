import React, { createContext, useContext, useState } from 'react'

const Coin = createContext()

const CoinContext = ({ children }) => {

    const [selectedCoin, setSelectedCoin] = useState(null)
    const [currency, setCurrency] = useState('BRL')
    const [date, setDate] = useState(null)
    const [boughtPrice, setBoughtPrice] = useState(null)
    const [boughtAmount, setBoughtAmount] = useState(null)

    return (
        <Coin.Provider
            value={{
                selectedCoin,
                setSelectedCoin,
                currency,
                setCurrency,
                date,
                setDate,
                boughtPrice,
                setBoughtPrice,
                boughtAmount,
                setBoughtAmount,
            }}
        >
            {children}
        </Coin.Provider>
    )
}

export default CoinContext

export const CoinState = () => {
    return useContext(Coin)
}