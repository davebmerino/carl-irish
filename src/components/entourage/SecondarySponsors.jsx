export default function SecondarySponsors() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-10">
        <div className="text-center">
          <h4 className="font-cormorant italic text-xl font-semibold text-wedding-primary mb-3">
            TO LIGHT OUR PATH
          </h4>
          <p className="font-manrope text-wedding-main">Christer Ramos</p>
          <p className="font-manrope text-wedding-main">Maureen Ebrada</p>
        </div>
        <div className="text-center">
          <h4 className="font-cormorant italic text-xl font-semibold text-wedding-primary mb-3">
            TO CLOTHE US AS ONE
          </h4>
          <p className="font-manrope text-wedding-main">Dave Merino</p>
          <p className="font-manrope text-wedding-main">Lianne Maqui</p>
        </div>
        <div className="lg:col-span-2 flex flex-col text-center lg:justify-center">
          <h4 className="font-cormorant italic text-xl font-semibold text-wedding-primary mb-3">
            Cord
          </h4>
          <p className="font-manrope text-wedding-main">Ace Julius Aclan</p>
          <p className="font-manrope text-wedding-main">Charlene Collado</p>
        </div>

        {/* Mathron of Honor and Best Man */}
        <div className="text-center">
          <h4 className="font-cormorant italic text-2xl font-semibold text-wedding-primary mb-3">
            Best Man
          </h4>
          <p className="font-manrope text-wedding-main">Jonas Gervacio</p>
        </div>
        <div className="flex flex-col text-center">
          <h4 className="font-cormorant italic text-2xl font-semibold text-wedding-primary mb-3">
            Matron of Honor
          </h4>
          <p className="font-manrope text-wedding-main">
            Alyssa Remieleen Maqui
          </p>
        </div>
      </div>
    </>
  );
}
