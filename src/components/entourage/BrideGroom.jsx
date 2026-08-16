export default function BrideGroom() {
  return (
    <>
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <div>
          <h4 className="font-cormorant italic text-2xl text-center font-semibold text-wedding-primary mb-3">
            Groomsmen
          </h4>
          <ul className="space-y-2 font-manrope text-wedding-main text-center">
            <li>Michael Fernandez </li>
            <li>Marlo Maligaya</li>
            <li>Jovic Barandino </li>
            <li>Dave Edem</li>
            <li>John Iverson Rivera</li>
          </ul>
        </div>
        <div>
          <h4 className="font-cormorant italic text-2xl text-center font-semibold text-wedding-primary mb-3">
            Bridesmaids
          </h4>
          <ul className="space-y-2 font-manrope text-wedding-main text-center">
            <li>Jovelle Ann Rañin</li>
            <li>Mischelle Pereda</li>
            <li>Vina Mae Bolado</li>
            <li>Ina Marie Maqui</li>
            <li>Charmaigne Collado</li>
            <li>Allanie Maqui</li>
          </ul>
        </div>
      </div>
    </>
  );
}
