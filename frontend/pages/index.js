import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import MenuBook from "@mui/icons-material/MenuBook";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

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

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function listBooks() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
     <NavBar/>
      <main>
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="lg">
            <Typography
              component="h1"
              variant="h3"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Free programming ebooks
            </Typography>
            <Container maxWidth="sm">
              <Typography
                variant="h6"
                align="left"
                color="text.secondary"
                paragraph
              >
                This site was made with the aim of helping programmers of all
                levels, especially beginners, by making some programming books
                available for free. We make no profit from sharing this
                information and all rights are reserved to the authors of the
                books.
              </Typography>
            </Container>
          </Container>
        </Box>
        <Container sx={{ py: 3 }} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "300px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent:"space-between",
                  }}
                >
                  <CardMedia
                    sx={{ height: "40%",width:"300px" }}
                    component="img"
                    image="https://source.unsplash.com/eeSdJfLfx1A"
                    alt="books"
                  />
                  <CardContent >
                    <Typography gutterBottom variant="h5" component="h2">
                      Book name
                    </Typography>
                    <Typography>
                     Author
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Download</Button>
                  </CardActions>  
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
     <Footer/>
    </ThemeProvider>
  );
}
