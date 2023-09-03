import CircularProgress, {
  CircularProgressProps,
} from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function Skill(
  props: CircularProgressProps & { value: number; label: string }
) {
  return (
    <Box
      sx={{
        position: "relative",
        display: "inline-flex",
        width: 120,
        height: 120,
      }}
    >
      <CircularProgress
        thickness={4}
        size={120}
        variant="determinate"
        {...props}
        style={{
          strokeLinecap: "round",
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
          component="div"
          sx={{
            fontSize: 20,
            fontWeight: "bold",
            // transform: "scale(1)",
            transition: "all 0.3s ease-in-out 0.2s",
            ":hover": {
              transform: "scale(1.2)",
              transition: "all 0.3s ease-in-out 0.1s",
            },
          }}
        >
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
      <Box
        sx={{
          left: 0,
          bottom: -40,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="caption"
          component="div"
          sx={{
            fontSize: 15,
            fontWeight: "bold",
          }}
        >
          {props.label}
        </Typography>
      </Box>
    </Box>
  );
}
