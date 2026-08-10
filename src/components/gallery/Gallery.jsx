import { Heart } from "lucide-react";
import image1 from "../../assets/weddingpictures/DJI_0783.jpeg";
import image2 from "../../assets/weddingpictures/DSC04876.jpg";
import image3 from "../../assets/weddingpictures/DSC04265.jpg";
import image4 from "../../assets/weddingpictures/DSC04284.jpg";
import image5 from "../../assets/weddingpictures/DSC04741.jpg";
import image6 from "../../assets/weddingpictures/DSC04297.jpg";
import image7 from "../../assets/weddingpictures/DSC04307.jpg";
import image8 from "../../assets/weddingpictures/DSC04750.jpg";
import image9 from "../../assets/weddingpictures/DSC04446.jpg";
import image10 from "../../assets/weddingpictures/DSC04988.jpg";
import image11 from "../../assets/weddingpictures/DSC04450.jpg";
import image12 from "../../assets/weddingpictures/DSC05029.jpg";
import image13 from "../../assets/weddingpictures/DSC05007.jpg";
import image14 from "../../assets/weddingpictures/DSC04468.jpg";
import image15 from "../../assets/weddingpictures/DSC04487.jpg";
import image16 from "../../assets/weddingpictures/DSC04644.jpg";
import image17 from "../../assets/weddingpictures/DSC04904.jpg";
import image18 from "../../assets/weddingpictures/DSC04516.jpg";
import image19 from "../../assets/weddingpictures/DSC05073.jpg";
import image20 from "../../assets/weddingpictures/DSC04904.jpg";
import image21 from "../../assets/weddingpictures/DSC04534.jpg";
import image22 from "../../assets/weddingpictures/DSC04559.jpg";
import image23 from "../../assets/weddingpictures/DSC04754.jpg";
import image24 from "../../assets/weddingpictures/DSC04760.jpg";

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
    image16,
    image17,
    image18,
    image19,
    image20,
    image21,
    image22,
    image23,
    image24,
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
            <h2 className="font-cormorant italic text-4xl md:text-5xl font-light text-wedding-deep mb-4 tracking-wider">
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
                  loading="lazy"
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
