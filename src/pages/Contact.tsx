import { Box, Link, Stack, Typography, IconButton, useTheme, Card } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { motion } from "framer-motion";

const ContactItem = ({ icon, label, value, href }: { icon: any, label: string, value: string, href?: string }) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Card
      component={motion.div}
      whileHover={{ y: -5, scale: 1.02 }}
      sx={{
        p: 3,
        display: "flex",
        alignItems: "center",
        gap: 3,
        borderRadius: "20px",
        bgcolor: isDark ? "rgba(255, 255, 255, 0.03)" : "rgba(0, 0, 0, 0.02)",
        backdropFilter: "blur(10px)",
        border: "1px solid",
        borderColor: isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)",
        boxShadow: "none",
      }}
    >
      <Box
        sx={{
          width: 56,
          height: 56,
          borderRadius: "16px",
          bgcolor: "primary.main",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          boxShadow: "0 8px 16px -4px rgba(25, 118, 210, 0.4)",
        }}
      >
        {icon}
      </Box>
      <Box>
        <Typography variant="caption" sx={{ color: "text.secondary", fontWeight: 700, textTransform: "uppercase", letterSpacing: 1 }}>
          {label}
        </Typography>
        <Typography 
          variant="h6" 
          component={href ? Link : "div"}
          href={href}
          underline="none"
          target={href ? "_blank" : undefined}
          sx={{ 
            fontWeight: 700, 
            color: "text.primary", 
            fontSize: { xs: "1rem", md: "1.1rem" },
            display: "block"
          }}
        >
          {value}
        </Typography>
      </Box>
    </Card>
  );
};

const ContactPage = () => {
  const theme = useTheme();

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      sx={{ width: "100%", py: 4 }}
    >
      <Stack spacing={8} alignItems="center">
        <Box sx={{ textAlign: "center" }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              fontSize: { md: 56, xs: 36 },
              fontFamily: "var(--font-primary)",
              mb: 2,
            }}
          >
            Get In <Box component="span" sx={{ color: "primary.main" }}>Touch</Box>
          </Typography>
          <Typography variant="body1" sx={{ color: "text.secondary", maxWidth: 600 }}>
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
            gap: 3,
            width: "100%",
            maxWidth: "900px",
          }}
        >
          <ContactItem icon={<LocationOnIcon />} label="Location" value="Lagos, Nigeria" />
          <ContactItem 
            icon={<PhoneIcon />} 
            label="Phone" 
            value="+234 708 183 8147" 
            href="tel:+2347081838147"
          />
          <ContactItem 
            icon={<EmailOutlinedIcon />} 
            label="Email" 
            value="rahmanabimbina@gmail.com" 
            href="mailto:rahmanabimbina@gmail.com"
          />
          <ContactItem 
            icon={<WhatsAppIcon />} 
            label="WhatsApp" 
            value="+234 708 183 8147" 
            href="https://wa.me/2347081838147"
          />
        </Box>

        <Stack direction="row" spacing={3}>
          {[
            { icon: <GitHubIcon />, url: "https://github.com/LawalRahman" },
            { icon: <LinkedInIcon />, url: "https://www.linkedin.com/in/rahman-lawal-ba67a3102/" },
            { icon: <WhatsAppIcon />, url: "https://wa.me/2347081838147" },
          ].map((social, i) => (
            <IconButton
              key={i}
              component={motion.button}
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href={social.url}
              target="_blank"
              sx={{
                width: 60,
                height: 60,
                bgcolor: "rgba(128, 128, 128, 0.1)",
                color: "text.primary",
                "&:hover": { bgcolor: "primary.main", color: "white" },
                transition: "background-color 0.3s ease, color 0.3s ease",
              }}
            >
              {social.icon}
            </IconButton>
          ))}
        </Stack>
      </Stack>
    </Box>
  );
};

export default ContactPage;
