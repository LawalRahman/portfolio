import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import "font-awesome/css/font-awesome.min.css";
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@mui/material/styles";

const cards = [1, 2, 3];

let theme = createTheme({
  typography: {
    fontFamily: ["Montserrat Alternates", "Nunito"].join(","),
  },
  palette: {
    mode: "dark",
  },
});
theme = responsiveFontSizes(theme);

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar fontSize="10px">
          <Typography
            variant="p"
            component="div"
            sx={{ flexGrow: 1 }}
            fontSize="15px"
          >
            RahmanLawal
          </Typography>
          <Typography variant="h6" align="center" gutterBottom>
            <Stack direction={"row"} spacing={2} justifyContent="center">
              <Link
                href="https://github.com/LawalRahman"
                underline="none"
                target="_blank"
                rel="noopener"
              >
                <i className="fa fa-brands fa-github"></i>
              </Link>
              <Link
                href="https://gitlab.com/rahmanlawal"
                underline="none"
                target="_blank"
                rel="noopener"
              >
                <i className="fa fa-brands fa-gitlab"></i>
              </Link>
              <Link
                href="https://www.linkedin.com/in/rahman-lawal-ba67a3102/"
                underline="none"
                target="_blank"
                rel="noopener"
              >
                <i className="fa fa-brands fa-linkedin"></i>
              </Link>
            </Stack>
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="md">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Hi!
            </Typography>
            <Typography
              variant="p"
              align="center"
              color="text.white"
              paragraph
              // fontSize={8}
            >
              I am Rahman, passionate about creating web applications. My works
              are result driven and inclined towards meeting customer
              satisfaction.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">
                <Link
                  href="https://drive.google.com/file/d/1ruhEjfhBu7yZWE9DRQGgzbzT-8WRpk1u/view?usp=sharing"
                  underline="none"
                  target="_blank"
                  rel="noopener"
                  style={{ color: "white" }}
                >
                  Download CV
                </Link>
              </Button>
              <Button variant="outlined">
                <Link
                  href="https://api.whatsapp.com/send/?phone=2347081838147"
                  underline="none"
                  target="_blank"
                  rel="noopener"
                >
                  WhapsApp <i className="fa fa-brands fa-whatsapp"></i>
                </Link>
              </Button>
            </Stack>
          </Container>
        </Box>

        <Container sx={{ py: 8 }} maxWidth="md" align="center">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card sx={{ maxWidth: 300 }}>
                  <CardContent>
                    <Typography gutterBottom component="div">
                      Lizard
                    </Typography>
                    <Typography variant="p" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        <Container sx={{ py: 8 }} maxWidth="md" align="center">
          <Typography variant="h3" py={6}>
            Skills
          </Typography>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={6} md={3}>
              <img
                src="python.svg"
                alt="python"
                style={{ height: "200px", width: "200px" }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <img
                src="django.svg"
                alt="django"
                style={{ height: "200px", width: "200px" }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <img
                src="js.svg"
                alt="js"
                style={{ height: "200px", width: "200px" }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <img
                src="html.svg"
                alt="html"
                style={{ height: "200px", width: "200px" }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <img
                src="css.svg"
                alt="css"
                style={{ height: "200px", width: "200px" }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <img
                src="flutter.svg"
                alt="flutter"
                style={{ height: "200px", width: "200px" }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <img
                src="dart.svg"
                alt="dart"
                style={{ height: "200px", width: "200px" }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <img
                src="angular.svg"
                alt="angular"
                style={{ height: "200px", width: "200px" }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <img
                src="react.svg"
                alt="react"
                style={{ height: "200px", width: "200px" }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <img
                src="next.png"
                alt="next"
                style={{ height: "200px", width: "200px", fill: "black" }}
              />
            </Grid>
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ p: 6 }} component="footer" height={100} color="white">
        <Typography variant="h6" align="center" gutterBottom>
          <Stack direction={"row"} spacing={2} justifyContent="center">
            <Link
              href="https://github.com/LawalRahman"
              underline="none"
              target="_blank"
              rel="noopener"
            >
              <i className="fa fa-brands fa-github"></i>
            </Link>
            <Link
              href="https://gitlab.com/rahmanlawal"
              underline="none"
              target="_blank"
              rel="noopener"
            >
              <i className="fa fa-brands fa-gitlab"></i>
            </Link>
            <Link
              href="https://www.linkedin.com/in/rahman-lawal-ba67a3102/"
              underline="none"
              target="_blank"
              rel="noopener"
            >
              <i className="fa fa-brands fa-linkedin"></i>
            </Link>
          </Stack>
        </Typography>
        <Typography variant="p" align="center" color="text.white" paragraph>
          rahmanlawal &copy; 2022
        </Typography>
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}
