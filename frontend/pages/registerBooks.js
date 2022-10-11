import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import TextField from "@mui/material/TextField";
import { Button, Typography } from "@mui/material";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
}));

const theme = createTheme({
  typography: {
    color: "#FBFCFF",
  },
  palette: {
    grey: {
      main: "#D0CCD0",
    },
    white: {
      main: "#FBFCFF",
    },
    brown: {
      main: "#605856",
    },
    blue: {
      main: "#1C6E8C",
    },
    navyBlue: {
      main: "#274156",
    },
  },

});


export default function registerBooks() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar />
      <main style={{height:"750px",display: "flex", alignItems: "center", flexDirection: 'column',justifyContent:"center"}}>
        <Container sx={{ py: 3 }} maxWidth="md">
          <Grid container spacing={4} sx={{ py: 3, display: "flex", alignItems: "center", flexDirection: 'column' }} >
            <Typography gutterBottom variant="h4" component="h2">
              Create an ebook
            </Typography>
            <Grid xs={12} sm={6} md={6}>
              <TextField fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }} sx={{ paddingBottom: "10px" }} label="Name" />
              <TextField fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }} sx={{ paddingBottom: "10px" }} label="Link" />
            </Grid>
            <input style={{ display: "none" }}
              accept="image/*"
              className={classes.input}
              id="contained-button-file"
              multiple
              type="file"
            />
            <label style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "50%" }} htmlFor="contained-button-file">
              <Button sx={{ color: "#fff", width: "100%" }} variant="contained" color="blue" component="span" large xs={12} sm={6} md={6}>
                Upload
              </Button>
            </label>
            <label style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "50%", marginTop: "20px" }} htmlFor="contained-button-file">
              <Button sx={{ color: "#fff", width: "50%" }} variant="contained" color="navyBlue" component="span" large xs={12} sm={6} md={6}>
                Register
              </Button>
            </label>
          </Grid>
        </Container>
      </main>
      <Footer />
    </ThemeProvider>
  );
}
