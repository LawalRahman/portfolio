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
import { motion, AnimatePresence } from "framer-motion";

export const SCREENS: any = {
  home: <HomePage />,
  about: <AboutPage />,
  portfolio: <PortPage />,
  contact: <ContactPage />,
};

function renderSwitch(currentPage: any) {
  switch (currentPage) {
    case "home":
      return SCREENS.home;
    case "about":
      return SCREENS.about;
    case "portfolio":
      return SCREENS.portfolio;
    case "contact":
      return SCREENS.contact;
    default:
      return SCREENS.home;
  }
}

const Index = () => {
  const { state, dispatch } = useContext(Store);
  const { darkMode, currentPage } = state;

  const switchThemeHandler = function () {
    dispatch({ type: darkMode ? "DARK_MODE_OFF" : "DARK_MODE_ON" });
    const newDarkMode = !darkMode ? "ON" : "OFF";
    Cookies.set("darkMode", newDarkMode);
  };

  const handleSetScreen = () => {};

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        minHeight: "100vh",
        bgcolor: "background.default",
        px: {
          xs: 2,
          md: 10,
        },
        pb: {
          xs: 12,
          md: 5,
        },
        pt: {
          xs: 3,
          md: 5,
        },
        flexDirection: "column",
        position: "relative",
        color: "text.primary",
        overflowX: "hidden",
      }}
    >
      <TopNav switchThemeHandler={switchThemeHandler} />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          pt: { xs: 8, md: 4 },
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            style={{ width: "100%" }}
          >
            {renderSwitch(currentPage)}
          </motion.div>
        </AnimatePresence>
      </Box>

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
  );
};

export default Index;
