import film from "../../assets/video/CarlIrishForLEDWall.mp4";
import poster from "../../assets/pictures/DSC04265.jpeg";

export default function WeddingFilm() {
  return (
    <section className="bg-[#f5f4f1] py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-24 h-px bg-[#b6c3a8] mx-auto mt-6" />

          <p className="text-[#7b8770] mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
            A glimpse into the moments, laughter, and love we shared on our
            special day.
          </p>
        </div>

        {/* Video */}
        <video
          controls
          preload="none"
          poster={poster}
          allow="autoplay"
          className="w-full rounded-[2rem]">
          <source src={film} type="video/mp4" />
        </video>

        {/* Caption */}
        <p
          className="text-center text-[#879a78] mt-6 text-lg italic"
          style={{ fontFamily: "Cormorant Garamond, serif" }}>
          "Every love story is beautiful, but ours is our favorite."
        </p>
      </div>
    </section>
  );
}
