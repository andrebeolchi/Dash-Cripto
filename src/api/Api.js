import axios from "axios";

export default class Api {

    /**
     * Essa função é chamada para pegar o ranking de criptomoedas
     */
    getTop({ limit, currency }) {
        let url = `data/top/totalvolfull`

        if (limit) {
            url += `?limit=${limit}`
        }

        if (currency) {
            url += `&tsym=${currency}`
        }

        return axios.get(url)
    }

    getHistoricalData({ fsym, tsym, limit }) {
        let url = `data/histoday?fsym=${fsym}&tsym=${tsym}`

        if (limit) {
            url += `&limit=${limit}`
        }

        return axios.get(url)
    }

    getInitialPrice({ fsym, tsym, date }){
        let url = `data/pricehistorical?fsym=${fsym}&tsyms=${tsym}&ts=${date}`

        return axios.get(url)
    }
}
