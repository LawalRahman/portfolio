import { Box, Typography, useTheme } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { motion } from "framer-motion";

export default function Skill({ value, label }: { value: number; label: string }) {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        width: 120,
      }}
    >
      <Box sx={{ position: "relative", display: "inline-flex" }}>
        <CircularProgress
          variant="determinate"
          value={100}
          size={100}
          thickness={2}
          sx={{ color: isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.05)" }}
        />
        <CircularProgress
          variant="determinate"
          value={value}
          size={100}
          thickness={4}
          sx={{
            position: "absolute",
            left: 0,
            strokeLinecap: "round",
            color: theme.palette.primary.main,
          }}
        />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="caption"
            sx={{
              fontSize: 14,
              fontWeight: 800,
              fontFamily: "var(--font-primary)",
              color: "text.primary",
            }}
          >
            {value}%
          </Typography>
        </Box>
      </Box>
      <Typography
        sx={{
          fontSize: 13,
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: 1,
          fontFamily: "var(--font-primary)",
          color: "text.secondary",
        }}
      >
        {label}
      </Typography>
    </Box>
  );
}
