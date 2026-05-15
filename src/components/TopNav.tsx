import { Box, IconButton, useTheme, Zoom } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { motion } from "framer-motion";

const TopNav = (props: any) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "flex-end",
        position: "fixed",
        top: { xs: 20, md: 30 },
        right: { xs: 20, md: 50 },
        zIndex: 1000,
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <IconButton
          onClick={props.switchThemeHandler}
          sx={{
            width: 45,
            height: 45,
            bgcolor: isDark ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.05)",
            backdropFilter: "blur(10px)",
            border: "1px solid",
            borderColor: isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)",
            boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.1)",
            color: isDark ? "#fff" : "#000",
            transition: "all 0.3s ease",
            "&:hover": {
              bgcolor: isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)",
            },
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={theme.palette.mode}
              initial={{ y: 10, opacity: 0, rotate: -45 }}
              animate={{ y: 0, opacity: 1, rotate: 0 }}
              exit={{ y: -10, opacity: 0, rotate: 45 }}
              transition={{ duration: 0.2 }}
            >
              {isDark ? <LightModeIcon /> : <DarkModeIcon />}
            </motion.div>
          </AnimatePresence>
        </IconButton>
      </motion.div>
    </Box>
  );
};

import { AnimatePresence } from "framer-motion";
export default TopNav;
