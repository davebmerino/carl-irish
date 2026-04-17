import { Heart } from "lucide-react";
import storyimg from "../../assets/pictures/2374.jpg";

import image1 from "../../assets/pictures/2372.jpg";
import image2 from "../../assets/pictures/2373.jpg";
import image3 from "../../assets/pictures/2374.jpg";
import image4 from "../../assets/pictures/2375.jpg";
import image5 from "../../assets/pictures/2376.jpg";
import image6 from "../../assets/pictures/2378.jpg";
import image7 from "../../assets/pictures/2379.jpg";
import image8 from "../../assets/pictures/2380.jpg";
import image9 from "../../assets/pictures/2381.jpg";
import image10 from "../../assets/pictures/mainprofile.jpg";
import image11 from "../../assets/pictures/2383.jpg";
import image12 from "../../assets/pictures/2384.jpg";
import image13 from "../../assets/pictures/2385.jpg";
import image14 from "../../assets/pictures/2386.jpg";
import image15 from "../../assets/pictures/2387.jpg";

export default function Ourstory() {
  const galleryImages = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
  ];
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
            src="https://images.unsplash.com/photo-1698897050888-c18a15b6703e?crop=entropy&cs=srgb&fm=jpg&q=85"
            alt="Couple"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Story text */}
        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 md:p-12 shadow-lg border border-wedding-secondary/30">
          <p className="font-manrope text-wedding-main text-lg leading-relaxed mb-6">
            Our love story began on a beautiful spring day in 2018, when fate
            brought us together at a mutual friend's gathering. From that first
            conversation, we knew there was something special between us.
          </p>
          <p className="font-manrope text-wedding-main text-lg leading-relaxed mb-6">
            Through years of adventures, laughter, and unwavering support for
            each other, our bond has only grown stronger. We've traveled the
            world together, built a home filled with love, and created countless
            memories that we'll cherish forever.
          </p>
          <p className="font-manrope text-wedding-main text-lg leading-relaxed">
            Now, we're thrilled to begin this next chapter of our journey
            together, and we couldn't imagine celebrating without the people who
            mean the most to us. Thank you for being part of our story.
          </p>
        </div>
      </div>
    </section>
  );
}
