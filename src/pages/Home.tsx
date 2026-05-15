import { Box, Stack, Typography, Button } from "@mui/material";
import MyAvatar from "../components/MyAvatar";
import { motion } from "framer-motion";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useContext } from "react";
import { Store } from "../store";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const HomePage = () => {
  const { dispatch } = useContext(Store);

  return (
    <Box
      component={motion.div}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: { md: "70vh" },
      }}
    >
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
            xs: 4,
            md: 8,
          },
        }}
      >
        <Box component={motion.div} variants={itemVariants}>
          <MyAvatar />
        </Box>
        
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", md: "flex-start" },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <motion.div variants={itemVariants}>
            <Typography
              sx={{
                fontWeight: 800,
                fontSize: { md: 56, xs: 36 },
                lineHeight: 1.1,
                mb: 1,
                fontFamily: "var(--font-primary)",
              }}
            >
              Hi, I'm <Box component="span" sx={{ color: "primary.main" }}>Rahman 🇳🇬</Box>
            </Typography>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 600,
                fontSize: { md: 32, xs: 24 },
                color: "text.secondary",
                mb: 3,
                fontFamily: "var(--font-primary)",
              }}
            >
              Software Developer
            </Typography>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Typography
              sx={{
                fontSize: { xs: 16, md: 18 },
                color: "text.secondary",
                maxWidth: "600px",
                lineHeight: 1.7,
                mb: 4,
              }}
            >
              Graduate of Computer Science and an innovative tech professional
              with 3+ years of experience working as a software developer.
              I build scalable applications with a focus on user experience and 
              technical excellence.
            </Typography>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Stack direction="row" spacing={2}>
              <Button
                variant="contained"
                size="large"
                endIcon={<ArrowForwardIcon />}
                onClick={() => dispatch({ type: "CHANGE_PAGE", payload: "portfolio" })}
                sx={{
                  borderRadius: "12px",
                  px: 4,
                  py: 1.5,
                  textTransform: "none",
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  boxShadow: "0 10px 20px -10px rgba(0,0,0,0.3)",
                }}
              >
                View My Work
              </Button>
              <Button
                variant="outlined"
                size="large"
                onClick={() => dispatch({ type: "CHANGE_PAGE", payload: "contact" })}
                sx={{
                  borderRadius: "12px",
                  px: 4,
                  py: 1.5,
                  textTransform: "none",
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  borderWidth: 2,
                  "&:hover": { borderWidth: 2 },
                }}
              >
                Contact Me
              </Button>
            </Stack>
          </motion.div>
        </Box>
      </Stack>
    </Box>
  );
};

export default HomePage;
