import Timeline from "@mui/lab/Timeline";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import { Box, Chip, Stack, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";

type CustomTimelineProps = {
  text: any;
  time: string;
  title: string;
  icon: any;
};

export default function CustomTimeline({
  text,
  icon,
  title,
  time,
}: CustomTimelineProps) {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Timeline
      sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
        p: 0,
      }}
    >
      <TimelineItem component={motion.div} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
        <TimelineSeparator>
          <TimelineDot 
            sx={{ 
              bgcolor: "primary.main", 
              boxShadow: "0 0 15px rgba(25, 118, 210, 0.4)",
              border: "none",
              p: 1.5
            }}
          >
            {icon}
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: "rgba(128, 128, 128, 0.2)", width: 2 }} />
        </TimelineSeparator>
        <TimelineContent sx={{ pb: 6, pl: 3 }}>
          <Stack spacing={2}>
            <Box>
              <Chip 
                label={time} 
                size="small"
                sx={{ 
                  fontWeight: 700, 
                  bgcolor: isDark ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.05)",
                  fontFamily: "var(--font-primary)",
                  borderRadius: "8px"
                }} 
              />
            </Box>
            <Typography 
              variant="h6" 
              sx={{ 
                fontWeight: 700, 
                fontFamily: "var(--font-primary)",
                lineHeight: 1.3
              }}
            >
              {title}
            </Typography>
            <Box 
              sx={{ 
                color: "text.secondary", 
                lineHeight: 1.6,
                fontSize: "0.95rem",
                "& strong": { color: "text.primary" }
              }}
            >
              {text}
            </Box>
          </Stack>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
