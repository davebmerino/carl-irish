import { Shirt } from "lucide-react";

export default function Dresscode() {
  return (
    <>
      {/* Dress Code Section */}
      <section
        className="py-20 px-4 bg-wedding-primary/30"
        data-testid="dress-code-section">
        <div className="max-w-3xl mx-auto text-center">
          <Shirt className="w-8 h-8 text-wedding-warm mx-auto mb-4" />
          <h2 className="font-playfair text-4xl md:text-5xl font-semibold text-wedding-deep mb-4">
            Dress Code
          </h2>
          <div className="h-px w-24 bg-wedding-soft mx-auto mb-8"></div>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-wedding-secondary/30">
            <h3 className="font-playfair text-2xl font-semibold text-wedding-deep mb-4">
              Garden Formal
            </h3>
            <p className="font-manrope text-wedding-main text-lg leading-relaxed">
              We invite you to dress in your finest garden formal attire. Think
              flowing dresses, elegant suits, and spring-inspired colors.
              Ladies, feel free to wear floral prints and pastels. Gentlemen, a
              suit and tie in light, breathable fabrics would be perfect. Please
              note that the ceremony will be held outdoors on grass, so choose
              your footwear accordingly.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
