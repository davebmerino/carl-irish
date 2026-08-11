import { memo } from "react";

const primarySponsors = {
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
    "Mr. Richard Collado",
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
};

const GodParents = memo(function GodParents() {
  return (
    <div className="grid md:grid-cols-2 gap-8 mb-10">
      <div>
        <h4 className="font-cormorant italic text-xl text-center font-semibold text-wedding-primary mb-3">
          Ninongs
        </h4>

        <ul className="space-y-2 font-manrope text-wedding-main text-center">
          {primarySponsors.ninongs.map((ninong, index) => (
            <li key={index}>{ninong}</li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="font-cormorant italic text-xl text-center font-semibold text-wedding-primary mb-3">
          Ninangs
        </h4>

        <ul className="space-y-2 font-manrope text-wedding-main text-center">
          {primarySponsors.ninangs.map((ninang, index) => (
            <li key={index}>{ninang}</li>
          ))}
        </ul>
      </div>
    </div>
  );
});

export default GodParents;
