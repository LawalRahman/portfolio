import { Box, Link, Stack, SvgIconTypeMap, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import "font-awesome/css/font-awesome.min.css";
import { darkModePrimaryColor, primaryColor } from "../components/CustomButton";
import { useContext } from "react";
import { Store } from "../store";
import { OverridableComponent } from "@mui/material/OverridableComponent";

type ContactLayoutProps = {
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> | any;
  text: string;
};

const ContactLayout = ({ icon, text }: ContactLayoutProps) => {
  const { state } = useContext(Store);
  const { darkMode } = state;
  return (
    <Stack flexDirection="row" gap={2}>
      <Box
        sx={{
          backgroundColor: darkMode
            ? `${primaryColor}`
            : `${darkModePrimaryColor}`,
          width: 50,
          height: 50,
          borderRadius: 3,
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        {icon}
      </Box>
      <Box
        sx={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        <Typography fontWeight={"bold"}>{text}</Typography>
      </Box>
    </Stack>
  );
};

const ContactPage = () => {
  return (
    <>
      <Stack
        sx={{
          flexDirection: "column",
          gap: 5,
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            gap: 1,
          }}
        >
          <Typography
            color={"primary"}
            sx={{
              fontWeight: "bolder",
              fontSize: {
                md: 50,
                xs: 30,
              },
              textTransform: "uppercase",
            }}
          >
            Contact
          </Typography>
          <Typography
            sx={{
              fontWeight: "bolder",
              fontSize: {
                md: 50,
                xs: 30,
              },
              textTransform: "uppercase",
            }}
          >
            Me
          </Typography>
        </Box>
        <Stack
          sx={{
            flexDirection: "column",
            mt: 5,
            width: "100%",
            gap: 2,
          }}
        >
          <ContactLayout
            icon={<LocationOnIcon sx={{ color: "white" }} fontSize="inherit" />}
            text={"Nigeria"}
          />
          <ContactLayout
            icon={<PhoneIcon sx={{ color: "white" }} fontSize="inherit" />}
            text={"+2347081838147"}
          />
          <ContactLayout
            icon={<EmailIcon sx={{ color: "white" }} fontSize="inherit" />}
            text={"rahmanabimbina@gmail.com"}
          />
          <ContactLayout
            icon={<WhatsAppIcon sx={{ color: "white" }} fontSize="inherit" />}
            text={"+2347081838147"}
          />
        </Stack>
        <Stack flexDirection={"row"} gap={2} justifyContent={"center"}>
          <Link
            href="https://github.com/LawalRahman"
            underline="none"
            target="_blank"
            rel="noopener"
          >
            <i className="fa fa-brands fa-github" style={{ fontSize: 30 }}></i>
          </Link>
          <Link
            href="https://gitlab.com/rahmanlawal"
            underline="none"
            target="_blank"
            rel="noopener"
          >
            <i className="fa fa-brands fa-gitlab" style={{ fontSize: 30 }}></i>
          </Link>
          <Link
            href="https://www.linkedin.com/in/rahman-lawal-ba67a3102/"
            underline="none"
            target="_blank"
            rel="noopener"
          >
            <i
              className="fa fa-brands fa-linkedin"
              style={{ fontSize: 30 }}
            ></i>
          </Link>
          <Link
            href="https://www.behance.net/rahmanlawal"
            underline="none"
            target="_blank"
            rel="noopener"
          >
            <i className="fa fa-brands fa-behance" style={{ fontSize: 30 }}></i>
          </Link>
          <Link
            underline="none"
            href="https://stackoverflow.com/users/4083326/lawal-rahman-abimbola"
          >
            <i className="fa fa-stack-overflow" style={{ fontSize: 30 }}></i>
          </Link>
        </Stack>
      </Stack>
    </>
  );
};

export default ContactPage;
