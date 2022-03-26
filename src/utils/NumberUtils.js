// create an class NumberUtils to handle number
export default class NumberUtils {

    static formatRawMoney(number){
        
        return number?.toFixed(2)?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
}