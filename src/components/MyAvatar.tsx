import { Avatar } from "@mui/material";
import { avatar } from "../img";

const MyAvatar = () => {
  return (
    <>
      <Avatar
        alt="Rahman Lawal"
        src={avatar}
        sx={{
          width: {
            xs: 300,
            md: 400,
          },
          height: {
            xs: 300,
            md: 400,
          },
        }}
      />
    </>
  );
};

export default MyAvatar;
