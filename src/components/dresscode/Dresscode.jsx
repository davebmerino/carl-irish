import { Shirt } from "lucide-react";
import dresscodeImg from "../../assets/weddingpictures/attireguide.png";

export default function Dresscode() {
  return (
    <>
      {/* Dress Code Section */}
      <section
        className="py-20 px-4 bg-wedding-primary/30"
        data-testid="dress-code-section">
        <div className="max-w-5xl mx-auto text-center">
          <Shirt className="mx-auto text-[#879a78] mb-4" size={36} />
          <h2 className="font-script text-5xl md:text-6xl text-wedding-deep text-center mb-12">
            Dress Code
          </h2>
          <p className="font-cormorant italic max-w-xl mx-auto  text-wedding-main text-2xl leading-relaxed mb-8">
            We kindly invite you to wear formal attire in the colors shown in
            our wedding palette. <strong>Please avoid wearing white</strong>, as
            this color is reserved for the bride.
          </p>
          <div className="relative w-full h-[680px] rounded-xl overflow-hidden shadow-xl">
            <img
              loading="lazy"
              src={dresscodeImg}
              alt="Dress Code"
              className="absolute inset-0 w-full h-full object-cover"
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
