import Entourage from "../../components/entourage/Entourage.jsx";
import WeddingTimeline from "../../components/schedule/Schedule.jsx";
import Navbar from "../../components/navbar/Navbar.jsx";

export default function Details() {
  return (
    <>
      <div className="min-h-screen">
        <Navbar />
        <div className="grain-overlay fixed inset-0 pointer-events-none"></div>
        <WeddingTimeline />
        <Entourage />
      </div>
    </>
  );
}
