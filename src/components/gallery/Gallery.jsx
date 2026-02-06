import { Heart } from "lucide-react";
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

export default function Gallery() {
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
    <>
      {/* Gallery Section */}
      <section className="py-20 px-4" data-testid="gallery-section">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Heart className="w-8 h-8 text-wedding-warm fill-wedding-warm mx-auto mb-4" />
            <h2 className="font-playfair text-4xl md:text-5xl font-semibold text-wedding-deep mb-4">
              Gallery
            </h2>
            <div className="h-px w-24 bg-wedding-soft mx-auto"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="aspect-square overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow group"
                data-testid={`gallery-image-${index}`}>
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
