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
          <Typography
            color={"primary"}
            sx={{
              textAlign: {
                xs: "center",
                md: "left",
              },
              fontWeight: "bolder",
              fontSize: {
                md: 40,
                xs: 30,
              },
              width: "100%",
            }}
          >{`I'm Rahman 🇳🇬`}</Typography>
          <Typography
            sx={{
              textAlign: {
                xs: "center",
                md: "left",
              },
              fontWeight: "bolder",
              fontSize: {
                md: 40,
                xs: 30,
              },
              width: "100%",
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
                  md: "justify",
                },
                wordSpacing: {
                  md: -2,
                },
              }}
            >
              {`Graduate of Computer Science and an innovative tech professional
              with 3+ years of experience working as a computer programmer.
              Capable of working across the full-stack of software
              development. Valuable team member who has experience diagnosing
              problems and developing solutions. Extensive expertise in
              networking systems and working with mainframe computers. Talented
              leader with unique ideas and a history of successful contributions
              in the field. I am result-driven and passionate about creating
              applications that seek to meet user requirements.`}
            </Typography>
          </Box>
        </Box>
      </Stack>
    </>
  );
};

export default HomePage;
