import image1 from "../../assets/pictures/DSC04876.jpeg";
import image2 from "../../assets/pictures/2374.jpg";
import image3 from "../../assets/pictures/DSC04456.jpeg";
import image4 from "../../assets/pictures/DSC04468.jpeg";
import image5 from "../../assets/pictures/2373.jpg";
import image6 from "../../assets/pictures/DSC04487.jpeg";

import banner2 from "../../assets/pictures/DJI_0783.jpeg";

export default function TillDeathDoUsPart() {
  const galleryImages = [image1, image2, image3, image4, image5, image6];
  return (
    <>
      <section
        className="py-20 px-4 bg-wedding-bg/30"
        data-testid="collage-section">
        <div className="max-w-6xl mx-auto grid grid-rows-1 gap-4 ">
          <h2 className="font-script text-5xl md:text-7xl text-wedding-deep text-center mb-12">
            Till Death Do Us Part
          </h2>
          <div className="relative h-96 mb-8 rounded-xl overflow-hidden shadow-xl">
            <img
              src={banner2}
              alt="Couple"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.slice(0, 6).map((image, index) => (
              <div
                key={index}
                className="aspect-square overflow-hidden rounded-xl shadow-lg">
                <img
                  src={image}
                  alt={`Collage ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
