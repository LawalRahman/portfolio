import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import SchoolIcon from "@mui/icons-material/School";
import { Box, Stack, Typography, Button, Container, Grid } from "@mui/material";
import { useContext } from "react";
import CustomTimeline from "../components/CustomTimeLine";
import Skill from "../components/Skill";
import { Store } from "../store";
import { motion } from "framer-motion";

const AboutPage = () => {
  const { state } = useContext(Store);
  
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      sx={{ width: "100%", py: 4 }}
    >
      <Stack spacing={8}>
        {/* Header Section */}
        <Box sx={{ textAlign: "center" }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              fontSize: { md: 56, xs: 36 },
              fontFamily: "var(--font-primary)",
              mb: 2,
            }}
          >
            About <Box component="span" sx={{ color: "primary.main" }}>Me</Box>
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
            <Button
              variant="contained"
              startIcon={<FileDownloadIcon />}
              href="https://drive.google.com/file/d/1jqDeF4Bc0jhCOtT-913XDlcbm_UflUZe/view?usp=sharing"
              target="_blank"
              sx={{
                borderRadius: "12px",
                px: 4,
                py: 1.5,
                textTransform: "none",
                fontWeight: 700,
                fontSize: "1rem",
                boxShadow: "0 10px 20px -10px rgba(0,0,0,0.3)",
              }}
            >
              Download CV
            </Button>
          </Box>
        </Box>

        {/* Skills Section */}
        <Stack spacing={4}>
          <Typography
            variant="h4"
            sx={{
              textAlign: "center",
              fontWeight: 800,
              fontFamily: "var(--font-primary)",
              textTransform: "uppercase",
              letterSpacing: 2,
              mb: 2
            }}
          >
            My Skills
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: { xs: 4, md: 6 },
              justifyContent: "center",
              alignItems: "center",
              maxWidth: "1000px",
              mx: "auto"
            }}
          >
            <Skill value={95} label="HTML" />
            <Skill value={90} label="CSS" />
            <Skill value={95} label="JavaScript" />
            <Skill value={85} label="Python" />
            <Skill value={80} label="Java" />
            <Skill value={85} label="Dart" />
            <Skill value={90} label="React" />
            <Skill value={80} label="Angular" />
            <Skill value={85} label="Django" />
            <Skill value={85} label="Flutter" />
            <Skill value={85} label="React Native" />
            <Skill value={80} label="MySQL" />
          </Box>
        </Stack>

        {/* Experience & Education Section */}
        <Stack spacing={6}>
          <Typography
            variant="h4"
            sx={{
              textAlign: "center",
              fontWeight: 800,
              fontFamily: "var(--font-primary)",
              textTransform: "uppercase",
              letterSpacing: 2,
            }}
          >
            Experience & Education
          </Typography>
          
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Box sx={{ pl: { md: 4 } }}>
                <CustomTimeline
                  icon={<BusinessCenterIcon />}
                  time={"2018 - 2021"}
                  title={"SOFTWARE DEVELOPER - TDTECHNOLOGIES"}
                  text={`Joined as a founding developer. Built a food ordering platform from scratch using Django. Developed REST APIs and mobile apps with Flutter. Maintained system stability and scaled features based on user feedback.`}
                />
                <CustomTimeline
                  icon={<BusinessCenterIcon />}
                  time={"2022 - PRESENT"}
                  title={"FREELANCE & CONTRACT DEVELOPER"}
                  text={
                    <Stack spacing={2}>
                      <Box>
                        <Typography variant="subtitle2" fontWeight={800}>Hotel Reservation System (2025)</Typography>
                        <Typography variant="body2">Built for Ministry of Finance, Côte d'Ivoire. React, Django REST, QR-based check-ins.</Typography>
                      </Box>
                      <Box>
                        <Typography variant="subtitle2" fontWeight={800}>Church Event Management</Typography>
                        <Typography variant="body2">Integrated Paystack for $1M+ USD in transactions. Member registration and accommodation management.</Typography>
                      </Box>
                      <Box>
                        <Typography variant="subtitle2" fontWeight={800}>FoodJoint Delivery</Typography>
                        <Typography variant="body2">Full-stack development of food delivery ecosystem (Admin UIs & APIs).</Typography>
                      </Box>
                    </Stack>
                  }
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ pl: { md: 4 } }}>
                <CustomTimeline
                  icon={<SchoolIcon />}
                  time={"2014 - 2018"}
                  title={"BSc. Computer Science - University of Ghana"}
                  text={`Specialized in Software Engineering. Final project: Universal Admission System using PHP/MySQL for multi-institution applications.`}
                />
              </Box>
            </Grid>
          </Grid>
        </Stack>
      </Stack>
    </Box>
  );
};

export default AboutPage;
