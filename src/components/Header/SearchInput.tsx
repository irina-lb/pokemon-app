"use client";
import { useState } from "react";
import { Autocomplete, TextField, Paper, AutocompleteRenderInputParams } from "@mui/material";
import Link from "next/link";

const SearchInput = ({ options }) => {
  const [value, setValue] = useState(null);

  const handleOptionSelected = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Autocomplete
      data-testid="search"
      disablePortal
      forcePopupIcon={false}
      value={value}
      onChange={handleOptionSelected}
      PaperComponent={(props) => (
        <Paper
          sx={{
            mt: 3,
            textDecoration: "none",
          }}
          {...props}
        />
      )}
      sx={{
        width: 400,
        backgroundColor: "white",
        borderRadius: "30px",
        fieldset: {
          border: "none",
        },
        "&.Mui-focused .MuiInputLabel-outlined": {
          color: "inherit",
        },
      }}
      options={options}
      renderInput={(params: AutocompleteRenderInputParams) => (
        <TextField
          {...params}
          label="Search"
          inputProps={{
            ...params.inputProps,
            autoComplete: "off",
          }}
        />
      )}
      isOptionEqualToValue={(option, value) => option === value}
      renderOption={(props, option) => (
        <Link
          {...props}
          key={option as string}
          style={{
            textDecoration: "none",
            color: "inherit",
          }}
          href={`/pokemon/${option as string}`}
        >
          {option}
        </Link>
      )}
    />
  );
};

export default SearchInput;
