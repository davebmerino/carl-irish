import {
  Clock,
  Church,
  ForkKnife,
  MusicNotes,
  Martini,
  Cake,
  Wine,
  Heart,
  Confetti,
  HandsPraying,
  DiscoBall,
} from "@phosphor-icons/react";

// const ringIcon = <FontAwesomeIcon icon="rings-wedding" />;

const timeline = [
  {
    time: "3:00 PM",
    title: "Ceremony",
    icon: Church,
    side: "left",
  },
  {
    time: "4:30 PM",
    title: "Cocktail Hour",
    icon: Martini,
    side: "right",
  },
  {
    time: "6:00 PM",
    title: "First Dance",
    icon: MusicNotes,
    side: "left",
  },
  {
    time: "6:30 PM",
    title: "Cake Cutting",
    icon: Cake,
    side: "right",
  },
  {
    time: "7:00 PM",
    title: "Wine Toast",
    icon: Wine,
    side: "left",
  },
  {
    time: "7:30 PM",
    title: "Reception Dinner",
    icon: ForkKnife,
    side: "right",
  },
  {
    time: "8:00 PM",
    title: "Well Wishes",
    icon: HandsPraying,
    side: "left",
  },
  {
    time: "8:30 PM",
    title: "Party Time",
    icon: DiscoBall,
    side: "right",
  },
];

export default function WeddingTimeline() {
  return (
    <section className="bg-[#f5f4f1] min-h-screen py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <Clock className="mx-auto text-[#879a78] mb-4" size={36} />

          <h2 className="font-script text-5xl md:text-6xl text-wedding-deep text-center mb-12">
            Wedding Timeline
          </h2>
        </div>

        {/* Desktop timeline */}
        <div className="hidden md:block relative">
          {/* Center line */}

          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-[#b6c3a8] -translate-x-1/2" />

          <div className="space-y-24">
            {timeline.map((item, index) => {
              const Icon = item.icon;
              const isLeft = item.side === "left";
              const isRight = item.side === "right";

              return (
                <div
                  key={index}
                  className="relative grid grid-cols-[1fr_50px_1fr] items-center">
                  {/* Left side */}
                  <div className="hidden md:flex items-center justify-end pr-12">
                    {isLeft ? (
                      <div className="text-right max-w-xs grid grid-cols-[1fr_50px] gap-4 items-center">
                        <div className="flex flex-col text-center">
                          <p className="text-[#6f7f62] text-lg font-semibold tracking-[0.18em] uppercase">
                            {item.time}
                          </p>
                          <h3
                            className="text-4xl text-[#5f6f54] leading-tight mt-1"
                            style={{ fontFamily: "Cormorant Garamond, serif" }}>
                            {item.title}
                          </h3>
                        </div>
                        <div>
                          <Icon className="text-[#879a78] mt-4" size={44} />
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>

                  {/* Center marker */}
                  <div className="hidden md:flex relative z-10 w-12 justify-center">
                    <div className="w-3 h-3 rounded-full bg-[#879a78]" />
                  </div>

                  {/* Right side */}
                  <div className="hidden md:flex w-1/2 items-center justify-start pl-12">
                    {isRight ? (
                      <div className="text-left max-w-xs grid grid-cols-[50px_1fr] gap-4 items-center">
                        <div>
                          <Icon className="text-[#879a78] mt-4" size={44} />
                        </div>
                        <div className="flex flex-col text-center">
                          <p className="text-[#6f7f62] text-lg font-semibold tracking-[0.18em] uppercase">
                            {item.time}
                          </p>
                          <h3
                            className="text-4xl text-[#5f6f54] leading-tight mt-1"
                            style={{ fontFamily: "Cormorant Garamond, serif" }}>
                            {item.title}
                          </h3>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile timeline */}
        <div className="md:hidden relative pl-12 mt-10">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-[#b6c3a8]" />

          <div className="space-y-12">
            {timeline.map((item, index) => {
              const Icon = item.icon;

              return (
                <div key={index} className="relative">
                  <div className="absolute -left-8 top-2 w-3 h-3 rounded-full bg-[#879a78]" />

                  <div className="flex items-start gap-4">
                    <Icon
                      className="text-[#879a78] mt-1"
                      size={28}
                      strokeWidth={1.5}
                    />

                    <div>
                      <p className="text-[#6f7f62] text-sm font-semibold tracking-[0.18em] uppercase mb-1">
                        {item.time}
                      </p>

                      <h3
                        className="text-[#5f6f54] text-2xl"
                        style={{ fontFamily: "Cormorant Garamond, serif" }}>
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-24">
          <p
            className="text-[#6f7f62] text-5xl"
            style={{ fontFamily: "Great Vibes, cursive" }}>
            Carl + Trish
          </p>

          <div className="flex items-center justify-center mt-4 gap-3 text-[#879a78]">
            <div className="w-14 h-px bg-[#b6c3a8]" />
            <Heart size={16} strokeWidth={1.5} />
            <div className="w-14 h-px bg-[#b6c3a8]" />
          </div>
        </div>
      </div>
    </section>
  );
}
