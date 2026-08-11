import banner from "../../assets/weddingpictures/banner.jpeg";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <>
      {/* <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
       <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${banner})`,
        }}>
        <div className="absolute inset-0 bg-wedding-deep/40"></div>
      </div>
      <div className="relative z-10 text-center text-white px-4">
        <h1
          className="font-playfair text-5xl md:text-7xl font-semibold mb-4 text-shadow"
          data-testid="home-title">
          Our Wedding
        </h1>
        <p className="font-manrope text-xl md:text-2xl tracking-wide">
          Carl & Irish
        </p>
      </div>
    </section> */}
      {/* Hero Section */}

      <section
        className="relative h-[60vh] flex items-center justify-center overflow-hidden"
        data-testid="hero-section">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.22 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${banner})`,
          }}>
          <div className="absolute inset-0 bg-wedding-deep/40"></div>
        </motion.div>
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.22 }}
            className="font-script text-5xl md:text-7xl mb-4 text-shadow"
            data-testid="home-title">
            Carl Royce & Irish
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.22 }}
            className="font-cormorant italic text-2xl md:text-4xl tracking-widest uppercase">
            Are Getting Married
          </motion.p>
        </div>
      </section>
    </>
  );
}
