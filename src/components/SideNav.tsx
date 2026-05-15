import { Box, IconButton, Tooltip, useTheme } from "@mui/material";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import { useContext } from "react";
import { Store } from "../store";
import Cookies from "js-cookie";
import { motion } from "framer-motion";

const navItems = [
  { id: "home", icon: <HomeIcon />, label: "Home" },
  { id: "about", icon: <PersonIcon />, label: "About" },
  { id: "portfolio", icon: <BusinessCenterIcon />, label: "Portfolio" },
  { id: "contact", icon: <ContactPageIcon />, label: "Contact" },
];

const SideNav = ({ handleSetScreen }: { handleSetScreen: any }) => {
  const { state, dispatch } = useContext(Store);
  const theme = useTheme();
  const { currentPage } = state;
  const isDark = theme.palette.mode === "dark";

  const handleChange = (newValue: string) => {
    Cookies.set("page", newValue);
    dispatch({ type: "CHANGE_PAGE", payload: newValue });
  };

  return (
    <Box
      sx={{
        position: "fixed",
        right: 30,
        top: "50%",
        transform: "translateY(-50%)",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        padding: 1.5,
        borderRadius: 10,
        bgcolor: isDark ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.05)",
        backdropFilter: "blur(10px)",
        border: "1px solid",
        borderColor: isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)",
        zIndex: 1000,
      }}
    >
      {navItems.map((item, index) => {
        const isActive = currentPage === item.id;
        return (
          <Tooltip key={item.id} title={item.label} placement="left" arrow>
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <IconButton
                onClick={() => handleChange(item.id)}
                sx={{
                  color: isActive
                    ? theme.palette.primary.main
                    : isDark
                    ? "rgba(255, 255, 255, 0.5)"
                    : "rgba(0, 0, 0, 0.5)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    color: theme.palette.primary.main,
                    bgcolor: isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.08)",
                  },
                  position: "relative",
                }}
              >
                {item.icon}
                {isActive && (
                  <motion.div
                    layoutId="activeSideNav"
                    style={{
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                      border: `2px solid ${theme.palette.primary.main}`,
                      borderRadius: "50%",
                    }}
                  />
                )}
              </IconButton>
            </motion.div>
          </Tooltip>
        );
      })}
    </Box>
  );
};

export default SideNav;
