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
import { CircularProgress } from "@mui/material";
import "./App.css";

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
  const [repo, setRepo] = React.useState([]);
  React.useEffect(() => {
    fetch("https://api.github.com/users/LawalRahman/repos")
      .then((resp) => resp.json())
      .then((data) =>
        setRepo(data.filter((item) => item.name !== "portfolio"))
      );
  }, []);

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
              <Link
                underline="none"
                href="https://stackoverflow.com/users/4083326/lawal-rahman-abimbola"
              >
                <i class="fa fa-stack-overflow"></i>
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
            pt: 4,
            pb: 2,
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
              Hi! <div className="neu-text">I'm Rahman</div>
            </Typography>
            <Typography
              variant="p"
              align="center"
              color="text.white"
              paragraph
              style={{ fontSize: "12px" }}
            >
              I am result-driven and passionate about creating applications that
              seek to meet customer satisfaction.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button
                variant="contained"
                sx={{
                  fontSize: {
                    sm: 12,
                    xs: 10,
                  },
                }}
              >
                <Link
                  href="https://drive.google.com/file/d/1ruhEjfhBu7yZWE9DRQGgzbzT-8WRpk1u/view?usp=sharing"
                  underline="none"
                  target="_blank"
                  rel="noopener"
                  style={{ color: "white" }}
                >
                  Download CV <i class="fa fa-solid fa-download"></i>
                </Link>
              </Button>
              <Button
                variant="outlined"
                sx={{
                  fontSize: {
                    sm: 12,
                    xs: 10,
                  },
                }}
              >
                <Link
                  href="https://api.whatsapp.com/send/?phone=2347081838147"
                  underline="none"
                  target="_blank"
                  rel="noopener"
                >
                  WhapsApp <i className="fa fa-brands fa-whatsapp"></i>
                </Link>
              </Button>
              <Button
                variant="outlined"
                sx={{
                  fontSize: {
                    sm: 12,
                    xs: 10,
                  },
                }}
              >
                <Link href="mailto:rahmanabimbina@gmail.com" underline="none">
                  Send Mail <i className="fa fa-envelope"></i>
                </Link>
              </Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ pt: 2 }} maxWidth="md" align="center">
          <Typography
            variant="h3"
            py={3}
            style={{ textDecoration: "underline" }}
          >
            Education
          </Typography>
          {/* End hero unit */}
          <Grid container spacing={4}>
            <Grid item xs={12} sm={12} md={12}>
              <Typography style={{ fontSize: "12px" }}>
                BSc. Computer Science, Univeristy of Ghana (2014-2018)
              </Typography>
            </Grid>
          </Grid>
        </Container>
        <Container sx={{ pt: 2 }} maxWidth="md" align="center">
          <Typography
            variant="h3"
            py={3}
            style={{ textDecoration: "underline" }}
          >
            Experience
          </Typography>
          {/* End hero unit */}
          <Grid container spacing={4}>
            <Grid item xs={12} sm={12} md={12}>
              <Typography variant="h6" style={{ fontWeight: "600" }}>
                Software Developer @ TDTechnologies (2018-2021)
              </Typography>
              <Typography style={{ fontSize: "12px" }}>
                TDtech is a startup with the intention of providing software
                solutions to people but when I was introduced as one of their
                first set of employees just after my final year of project
                defense, I wastasked to create a web app with the Django
                framework though I had no background in it. My background was in
                PHP. After brainstorming with my partner, we decided to build a
                web app that enhances ordering and delivering food online. After
                that, I was introduced to building an API using the Django REST
                framework. In collaboration with my colleagues, we built an API
                for the food delivery app. I was also involved in building the
                mobile application using flutter. Ever since the deployment and
                use of the app in 2019, I had the task of maintaining and
                improving the functionalities of the app.
              </Typography>
            </Grid>
          </Grid>
        </Container>
        <Container sx={{ pt: 2 }} maxWidth="md" align="center">
          <Typography
            variant="h3"
            py={3}
            style={{ textDecoration: "underline" }}
          >
            Field Projects
          </Typography>
          {/* End hero unit */}
          <Grid container spacing={4}>
            <Grid item xs={12} sm={12} md={6}>
              <Card>
                <CardContent>
                  <Box height={130} style={{ fontSize: "12px" }}>
                    <Typography gutterBottom component="div">
                      Foodjoint
                    </Typography>
                    <Typography variant="p" color="text.secondary">
                      Implemented the user interfaces(UI), designed and
                      implement the foodjoint API. Performed Unit Tests on both
                      the API and the web app. Specified and performed Feature
                      Deliverables Test plans. Used: Python with Django
                      framework for the web app, Flutter framework for the
                      mobile app, and Django Rest Framework for the API
                    </Typography>
                  </Box>
                </CardContent>
                <CardActions>
                  <Link
                    href="https://foodjointgh.com"
                    underline="none"
                    target="_blank"
                    rel="noopener"
                  >
                    <Button size="small">Visit</Button>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Card>
                <CardContent>
                  <Box height={130} style={{ fontSize: "12px" }}>
                    <Typography gutterBottom component="div">
                      Ezarlex
                    </Typography>
                    <Typography variant="p" color="text.secondary">
                      I helped a client develop an e-commerce web application
                      using django framework and django rest framework and
                      integrated{" "}
                      <Link
                        href="https://paystack.com"
                        underline="none"
                        target="_blank"
                        rel="noopener"
                      >
                        paystack{" "}
                      </Link>
                      payment system into the application.
                    </Typography>
                  </Box>
                </CardContent>
                <CardActions>
                  <Link
                    href="https://ezarlex.com"
                    underline="none"
                    target="_blank"
                    rel="noopener"
                  >
                    <Button size="small">Visit</Button>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Card>
                <CardContent>
                  <Box height={130} style={{ fontSize: "12px" }}>
                    <Typography gutterBottom component="div">
                      Gspecial
                    </Typography>
                    <Typography variant="p" color="text.secondary">
                      I helped a client develop an e-commerce web application
                      using django framework and django rest framework and
                      integrated{" "}
                      <Link
                        href="https://paystack.com"
                        underline="none"
                        target="_blank"
                        rel="noopener"
                      >
                        paystack{" "}
                      </Link>
                      payment system into the application.
                    </Typography>
                  </Box>
                </CardContent>
                <CardActions>
                  <Link
                    href="https://gspecialgh.com/"
                    underline="none"
                    target="_blank"
                    rel="noopener"
                  >
                    <Button size="small">Visit</Button>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Card>
                <CardContent>
                  <Box height={130} style={{ fontSize: "12px" }}>
                    <Typography gutterBottom component="div">
                      Universal Admission System(First degree final project)
                    </Typography>
                    <Typography variant="p" color="text.secondary">
                      I wrote a thesis and developed an application that allows
                      students to apply to several universities over a single
                      interface. The app used PHP to communicate with a MYSQL
                      database. I integrated the stripe payment system into the
                      app.
                    </Typography>
                  </Box>
                </CardContent>
                <CardActions>
                  <Link
                    href="https://drive.google.com/drive/folders/1CSH8LpS6PQYljhUKgP-Nj77mDZcUP688?usp=sharing"
                    underline="none"
                    target="_blank"
                    rel="noopener"
                  >
                    <Button size="small">Visit</Button>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Container>
        <Container sx={{ pt: 2 }} maxWidth="md" align="center">
          <Typography
            variant="h3"
            py={3}
            style={{ textDecoration: "underline" }}
          >
            Hobby Projects
          </Typography>
          {/* End hero unit */}
          <Grid container spacing={4}>
            {repo ? (
              repo.map((repository) => (
                <Grid item xs={6} sm={4} md={3} key={repository.id}>
                  <Card sx={{ maxWidth: 300 }}>
                    <CardContent>
                      <Box height={100} style={{ fontSize: "12px" }}>
                        <Typography gutterBottom component="div">
                          {repository.name.toUpperCase()}
                        </Typography>
                        <Typography variant="p" color="text.secondary">
                          {repository.description}
                        </Typography>
                      </Box>
                    </CardContent>
                    <CardActions>
                      {repository.homepage && (
                        <Link
                          href={repository.homepage}
                          underline="none"
                          target="_blank"
                          rel="noopener"
                        >
                          <Button size="small">Visit</Button>
                        </Link>
                      )}
                      <Link
                        href={repository.html_url}
                        underline="none"
                        target="_blank"
                        rel="noopener"
                      >
                        <Button size="small">Repo</Button>
                      </Link>
                    </CardActions>
                  </Card>
                </Grid>
              ))
            ) : (
              <Box sx={{ display: "flex" }}>
                <CircularProgress />
              </Box>
            )}
          </Grid>
        </Container>
        <Container sx={{ pt: 2 }} maxWidth="md" align="center">
          <Typography
            variant="h3"
            py={3}
            style={{ textDecoration: "underline" }}
          >
            Skills
          </Typography>
          <Grid container spacing={1}>
            <Grid item xs={3} sm={3} md={2}>
              <img
                src={python}
                alt="python"
                style={{ height: "60px", width: "60px" }}
              />
            </Grid>
            <Grid item xs={3} sm={3} md={2}>
              <img
                src={django}
                alt="django"
                style={{ height: "60px", width: "60px" }}
              />
            </Grid>
            <Grid item xs={3} sm={3} md={2}>
              <img
                src={js}
                alt="js"
                style={{ height: "60px", width: "60px" }}
              />
            </Grid>
            <Grid item xs={3} sm={3} md={2}>
              <img
                src={html}
                alt="html"
                style={{ height: "60px", width: "60px" }}
              />
            </Grid>
            <Grid item xs={3} sm={3} md={2}>
              <img
                src={css}
                alt="css"
                style={{ height: "60px", width: "60px" }}
              />
            </Grid>
            <Grid item xs={3} sm={3} md={2}>
              <img
                src={flutter}
                alt="flutter"
                style={{ height: "60px", width: "60px" }}
              />
            </Grid>
            <Grid item xs={3} sm={3} md={2}>
              <img
                src={dart}
                alt="dart"
                style={{ height: "60px", width: "60px" }}
              />
            </Grid>
            <Grid item xs={3} sm={3} md={2}>
              <img
                src={angular}
                alt="angular"
                style={{ height: "60px", width: "60px" }}
              />
            </Grid>
            <Grid item xs={3} sm={3} md={2}>
              <img
                src={react}
                alt="react"
                style={{ height: "60px", width: "60px" }}
              />
            </Grid>
            <Grid item xs={3} sm={3} md={2}>
              <img
                src={next}
                alt="next"
                style={{ height: "60px", width: "60px", fill: "black" }}
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
            <Link
              underline="none"
              href="https://stackoverflow.com/users/4083326/lawal-rahman-abimbola"
            >
              <i class="fa fa-stack-overflow"></i>
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
