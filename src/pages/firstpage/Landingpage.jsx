import profileImg from "../../assets/pictures/mainprofile.jpg";

import { useNavigate } from "react-router-dom";
import { Heart } from "lucide-react";

export default function Landingpage() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image with Overlay */}
      {/* <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "",
        }}>
        <div className="absolute inset-0 bg-wedding-deep/30"></div>
      </div> */}

      {/* Grain Overlay */}
      <div className="grain-overlay absolute inset-0"></div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-6 ">
        <div className="bg-white/80 backdrop-blur rounded-2xl p-8 md:p-12 max-w-2xl w-full text-center shadow-2xl">
          {/* Heart Icon */}
          <div className="flex justify-center mb-6">
            <div className="bg-wedding-warm/20 p-4 rounded-full">
              <Heart className="w-8 h-8 text-wedding-warm fill-wedding-warm" />
            </div>
          </div>

          {/* You Are Invited */}
          <h1
            className="font-script text-5xl md:text-7xl text-wedding-deep mb-4 animate-fade-up"
            data-testid="invitation-title">
            You Are Invited
          </h1>

          {/* Divider */}
          <div className="flex items-center justify-center my-6">
            <div className="h-px w-20 bg-wedding-soft"></div>
            <div className="mx-4">
              <Heart className="w-4 h-4 text-wedding-warm fill-wedding-warm" />
            </div>
            <div className="h-px w-20 bg-wedding-soft"></div>
          </div>

          <div className="mx-auto my-6 flex flex-col items-center bg-white/80 backdrop-blur  rounded-2xl shadow-xl border w-full max-w-sm">
            <img
              src={profileImg}
              alt="Wedding Profile"
              className=" object-cover rounded-xl shadow-md border border-amber-100 "
            />
          </div>

          {/* Couple Names */}
          <div className="mb-8">
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-wedding-deep mb-2">
              Carl & Irish
            </h2>
          </div>

          {/* Wedding Details */}
          <div className="space-y-3 mb-10 font-manrope text-wedding-main">
            <p className="text-lg" data-testid="wedding-date">
              <span className="font-medium">Saturday, October 5, 2026</span>
            </p>
            <p className="text-base" data-testid="wedding-time">
              Ceremony at 4:00 PM
            </p>
            <p className="text-base" data-testid="wedding-venue">
              St. Ursula Parish
              <br />
              Binangonan
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate("/rsvp")}
              className="btn-primary bg-wedding-warm text-white px-8 py-3 rounded-full font-medium tracking-wide shadow-md hover:bg-wedding-warm/90"
              data-testid="rsvp-button">
              RSVP
            </button>
            <button
              onClick={() => navigate("/home")}
              className="border-2 border-wedding-deep text-wedding-deep px-8 py-3 rounded-full font-medium tracking-wide hover:bg-wedding-deep hover:text-white transition-all duration-300"
              data-testid="more-details-button">
              More Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
