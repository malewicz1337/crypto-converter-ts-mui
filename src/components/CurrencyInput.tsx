import { Box, TextField } from "@mui/material";
import { CurrencySelector } from "./CurrencySelector";

interface CurrencyInputProps {
  value: string;
  onChange: (value: string) => void;
  currency: string;
  onCurrencyChange: (direction: "up" | "down") => void;
}

export const CurrencyInput = ({
  value,
  onChange,
  currency,
  onCurrencyChange,
}: CurrencyInputProps) => (
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      width: "100%",
      border: "1px solid #ccc",
      borderRadius: 4,
    }}
  >
    <TextField
      type="number"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      fullWidth
      variant="outlined"
      InputProps={{
        inputProps: { min: 0, step: "any" },
      }}
      sx={{
        "& .MuiOutlinedInput-root": {
          "& fieldset": { border: "none" },
          "&:hover fieldset": { border: "none" },
          "&.Mui-focused fieldset": { border: "none" },
        },
        "& input": {
          textAlign: "right",
          fontSize: "1.5rem",
        },
        "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button":
          {
            "-webkit-appearance": "none",
            margin: 0,
          },
        "& input[type=number]": {
          "-moz-appearance": "textfield",
        },
      }}
    />
    <CurrencySelector currency={currency} onCurrencyChange={onCurrencyChange} />
  </Box>
);
