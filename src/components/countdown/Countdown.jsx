import { useState, useEffect } from "react";

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Wedding date - Update this to your actual wedding date
  const weddingDate = new Date("2026-10-15T16:00:00");

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = weddingDate - new Date();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <section
        className="py-16 px-4 bg-wedding-bg/50"
        data-testid="countdown-section">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-cormorant text-3xl md:text-4xl font-light text-wedding-deep mb-12 tracking-widest uppercase">
            Days Before We Say "I Do"
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-wedding-primary/20">
              <div
                className="text-4xl md:text-6xl font-playfair font-semibold text-wedding-primary"
                data-testid="countdown-days">
                {timeLeft.days}
              </div>
              <div className="text-sm md:text-base font-manrope text-wedding-deep mt-2 uppercase tracking-wider">
                Days
              </div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-wedding-primary/20">
              <div
                className="text-4xl md:text-6xl font-playfair font-semibold text-wedding-primary"
                data-testid="countdown-hours">
                {timeLeft.hours}
              </div>
              <div className="text-sm md:text-base font-manrope text-wedding-deep mt-2 uppercase tracking-wider">
                Hours
              </div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-wedding-primary/20">
              <div
                className="text-4xl md:text-6xl font-playfair font-semibold text-wedding-primary"
                data-testid="countdown-minutes">
                {timeLeft.minutes}
              </div>
              <div className="text-sm md:text-base font-manrope text-wedding-deep mt-2 uppercase tracking-wider">
                Minutes
              </div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-wedding-primary/20">
              <div
                className="text-4xl md:text-6xl font-playfair font-semibold text-wedding-primary"
                data-testid="countdown-seconds">
                {timeLeft.seconds}
              </div>
              <div className="text-sm md:text-base font-manrope text-wedding-deep mt-2 uppercase tracking-wider">
                Seconds
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
