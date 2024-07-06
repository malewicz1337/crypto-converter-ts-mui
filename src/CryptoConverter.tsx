import { Container, IconButton, Box, Typography } from "@mui/material";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import { CurrencyInput } from "./components";
import { convertCurrency, changeCurrency } from "./utils";
import { currencies } from "./constants";
import { useCurrencyExchange } from "./hooks";

const CryptoConverter = () => {
  const {
    fromAmount,
    toAmount,
    fromCurrency,
    toCurrency,
    exchangeRates,
    setFromCurrency,
    setToCurrency,
    handleSwap,
    handleToAmountChange,
    handleFromAmountChange,
  } = useCurrencyExchange();

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        justifyContent: "start",
        p: 4,
        bgcolor: "#f5f5f5",
        borderRadius: 2,
        boxShadow: 1,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          width: "100%",
          mb: 2,
        }}
      >
        <CurrencyInput
          value={fromAmount}
          onChange={handleFromAmountChange}
          currency={fromCurrency}
          onCurrencyChange={(direction) =>
            setFromCurrency(changeCurrency(fromCurrency, direction, currencies))
          }
        />
        <IconButton
          onClick={handleSwap}
          disableRipple
          sx={{
            "&:hover": { backgroundColor: "transparent" },
          }}
        >
          <SwapHorizIcon />
        </IconButton>
        <CurrencyInput
          value={toAmount}
          onChange={handleToAmountChange}
          currency={toCurrency}
          onCurrencyChange={(direction) =>
            setToCurrency(changeCurrency(toCurrency, direction, currencies))
          }
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          p: 1,
          justifyContent: "center",
        }}
      >
        <Typography variant="body2" color="black" sx={{ mt: 2 }}>
          1 {fromCurrency} ={" "}
          {convertCurrency("1", fromCurrency, toCurrency, exchangeRates)}{" "}
          {toCurrency}
        </Typography>
        <Typography variant="caption" color="textSecondary">
          Данные носят ознакомительный характер •{" "}
          {new Date().toLocaleString("ru-RU", { timeZone: "Europe/Moscow" })}{" "}
          МСК
        </Typography>
      </Box>
    </Container>
  );
};

export default CryptoConverter;
