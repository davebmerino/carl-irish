import { Clock } from "lucide-react";

export default function Schedule() {
  const schedule = [
    {
      time: "3:30 PM",
      event: "Guest Arrival",
      description: "Welcome drinks and light refreshments",
    },
    {
      time: "4:00 PM",
      event: "Ceremony",
      description: "Exchange of vows in the garden",
    },
    {
      time: "5:00 PM",
      event: "Cocktail Hour",
      description: "Celebrate with drinks and canapés",
    },
    {
      time: "6:30 PM",
      event: "Reception",
      description: "Dinner, toasts, and celebration",
    },
    {
      time: "8:00 PM",
      event: "First Dance",
      description: "Dance the night away",
    },
    {
      time: "11:00 PM",
      event: "Grand Farewell",
      description: "Sparkler send-off",
    },
  ];
  return (
    <>
      {/* Schedule Section */}
      <section className="py-20 px-4" data-testid="schedule-section">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Clock className="w-8 h-8 text-wedding-warm mx-auto mb-4" />
            <h2 className="font-playfair text-4xl md:text-5xl font-semibold text-wedding-deep mb-4">
              Schedule
            </h2>
            <div className="h-px w-24 bg-wedding-soft mx-auto"></div>
          </div>

          <div className="space-y-4">
            {schedule.map((item, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-wedding-secondary/30 hover:shadow-xl transition-shadow"
                data-testid={`schedule-item-${index}`}>
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="md:w-24 flex-shrink-0">
                    <span className="font-playfair text-lg font-semibold text-wedding-warm">
                      {item.time}
                    </span>
                  </div>
                  <div className="h-px md:h-12 md:w-px bg-wedding-soft md:mx-4"></div>
                  <div className="flex-1">
                    <h4 className="font-playfair text-xl font-semibold text-wedding-deep mb-1">
                      {item.event}
                    </h4>
                    <p className="font-manrope text-wedding-soft text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
