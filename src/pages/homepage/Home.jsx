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
import TillDeathDoUsPart from "../../components/tilldeathdouspart/TillDeathDoUsPart.jsx";
import Reminders from "../../components/reminders/Reminders.jsx";
import Countdown from "../../components/countdown/Countdown.jsx";
import Calendar from "../../components/calendar/Calendar.jsx";
import Rsvpmodal from "../../components/modal/Rsvpmodal.jsx";
import Entourage from "../../components/entourage/Entourage.jsx";
import WeddingFilm from "../../components/film/WeddingFilm.jsx";

import FadeInSection from "../../components/common/FadeInSection.jsx";

export default function Home() {
  return (
    <>
      <div className="min-h-screen">
        <Navbar />
        <div className="grain-overlay fixed inset-0 pointer-events-none"></div>
        <Hero />
        {/* Build excitement */}
        <FadeInSection>
          <Countdown />
        </FadeInSection>
        <FadeInSection>
          <WeddingFilm />
        </FadeInSection>

        {/* The couple */}
        <FadeInSection>
          <Ourstory />
        </FadeInSection>
        <FadeInSection>
          <Gallery />
        </FadeInSection>
        <FadeInSection>
          <Calendar />
        </FadeInSection>
        <FadeInSection>
          <Eventdetails />
        </FadeInSection>
        <FadeInSection>
          <Dresscode />
        </FadeInSection>
        <FadeInSection>
          <Schedule />
        </FadeInSection>

        <Entourage />

        <FadeInSection>
          <Reminders />
        </FadeInSection>
        <FadeInSection>
          <TillDeathDoUsPart />
        </FadeInSection>
        <FadeInSection>
          <Contact />
        </FadeInSection>

        {/* Keep the modal mounted globally */}
        <Rsvpmodal />
      </div>

      <Footer />
    </>
  );
}
