import * as React from "react";
import { Box, IconButton, useTheme } from "@mui/material";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import Cookies from "js-cookie";
import { Store } from "../store";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { id: "home", icon: <HomeIcon />, label: "Home" },
  { id: "about", icon: <PersonIcon />, label: "About" },
  { id: "portfolio", icon: <BusinessCenterIcon />, label: "Portfolio" },
  { id: "contact", icon: <ContactPageIcon />, label: "Contact" },
];

export default function BottomNav() {
  const { state, dispatch } = React.useContext(Store);
  const { currentPage } = state;
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const handleChange = (newValue: string) => {
    Cookies.set("page", newValue);
    dispatch({ type: "CHANGE_PAGE", payload: newValue });
  };

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 20,
        left: "50%",
        transform: "translateX(-50%)",
        width: "90%",
        maxWidth: 400,
        height: 65,
        bgcolor: isDark ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.05)",
        backdropFilter: "blur(15px)",
        border: "1px solid",
        borderColor: isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        zIndex: 1000,
        boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.2)",
      }}
    >
      {navItems.map((item) => {
        const isActive = currentPage === item.id;
        return (
          <Box
            key={item.id}
            sx={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
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
                padding: "10px",
              }}
            >
              <motion.div
                whileTap={{ scale: 0.8 }}
                animate={isActive ? { scale: 1.2 } : { scale: 1 }}
              >
                {item.icon}
              </motion.div>
            </IconButton>
            <AnimatePresence>
              {isActive && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  style={{
                    position: "absolute",
                    bottom: -5,
                    width: 4,
                    height: 4,
                    borderRadius: "50%",
                    backgroundColor: theme.palette.primary.main,
                  }}
                />
              )}
            </AnimatePresence>
          </Box>
        );
      })}
    </Box>
  );
}
