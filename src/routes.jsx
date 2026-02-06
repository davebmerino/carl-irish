import { createBrowserRouter } from "react-router";
import Rsvp from "./pages/rsvp/Rsvp.jsx";
import Firstpage from "./pages/firstpage/Firstpage.jsx";
import Landingpage from "./pages/firstpage/Landingpage.jsx";
import Home from "./pages/homepage/Home.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Landingpage />,
  },
  {
    path: "home",
    element: <Home />,
  },
  {
    path: "rsvp",
    element: <Rsvp />,
  },
]);
