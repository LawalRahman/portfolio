import { Box, Stack, Typography } from "@mui/material";
import CustomButton from "../components/CustomButton";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import SchoolIcon from "@mui/icons-material/School";
import Skill from "../components/Skill";
import { useContext } from "react";
import { Store } from "../store";
import CustomTimeline from "../components/CustomTimeLine";

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
            <Skill value={70} label="HTML" />
            <Skill value={70} label="CSS" />
            <Skill value={70} label="JAVASCRIPT" />
            <Skill value={70} label="PYTHON" />
            <Skill value={50} label="JAVA" />
            <Skill value={30} label="DART" />
            <Skill value={60} label="REACT" />
            <Skill value={50} label="ANGULAR" />
            <Skill value={60} label="DJANGO" />
            <Skill value={30} label="FLUTTER" />
            <Skill value={50} label="REACT-NATIVE" />
            <Skill value={60} label="MYSQL" />
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
                text={`TDtech is a startup that provide software solutions to customers by
                creating apps to meet their demand. When I was introduced as one of
                the first set of employees just after my final year of project
                defense, I was tasked to create a web app with the Django framework,
                though I had no background in it. My background was in PHP. After
                brainstorming with my partner, we decided to build a web app that
                enhances ordering and delivering food online. After that, I was
                introduced to building an API using the Django REST framework. In
                collaboration with my colleagues, we built an API for the food
                delivery app. I was also involved in building the mobile application
                using flutter. Ever since the deployment and use of the app in 2019, I
                had the task of maintaining and improving the functionalities of the
                app.`}
              />
              <CustomTimeline
                icon={<BusinessCenterIcon />}
                time={"2022 - PRESENT"}
                title={"FREELANCE"}
                text={`For over a year, I have worked as a freelance developer. During this period,
                I have worked using Angular, React, a little bit of AWS, React-Native and Flutter.`}
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
