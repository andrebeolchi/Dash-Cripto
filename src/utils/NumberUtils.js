// create an class NumberUtils to handle number
export default class NumberUtils {

    static formatRawMoney(number) {

        return number?.toFixed(2)?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    // Crie uma função que calcule o rendimento de uma criptomoeda
    // Ela recebe o valor inicial, valor investido e o valor atual


    // profit = (BTC sell value - BTC buy value) * (bought amount / BTC buy value)
    static calculateProfit({ sellValue, boughtAmount, boughtPrice }) {

        // const profit = ((sellValue - boughtPrice) / (boughtAmount * boughtPrice)) * boughtAmount;

            const profit = ((boughtPrice / sellValue) * boughtAmount) - boughtAmount;

        return profit;
    }
}