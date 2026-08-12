import { Shirt } from "lucide-react";
import dresscodeImg from "../../assets/weddingpictures/attireguide.png";
import { motion } from "framer-motion";

export default function Dresscode() {
  return (
    <>
      {/* Dress Code Section */}
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
            className="font-script text-5xl md:text-6xl text-wedding-deep text-center mb-12">
            Dress Code
          </motion.h2>
          <p className="font-cormorant italic max-w-xl mx-auto  text-wedding-main text-2xl leading-relaxed mb-8">
            We kindly invite you to wear formal attire in the colors shown in
            our wedding palette. <strong>Please avoid wearing white</strong>, as
            this color is reserved for the bride.
          </p>
          <div className="mt-8 flex justify-center">
            <img
              src={dresscodeImg}
              alt="Dress Code"
              loading="lazy"
              decoding="async"
              className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl h-auto rounded-xl shadow-xl object-contain"
            />
          </div>
          <div className="h-px w-24 bg-wedding-soft mx-auto mb-8"></div>
          <div className="p-8 ">
            {/* <h3 className="font-playfair text-2xl font-semibold text-wedding-deep mb-4">
              Note:
            </h3> */}
          </div>
        </div>
      </section>
    </>
  );
}
