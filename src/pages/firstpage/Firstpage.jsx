import profileImg from "../../assets/pictures/mainprofile.jpg";
import Invites from "../../components/invites/Invites.jsx";
import Rsvpmodal from "../../components/modal/Rsvpmodal.jsx";
import { useState } from "react";
import { useNavigate } from "react-router";

const guestData = [
  { name: "Carl", rsvp: true, id: 0 },
  { name: "Irish", rsvp: true, id: 1 },
  { name: "Ash", rsvp: false, id: 2 },
];

export default function Firstpage() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="min-h-screen flex items-center justify-center bg-banner1 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#e8f0eb,#cfded6,#b7cfc5)] opacity-50" />
        {/* gold marble style overlay */}
        <div className="absolute inset-0 opacity-20 bg-[url('/assets/pictures/gold-texture.png')] bg-cover bg-center" />

        <div className="relative flex flex-col items-center space-y-4 max-w-sm">
          <div className="text-center">
            <p className="mt-6 font-serif italic text-forest/90">
              Dear <span className="font-semibold">Asheh Grace Merino</span>
            </p>

            <h1 className="font-serif text-center text-xl tracking-wide mb-4 mt-2 text-forest">
              You are cordially invited
            </h1>
          </div>

          <div className="flex flex-col items-center bg-white/80 backdrop-blur p-6 rounded-2xl shadow-xl border border-amber-200/40 w-80">
            <img
              src={profileImg}
              alt="Wedding Profile"
              className="w-[450px] h-[350px] object-cover mb-6 rounded-xl shadow-md border border-amber-100"
            />

            <p className="font-serif text-xs tracking-[.25em] uppercase text-forest/80">
              The Wedding Of
            </p>

            <h1 className="font-script text-4xl italic mb-2 text-forest">
              Carl & Irish
            </h1>
          </div>

          <div className="text-center mt-6 bg-white/70 px-6 py-3 rounded-xl shadow border border-amber-100/40">
            <p className="font-serif text-forest">
              Sunday <span className="mx-2 text-amber-500">|</span> 21
              <span className="mx-2 text-amber-500">|</span> November
            </p>

            <p className="font-serif text-sm mt-1 text-forest/90">
              St. Ursula Parish Church
            </p>
          </div>

          <div className="flex gap-3 mt-4">
            <button
              onClick={() => navigate("rsvp")}
              className="bg-bg-card text-white px-5 py-2 rounded-full shadow hover:opacity-90">
              RSVP
            </button>
            {/* RSVP MODAL */}
            {open && <Rsvpmodal setOpen={setOpen} />}
            <button
              onClick={() => navigate("home")}
              className="border border-bg-card bg-text-primary text-forest px-5 py-2 rounded-full">
              View Details
            </button>
          </div>
        </div>
      </section>
      {/* <Invites /> */}
    </>
  );
}
