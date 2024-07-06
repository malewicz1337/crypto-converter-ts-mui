import { useState, useEffect } from "react";
import { fetchExchangeRates } from "../api";
import { CurrencyData } from "../types";
import { convertCurrency, removeTrailingZeros } from "../utils";

export const useCurrencyExchange = () => {
  const [fromCurrency, setFromCurrency] = useState<string>("ETH");
  const [toCurrency, setToCurrency] = useState<string>("BTC");
  const [fromAmount, setFromAmount] = useState<string>("1");
  const [toAmount, setToAmount] = useState<string>("");
  const [exchangeRates, setExchangeRates] = useState<CurrencyData>({});

  useEffect(() => {
    fetchExchangeRates().then(setExchangeRates);
  }, []);

  useEffect(() => {
    handleFromAmountChange(fromAmount);
  }, [fromCurrency, toCurrency, exchangeRates]);

  const handleFromAmountChange = (value: string) => {
    const formattedValue = removeTrailingZeros(
      Math.max(0, parseFloat(value)).toString(),
    );
    setFromAmount(formattedValue);
    setToAmount(
      convertCurrency(formattedValue, fromCurrency, toCurrency, exchangeRates),
    );
  };

  const handleToAmountChange = (value: string) => {
    const formattedValue = removeTrailingZeros(
      Math.max(0, parseFloat(value)).toString(),
    );
    setToAmount(formattedValue);
    setFromAmount(
      convertCurrency(formattedValue, toCurrency, fromCurrency, exchangeRates),
    );
  };

  const handleSwap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setFromAmount(toAmount);
    setToAmount(fromAmount);
  };

  return {
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency,
    fromAmount,
    setFromAmount,
    toAmount,
    setToAmount,
    exchangeRates,
    handleFromAmountChange,
    handleToAmountChange,
    handleSwap,
  };
};
