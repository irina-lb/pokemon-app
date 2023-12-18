import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { PropsWithChildren } from "react";
import theme from "./theme";

const CustomThemeProvider = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
      <CssBaseline />
    </ThemeProvider>
  );
};

export default CustomThemeProvider;
