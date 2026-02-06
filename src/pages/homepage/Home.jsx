import SectionCurve from "../../components/divider/SectionCurved.jsx";
import Dresscode from "../../components/dresscode/Dresscode.jsx";
import Eventdetails from "../../components/eventdetails/Eventdetails.jsx";
import Hero from "../../components/hero/Hero.jsx";
import Navbar from "../../components/navbar/Navbar.jsx";
import Ourstory from "../../components/ourstory/Ourstory.jsx";
import Schedule from "../../components/schedule/Schedule.jsx";
import Gallery from "../../components/gallery/Gallery.jsx";
import Contact from "../../components/contact/Contact.jsx";
import Footer from "../../components/footer/Footer.jsx";

export default function Home() {
  return (
    <>
      <div className="min-h-screen">
        <Navbar />
        <div className="grain-overlay fixed inset-0 pointer-events-none"></div>
        <Hero />
        <Ourstory />
        <Eventdetails />
        <Schedule />
        <Dresscode />
        <Gallery />
        <Contact />
      </div>
      <Footer />
    </>
  );
}
