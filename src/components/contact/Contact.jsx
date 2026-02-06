import { Mail, Phone } from "lucide-react";

export default function Contact() {
  return (
    <>
      {/* Contact Section */}
      <section
        className="py-20 px-4 bg-wedding-primary/30"
        data-testid="contact-section">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <Mail className="w-8 h-8 text-wedding-warm mx-auto mb-4" />
            <h2 className="font-playfair text-4xl md:text-5xl font-semibold text-wedding-deep mb-4">
              Contact Us
            </h2>
            <div className="h-px w-24 bg-wedding-soft mx-auto"></div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-wedding-secondary/30">
            <p className="font-manrope text-wedding-main text-center mb-8">
              Have questions? We'd love to hear from you!
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="text-center">
                <div className="bg-wedding-warm/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Mail className="w-6 h-6 text-wedding-warm" />
                </div>
                <h4 className="font-playfair text-lg font-semibold text-wedding-deep mb-2">
                  Email
                </h4>
                <a
                  href="mailto:wedding@example.com"
                  className="font-manrope text-wedding-soft hover:text-wedding-warm transition-colors">
                  email@example.com
                </a>
              </div>
              <div className="text-center">
                <div className="bg-wedding-warm/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Phone className="w-6 h-6 text-wedding-warm" />
                </div>
                <h4 className="font-playfair text-lg font-semibold text-wedding-deep mb-2">
                  Phone
                </h4>
                <a
                  href="tel:+11234567890"
                  className="font-manrope text-wedding-soft hover:text-wedding-warm transition-colors">
                  +64 (9123) 456-7890
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
