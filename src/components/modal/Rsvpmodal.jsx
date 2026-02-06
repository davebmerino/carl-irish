export default function Rsvpmodal({ setOpen }) {
  return (
    <>
      <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
        <div className="bg-white p-6 rounded-xl w-80 space-y-3">
          <h2 className="font-serif text-lg">RSVP Confirmation</h2>

          <p className="text-sm">Will you attend our wedding, Asherah Grace?</p>

          <select className="border w-full p-2 rounded">
            <option>Attending</option>
            <option>Not Attending</option>
          </select>

          <div className="flex justify-end gap-2">
            <button onClick={() => setOpen(false)} className="px-3 py-1">
              Cancel
            </button>

            <button className="bg-forest text-white px-4 py-1 rounded">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
