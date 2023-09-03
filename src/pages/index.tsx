import { Box } from "@mui/material";
import { useContext } from "react";
import { Store } from "../store";
import Cookies from "js-cookie";
import TopNav from "../components/TopNav";
import BottomNav from "../components/BottomNav";
import AboutPage from "./About";
import HomePage from "./Home";
import SideNav from "../components/SideNav";
import PortPage from "./Portfolio";
import ContactPage from "./Contact";

export const SCREENS: any = {
  home: <HomePage />,
  about: <AboutPage />,
  portfolio: <PortPage />,
  contact: <ContactPage />,
};

function renderSwitch(currentPage: any) {
  switch (currentPage) {
    case "home":
      return <>{SCREENS.home}</>;
    case "about":
      return <>{SCREENS.about}</>;
    case "portfolio":
      return <>{SCREENS.portfolio}</>;
    case "contact":
      return <>{SCREENS.contact}</>;

    default:
      return <>{SCREENS.home}</>;
  }
}

const Index = () => {
  const { state, dispatch } = useContext(Store);
  const { darkMode, currentPage } = state;
  // const [screen, setScreen] = useState<any>([SCREENS[currentPage]]);
  const switchThemeHandler = function () {
    dispatch({ type: darkMode ? "DARK_MODE_OFF" : "DARK_MODE_ON" });
    const newDarkMode = !darkMode ? "ON" : "OFF";
    Cookies.set("darkMode", newDarkMode);
  };
  const handleSetScreen = (item: any) => {
    // setScreen(item);
  };
  // console.log(screens);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          minHeight: "100vh",
          bgcolor: "background.default",
          px: {
            xs: 3,
            md: 10,
          },
          pb: {
            xs: 15,
          },
          pt: {
            xs: 3,
            md: 5,
          },
          flexDirection: "column",
          position: "relative",
          color: "text.primary",
        }}
      >
        <Box>
          <TopNav switchThemeHandler={switchThemeHandler} />
        </Box>
        <Box
          sx={{
            margin: "0px auto",
            pt: 5,
          }}
        >
          {renderSwitch(currentPage)}
        </Box>
        {/* <TransitionGroup>
          {screens.map((page: any, i: number) => (
            <Slide direction="down" key={i} timeout={1000}>
              {renderSwitch(page, currentPage)}
            </Slide>
          ))}
        </TransitionGroup> */}

        <Box
          sx={{
            display: {
              xs: "block",
              md: "none",
            },
          }}
        >
          <BottomNav handleSetScreen={handleSetScreen} />
        </Box>
        <Box
          sx={{
            display: {
              xs: "none",
              md: "block",
            },
          }}
        >
          <SideNav handleSetScreen={handleSetScreen} />
        </Box>
      </Box>
    </>
  );
};

export default Index;
