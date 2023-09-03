import { Box, Modal, Stack, Typography } from "@mui/material";
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

const PortPage = () => {
  const [projectImages, setProjectImages] = useState<string[]>([]);
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal: (x: string[]) => void = (projectImgs: string[]) => {
    setOpenModal(true);
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
            onClick={() => handleOpenModal(foodjointImages)}
            headerImage={foodjointImages[0]}
          />
          <Work
            name={"money/Crypto Transfer App"}
            description={"ANGULAR, AWS"}
            onClick={() => handleOpenModal(kudiexImages)}
            headerImage={kudiexImages[0]}
          />
          <Work
            name={"Crypto Exchange App"}
            description={"REACT-NATIVE"}
            onClick={() => handleOpenModal(cryptoImages)}
            headerImage={cryptoImages[0]}
          />
          <Work
            name={"Crypto Exchange App"}
            description={"REACT_NATIVE"}
            onClick={() => handleOpenModal(jobImages)}
            headerImage={jobImages[0]}
          />
          <Work
            name={"Crypto Exchange App"}
            description={"REACT"}
            onClick={() => handleOpenModal(datingImages)}
            headerImage={datingImages[1]}
          />
        </Stack>
      </Stack>
      <BasicModal
        open={openModal}
        handleCloseModal={handleCloseModal}
        displayImages={projectImages}
      />
    </>
  );
};

export default PortPage;

type ModalProps = {
  open: boolean;
  handleCloseModal: () => void;
  displayImages: string[];
};

function BasicModal({ open, handleCloseModal, displayImages }: ModalProps) {
  return (
    <Modal
      open={open}
      onClose={handleCloseModal}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: 400,
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
    </Modal>
  );
}
