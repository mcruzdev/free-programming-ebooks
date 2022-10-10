import * as React from "react";
import AppBar from "@mui/material/AppBar";
import MenuBook from "@mui/icons-material/MenuBook";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
function NavBar() {
  return (
    <AppBar position="relative" color="navyBlue">
      <Toolbar>
        <MenuBook sx={{ mr: 2, color: "#fff" }} />
        <Typography
          sx={{ mr: 2, color: "#fff" }}
          variant="h6"
          color="white"
          noWrap
        >
          Free programming ebooks
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
