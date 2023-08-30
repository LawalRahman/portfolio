import { Typography } from "@mui/material";

type CustomButtonProps = {
  text: string;
  icon: any;
};
const CustomButton = ({ text, icon }: CustomButtonProps) => {
  return (
    <>
      <Typography>Custom Button</Typography>
    </>
  );
};

export default CustomButton;
