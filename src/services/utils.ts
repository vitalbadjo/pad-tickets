import { formatNumberToFinance } from "../utils/number"

export function delay(num: number) {
  return new Promise<void>((r) => setTimeout(r, num))
}

export enum CurrenciesEnum {
  RUB = "RUB",
  USD = "USD",
  EUR = "EUR"
}
export type CurrencyData = {
  symbol: string,
  code: CurrenciesEnum
  price: string
}
export type CurrenciesType = Record<CurrenciesEnum, CurrencyData>

// rates helper - ushually this data must be received from server
export const getCurrencies = (price: number): CurrenciesType => ({
  RUB: {
    code: CurrenciesEnum.RUB,
    symbol: "₽",
    price: formatNumberToFinance(price)
  },
  USD: {
    code: CurrenciesEnum.USD,
    symbol: "$",
    price: formatNumberToFinance(Math.ceil(price / 91))
  },
  EUR: {
    symbol: "€",
    code: CurrenciesEnum.EUR,
    price: formatNumberToFinance(Math.ceil(price / 101))
  }
})