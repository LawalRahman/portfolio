import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import SchoolIcon from "@mui/icons-material/School";
import { Box, Stack, Typography } from "@mui/material";
import { useContext } from "react";
import CustomButton from "../components/CustomButton";
import CustomTimeline from "../components/CustomTimeLine";
import Skill from "../components/Skill";
import { Store } from "../store";

const AboutPage = () => {
  const { state } = useContext(Store);
  const { darkMode } = state;
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
            About
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
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <CustomButton
            text={"Download CV"}
            icon={<FileDownloadIcon />}
            link="https://drive.google.com/file/d/1jqDeF4Bc0jhCOtT-913XDlcbm_UflUZe/view?usp=sharing"
            darkMode={darkMode}
          />
        </Box>
        <Stack
          sx={{
            flexDirection: "column",
            gap: 5,
            width: "100%",
          }}
        >
          <Box>
            <Typography
              sx={{
                textAlign: {
                  xs: "left",
                  md: "center",
                },
                fontWeight: "bolder",
                fontSize: {
                  md: 30,
                  xs: 25,
                },
                width: "100%",
                textTransform: "uppercase",
              }}
            >
              My Skills
            </Typography>
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexWrap: "wrap",
              rowGap: 10,
              columnGap: {
                xs: 10,
                md: 15,
              },
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Skill value={100} label="HTML" />
            <Skill value={100} label="CSS" />
            <Skill value={100} label="JAVASCRIPT" />
            <Skill value={100} label="PYTHON" />
            <Skill value={100} label="JAVA" />
            <Skill value={100} label="DART" />
            <Skill value={100} label="REACT" />
            <Skill value={100} label="ANGULAR" />
            <Skill value={100} label="DJANGO" />
            <Skill value={100} label="FLUTTER" />
            <Skill value={100} label="REACT-NATIVE" />
            <Skill value={100} label="MYSQL" />
          </Box>
        </Stack>
        <Stack
          sx={{
            flexDirection: "column",
            gap: 5,
            mt: 5,
            width: "100%",
          }}
        >
          <Box>
            <Typography
              sx={{
                textAlign: {
                  xs: "left",
                  md: "center",
                },
                fontWeight: "bolder",
                fontSize: {
                  md: 30,
                  xs: 25,
                },
                width: "100%",
                textTransform: "uppercase",
              }}
            >
              EXPERIENCE & EDUCATION
            </Typography>
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: {
                xs: "column",
                md: "row",
              },
            }}
          >
            <Box sx={{ flexBasis: 0, flexGrow: 1 }}>
              <CustomTimeline
                icon={<BusinessCenterIcon />}
                time={"2018 - 2021"}
                title={"SOFTWARE DEVELOPER - TDTECHNOLOGIES"}
                text={`TDtech is a startup focused on delivering custom software solutions tailored to client needs. I joined the company as one of its first employees shortly after completing my final year project defense. Although my background was in PHP, I was immediately tasked with developing a web application using the Django framework — a technology I had no prior experience with.
                        Working closely with a teammate, we conceptualized and developed a food ordering and delivery platform, marking my introduction to Python and Django. Following the successful launch of the web app, I transitioned to building the backend API using Django REST Framework in collaboration with other developers on the team. I also contributed to the development of the mobile application using Flutter, ensuring a consistent and integrated experience across platforms.
                        Since the initial deployment of the app in 2019, I have been actively responsible for maintaining and enhancing its functionality, implementing feature upgrades, and ensuring overall performance and stability.`}
              />
              <CustomTimeline
                icon={<BusinessCenterIcon />}
                time={"2022 - PRESENT"}
                title={
                  "FREELANCE & CONTRACT-BASED | JAN 2022 – PRESENT | React, Django REST Framework, PostgreSQL, Flutter, Paystack, QR Code APIs"
                }
                text={
                  <Box sx={{ p: 0 }}>
                    <Box sx={{ mt: 0 }}>
                      <Typography gutterBottom sx={{ fontWeight: "bold" }}>
                        Hotel Reservation App (Ministry of Finance, Côte
                        d'Ivoire, 2025)
                      </Typography>
                      <Typography gutterBottom>
                        Built a web app for managing hotel bookings during the
                        Annual Meeting Conference. Used <strong>React</strong>{" "}
                        for the frontend and{" "}
                        <strong>Django REST Framework</strong> with{" "}
                        <strong>PostgreSQL</strong> for the backend. Generated
                        and validated QR codes for attendee bookings.
                      </Typography>
                      <Typography display="block" gutterBottom>
                        ➤ Delivered in collaboration with a private firm.
                      </Typography>
                    </Box>

                    <Box sx={{ mt: 3 }}>
                      <Typography gutterBottom sx={{ fontWeight: "bold" }}>
                        Church Event Management Platform
                      </Typography>
                      <Typography gutterBottom>
                        Developed an app for member registration, accommodation
                        booking, and QR-based check-ins. Integrated{" "}
                        <strong>Paystack</strong>, facilitating over{" "}
                        <strong>$1 million USD</strong> in payments.
                      </Typography>
                      <Typography display="block" gutterBottom>
                        ➤ Tech: React, Django REST Framework, QR code
                        generation.
                      </Typography>
                    </Box>

                    <Box sx={{ mt: 3 }}>
                      <Typography gutterBottom sx={{ fontWeight: "bold" }}>
                        Product & Student Verification System
                      </Typography>
                      <Typography gutterBottom>
                        Built a full-stack system for companies and institutions
                        to verify products or student records using{" "}
                        <strong>QR codes</strong>. Frontend in{" "}
                        <strong>React</strong>, backend in{" "}
                        <strong>Django REST</strong>.
                      </Typography>
                      <Typography display="block" gutterBottom>
                        ➤ Collaborated with a teammate for the mobile app
                        counterpart.
                      </Typography>
                    </Box>

                    <Box sx={{ mt: 3 }}>
                      <Typography gutterBottom sx={{ fontWeight: "bold" }}>
                        FoodJoint – Restaurant & Delivery App
                      </Typography>
                      <Typography gutterBottom>
                        Created APIs and admin-facing UIs for a food delivery
                        app. Worked on <strong>feature delivery testing</strong>
                        , <strong>unit tests</strong>, and{" "}
                        <strong>UI implementation</strong>.
                      </Typography>
                      <Typography display="block" gutterBottom>
                        ➤ Tech: React (admin), Django REST Framework, Flutter
                        (mobile app).
                      </Typography>
                    </Box>

                    <Box sx={{ mt: 3 }}>
                      <Typography gutterBottom sx={{ fontWeight: "bold" }}>
                        Crypto & Fiat Exchange UI
                      </Typography>
                      <Typography gutterBottom>
                        Built the <strong>frontend interface in React</strong>{" "}
                        for a cryptocurrency exchange application.
                      </Typography>
                      <Typography display="block" gutterBottom>
                        ➤ Focused on user experience, crypto/fiat conversion UI,
                        and responsive layout.
                      </Typography>
                    </Box>

                    <Box sx={{ mt: 3 }}>
                      <Typography gutterBottom sx={{ fontWeight: "bold" }}>
                        Apartment Finder App
                      </Typography>
                      <Typography gutterBottom>
                        Developed a web app for searching vacant apartments by
                        proximity. Built with <strong>React</strong> and{" "}
                        <strong>Django REST</strong>, with support for
                        location-based filtering.
                      </Typography>
                    </Box>
                  </Box>
                }
              />
            </Box>
            <Box sx={{ flexBasis: 0, flexGrow: 1 }}>
              <CustomTimeline
                icon={<SchoolIcon />}
                time={"2014 - 2018"}
                title={"BSc. Computer Science - Univeristy of Ghana"}
                text={`My final project was a web application that made use of PHP and mysql. 
                It was a universal admission system that allows applicants apply to multiple 
                institutions without having to apply to them individually.`}
              />
            </Box>
          </Box>
        </Stack>
      </Stack>
    </>
  );
};

export default AboutPage;
