import { Heart } from "lucide-react";
import image1 from "../../assets/pictures/DJI_0783.jpeg";
import image2 from "../../assets/pictures/DSC04257.jpeg";
import image3 from "../../assets/pictures/DSC04265.jpeg";
import image4 from "../../assets/pictures/DSC04284.jpeg";
import image5 from "../../assets/pictures/DSC04288.jpeg";
import image6 from "../../assets/pictures/DSC04297.jpeg";
import image7 from "../../assets/pictures/DSC04307.jpeg";
import image8 from "../../assets/pictures/DSC04436.jpeg";
import image9 from "../../assets/pictures/DSC04446.jpeg";
import image10 from "../../assets/pictures/DSC04446.jpeg";
import image11 from "../../assets/pictures/DSC04450.jpeg";
import image12 from "../../assets/pictures/DSC04453.jpeg";
import image13 from "../../assets/pictures/DSC04456.jpeg";
import image14 from "../../assets/pictures/DSC04468.jpeg";
import image15 from "../../assets/pictures/DSC04487.jpeg";

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
      <section
        className="py-20 px-4 bg-wedding-bg/30"
        data-testid="gallery-section">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Heart className="w-8 h-8 text-wedding-primary fill-wedding-primary mx-auto mb-4" />
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-wedding-deep mb-4 tracking-wider">
              Our Gallery
            </h2>
            <div className="h-px w-24 bg-wedding-primary mx-auto"></div>
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
