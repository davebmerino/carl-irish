import banner from "../../assets/pictures/banner.jpg";

export default function Hero() {
  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${banner})`,
        }}>
        <div className="absolute inset-0 bg-wedding-deep/40"></div>
      </div>
      <div className="relative z-10 text-center text-white px-4">
        <h1
          className="font-playfair text-5xl md:text-7xl font-semibold mb-4 text-shadow"
          data-testid="home-title">
          Our Wedding
        </h1>
        <p className="font-manrope text-xl md:text-2xl tracking-wide">
          Carl & Irish
        </p>
      </div>
    </section>
  );
}
