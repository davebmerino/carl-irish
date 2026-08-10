import poster from "../../assets/weddingpictures/DSC04265.jpg";

export default function WeddingFilm() {
  return (
    <section className="bg-[#f5f4f1] py-24 px-6">
      <div className="max-w-6xl mx-auto">
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
          autoPlay
          loop
          playsInline
          controls
          preload="metadata"
          poster={poster}
          className="w-full rounded-[2rem]">
          <source
            src="https://res.cloudinary.com/oh6rmemk/video/upload/v1786364390/Carlirishforledwall.mp4"
            type="video/mp4"
          />
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
