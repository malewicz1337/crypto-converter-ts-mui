import { CurrencyData, CurrencyInfo } from "../types";

export const removeTrailingZeros = (value: string): string => {
  return parseFloat(value).toString();
};

export const convertCurrency = (
  amount: string,
  from: string,
  to: string,
  exchangeRates: CurrencyData,
): string => {
  if (from === to) {
    return removeTrailingZeros(amount);
  }
  const fromRate = exchangeRates[`${from}${to}`];
  const toRate = exchangeRates[`${to}${from}`];
  if (fromRate) {
    return removeTrailingZeros((parseFloat(amount) * fromRate).toFixed(6));
  } else if (toRate) {
    return removeTrailingZeros((parseFloat(amount) / toRate).toFixed(6));
  }
  return "";
};

export const changeCurrency = (
  currency: string,
  direction: "up" | "down",
  currencies: CurrencyInfo[],
): string => {
  const currentIndex = currencies.findIndex((c) => c.symbol === currency);
  const newIndex =
    direction === "up"
      ? (currentIndex + 1) % currencies.length
      : (currentIndex - 1 + currencies.length) % currencies.length;
  return currencies[newIndex].symbol;
};
