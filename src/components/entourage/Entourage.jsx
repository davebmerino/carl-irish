import entourageBanner from "../../assets/weddingpictures/DSC04988.jpg";
import { motion } from "framer-motion";
import GodParents from "./GodParents.jsx";
import SecondarySponsors from "./SecondarySponsors.jsx";
import BrideGroom from "./BrideGroom.jsx";
import Bearer from "./Bearer.jsx";
import FlowerGirls from "./FlowerGirls.jsx";
const entourageData = {
  parents: {
    groom: ["Mr.Carmelito Cunanan Collado", "Mrs.Editha Antazo Rivera"],
    bride: ["Mr.Alan Hernaez Maqui", "Mrs.Lailani Añonuevo De la Peña"],
  },

  mathronOfHonor: ["Ms. Alyssa Remieleen Maqui"],
  bestMan: ["Mr. Jonas Gervacio"],
  bridesMaids: {
    reg: [
      "Maureen A. Ebrada",
      "Charlene Collado",
      "Ms. Lianne Maqui",
      "Jovelle Ann Rañin",
      "Mischelle Pereda",
      "Vina Mae Bolado",
      "Ina Marie Maqui",
      "Charmaigne Collado",
      "Allanie Maqui",
    ],
    veil: ["Ms. Lianne Maqui"],
    candle: ["Maureen A. Ebrada"],
    cord: ["Charlene Collado"],
  },
  groomsMen: {
    reg: [
      "Christer Ramos ",
      "Dave Merino",
      "Ace Aclan",
      "Michael Fernandez",
      "Marlo Maligaya",
      "Jovic Barandino ",
      "Dave Edem",
    ],
    veil: ["Dave Merino"],
    candle: ["Christer Ramos"],
    cord: ["Ace Aclan"],
  },
  flowerGirls: [
    "Asherah Grace Merino",
    "Mary Roxanne Junsay",
    "Maria Romaigne Junsay",
    "Zabrina Urriza",
    "Helene Bamba",
    "Lordaine Maryx Figuracion",
    "Macy Kielle Iguiban",
    "Vallexia Suyat",
  ],
  bearer: {
    ring: ["Irving James Olinares"],
    coin: ["Kendall Allen Olinares"],
    bibble: ["Kalen Juan Rolle"],
  },
};

export default function Entourage() {
  return (
    <>
      {/* Entourage Section */}
      <section className="py-20 px-4" data-testid="entourage-section">
        <div className="max-w-6xl mx-auto">
          {/* Photo above section */}
          <div className="relative h-64 mb-12 rounded-xl overflow-hidden shadow-xl">
            <img
              loading="lazy"
              decoding="async"
              fetchPriority="low"
              src={entourageBanner}
              alt="Entourage"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-wedding-deep/40 flex flex-col items-center justify-center">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7 }}
                className="font-cormorant italic text-center text-white text-lg md:text-2xl lg:text-4xl mb-2">
                Collado - Maqui
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7 }}
                className="font-script text-5xl text-center md:text-7xl text-white text-shadow">
                Entourage
              </motion.h2>
            </div>
          </div>

          <div className="space-y-12">
            {/* Parents */}
            <div className="bg-wedding-primary/30 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-wedding-secondary/30">
              {/* <h3 className="font-cormorant text-3xl text-wedding-deep mb-6 text-center tracking-wider">
                Parents of the Couple
              </h3> */}

              {/* Parents of the Couple */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7 }}
                className="grid grid-cols gap-8 text-center">
                <div>
                  <h4 className="font-cormorant italic text-2xl font-semibold text-wedding-primary mb-3">
                    Parents of the Groom
                  </h4>
                  <p className="font-manrope text-wedding-main">
                    Mr. Carmelito Cunanan Collado
                  </p>
                  <p className="font-manrope text-wedding-main">
                    Mrs. Editha Antazo Rivera
                  </p>
                </div>
                <div className="">
                  <h4 className="font-cormorant italic text-2xl font-semibold text-wedding-primary mb-3 ">
                    Parents of the Bride
                  </h4>
                  <p className="font-manrope text-wedding-main">
                    Mr. Alan Hernaez Maqui
                  </p>
                  <p className="font-manrope text-wedding-main">
                    Mrs. Lailani Añonuevo De la Peña
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
              className="bg-wedding-primary/30 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-wedding-secondary/30">
              {/* Primary Sponsors */}
              <h3 className="font-cormorant italic text-3xl text-wedding-deep mb-6 text-center tracking-wider">
                LIFE GODPARENTS
              </h3>
              <GodParents primarySponsors={entourageData.primarySponsors} />

              {/* Secondary Sponsors */}
              <h3 className="font-cormorant italic text-3xl text-wedding-deep mb-6 text-center tracking-wider">
                SECONDARY SPONSORS
              </h3>
              <SecondarySponsors entourageData={entourageData} />
              {/* BridesMaid and Groomsmen */}

              <BrideGroom entourageData={entourageData} />
              {/* Bearer */}

              <Bearer entourageData={entourageData} />

              {/* Flower Girls */}

              <h3 className="font-cormorant italic text-3xl text-wedding-deep mb-6 text-center tracking-wider">
                Flower Girls
              </h3>
              <FlowerGirls entourageData={entourageData} />
            </motion.div>
          </div>
        </div>
      </section>
      ;
    </>
  );
}
