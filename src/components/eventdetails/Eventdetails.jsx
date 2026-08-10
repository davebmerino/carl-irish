import { Calendar, Clock, MapPin, Church, UtensilsCrossed } from "lucide-react";
import churchImg from "../../assets/weddingpictures/church.jpg";

export default function Eventdetails() {
  return (
    <>
      {/* Ceremony and Reception Section */}
      <section
        className="py-20 px-4 bg-wedding-bg/30"
        data-testid="ceremony-reception-section">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <MapPin className="w-8 h-8 text-wedding-primary mx-auto mb-4" />
            <h2 className="font-cormorant italic text-4xl md:text-5xl font-light text-wedding-deep mb-4 tracking-wider">
              Ceremony & Reception
            </h2>
            <div className="h-px w-24 bg-wedding-primary mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Ceremony */}
            <div className="bg-white/90 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-wedding-secondary/30">
              <div className="h-48 overflow-hidden">
                <img
                  src={churchImg}
                  alt="Church"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Church className="w-6 h-6 text-wedding-primary" />
                  <h3 className="font-script text-4xl font-semibold text-wedding-deep">
                    Ceremony
                  </h3>
                </div>
                <div className="space-y-3 text-wedding-main font-manrope">
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-wedding-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Saturday, October 3, 2026</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-wedding-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">3:00 PM - 4:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-wedding-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Sta.Ursula Parish Church</p>
                      <p className="text-sm text-wedding-soft">
                        Libid
                        <br />
                        Binangonan, Rizal
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <a
                    href="https://maps.app.goo.gl/WhFrsqQRoEfVKkFV6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-wedding-primary text-white px-6 py-2 rounded-full font-medium text-sm hover:bg-wedding-main transition-colors"
                    data-testid="ceremony-map-link">
                    View on Map
                  </a>
                </div>
              </div>
            </div>

            {/* Reception */}
            <div className="bg-white/90 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-wedding-secondary/30">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?crop=entropy&cs=srgb&fm=jpg&q=85"
                  alt="Reception"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <UtensilsCrossed className="w-6 h-6 text-wedding-primary" />
                  <h3 className="font-script text-4xl font-semibold text-wedding-deep">
                    Reception
                  </h3>
                </div>
                <div className="space-y-3 text-wedding-main font-manrope">
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-wedding-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Saturday, October 3, 2026</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-wedding-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">6:30 PM - 11:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-wedding-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">
                        Villa Alejandra Resort and Events Place
                      </p>
                      <p className="text-sm text-wedding-soft">
                        Lot 3, Block 4 Roosevelt Montevideo Subd.
                        <br />
                        Bgy. Mambog Bingonan, Rizal, Cordona
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <a
                    href="https://maps.app.goo.gl/aHetKzHUxAGhoq639"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-wedding-primary text-white px-6 py-2 rounded-full font-medium text-sm hover:bg-wedding-main transition-colors"
                    data-testid="reception-map-link">
                    View on Map
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
