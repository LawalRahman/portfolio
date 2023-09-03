import { createBrowserRouter } from "react-router-dom";
import Index from "./pages";

const router = createBrowserRouter([
  { path: "/", element: <Index /> },
  { path: "/portfolio", element: <Index /> },
]);

export default router;
