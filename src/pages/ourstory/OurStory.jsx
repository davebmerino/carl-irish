import Navbar from "../../components/navbar/Navbar.jsx";
import Footer from "../../components/footer/Footer.jsx";
import Ourstory from "../../components/ourstory/Ourstory.jsx";
import Gallery from "../../components/gallery/Gallery.jsx";
import TillDeathDoUsPart from "../../components/tilldeathdouspart/TillDeathDoUsPart.jsx";

export default function OurStory() {
  return (
    <>
      <div className="min-h-screen">
        <Navbar />
        <div className="grain-overlay fixed inset-0 pointer-events-none"></div>
        <TillDeathDoUsPart />
        <Ourstory />
        <Gallery />
      </div>
      <Footer />
    </>
  );
}
