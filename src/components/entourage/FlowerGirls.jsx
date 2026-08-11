export default function FlowerGirls() {
  const flowerGirls = [
    "Asherah Grace Merino",
    "Mary Roxanne Junsay",
    "Maria Romaigne Junsay",
    "Zabrina Urriza",
    "Helene Bamba",
    "Lordaine Maryx Figuracion",
    "Macy Kielle Iguiban",
    "Vallexia Suyat",
  ];
  return (
    <>
      <div className="grid md:grid-cols-1 gap-4 text-center">
        {flowerGirls.map((flowerGirl, index) => (
          <div key={index} className="text-center">
            <p className="font-manrope text-wedding-main">{flowerGirl}</p>
          </div>
        ))}
      </div>
    </>
  );
}
