import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import { Paper, colors } from "@mui/material";
import Cookies from "js-cookie";
import { Store } from "../store";
import HomePage from "../pages/Home";
import AboutPage from "../pages/About";
import PortPage from "../pages/Portfolio";
import ContactPage from "../pages/Contact";

type BottomNavProps = {
  handleSetScreen: any;
};

export default function BottomNav({ handleSetScreen }: BottomNavProps) {
  const { state, dispatch } = React.useContext(Store);
  const { currentPage } = state;
  const [value, setValue] = React.useState(currentPage || "home");

  const handleChange = (
    event: React.SyntheticEvent<Element, Event>,
    newValue: string
  ) => {
    setValue(newValue);
    Cookies.set("page", newValue);
    dispatch({ type: "CHANGE_PAGE", payload: newValue });
    if (newValue === "home") {
      handleSetScreen(<HomePage />);
    } else if (newValue === "about") {
      handleSetScreen(<AboutPage />);
    } else if (newValue === "portfolio") {
      handleSetScreen(<PortPage />);
    } else {
      handleSetScreen(<ContactPage />);
    }
  };

  return (
    <Paper
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: colors.grey[300],
        width: "full",
      }}
      elevation={8}
    >
      <BottomNavigation
        sx={{ width: "full" }}
        value={value}
        onChange={handleChange}
      >
        <BottomNavigationAction value="home" icon={<HomeIcon />} />
        <BottomNavigationAction value="about" icon={<PersonIcon />} />
        <BottomNavigationAction
          value="portfolio"
          icon={<BusinessCenterIcon />}
        />
        <BottomNavigationAction value="contact" icon={<ContactPageIcon />} />
      </BottomNavigation>
    </Paper>
  );
}
