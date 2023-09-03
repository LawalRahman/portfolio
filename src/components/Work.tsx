import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { MouseEventHandler } from "react";

type WorkProps = {
  name: string;
  description: string;
  onClick: MouseEventHandler<HTMLDivElement>;
  headerImage: string;
};

export default function Work({
  name,
  description,
  onClick,
  headerImage,
}: WorkProps) {
  return (
    <Card
      sx={{
        width: {
          xs: "100%",
          sm: 250,
          md: 300,
        },
        height: 250,
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <CardMedia
        component="img"
        alt="avatar"
        height="150"
        image={headerImage}
        sx={{ objectFit: "contain", py: 1 }}
      />
      <CardContent>
        <Typography gutterBottom fontWeight={"bold"}>
          {name}
        </Typography>
        <Typography fontSize={12} color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}
