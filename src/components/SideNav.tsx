// import {
//   BottomNavigation,
//   BottomNavigationAction,
//   Box,
//   Fab,
//   Grow,
//   colors,
// } from "@mui/material";
// import ContactPageIcon from "@mui/icons-material/ContactPage";
// import HomeIcon from "@mui/icons-material/Home";
// import PersonIcon from "@mui/icons-material/Person";
// import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
// import { useContext, useState } from "react";
// import { Store } from "../store";
// import { primaryColor } from "./CustomButton";
// import Cookies from "js-cookie";
// import HomePage from "../pages/Home";
// import AboutPage from "../pages/About";

// type SideNavProps = {
//   handleSetScreen: any;
// };

// const fabStyle = {
//   display: "flex",
//   justifySelf: "flex-start",
//   bgcolor: "background.default",
// };

// const SideNav = ({ handleSetScreen }: SideNavProps) => {
//   const { state, dispatch } = useContext(Store);
//   const { currentPage, darkMode } = state;
//   const [value, setValue] = useState(currentPage || "home");
//   const handleChange = (newValue: string) => {
//     setValue(newValue);
//     Cookies.set("page", newValue);
//     dispatch({ type: "CHANGE_PAGE", payload: newValue });
//     if (newValue === "home") {
//       handleSetScreen(<HomePage />);
//     } else if (newValue === "about") {
//       handleSetScreen(<AboutPage />);
//     } else if (newValue === "portfolio") {
//       handleSetScreen(<AboutPage />);
//     } else {
//       handleSetScreen(<AboutPage />);
//     }
//   };
//   return (
//     <Box
//       sx={{
//         position: "fixed",
//         right: 40,
//         bottom: "30%",
//         // backgroundColor: "none",
//         // width: "10%",
//         display: "flex",
//         flexDirection: "column",
//         gap: 2,
//         // border: "1px solid red",
//       }}
//     >
//       <Grow in={true} timeout={500}>
//         <Fab
//           aria-label="home"
//           color={darkMode ? "primary" : "primary"}
//           sx={{
//             ...fabStyle,
//             color: darkMode ? "white" : "default",
//           }}
//           onClick={() => handleChange("home")}
//         >
//           <HomeIcon
//             color="primary"
//             sx={{ color: darkMode ? "white" : "black" }}
//           />
//         </Fab>
//       </Grow>
//       <Grow in={true} timeout={1000}>
//         <Fab
//           aria-label="about"
//           color={value === "about" ? "primary" : "default"}
//           sx={{
//             ...fabStyle,
//             // color: value === "about" ? "white" : "default",
//           }}
//           onClick={() => handleChange("about")}
//         >
//           <PersonIcon />
//         </Fab>
//       </Grow>
//       <Grow in={true} timeout={1500}>
//         <Fab
//           aria-label="portfolio"
//           color={value === "portfolio" ? "primary" : "default"}
//           sx={{
//             ...fabStyle,
//             background: value === "portfolio" ? primaryColor : "default",
//           }}
//           onClick={() => handleChange("portfolio")}
//         >
//           <BusinessCenterIcon />
//         </Fab>
//       </Grow>
//       <Grow in={true} timeout={2000}>
//         <Fab
//           aria-label="contact"
//           color={value === "contact" ? "primary" : "default"}
//           sx={{
//             ...fabStyle,
//             background: value === "contact" ? primaryColor : "default",
//           }}
//           onClick={() => handleChange("contact")}
//         >
//           <ContactPageIcon />
//         </Fab>
//       </Grow>
//     </Box>
//   );
// };

// export default SideNav;

import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Grow,
} from "@mui/material";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import { useContext, useState } from "react";
import { Store } from "../store";
import Cookies from "js-cookie";
import HomePage from "../pages/Home";
import AboutPage from "../pages/About";
import PortPage from "../pages/Portfolio";
import ContactPage from "../pages/Contact";

type SideNavProps = {
  handleSetScreen: any;
};

const SideNav = ({ handleSetScreen }: SideNavProps) => {
  const { state, dispatch } = useContext(Store);
  const { currentPage } = state;
  const [value, setValue] = useState(currentPage || 0);
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
    <Box
      sx={{
        position: "fixed",
        right: 30,
        top: "40%",
        display: "flex",
        flexDirection: "column",
        // width: "0%",
      }}
    >
      <BottomNavigation
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 5,
        }}
        value={value}
        onChange={handleChange}
      >
        <BottomNavigationAction
          value="home"
          icon={
            <Grow in={true} timeout={500} defaultValue={"home"}>
              <HomeIcon fontSize="large" />
            </Grow>
          }
        />
        <BottomNavigationAction
          value="about"
          icon={
            <Grow in={true} timeout={1000}>
              <PersonIcon fontSize="large" />
            </Grow>
          }
        />
        <BottomNavigationAction
          value="portfolio"
          icon={
            <Grow in={true} timeout={1500}>
              <BusinessCenterIcon fontSize="large" />
            </Grow>
          }
        />
        <BottomNavigationAction
          value="contact"
          icon={
            <Grow in={true} timeout={2000}>
              <ContactPageIcon fontSize="large" />
            </Grow>
          }
        />
      </BottomNavigation>
    </Box>
  );
};

export default SideNav;
