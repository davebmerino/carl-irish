import { Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <>
      {/* Contact Section */}
      <section className="py-20 px-4" data-testid="contact-section">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <Mail className="w-8 h-8 text-wedding-primary mx-auto mb-4" />
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.22 }}
              className="font-script text-4xl md:text-5xl font-light text-wedding-deep mb-4 tracking-wider">
              Contact Us
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
              className="h-px w-24 bg-wedding-primary mx-auto"></motion.div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-wedding-secondary/30">
            <p className="font-manrope text-wedding-main text-center mb-8">
              Have questions? We'd love to hear from you! feel free to message
              us.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="text-center">
                <div className="bg-wedding-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Mail className="w-6 h-6 text-wedding-primary" />
                </div>
                <h4 className="font-playfair text-lg font-semibold text-wedding-deep mb-2">
                  Email
                </h4>
                <a
                  href="mailto:wedding@carlroyce&irish.com"
                  className="font-manrope text-wedding-soft hover:text-wedding-primary transition-colors">
                  irishmaqui@gmail.com
                </a>
              </div>
              <div className="text-center">
                <div className="bg-wedding-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Phone className="w-6 h-6 text-wedding-primary" />
                </div>
                <h4 className="font-playfair text-lg font-semibold text-wedding-deep mb-2">
                  Phone
                </h4>
                <a
                  href="tel:+11234567890"
                  className="font-manrope text-wedding-soft hover:text-wedding-primary transition-colors">
                  09177092223
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
