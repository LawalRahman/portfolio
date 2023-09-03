import { Box, Button } from "@mui/material";

export const primaryColor = "#8fc9f9";
export const darkModePrimaryColor = "#1776d1";

type CustomButtonProps = {
  text: string;
  icon?: any;
  link?: string;
  darkMode?: boolean;
};
const CustomButton = ({ text, icon, link, darkMode }: CustomButtonProps) => {
  return (
    <>
      <Button
        href={link}
        variant="outlined"
        size="large"
        sx={{
          display: "flex",
          borderLeftWidth: 0,
          borderLeftStyle: "none",
          position: "relative",
          borderRadius: 10,
          height: 50,
          paddingLeft: 0,
          fontWeight: "bold",
          fontSize: 12,
          transition: "background-position .7s",
          backgroundSize: ["100%", "200%"],
          backgroundImage: {
            md: `linear-gradient(to right, transparent 50%, ${
              darkMode ? primaryColor : darkModePrimaryColor
            } 55%)`,
          },
          ":hover": {
            backgroundPosition: ["0", "-100%"],
            border: "none",
            color: "white",
          },
        }}
      >
        <Box
          sx={{
            marginRight: 1,
            borderRadius: 10,
            height: 50,
            width: 50,
            fontSize: 12,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: darkMode ? primaryColor : darkModePrimaryColor,
            color: "white",
          }}
        >
          {icon}
        </Box>
        {text}
      </Button>
    </>
  );
};

export default CustomButton;
