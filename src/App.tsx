import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { Store } from "./store";
import { useContext } from "react";
import { ThemeProvider, createTheme } from "@mui/material";

function App() {
  const { state } = useContext(Store);
  const { darkMode } = state;
  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
