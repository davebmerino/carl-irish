import { motion } from "framer-motion";

export default function Reminders() {
  return (
    <>
      {/* Gentle Reminders Section */}
      <section className="py-20 px-4" data-testid="reminders-section">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.22 }}
            className="font-script text-5xl md:text-6xl text-wedding-deep text-center mb-12">
            Gentle Reminders
          </motion.h2>
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.22 }}
              className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-wedding-secondary/30">
              <h3 className="font-cormorant italic text-2xl font-semibold text-wedding-deep mb-4">
                Our Simple Request
              </h3>
              <p className="font-manrope text-wedding-main leading-relaxed">
                We can’t wait to celebrate with you! To preserve the privacy of
                our special day, please keep our wedding website link private
                and do not share it. we want to keep our wedding as intimate and
                personal as possible.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.22 }}
              className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-wedding-secondary/30">
              <h3 className="font-cormorant italic text-2xl font-semibold text-wedding-deep mb-4">
                Unplugged Ceremony
              </h3>
              <p className="font-manrope text-wedding-main leading-relaxed">
                We are having an unplugged ceremony, meaning we kindly ask you
                to put away your phones and cameras. We want everyone to be
                fully in the moment with us. Don't worry—our photographer will
                capture everything so you can relive the memories with us later!
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.22 }}
              className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-wedding-secondary/30">
              <h3 className="font-cormorant italic text-2xl font-semibold text-wedding-deep mb-4">
                Gifts
              </h3>
              <p className="font-manrope text-wedding-main leading-relaxed">
                Your precence is already the greatest gift, but if you'd like to
                give something, cash gift are preferred. This will help us our
                new journey together in the most meaningful way.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
