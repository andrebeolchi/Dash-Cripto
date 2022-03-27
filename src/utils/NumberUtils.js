export default class NumberUtils {

    static formatRawMoney(number) {
        return number?.toFixed(2)?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }


    static calculateProfit({ sellValue, boughtAmount, boughtPrice }) {

        const profit = ((boughtPrice / sellValue) * boughtAmount) - boughtAmount;

        return profit;
    }
}