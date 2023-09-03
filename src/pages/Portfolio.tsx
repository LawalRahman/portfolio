import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import { useState } from "react";
import Work from "../components/Work";
import {
  cryptoImages,
  datingImages,
  foodjointImages,
  jobImages,
  kudiexImages,
} from "../img";
import Carousel from "react-material-ui-carousel";
import CloseIcon from "@mui/icons-material/Close";

const PortPage = () => {
  const [projectImages, setProjectImages] = useState<string[]>([]);
  const [modalTitle, setModalTitle] = useState<string>("");
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal: (x: string[], title: string) => void = (
    projectImgs: string[],
    title: string
  ) => {
    setOpenModal(true);
    setModalTitle(title);
    setProjectImages(projectImgs);
  };
  const handleCloseModal = () => setOpenModal(false);

  return (
    <>
      <Stack
        sx={{
          flexDirection: "column",
          gap: 5,
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            gap: 1,
          }}
        >
          <Typography
            color={"primary"}
            sx={{
              fontWeight: "bolder",
              fontSize: {
                md: 50,
                xs: 30,
              },
              textTransform: "uppercase",
            }}
          >
            My
          </Typography>
          <Typography
            sx={{
              fontWeight: "bolder",
              fontSize: {
                md: 50,
                xs: 30,
              },
              textTransform: "uppercase",
            }}
          >
            PORTFOLIO
          </Typography>
        </Box>
        <Stack
          sx={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            rowGap: 5,
            columnGap: {
              xs: 5,
              md: 5,
            },
            mt: 5,
            width: "100%",
            flexWrap: "wrap",
          }}
        >
          <Work
            name={"Food Delivery App"}
            description={"REACT, AWS"}
            onClick={() =>
              handleOpenModal(foodjointImages, "Food Delivery App")
            }
            headerImage={foodjointImages[0]}
          />
          <Work
            name={"Money/Crypto Transfer App"}
            description={"ANGULAR, AWS"}
            onClick={() =>
              handleOpenModal(kudiexImages, "Money/Crypto Transfer App")
            }
            headerImage={kudiexImages[0]}
          />
          <Work
            name={"Crypto Exchange App"}
            description={"REACT-NATIVE"}
            onClick={() => handleOpenModal(cryptoImages, "Crypto Exchange App")}
            headerImage={cryptoImages[0]}
          />
          <Work
            name={"Job Search App"}
            description={"REACT_NATIVE"}
            onClick={() => handleOpenModal(jobImages, "Job Search App")}
            headerImage={jobImages[0]}
          />
          <Work
            name={"Dating App"}
            description={"REACT"}
            onClick={() => handleOpenModal(datingImages, "Dating App")}
            headerImage={datingImages[1]}
          />
        </Stack>
      </Stack>
      <BasicModal
        open={openModal}
        handleCloseModal={handleCloseModal}
        displayImages={projectImages}
        title={modalTitle}
      />
    </>
  );
};

export default PortPage;

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

type ModalProps = {
  open: boolean;
  handleCloseModal: () => void;
  displayImages: string[];
  title: string;
};

function BasicModal({
  open,
  handleCloseModal,
  displayImages,
  title,
}: ModalProps) {
  return (
    <BootstrapDialog
      open={open}
      onClose={handleCloseModal}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <DialogTitle
        sx={{ m: 0, p: 2, fontSize: { xs: 10, md: 15 }, fontWeight: "bold" }}
        id="dialog-title"
      >
        {title}
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={handleCloseModal}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent dividers>
        <Box
          sx={{
            width: 350,
          }}
        >
          <Carousel animation="slide">
            {displayImages.map((item: any, i: number) => (
              <Box
                key={i}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img alt={item} src={item} width={"80%"} height={"80%"} />
              </Box>
            ))}
          </Carousel>
        </Box>
      </DialogContent>
    </BootstrapDialog>
  );
}
