export default function Entourage() {
  return (
    <>
      {/* Entourage Section */}
      <section className="py-20 px-4" data-testid="entourage-section">
        <div className="max-w-6xl mx-auto">
          {/* Photo above section */}
          <div className="relative h-64 mb-12 rounded-xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1519741497674-611481863552?crop=entropy&cs=srgb&fm=jpg&q=85"
              alt="Entourage"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-wedding-deep/40 flex items-center justify-center">
              <h2 className="font-script text-5xl md:text-7xl text-white text-shadow">
                Entourage
              </h2>
            </div>
          </div>

          <div className="space-y-12">
            {/* Parents */}
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-wedding-secondary/30">
              <h3 className="font-cormorant text-3xl text-wedding-deep mb-6 text-center tracking-wider">
                Parents of the Couple
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-playfair text-xl font-semibold text-wedding-primary mb-3">
                    Parents of the Groom
                  </h4>
                  <p className="font-manrope text-wedding-main">
                    Mr. & Mrs. [Groom's Parents]
                  </p>
                </div>
                <div>
                  <h4 className="font-playfair text-xl font-semibold text-wedding-primary mb-3">
                    Parents of the Bride
                  </h4>
                  <p className="font-manrope text-wedding-main">
                    Mr. & Mrs. [Bride's Parents]
                  </p>
                </div>
              </div>
            </div>

            {/* Primary Sponsors */}
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-wedding-secondary/30">
              <h3 className="font-cormorant text-3xl text-wedding-deep mb-6 text-center tracking-wider">
                Primary Sponsors
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-playfair text-xl font-semibold text-wedding-primary mb-3">
                    Ninongs
                  </h4>
                  <ul className="space-y-2 font-manrope text-wedding-main">
                    <li>Mr. [Name]</li>
                    <li>Mr. [Name]</li>
                    <li>Mr. [Name]</li>
                    <li>Mr. [Name]</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-playfair text-xl font-semibold text-wedding-primary mb-3">
                    Ninangs
                  </h4>
                  <ul className="space-y-2 font-manrope text-wedding-main">
                    <li>Mrs. [Name]</li>
                    <li>Mrs. [Name]</li>
                    <li>Mrs. [Name]</li>
                    <li>Mrs. [Name]</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      ;
    </>
  );
}
