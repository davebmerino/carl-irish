import Navbar from "../../components/navbar/Navbar.jsx";
import FadeInSection from "../../components/common/FadeInSection.jsx";
import Footer from "../../components/footer/Footer.jsx";
import Reminders from "../../components/reminders/Reminders.jsx";
import Contact from "../../components/contact/Contact.jsx";
import ScrollToTopButton from "../../components/common/ScrollToTopButton.jsx";

export default function RemindersPage() {
  return (
    <>
      <div className="min-h-screen">
        <Navbar />
        <div className="grain-overlay fixed inset-0 pointer-events-none"></div>
        <FadeInSection>
          <Reminders />
        </FadeInSection>
        <FadeInSection>
          <Contact />
        </FadeInSection>
        <ScrollToTopButton />
      </div>
      <Footer />
    </>
  );
}
