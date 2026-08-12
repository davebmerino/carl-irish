import rsvp from "../../assets/weddingpictures/rsvp.jpg";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";

export default function Rsvpmodal() {
  const { id } = useParams();
  return (
    <>
      {/* RSVP Section with Photo */}
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.22 }}
        className="py-20 px-4 bg-wedding-bg/30"
        data-testid="rsvp-cta-section">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0">
              <img
                loading="lazy"
                src={rsvp}
                alt="RSVP"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-wedding-deep/60"></div>
            </div>
            <div className="relative z-10 text-center py-20 px-4 text-white">
              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeInOut", delay: 0.22 }}
                className="font-script text-5xl md:text-7xl mb-6">
                R.S.V.P
              </motion.h2>
              <p className="font-cormorant italic text-xl md:text-2xl mb-2 ">
                We can’t wait to celebrate with you! To preserve the privacy of
                our special day, <br />
                please keep our wedding website link private and do not share
                it.
              </p>

              <p className="font-cormorant text-xl md:text-2xl  max-w-2xl mx-auto">
                Kindly RSVP by{" "}
                <strong className="text-white">September 15, 2026.</strong> An
                accurate headcount is essential for our venue, so a response is
                required.
              </p>
              <p className="font-cormorant italic text-md md:text-lg text-wedding-secondary mb-8">
                Thank you for your understanding and cooperation, we are
                grateful for your presence as we celebrate this precious
                occassion.
              </p>
              <Link to={id ? `/${id}/rsvp` : "/"}>
                <button
                  className="bg-wedding-primary text-white px-10 py-4 rounded-full font-medium text-lg hover:bg-wedding-main transition-colors shadow-lg"
                  data-testid="rsvp-cta-button">
                  Click Here to RSVP
                </button>
              </Link>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
}
