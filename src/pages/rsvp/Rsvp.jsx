import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar.jsx";
import Footer from "../../components/footer/Footer.jsx";

import { Heart, Plus, Trash2, Loader2 } from "lucide-react";

export default function Rsvp() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const [primaryGuest, setPrimaryGuest] = useState({
    name: "",
    email: "",
    contact: "",
    status: "coming",
  });

  const [additionalGuests, setAdditionalGuests] = useState([]);

  const addGuest = () => {
    setAdditionalGuests([
      ...additionalGuests,
      {
        name: "",
        email: "",
        contact: "",
        status: "coming",
      },
    ]);
  };

  const removeGuest = (index) => {
    setAdditionalGuests(additionalGuests.filter((_, i) => i !== index));
  };

  const updateAdditionalGuest = (index, field, value) => {
    const updated = [...additionalGuests];
    updated[index][field] = value;
    setAdditionalGuests(updated);
  };

  const validateForm = () => {
    // Validate primary guest
    if (!primaryGuest.name.trim()) {
      setError("Please enter your name");
      return false;
    }
    if (
      !primaryGuest.email.trim() ||
      !/\S+@\S+\.\S+/.test(primaryGuest.email)
    ) {
      setError("Please enter a valid email address");
      return false;
    }
    if (!primaryGuest.contact.trim()) {
      setError("Please enter your contact number");
      return false;
    }

    // Validate additional guests
    for (let i = 0; i < additionalGuests.length; i++) {
      const guest = additionalGuests[i];
      if (!guest.name.trim()) {
        setError(`Please enter name for guest ${i + 1}`);
        return false;
      }
      if (!guest.email.trim() || !/\S+@\S+\.\S+/.test(guest.email)) {
        setError(`Please enter a valid email for guest ${i + 1}`);
        return false;
      }
      if (!guest.contact.trim()) {
        setError(`Please enter contact number for guest ${i + 1}`);
        return false;
      }
    }

    setError("");
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await axios.post(`${API}/rsvp`, {
        primary_guest: primaryGuest,
        additional_guests: additionalGuests,
      });

      console.log("RSVP submitted:", response.data);
      setSubmitted(true);
    } catch (err) {
      console.error("Error submitting RSVP:", err);
      setError(
        err.response?.data?.detail ||
          "Failed to submit RSVP. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="glass-card rounded-2xl p-8 md:p-12 max-w-2xl w-full text-center shadow-2xl">
          <div className="bg-wedding-warm/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart className="w-10 h-10 text-wedding-warm fill-wedding-warm" />
          </div>
          <h1
            className="font-playfair text-4xl md:text-5xl font-semibold text-wedding-deep mb-4"
            data-testid="success-message">
            Thank You!
          </h1>
          <p className="font-manrope text-wedding-main text-lg mb-8">
            Your RSVP has been received. We can't wait to celebrate with you!
          </p>
          <button
            onClick={() => navigate("/home")}
            className="bg-wedding-warm text-white px-8 py-3 rounded-full font-medium tracking-wide hover:bg-wedding-warm/90 transition-colors"
            data-testid="back-home-button">
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="grain-overlay fixed inset-0 pointer-events-none"></div>

      <div className="relative py-20 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Heart className="w-8 h-8 text-wedding-warm fill-wedding-warm mx-auto mb-4" />
            <h1
              className="font-playfair text-4xl md:text-5xl font-semibold text-wedding-deep mb-4"
              data-testid="rsvp-title">
              RSVP
            </h1>
            <div className="h-px w-24 bg-wedding-soft mx-auto mb-6"></div>
            <p className="font-manrope text-wedding-main text-lg">
              Please let us know if you'll be joining us for our special day
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 md:p-10 shadow-2xl border border-wedding-secondary/30">
            {/* Error Message */}
            {error && (
              <div
                className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 font-manrope text-sm"
                data-testid="error-message">
                {error}
              </div>
            )}

            {/* Primary Guest */}
            <div className="mb-8">
              <h3 className="font-playfair text-2xl font-semibold text-wedding-deep mb-6">
                Your Information
              </h3>

              <div className="space-y-6">
                <div>
                  <label className="block font-manrope text-wedding-main font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={primaryGuest.name}
                    onChange={(e) =>
                      setPrimaryGuest({ ...primaryGuest, name: e.target.value })
                    }
                    className="w-full bg-transparent border-b-2 border-wedding-soft focus:border-wedding-warm focus:outline-none py-2 px-0 text-wedding-deep placeholder:text-wedding-soft/60 transition-colors font-manrope"
                    placeholder="Enter your full name"
                    data-testid="primary-name-input"
                  />
                </div>

                <div>
                  <label className="block font-manrope text-wedding-main font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={primaryGuest.email}
                    onChange={(e) =>
                      setPrimaryGuest({
                        ...primaryGuest,
                        email: e.target.value,
                      })
                    }
                    className="w-full bg-transparent border-b-2 border-wedding-soft focus:border-wedding-warm focus:outline-none py-2 px-0 text-wedding-deep placeholder:text-wedding-soft/60 transition-colors font-manrope"
                    placeholder="your.email@example.com"
                    data-testid="primary-email-input"
                  />
                </div>

                <div>
                  <label className="block font-manrope text-wedding-main font-medium mb-2">
                    Contact Number *
                  </label>
                  <input
                    type="tel"
                    value={primaryGuest.contact}
                    onChange={(e) =>
                      setPrimaryGuest({
                        ...primaryGuest,
                        contact: e.target.value,
                      })
                    }
                    className="w-full bg-transparent border-b-2 border-wedding-soft focus:border-wedding-warm focus:outline-none py-2 px-0 text-wedding-deep placeholder:text-wedding-soft/60 transition-colors font-manrope"
                    placeholder="+1 (123) 456-7890"
                    data-testid="primary-contact-input"
                  />
                </div>

                <div>
                  <label className="block font-manrope text-wedding-main font-medium mb-3">
                    Will you be attending? *
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="primary-status"
                        value="coming"
                        checked={primaryGuest.status === "coming"}
                        onChange={(e) =>
                          setPrimaryGuest({
                            ...primaryGuest,
                            status: e.target.value,
                          })
                        }
                        className="mr-2 w-4 h-4 text-wedding-warm"
                        data-testid="primary-coming-radio"
                      />
                      <span className="font-manrope text-wedding-main">
                        Coming
                      </span>
                    </label>
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="primary-status"
                        value="not_coming"
                        checked={primaryGuest.status === "not_coming"}
                        onChange={(e) =>
                          setPrimaryGuest({
                            ...primaryGuest,
                            status: e.target.value,
                          })
                        }
                        className="mr-2 w-4 h-4 text-wedding-warm"
                        data-testid="primary-not-coming-radio"
                      />
                      <span className="font-manrope text-wedding-main">
                        Not Coming
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Guests */}
            {additionalGuests.map((guest, index) => (
              <div
                key={index}
                className="mb-8 pb-8 border-t-2 border-wedding-secondary/30 pt-8">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-playfair text-2xl font-semibold text-wedding-deep">
                    Guest {index + 1}
                  </h3>
                  <button
                    type="button"
                    onClick={() => removeGuest(index)}
                    className="text-red-500 hover:text-red-700 transition-colors"
                    data-testid={`remove-guest-${index}`}>
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block font-manrope text-wedding-main font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={guest.name}
                      onChange={(e) =>
                        updateAdditionalGuest(index, "name", e.target.value)
                      }
                      className="w-full bg-transparent border-b-2 border-wedding-soft focus:border-wedding-warm focus:outline-none py-2 px-0 text-wedding-deep placeholder:text-wedding-soft/60 transition-colors font-manrope"
                      placeholder="Enter guest's full name"
                      data-testid={`guest-${index}-name-input`}
                    />
                  </div>

                  <div>
                    <label className="block font-manrope text-wedding-main font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={guest.email}
                      onChange={(e) =>
                        updateAdditionalGuest(index, "email", e.target.value)
                      }
                      className="w-full bg-transparent border-b-2 border-wedding-soft focus:border-wedding-warm focus:outline-none py-2 px-0 text-wedding-deep placeholder:text-wedding-soft/60 transition-colors font-manrope"
                      placeholder="guest.email@example.com"
                      data-testid={`guest-${index}-email-input`}
                    />
                  </div>

                  <div>
                    <label className="block font-manrope text-wedding-main font-medium mb-2">
                      Contact Number *
                    </label>
                    <input
                      type="tel"
                      value={guest.contact}
                      onChange={(e) =>
                        updateAdditionalGuest(index, "contact", e.target.value)
                      }
                      className="w-full bg-transparent border-b-2 border-wedding-soft focus:border-wedding-warm focus:outline-none py-2 px-0 text-wedding-deep placeholder:text-wedding-soft/60 transition-colors font-manrope"
                      placeholder="+1 (123) 456-7890"
                      data-testid={`guest-${index}-contact-input`}
                    />
                  </div>

                  <div>
                    <label className="block font-manrope text-wedding-main font-medium mb-3">
                      Will they be attending? *
                    </label>
                    <div className="flex gap-4">
                      <label className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name={`guest-${index}-status`}
                          value="coming"
                          checked={guest.status === "coming"}
                          onChange={(e) =>
                            updateAdditionalGuest(
                              index,
                              "status",
                              e.target.value,
                            )
                          }
                          className="mr-2 w-4 h-4 text-wedding-warm"
                          data-testid={`guest-${index}-coming-radio`}
                        />
                        <span className="font-manrope text-wedding-main">
                          Coming
                        </span>
                      </label>
                      <label className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name={`guest-${index}-status`}
                          value="not_coming"
                          checked={guest.status === "not_coming"}
                          onChange={(e) =>
                            updateAdditionalGuest(
                              index,
                              "status",
                              e.target.value,
                            )
                          }
                          className="mr-2 w-4 h-4 text-wedding-warm"
                          data-testid={`guest-${index}-not-coming-radio`}
                        />
                        <span className="font-manrope text-wedding-main">
                          Not Coming
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Add Guest Button */}
            <button
              type="button"
              onClick={addGuest}
              className="w-full border-2 border-dashed border-wedding-soft hover:border-wedding-warm text-wedding-main hover:text-wedding-warm py-4 rounded-xl font-medium tracking-wide transition-all duration-300 flex items-center justify-center gap-2 mb-8"
              data-testid="add-guest-button">
              <Plus className="w-5 h-5" />
              Add Guest
            </button>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-wedding-warm text-white py-4 rounded-full font-medium tracking-wide hover:bg-wedding-warm/90 transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              data-testid="submit-rsvp-button">
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Submitting...
                </>
              ) : (
                "Submit RSVP"
              )}
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
