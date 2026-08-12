import { Shirt, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import dresscodeImg from "../../assets/weddingpictures/attireguide.png";

export default function Dresscode() {
  const [open, setOpen] = useState(false);

  return (
    <section
      className="py-20 px-4 bg-wedding-primary/30"
      data-testid="dress-code-section">
      <div className="max-w-5xl mx-auto text-center">
        <Shirt className="mx-auto text-[#879a78] mb-4" size={36} />

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="font-script text-5xl md:text-6xl text-wedding-deep mb-8">
          Dress Code
        </motion.h2>

        <p className="font-cormorant italic max-w-xl mx-auto text-wedding-main text-2xl leading-relaxed mb-8">
          We kindly invite you to wear formal attire in the colors shown in our
          wedding palette. <strong>Please avoid wearing white</strong>, as this
          color is reserved for the bride.
        </p>

        {/* Clickable Image */}
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="group focus:outline-none"
            aria-label="Open dress code image">
            <img
              src={dresscodeImg}
              alt="Dress Code"
              loading="lazy"
              decoding="async"
              className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl h-auto rounded-xl shadow-xl object-contain transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </button>
        </div>

        <p className="text-sm text-wedding-main mt-4 italic">
          Tap or click the attire guide to zoom in.
        </p>
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-white p-2 rounded-full bg-black/40 hover:bg-black/60"
              aria-label="Close dress code image">
              <X size={28} />
            </button>

            <motion.img
              src={dresscodeImg}
              alt="Dress Code Zoomed"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              initial={{ scale: 0.92 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.92 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
