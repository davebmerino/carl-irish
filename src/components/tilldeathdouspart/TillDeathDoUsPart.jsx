export default function TillDeathDoUsPart() {
  const galleryImages = [
    "https://images.unsplash.com/photo-1698897050888-c18a15b6703e?crop=entropy&cs=srgb&fm=jpg&q=85",
    "https://images.pexels.com/photos/14703685/pexels-photo-14703685.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.unsplash.com/photo-1648237940646-8f0086c782aa?crop=entropy&cs=srgb&fm=jpg&q=85",
    "https://images.unsplash.com/photo-1611326292624-fac38ebb041e?crop=entropy&cs=srgb&fm=jpg&q=85",
    "https://images.unsplash.com/photo-1519741497674-611481863552?crop=entropy&cs=srgb&fm=jpg&q=85",
    "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?crop=entropy&cs=srgb&fm=jpg&q=85",
  ];
  return (
    <>
      <section
        className="py-20 px-4 bg-wedding-bg/30"
        data-testid="collage-section">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-script text-5xl md:text-7xl text-wedding-deep text-center mb-12">
            Till Death Do Us Part
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.slice(0, 3).map((image, index) => (
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
