import * as React from "react";
import AppBar from "@mui/material/AppBar";
import MenuBook from "@mui/icons-material/MenuBook";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    allVariants: {
      color: "#FBFCFF"
    },
  },
  palette: {
    grey: {
      main: "#D0CCD0",
    },
    white: {
      main: "#FBFCFF",
    },
    brown:{
      main: "#605856",

    },
    blue:{
      main: "#1C6E8C",

    },
    navyBlue:{
      main: "#274156",
    },
  },
});

export default function Album() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative" color="navyBlue">
        <Toolbar>
          <MenuBook sx={{ mr: 2, color:"#fff" }} />
          <Typography variant="h6" color="white" noWrap>
            Free programming ebooks
          </Typography>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}
