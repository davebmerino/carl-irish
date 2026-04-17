export default function Calendar() {
  return (
    <>
      {/* Save the Date Calendar Section */}
      <section className="py-16 px-4" data-testid="calendar-section">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-wedding-secondary/30">
              <h3 className="font-script text-4xl text-wedding-deep mb-2 text-center">
                Save the Date
              </h3>
              <p className="font-cormorant text-xl text-center text-wedding-main mb-6">
                Oct 2026
              </p>
              <div className="grid grid-cols-7 gap-2 text-center">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                  (day, i) => (
                    <div
                      key={i}
                      className="font-manrope text-xs font-medium text-wedding-soft uppercase">
                      {day}
                    </div>
                  ),
                )}
                {[
                  null,
                  null,
                  null,
                  null,
                  null,
                  null,
                  1,
                  2,
                  3,
                  4,
                  5,
                  6,
                  7,
                  8,
                  9,
                  10,
                  11,
                  12,
                  13,
                  14,
                  15,
                  16,
                  17,
                  18,
                  19,
                  20,
                  21,
                  22,
                  23,
                  24,
                  25,
                  26,
                  27,
                  28,
                  29,
                  30,
                ].map((date, i) => (
                  <div
                    key={i}
                    className={`p-2 text-sm font-manrope ${
                      date === 10
                        ? "bg-wedding-primary text-white rounded-full font-bold"
                        : date
                          ? "text-wedding-deep"
                          : ""
                    }`}>
                    {date || ""}
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1698897050888-c18a15b6703e?crop=entropy&cs=srgb&fm=jpg&q=85"
                alt="Couple"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
