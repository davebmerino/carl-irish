export default function BrideGroom({ entourageData }) {
  return (
    <>
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <div>
          <h4 className="font-cormorant italic text-2xl text-center font-semibold text-wedding-primary mb-3">
            Groomsmen
          </h4>
          <ul className="space-y-2 font-manrope text-wedding-main text-center">
            {entourageData.groomsMen.reg.map((groomsmen, index) => (
              <li key={index}>{groomsmen}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-cormorant italic text-2xl text-center font-semibold text-wedding-primary mb-3">
            Bridesmaids
          </h4>
          <ul className="space-y-2 font-manrope text-wedding-main text-center">
            {entourageData.bridesMaids.reg.map((bridesMaid, index) => (
              <li key={index}>{bridesMaid}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
