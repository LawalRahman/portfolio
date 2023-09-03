import { Box, Fab, useTheme } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

const TopNav = (props: any) => {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
          position: "fixed",
          right: {
            xs: 20,
            md: 50,
          },
          zIndex: 2,
        }}
      >
        <Fab
          aria-label="theme"
          onClick={props.switchThemeHandler}
          sx={{
            display: "flex",
            justifySelf: "flex-start",
          }}
          size="small"
        >
          {theme.palette.mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
        </Fab>
      </Box>
    </>
  );
};

export default TopNav;
