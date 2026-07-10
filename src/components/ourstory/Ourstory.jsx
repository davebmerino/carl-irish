import { Heart } from "lucide-react";
import storyimg from "../../assets/pictures/2374.jpg";

import image1 from "../../assets/pictures/DSC04741.jpeg";
import image2 from "../../assets/pictures/DSC04563.jpeg";
import image3 from "../../assets/pictures/DSC04992.jpeg";

import image4 from "../../assets/pictures/DSC04660.jpeg";

export default function Ourstory() {
  const galleryImages = [image1, image2, image3, image4, ,];
  return (
    <section className="py-20 px-4" data-testid="our-story-section">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Heart className="w-8 h-8 text-wedding-primary fill-wedding-primary mx-auto mb-4" />
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-wedding-deep mb-4 tracking-wider">
            Our Story
          </h2>
          <div className="h-px w-24 bg-wedding-primary mx-auto"></div>
        </div>

        {/* Collage before story */}
        <div className="grid grid-cols-3 gap-4 mb-12">
          {galleryImages.slice(0, 3).map((image, index) => (
            <div
              key={index}
              className="aspect-square overflow-hidden rounded-xl shadow-lg transform hover:scale-105 transition-transform">
              <img
                src={image}
                alt={`Story ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Photo above story */}
        <div className="relative h-96 mb-8 rounded-xl overflow-hidden shadow-xl">
          <img
            src={image4}
            alt="Couple"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Story text */}
        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 md:p-12 shadow-lg border border-wedding-secondary/30">
          <p className="font-manrope text-wedding-main text-lg leading-relaxed mb-6">
            To this day, the couple can no longer remember how they formally
            met. What they do know is that they shared many common connections.
            Carl’s elementary classmates became Irish’s high school classmates,
            and somehow, their paths kept crossing. Whether they were properly
            introduced or not, one thing remained true—they had already known
            each other since 2012, even before the basketball incident.
          </p>
          <p className="font-manrope text-wedding-main text-lg leading-relaxed mb-6">
            Irish was a picky late bloomer when it came to love. She often
            prayed to God to someday meet “the one” in His perfect time. But
            like everyone else, she went through difficult seasons—heartbreaks,
            struggles, and moments when all she wanted was someone to hold onto
            during the hard days..
          </p>
          <p className="font-manrope text-wedding-main text-lg leading-relaxed">
            Then one day, a simple message appeared:{" "}
            <strong>“Hi Irish.”</strong> <br />
            It was Carl, trying to reconnect.
            <br />
            After just a week of conversations, they started dating—and from
            that moment on, they never stopped choosing each other. Looking back
            at their old messages, Irish realized that Carl had always found his
            way back into her life during the times she needed someone the most.
            Somehow, no matter how many times life caused their story to pause,
            they always found themselves starting again.
          </p>
          <p className="font-manrope text-wedding-main text-lg leading-relaxed">
            After just a week of conversations, they started dating—and from
            that moment on, they never stopped choosing each other. Looking back
            at their old messages, Irish realized that Carl had always found his
            way back into her life during the times she needed someone the most.
            Somehow, no matter how many times life caused their story to pause,
            they always found themselves starting again.
          </p>
          And now, they are about to begin their most beautiful chapter yet—
          <br />
          not just as two people in love,
          <br />
          but as husband and wife.
        </div>
      </div>
    </section>
  );
}
