import React, { createContext, useContext, useState } from 'react'

const Coin = createContext()

const CoinContext = ({ children }) => {

    const [selectedCoin, setSelectedCoin] = useState(null)
    const [currency, setCurrency] = useState('BRL')	

    return (
        <Coin.Provider 
            value={{
                selectedCoin,
                setSelectedCoin,
                currency,
                setCurrency,
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