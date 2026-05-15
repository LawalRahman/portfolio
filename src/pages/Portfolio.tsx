import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  Typography,
  styled,
  useTheme,
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
import { motion } from "framer-motion";

const PortPage = () => {
  const [projectImages, setProjectImages] = useState<string[]>([]);
  const [modalTitle, setModalTitle] = useState<string>("");
  const [openModal, setOpenModal] = useState(false);
  const theme = useTheme();

  const handleOpenModal = (projectImgs: string[], title: string) => {
    setOpenModal(true);
    setModalTitle(title);
    setProjectImages(projectImgs);
  };
  
  const handleCloseModal = () => setOpenModal(false);

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      sx={{ width: "100%", py: 4 }}
    >
      <Stack spacing={6} alignItems="center">
        <Box sx={{ textAlign: "center" }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              fontSize: { md: 56, xs: 36 },
              fontFamily: "var(--font-primary)",
              mb: 1,
            }}
          >
            My <Box component="span" sx={{ color: "primary.main" }}>Portfolio</Box>
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "text.secondary", maxWidth: 600, mx: "auto" }}
          >
            A collection of projects I've worked on, ranging from web applications to mobile experiences.
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
            },
            gap: 4,
            width: "100%",
          }}
        >
          <Work
            name={"ElectHER Nigeria"}
            description={"REACT • WEB APP"}
            onClick={() => window.open("https://electher.netlify.app/", "_blank")}
            headerImage={""} 
            visitLink="https://electher.netlify.app/"
          />
          <Work
            name={"Women In Action"}
            description={"REACT • NGO WEBSITE"}
            onClick={() => window.open("https://deft-dragon-d25161.netlify.app/", "_blank")}
            headerImage={""}
            visitLink="https://deft-dragon-d25161.netlify.app/"
          />
          <Work
            name={"Food Delivery App"}
            description={"REACT • AWS"}
            onClick={() => handleOpenModal(foodjointImages, "Food Delivery App")}
            headerImage={foodjointImages[0]}
            visitLink="https://foodjointgh.com"
          />
          <Work
            name={"Money/Crypto Transfer App"}
            description={"ANGULAR • AWS"}
            onClick={() => handleOpenModal(kudiexImages, "Money/Crypto Transfer App")}
            headerImage={kudiexImages[0]}
            repoLink="https://github.com/LawalRahman"
          />
          <Work
            name={"Crypto Exchange App"}
            description={"REACT NATIVE"}
            onClick={() => handleOpenModal(cryptoImages, "Crypto Exchange App")}
            headerImage={cryptoImages[0]}
            repoLink="https://github.com/LawalRahman"
          />
          <Work
            name={"Job Search App"}
            description={"REACT NATIVE"}
            onClick={() => handleOpenModal(jobImages, "Job Search App")}
            headerImage={jobImages[0]}
            repoLink="https://github.com/LawalRahman"
          />
          <Work
            name={"Dating App"}
            description={"REACT"}
            onClick={() => handleOpenModal(datingImages, "Dating App")}
            headerImage={datingImages[1]}
            repoLink="https://github.com/LawalRahman"
          />
          <Work
            name={"Universal Admission System"}
            description={"PHP • MYSQL"}
            onClick={() => handleOpenModal([], "Universal Admission System")}
            headerImage={""} 
            visitLink="https://drive.google.com/drive/folders/1CSH8LpS6PQYljhUKgP-Nj77mDZcUP688?usp=sharing"
          />
          <Work
            name={"XpressLogistics"}
            description={"REACT • DJANGO"}
            onClick={() => handleOpenModal([], "XpressLogistics")}
            headerImage={""}
            visitLink="https://xpresslogistics.herokuapp.com/"
            repoLink="https://gitlab.com/rahmanlawal/xpress-logistics"
          />
          <Work
            name={"UUID Generator API"}
            description={"DJANGO REST API"}
            onClick={() => handleOpenModal([], "UUID Generator API")}
            headerImage={""}
            visitLink="https://simpuuidapp.herokuapp.com/"
            repoLink="https://gitlab.com/rahmanlawal/simple-uuidapi"
          />
        </Box>
      </Stack>

      <BasicModal
        open={openModal}
        handleCloseModal={handleCloseModal}
        displayImages={projectImages}
        title={modalTitle}
      />
    </Box>
  );
};

export default PortPage;

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialog-paper": {
    borderRadius: "24px",
    padding: theme.spacing(1),
    maxWidth: "600px",
    width: "100%",
    backgroundColor: theme.palette.mode === "dark" ? "#1a1a1a" : "#fff",
  },
  "& .MuiDialogContent-root": {
    padding: theme.spacing(3),
    border: "none",
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
      maxWidth="md"
    >
      <DialogTitle
        sx={{ 
          m: 0, 
          p: 3, 
          fontSize: "1.25rem", 
          fontWeight: 700,
          fontFamily: "var(--font-primary)"
        }}
      >
        {title}
        <IconButton
          aria-label="close"
          onClick={handleCloseModal}
          sx={{
            position: "absolute",
            right: 16,
            top: 16,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Box sx={{ width: "100%", borderRadius: "16px", overflow: "hidden" }}>
          <Carousel 
            animation="slide"
            navButtonsAlwaysVisible
            indicators={displayImages.length > 1}
            sx={{ minHeight: 300 }}
          >
            {displayImages.map((item, i) => (
              <Box
                key={i}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  bgcolor: "#f8f9fa",
                  borderRadius: "16px",
                  p: 2,
                  height: 400
                }}
              >
                <img 
                  alt={`${title} screenshot ${i}`} 
                  src={item} 
                  style={{ 
                    maxWidth: "100%", 
                    maxHeight: "100%", 
                    objectFit: "contain",
                    borderRadius: "8px"
                  }} 
                />
              </Box>
            ))}
          </Carousel>
        </Box>
      </DialogContent>
    </BootstrapDialog>
  );
}
