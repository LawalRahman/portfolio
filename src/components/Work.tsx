import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, useTheme, Button, Stack } from "@mui/material";
import { MouseEventHandler } from "react";
import { motion } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";

type WorkProps = {
  name: string;
  description: string;
  onClick: MouseEventHandler<HTMLDivElement>;
  headerImage: string;
  visitLink?: string;
  repoLink?: string;
};

export default function Work({
  name,
  description,
  onClick,
  headerImage,
  visitLink,
  repoLink,
}: WorkProps) {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Box
      component={motion.div}
      whileHover={{ y: -10 }}
      whileTap={{ scale: 0.98 }}
      sx={{
        width: {
          xs: "100%",
          sm: 280,
          md: 320,
        },
      }}
    >
      <Card
        sx={{
          height: 380,
          cursor: "pointer",
          borderRadius: "24px",
          overflow: "hidden",
          bgcolor: isDark ? "rgba(255, 255, 255, 0.03)" : "rgba(0, 0, 0, 0.02)",
          backdropFilter: "blur(10px)",
          border: "1px solid",
          borderColor: isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)",
          boxShadow: isDark 
            ? "0 4px 30px rgba(0, 0, 0, 0.5)" 
            : "0 4px 30px rgba(0, 0, 0, 0.1)",
          transition: "all 0.3s ease",
          "&:hover": {
            borderColor: theme.palette.primary.main,
            boxShadow: `0 10px 40px ${isDark ? "rgba(0,0,0,0.6)" : "rgba(0,0,0,0.15)"}`,
          }
        }}
      >
        <Box 
          onClick={onClick}
          sx={{ 
            height: 180, 
            overflow: "hidden", 
            bgcolor: isDark ? "rgba(255, 255, 255, 0.05)" : "#f5f5f5", 
            p: 2, 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center" 
          }}
        >
          {headerImage ? (
            <CardMedia
              component="img"
              alt={name}
              image={headerImage}
              sx={{ 
                height: "100%",
                width: "auto",
                objectFit: "contain",
              }}
            />
          ) : (
            <Box sx={{ color: "primary.main", display: "flex", flexDirection: "column", alignItems: "center", gap: 1 }}>
              <LaunchIcon sx={{ fontSize: 48, opacity: 0.5 }} />
              <Typography variant="caption" sx={{ fontWeight: 700, opacity: 0.5 }}>PREVIEW LIVE</Typography>
            </Box>
          )}
        </Box>
        <CardContent onClick={onClick} sx={{ p: 3, pb: 1 }}>
          <Typography 
            variant="h6" 
            sx={{ 
              fontWeight: 700, 
              mb: 0.5,
              fontFamily: "var(--font-primary)",
              color: "text.primary",
              fontSize: "1.1rem"
            }}
          >
            {name}
          </Typography>
          <Typography 
            variant="body2" 
            sx={{ 
              color: "primary.main",
              fontWeight: 700,
              fontSize: 11,
              letterSpacing: 1,
              textTransform: "uppercase",
              mb: 2
            }}
          >
            {description}
          </Typography>
        </CardContent>

        <Stack 
          direction="row" 
          spacing={1} 
          sx={{ px: 3, pb: 3, mt: "auto" }}
        >
          {visitLink && (
            <Button
              variant="contained"
              size="small"
              startIcon={<LaunchIcon sx={{ fontSize: 18 }} />}
              href={visitLink}
              target="_blank"
              sx={{
                borderRadius: "10px",
                textTransform: "none",
                fontWeight: 600,
                fontSize: "0.75rem",
                flex: 1,
                boxShadow: "none"
              }}
            >
              Visit
            </Button>
          )}
          {repoLink && (
            <Button
              variant="outlined"
              size="small"
              startIcon={<GitHubIcon sx={{ fontSize: 18 }} />}
              href={repoLink}
              target="_blank"
              sx={{
                borderRadius: "10px",
                textTransform: "none",
                fontWeight: 600,
                fontSize: "0.75rem",
                flex: visitLink ? 1 : 0,
                borderWidth: 1.5,
                "&:hover": { borderWidth: 1.5 }
              }}
            >
              Repo
            </Button>
          )}
          {!visitLink && !repoLink && (
            <Button
              variant="text"
              size="small"
              onClick={onClick}
              sx={{
                borderRadius: "10px",
                textTransform: "none",
                fontWeight: 600,
                fontSize: "0.75rem",
                color: "text.secondary"
              }}
            >
              View Details
            </Button>
          )}
        </Stack>
      </Card>
    </Box>
  );
}
