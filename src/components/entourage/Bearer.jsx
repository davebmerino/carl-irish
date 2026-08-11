export default function Bearer({ entourageData }) {
  return (
    <>
      <div className="grid md:grid-cols-3 gap-8 text-center mb-10 py-4">
        <div className="text-center">
          <h4 className="font-cormorant italic text-2xl font-semibold text-wedding-primary mb-3">
            Ring Bearer
          </h4>
          <p className="font-manrope text-wedding-main">
            {entourageData.bearer.ring[0]}
          </p>
        </div>
        <div className="text-center">
          <h4 className="font-cormorant italic text-2xl font-semibold text-wedding-primary mb-3">
            Coin Bearer
          </h4>
          <p className="font-manrope text-wedding-main">
            {entourageData.bearer.coin[0]}
          </p>
        </div>
        <div className="text-center">
          <h4 className="font-cormorant italic text-2xl font-semibold text-wedding-primary mb-3">
            Bibble Bearer
          </h4>
          <p className="font-manrope text-wedding-main">
            {entourageData.bearer.bibble[0]}
          </p>
        </div>
      </div>
    </>
  );
}
