import CurrencyType from "../types/CurrencyType";

const currencyConverter = (currency: CurrencyType, price: number) => {
   switch (currency) {
      case 'RUB':
         return `${price} ₽`

      case 'EUR':
         return `${Number((price / 108.65).toFixed(2))} €`; // курс евро к рублю в момент написания кода

      case 'USD':
         return `${Number((price / 103.49).toFixed(2))} $`; // курс доллара к рублю в момент написания кода

      default:
         return price;
   }
}

export default currencyConverter;