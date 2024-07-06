import { Box, IconButton, Typography } from "@mui/material";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { currencies } from "../constants";

interface CurrencySelectorProps {
  currency: string;
  onCurrencyChange: (direction: "up" | "down") => void;
}

export const CurrencySelector = ({
  currency,
  onCurrencyChange,
}: CurrencySelectorProps) => {
  const currentCurrency = currencies.find((c) => c.symbol === currency);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyItems: "center",
        alignItems: "center",
        borderLeft: "1px solid #ccc",
        width: "90px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "4px",
          width: "50px",
        }}
      >
        <img
          src={currentCurrency?.icon}
          alt={currency}
          style={{ width: 24, height: 24 }}
        />
        <Typography
          variant="body1"
          color="black"
          sx={{ px: 1, fontWeight: 600, fontSize: "12px" }}
        >
          {currency}
        </Typography>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <IconButton
          onClick={() => onCurrencyChange("up")}
          size="small"
          disableRipple
          sx={{
            width: "100%",
            "&:hover": { backgroundColor: "transparent" },
          }}
        >
          <ArrowDropUpIcon />
        </IconButton>
        <IconButton
          onClick={() => onCurrencyChange("down")}
          size="small"
          disableRipple
          sx={{
            "&:hover": { backgroundColor: "transparent" },
          }}
        >
          <ArrowDropDownIcon />
        </IconButton>
      </Box>
    </Box>
  );
};
