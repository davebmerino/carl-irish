import { createBrowserRouter } from "react-router-dom";
import Rsvp from "./pages/rsvp/Rsvp.jsx";
import Landingpage from "./pages/firstpage/Landingpage.jsx";
import Home from "./pages/homepage/Home.jsx";
import AdminLogin from "./pages/admin/AdminLogin.jsx";
import AdminDashboard from "./pages/admin/AdminDashboard.jsx";
import AdminAnalytics from "./pages/admin/AdminAnalytics.jsx";
import Eventdetails from "./pages/details/Detaisnav.jsx";
import OurStory from "./pages/ourstory/OurStory.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Landingpage />,
  },
  {
    path: "/:id",
    element: <Landingpage />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/details",
    element: <Eventdetails />,
  },
  {
    path: "/rsvp",
    element: <Rsvp />,
  },
  {
    path: "/Our-story",
    element: <OurStory />,
  },
  {
    path: "/adminlogin",
    element: <AdminLogin />,
  },
  {
    path: "/admin",
    element: <AdminDashboard />,
  },
  { path: "/admin/analytics", element: <AdminAnalytics /> },
]);
