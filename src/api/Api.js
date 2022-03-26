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
}
