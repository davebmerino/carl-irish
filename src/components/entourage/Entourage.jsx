import entourageBanner from "../../assets/pictures/DSC04988.jpeg";

export default function Entourage() {
  const entourageData = {
    parents: {
      groom: ["Mr.Carmelito Cunanan Collado", "Mrs.Editha Antazo Rivera"],
      bride: ["Mr.Alan Hernaez Maqui", "Mrs.Lailani Añonuevo De la Peña"],
    },
    primarySponsors: {
      ninongs: [
        "Mr. Julius O. Muñoz",
        "Mr. Ferdinand Quirante",
        "Mr. Edilberto Flores",
        "Mr. Richard Collado",
        "Mr. John Lynch",
        "Mr. Crisaldo Cervo",
        "Mr. Julito Hinay",
        "Mr. Leonardo Dela Cruz",
        "Mr. Robert Morado",
        "Mr. Roldan Valdez",
        "Mr. Bernie Comia",
      ],
      ninangs: [
        "Mrs. Chona Collado",
        "Mrs. Emillete Quirante",
        "Mrs. Bonita Flores",
        "Mrs. Diana Mae Padcayan",
        "Mrs. Helen Hernaez",
        "Mrs. Alejandra Cervo",
        "Mrs. Ma Luz Cosio",
        "Mrs. Reggie Milca",
        "Mrs. Maryniza Saclolo",
        "Mrs. Lagrimas Valdez",
        "Mrs. Marife Bryan",
        "Mrs. Grhema Pascua",
      ],
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

  return (
    <>
      {/* Entourage Section */}
      <section className="py-20 px-4" data-testid="entourage-section">
        <div className="max-w-6xl mx-auto">
          {/* Photo above section */}
          <div className="relative h-64 mb-12 rounded-xl overflow-hidden shadow-xl">
            <img
              src={entourageBanner}
              alt="Entourage"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-wedding-deep/40 flex flex-col items-center justify-center">
              <p className="font-script text-center text-white text-lg md:text-2xl lg:text-4xl mb-2">
                Collado - Maqui
              </p>
              <h2 className="font-script text-5xl text-center md:text-7xl text-white text-shadow">
                Entourage
              </h2>
            </div>
          </div>

          <div className="space-y-12">
            {/* Parents */}
            <div className="bg-wedding-primary/30 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-wedding-secondary/30">
              {/* <h3 className="font-cormorant text-3xl text-wedding-deep mb-6 text-center tracking-wider">
                Parents of the Couple
              </h3> */}

              {/* Parents of the Couple */}
              <div className="grid grid-cols gap-8 text-center">
                <div>
                  <h4 className="font-playfair text-xl font-semibold text-wedding-primary mb-3">
                    Parents of the Groom
                  </h4>
                  <p className="font-manrope text-wedding-main">
                    Mr.Carmelito Cunanan Collado
                  </p>
                  <p className="font-manrope text-wedding-main">
                    Mrs.Editha Antazo Rivera
                  </p>
                </div>
                <div className="">
                  <h4 className="font-playfair text-xl font-semibold text-wedding-primary mb-3 ">
                    Parents of the Bride
                  </h4>
                  <p className="font-manrope text-wedding-main">
                    Mr.Alan Hernaez Maqui
                  </p>
                  <p className="font-manrope text-wedding-main">
                    Mrs.Lailani Añonuevo De la Peña
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-wedding-primary/30 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-wedding-secondary/30">
              {/* Primary Sponsors */}
              <h3 className="font-cormorant text-3xl text-wedding-deep mb-6 text-center tracking-wider">
                LIFE GODPARENTS
              </h3>
              <div className="grid md:grid-cols-2 gap-8 mb-10">
                <div>
                  <h4 className="font-playfair text-xl text-center font-semibold text-wedding-primary mb-3">
                    Ninongs
                  </h4>
                  <ul className="space-y-2 font-manrope text-wedding-main text-center">
                    {entourageData.primarySponsors.ninongs.map(
                      (ninong, index) => (
                        <li key={index}>{ninong}</li>
                      ),
                    )}
                  </ul>
                </div>
                <div>
                  <h4 className="font-playfair text-xl text-center font-semibold text-wedding-primary mb-3">
                    Ninangs
                  </h4>
                  <ul className="space-y-2 font-manrope text-wedding-main text-center">
                    {entourageData.primarySponsors.ninangs.map(
                      (ninang, index) => (
                        <li key={index}>{ninang}</li>
                      ),
                    )}
                  </ul>
                </div>
              </div>

              {/* Secondary Sponsors */}
              <h3 className="font-cormorant text-3xl text-wedding-deep mb-6 text-center tracking-wider">
                SECONDARY SPONSORS
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-10">
                <div className="text-center">
                  <h4 className="font-playfair text-xl font-semibold text-wedding-primary mb-3">
                    TO LIGHT OUR PATH
                  </h4>
                  <p className="font-manrope text-wedding-main">
                    {entourageData.bridesMaids.candle[0]}
                  </p>
                  <p className="font-manrope text-wedding-main">
                    {entourageData.groomsMen.candle[0]}
                  </p>
                </div>
                <div className="text-center">
                  <h4 className="font-playfair text-xl font-semibold text-wedding-primary mb-3">
                    TO CLOTHE US AS ONE
                  </h4>
                  <p className="font-manrope text-wedding-main">
                    {entourageData.bridesMaids.veil[0]}
                  </p>
                  <p className="font-manrope text-wedding-main">
                    {entourageData.groomsMen.veil[0]}
                  </p>
                </div>
                <div className="lg:col-span-2 flex flex-col text-center lg:justify-center">
                  <h4 className="font-playfair text-xl font-semibold text-wedding-primary mb-3">
                    Cord
                  </h4>
                  <p className="font-manrope text-wedding-main">
                    {entourageData.bridesMaids.cord[0]}
                  </p>
                  <p className="font-manrope text-wedding-main">
                    {entourageData.groomsMen.cord[0]}
                  </p>
                </div>

                {/* Mathron of Honor and Best Man */}
                <div className="flex flex-col text-center">
                  <h4 className="font-playfair text-xl font-semibold text-wedding-primary mb-3">
                    Matron of Honor
                  </h4>
                  <p className="font-manrope text-wedding-main">
                    {entourageData.mathronOfHonor}
                  </p>
                </div>
                <div className="text-center">
                  <h4 className="font-playfair text-xl font-semibold text-wedding-primary mb-3">
                    Best Man
                  </h4>
                  <p className="font-manrope text-wedding-main">
                    {entourageData.bestMan}
                  </p>
                </div>
              </div>

              {/* BridesMaid and Groomsmen */}

              <h3 className="font-cormorant text-3xl text-wedding-deep mb-6 text-center tracking-wider"></h3>
              <div className="grid md:grid-cols-2 gap-8 mb-10">
                <div>
                  <h4 className="font-playfair text-xl text-center font-semibold text-wedding-primary mb-3">
                    Bridesmaids
                  </h4>
                  <ul className="space-y-2 font-manrope text-wedding-main text-center">
                    {entourageData.bridesMaids.reg.map((bridesMaid, index) => (
                      <li key={index}>{bridesMaid}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-playfair text-xl text-center font-semibold text-wedding-primary mb-3">
                    Groomsmen
                  </h4>
                  <ul className="space-y-2 font-manrope text-wedding-main text-center">
                    {entourageData.groomsMen.reg.map((groomsmen, index) => (
                      <li key={index}>{groomsmen}</li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* Bearer */}

              <div className="grid md:grid-cols-3 gap-8 text-center mb-10 py-4">
                <div className="text-center">
                  <h4 className="font-playfair text-xl font-semibold text-wedding-primary mb-3">
                    Ring Bearer
                  </h4>
                  <p className="font-manrope text-wedding-main">
                    {entourageData.bearer.ring[0]}
                  </p>
                </div>
                <div className="text-center">
                  <h4 className="font-playfair text-xl font-semibold text-wedding-primary mb-3">
                    Coin Bearer
                  </h4>
                  <p className="font-manrope text-wedding-main">
                    {entourageData.bearer.coin[0]}
                  </p>
                </div>
                <div className="text-center">
                  <h4 className="font-playfair text-xl font-semibold text-wedding-primary mb-3">
                    Bibble Bearer
                  </h4>
                  <p className="font-manrope text-wedding-main">
                    {entourageData.bearer.bibble[0]}
                  </p>
                </div>
              </div>

              {/* Flower Girls */}

              <h3 className="font-cormorant text-3xl text-wedding-deep mb-6 text-center tracking-wider">
                Flower Girls
              </h3>
              <div className="grid md:grid-cols-1 gap-4 text-center">
                {entourageData.flowerGirls.map((flowerGirl, index) => (
                  <div key={index} className="text-center">
                    <p className="font-manrope text-wedding-main">
                      {flowerGirl}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      ;
    </>
  );
}
