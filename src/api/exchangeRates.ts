import axios from "axios";
import { CurrencyData } from "../types";
import { currencies } from "../constants/currencies";

export const fetchExchangeRates = async (): Promise<CurrencyData> => {
  try {
    const response = await axios.get<{ symbol: string; price: string }[]>(
      "https://api.binance.com/api/v3/ticker/price",
    );
    const rates: CurrencyData = {};
    response.data.forEach((item) => {
      if (currencies.some((cur) => item.symbol.includes(cur.symbol))) {
        rates[item.symbol] = parseFloat(item.price);
      }
    });
    return rates;
  } catch (error) {
    console.error("Error fetching exchange rates:", error);
    return {};
  }
};
