import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Box, Chip, Stack, Typography } from "@mui/material";

type CustomTimelineProps = {
  text: string;
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
  return (
    <Timeline
      sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
      }}
    >
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined">
            {icon}
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Stack sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Box>
              <Chip label={time} />
            </Box>
            <Typography fontWeight={"bold"}>{title}</Typography>
            <Typography sx={{ textAlign: "inherit" }}>{text}</Typography>
          </Stack>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
