import { Heart } from "lucide-react";
import storyimg from "../../assets/pictures/2374.jpg";

export default function Ourstory() {
  return (
    <section
      className="py-20 px-4 max-w-5xl mx-auto"
      data-testid="our-story-section">
      <div className="text-center mb-12">
        <Heart className="w-8 h-8 text-wedding-warm fill-wedding-warm mx-auto mb-4" />
        <h2 className="font-playfair text-4xl md:text-5xl font-semibold text-wedding-deep mb-4">
          Our Story
        </h2>
        <div className="h-px w-24 bg-wedding-soft mx-auto"></div>
      </div>
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg gap-3 flex flex-col md:flex-row items-center  mx-auto flex-1 transition-all hover:shadow-lg hover:-translate-y-1">
        {/* Story Img */}
        <div className=" rounded-xl w-full transition-transform duration-300 hover:scale-110 ">
          <img
            src={storyimg}
            alt="Our Story"
            className="w-full h-full object-cover rounded-xl shadow-md border"
          />
        </div>
        {/* <div className="absolute inset-0 bg-wedding-deep/40"></div> */}

        {/* Story Content */}
        <div>
          <div className=" ">
            <p className="font-manrope text-wedding-main text-lg leading-relaxed mb-6">
              Our love story began on a beautiful spring day in 2018, when fate
              brought us together at a mutual friend's gathering. From that
              first conversation, we knew there was something special between
              us.
            </p>
            <p className="font-manrope text-wedding-main text-lg leading-relaxed mb-6">
              Through years of adventures, laughter, and unwavering support for
              each other, our bond has only grown stronger. We've traveled the
              world together, built a home filled with love, and created
              countless memories that we'll cherish forever.
            </p>
            <p className="font-manrope text-wedding-main text-lg leading-relaxed">
              Now, we're thrilled to begin this next chapter of our journey
              together, and we couldn't imagine celebrating without the people
              who mean the most to us. Thank you for being part of our story.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
