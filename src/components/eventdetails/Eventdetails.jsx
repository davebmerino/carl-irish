import { Calendar, Clock, MapPin } from "lucide-react";

export default function Eventdetails() {
  return (
    <>
      {/* Event Details Section */}
      <section
        className="py-20 px-4 bg-wedding-primary/30"
        data-testid="event-details-section">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <MapPin className="w-8 h-8 text-wedding-warm mx-auto mb-4" />
            <h2 className="font-playfair text-4xl md:text-5xl font-semibold text-wedding-deep mb-4">
              Event Details
            </h2>
            <div className="h-px w-24 bg-wedding-soft mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Ceremony */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-wedding-secondary/30">
              <h3 className="font-playfair text-2xl font-semibold text-wedding-deep mb-4">
                Ceremony
              </h3>
              <div className="space-y-3 text-wedding-main font-manrope">
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-wedding-warm mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Saturday, October 5, 2026</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-wedding-warm mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">4:00 PM - 5:00 PM</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-wedding-warm mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">St. Ursula Parish</p>
                    <p className="text-sm text-wedding-soft">
                      Binangonan
                      <br />
                      Sa may palengke
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-wedding-warm text-white px-6 py-2 rounded-full font-medium text-sm hover:bg-wedding-warm/90 transition-colors"
                  data-testid="ceremony-map-link">
                  View on Map
                </a>
              </div>
            </div>

            {/* Reception */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-wedding-secondary/30">
              <h3 className="font-playfair text-2xl font-semibold text-wedding-deep mb-4">
                Reception
              </h3>
              <div className="space-y-3 text-wedding-main font-manrope">
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-wedding-warm mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Saturday, October 5, 2026</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-wedding-warm mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">6:30 PM - 11:00 PM</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-wedding-warm mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">The Kainan ni badong</p>
                    <p className="text-sm text-wedding-soft">
                      51 st. Mahabang parang
                      <br />
                      Mahabang parang, Binangonan
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-wedding-warm text-white px-6 py-2 rounded-full font-medium text-sm hover:bg-wedding-warm/90 transition-colors"
                  data-testid="reception-map-link">
                  View on Map
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
