import { Box, Stack, Typography } from "@mui/material";
import MyAvatar from "../components/MyAvatar";

const HomePage = () => {
  return (
    <>
      <Stack
        sx={{
          flexDirection: {
            xs: "column",
            md: "row",
          },
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          gap: {
            xs: 2,
            md: 5,
          },
          pr: {
            md: 10,
          },
        }}
      >
        <Box>
          <MyAvatar />
        </Box>
        <Box
          sx={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: {
                xs: "center",
                md: "start",
              },
              alignItems: "center",
              width: "100%",
              gap: 1,
            }}
          >
            <Typography
              sx={{
                fontWeight: "bolder",
                fontSize: {
                  md: 40,
                  xs: 30,
                },
                textTransform: "uppercase",
              }}
            >{`I'm`}</Typography>
            <Typography
              color={"primary"}
              sx={{
                fontWeight: "bolder",
                fontSize: {
                  md: 40,
                  xs: 30,
                },
                textTransform: "uppercase",
              }}
            >{`Rahman 🇳🇬`}</Typography>
          </Box>
          <Typography
            sx={{
              textAlign: {
                xs: "center",
                md: "left",
              },
              fontWeight: "bolder",
              fontSize: {
                md: 30,
                xs: 30,
              },
              width: "100%",
              textTransform: "uppercase",
            }}
          >
            Software Developer
          </Typography>
          <Box sx={{ mt: 5 }}>
            <Typography
              sx={{
                fontSize: {
                  xs: 14,
                  md: 18,
                },
                minWidth: "70%",
                textAlign: {
                  xs: "center",
                  md: "inherit",
                },
              }}
            >
              Graduate of Computer Science and an innovative tech professional
              with 3+ years of experience working as a software developer.
              Capable of working across the full-stack of software development.
              Valuable team member who has experience diagnosing problems and
              developing solutions. Result-driven and passionate about creating
              applications that seek to meet user requirements. Talented leader
              with unique ideas and a history of successful contributions in the
              field.
            </Typography>
          </Box>
        </Box>
      </Stack>
    </>
  );
};

export default HomePage;
