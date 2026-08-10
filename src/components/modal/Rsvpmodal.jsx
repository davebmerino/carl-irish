import rsvp from "../../assets/weddingpictures/rsvp.jpg";
import { Link } from "react-router-dom";

export default function Rsvpmodal() {
  return (
    <>
      {/* RSVP Section with Photo */}
      <section
        className="py-20 px-4 bg-wedding-bg/30"
        data-testid="rsvp-cta-section">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0">
              <img
                src={rsvp}
                alt="RSVP"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-wedding-deep/60"></div>
            </div>
            <div className="relative z-10 text-center py-20 px-4 text-white">
              <h2 className="font-script text-5xl md:text-7xl mb-6">R.S.V.P</h2>
              <p className="font-cormorant text-xl md:text-2xl mb-2 italic">
                répondez s'il vous plaît
              </p>
              <p className="font-manrope text-lg mb-8 max-w-2xl mx-auto">
                As we start this new chapter together, it would mean so much to
                celebrate it with the people dearest to our hearts. Kindly take
                a moment to complete this RSVP form to help us prepare with love
                and care. We can't wait to share this beautiful day with you.
              </p>
              <p className="font-manrope text-lg mb-8 max-w-2xl mx-auto">
                Kindly RSVP by <strong>September 15, 2026.</strong> An accurate
                headcount is essential for our venue, so a response is required.
              </p>
              <Link to="/rsvp">
                <button
                  className="bg-wedding-primary text-white px-10 py-4 rounded-full font-medium text-lg hover:bg-wedding-main transition-colors shadow-lg"
                  data-testid="rsvp-cta-button">
                  Click Here to RSVP
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
