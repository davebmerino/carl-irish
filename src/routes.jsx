import { createBrowserRouter, Outlet } from "react-router-dom";
import Rsvp from "./pages/rsvp/Rsvp.jsx";
import Landingpage from "./pages/firstpage/Landingpage.jsx";
import Home from "./pages/homepage/Home.jsx";
import AdminLogin from "./pages/admin/AdminLogin.jsx";
import AdminDashboard from "./pages/admin/AdminDashboard.jsx";
import AdminAnalytics from "./pages/admin/AdminAnalytics.jsx";
import Eventdetails from "./pages/details/Detailsnav.jsx";
import OurStory from "./pages/ourstory/OurStory.jsx";
import RemindersPage from "./pages/reminders/RemindersPage.jsx";
import ScrollToTop from "./components/common/ScrollToTop.jsx";

function RootLayout() {
  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  );
}

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Landingpage />,
      },
      {
        path: "/:id",
        element: <Landingpage />,
      },
      {
        path: "/:id/home",
        element: <Home />,
      },
      {
        path: "/:id/details",
        element: <Eventdetails />,
      },
      {
        path: "/:id/rsvp",
        element: <Rsvp />,
      },
      {
        path: "/:id/Our-story",
        element: <OurStory />,
      },
      {
        path: "/:id/reminders",
        element: <RemindersPage />,
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
    ],
  },
]);
