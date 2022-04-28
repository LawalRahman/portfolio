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
import python from "./img/python.svg";
import js from "./img/js.svg";
import html from "./img/html.svg";
import dart from "./img/dart.svg";
import flutter from "./img/flutter.svg";
import angular from "./img/angular.svg";
import css from "./img/css.svg";
import next from "./img/next.png";
import django from "./img/django.svg";
import react from "./img/react.svg";

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
            <Link href="/portfolio" underline="none">
              {"<rahmanlawal>"}
            </Link>
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
              <Link
                href="https://www.behance.net/rahmanlawal"
                underline="none"
                target="_blank"
                rel="noopener"
              >
                <i className="fa fa-brands fa-behance"></i>
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
              Hello! I'm{" "}
              <span
                style={{
                  fontSize: "50px",
                  fontWeight: "bolder",
                  fontFamily: "Nunito",
                }}
              >
                Rahman Lawal
              </span>
            </Typography>
            <Typography variant="p" align="center" color="text.white" paragraph>
              I am result driven and passionate about creating web applications
              that seeks to meet customer satisfaction.
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

        <Container sx={{ py: 2 }} maxWidth="md" align="center">
          <Typography
            variant="h3"
            py={6}
            style={{ textDecoration: "underline" }}
          >
            Projects
          </Typography>
          {/* End hero unit */}
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ maxWidth: 300 }}>
                <CardContent>
                  <Box height={100} style={{ fontSize: "12px" }}>
                    <Typography gutterBottom component="div">
                      E-commerce
                    </Typography>
                    <Typography variant="p" color="text.secondary">
                      App to viewitems, add them to cart and make payment
                      online. Developed with Nextjs
                    </Typography>
                  </Box>
                </CardContent>
                <CardActions>
                  <Link
                    href="https://e-commerzonia.netlify.app/"
                    underline="none"
                    target="_blank"
                    rel="noopener"
                  >
                    <Button size="small">Visit</Button>
                  </Link>
                  {/* <Button size="small">Repo</Button> */}
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ maxWidth: 300 }}>
                <CardContent>
                  <Box height={100} style={{ fontSize: "12px" }}>
                    <Typography gutterBottom component="div">
                      Forkify
                    </Typography>
                    <Typography variant="p" color="text.secondary">
                      Search for any recipe. Developed with html, css and
                      javascript
                    </Typography>
                  </Box>
                </CardContent>
                <CardActions>
                  <Link
                    href="https://forkify-rahman.netlify.app/#5ed6604591c37cdc054bcb33"
                    underline="none"
                    target="_blank"
                    rel="noopener"
                  >
                    <Button size="small">Visit</Button>
                  </Link>
                  {/* <Button size="small">Repo</Button> */}
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ maxWidth: 300 }}>
                <CardContent>
                  <Box height={100} style={{ fontSize: "12px" }}>
                    <Typography gutterBottom component="div">
                      Meetup App
                    </Typography>
                    <Typography variant="p" color="text.secondary">
                      Simple app to create, favorite and view meetups. Developed
                      with react
                    </Typography>
                  </Box>
                </CardContent>
                <CardActions>
                  <Link
                    href="https://the-react-app.netlify.app/"
                    underline="none"
                    target="_blank"
                    rel="noopener"
                  >
                    <Button size="small">Visit</Button>
                  </Link>
                  {/* <Button size="small">Repo</Button> */}
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Container>
        <Container sx={{ py: 2 }} maxWidth="md" align="center">
          <Typography
            variant="h3"
            py={6}
            style={{ textDecoration: "underline" }}
          >
            Skills
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={6} sm={3} md={2}>
              <img
                src={python}
                alt="python"
                style={{ height: "100px", width: "100px" }}
              />
            </Grid>
            <Grid item xs={6} sm={3} md={2}>
              <img
                src={django}
                alt="django"
                style={{ height: "100px", width: "100px" }}
              />
            </Grid>
            <Grid item xs={6} sm={3} md={2}>
              <img
                src={js}
                alt="js"
                style={{ height: "100px", width: "100px" }}
              />
            </Grid>
            <Grid item xs={6} sm={3} md={2}>
              <img
                src={html}
                alt="html"
                style={{ height: "100px", width: "100px" }}
              />
            </Grid>
            <Grid item xs={6} sm={3} md={2}>
              <img
                src={css}
                alt="css"
                style={{ height: "100px", width: "100px" }}
              />
            </Grid>
            <Grid item xs={6} sm={3} md={2}>
              <img
                src={flutter}
                alt="flutter"
                style={{ height: "100px", width: "100px" }}
              />
            </Grid>
            <Grid item xs={6} sm={3} md={2}>
              <img
                src={dart}
                alt="dart"
                style={{ height: "100px", width: "100px" }}
              />
            </Grid>
            <Grid item xs={6} sm={3} md={2}>
              <img
                src={angular}
                alt="angular"
                style={{ height: "100px", width: "100px" }}
              />
            </Grid>
            <Grid item xs={6} sm={3} md={2}>
              <img
                src={react}
                alt="react"
                style={{ height: "100px", width: "100px" }}
              />
            </Grid>
            <Grid item xs={6} sm={3} md={2}>
              <img
                src={next}
                alt="next"
                style={{ height: "100px", width: "100px", fill: "black" }}
              />
            </Grid>
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ py: 2 }} component="footer" height={100} color="white">
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
            <Link
              href="https://www.behance.net/rahmanlawal"
              underline="none"
              target="_blank"
              rel="noopener"
            >
              <i className="fa fa-brands fa-behance"></i>
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
