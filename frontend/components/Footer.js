import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Free programming ebooks
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function Footer() {
  return (
    <Box component="footer" sx={{paddingBottom:"80px", paddingTop: '30px'}} color="navyBlue">
      <Typography
        variant="subtitle1"
        align="center"
        color="white"
        component="p"
      >
        "Be the change you want to see in the world" - Mahatma Gandhi
      </Typography>
      <Copyright />
    </Box>
  );
}

export default Footer;
