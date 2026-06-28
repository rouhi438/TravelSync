import { useLocation, useNavigate } from "react-router-dom";
import "./CheckoutPage.css";

export function CheckoutPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const bookingData = location.state;
  const travelers = bookingData?.travelers || [];
  const travelDetails = bookingData?.travelDetails || {};
  const buildFullName = (traveler) =>
    [traveler.firstName, traveler.middleName, traveler.lastName]
      .filter(Boolean)
      .join(" ")
      .trim();

  const adultNames = travelers
    .filter((traveler) => traveler.type === "adult")
    .map(buildFullName)
    .filter(Boolean);

  const childNames = travelers
    .filter((traveler) => traveler.type === "child")
    .map(buildFullName)
    .filter(Boolean);

  const handleConfirmBooking = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    navigate("/confirmation", {
      state: {
        bookingReference: `TS-${Date.now()}`,
        adultCount: bookingData?.adultCount || 0,
        childCount: bookingData?.childCount || 0,
        travelers,
        travelDetails,
        email: formData.get("email") || "",
        phone: formData.get("phone") || "",
        paymentMethod: "card",
        cardHolderName: formData.get("cardHolderName") || "",
        cardLast4: (formData.get("cardNumber") || "").toString().slice(-4),
      },
    });
  };

  if (!bookingData) {
    return (
      <section className="checkout-page">
        <h1>Checkout</h1>
        <p>No booking data found. Please complete the booking form first.</p>
        <button type="button" onClick={() => navigate("/booking")}>
          Go To Booking Form
        </button>
      </section>
    );
  }

  return (
    <section className="checkout-page">
      <h1>Checkout</h1>

      <div className="checkout-summary">
        <h2 className="summary-title">Booking Summary</h2>
        <div className="travel-details">
          <h3 className="travel-details-title">Travel Details</h3>
          <p>
            <strong>Package</strong>{" "}
            {travelDetails.packageName || "Not selected yet"}
          </p>
          <p>
            <strong>Destination</strong>{" "}
            {travelDetails.destination || "Not available"}
          </p>
          <p>
            <strong>Duration</strong>{" "}
            {travelDetails.duration || "Not available"}
          </p>
          <p>
            <strong>Price</strong>{" "}
            {travelDetails.price ? `$${travelDetails.price}` : "Not available"}
          </p>
        </div>
        <div className="traveler-summary">
          <h3 className="traveler-summary-title">Traveler Summary</h3>
          <p className="traveler-summary-line">
            <strong>Adults</strong> {bookingData.adultCount}
            {adultNames.length > 0 && (
              <span className="traveler-names-inline">
                {adultNames.join(", ")}
              </span>
            )}
          </p>
          <p className="traveler-summary-line">
            <strong>Children</strong> {bookingData.childCount}
            {childNames.length > 0 && (
              <span className="traveler-names-inline">
                {childNames.join(", ")}
              </span>
            )}
          </p>
          <p>
            <strong>Total Travelers</strong> {travelers.length}
          </p>
        </div>
      </div>

      <form className="checkout-form" onSubmit={handleConfirmBooking}>
        <label htmlFor="email">Contact Email</label>
        <input id="email" name="email" type="email" required />

        <label htmlFor="phone">Phone Number</label>
        <input id="phone" name="phone" type="tel" required />

        <h2 className="payment-title">Payment Details</h2>

        <label htmlFor="cardHolderName">Card Holder Name</label>
        <input
          id="cardHolderName"
          name="cardHolderName"
          type="text"
          autoComplete="cc-name"
          required
        />

        <label htmlFor="cardNumber">Card Number</label>
        <input
          id="cardNumber"
          name="cardNumber"
          type="text"
          inputMode="numeric"
          autoComplete="cc-number"
          pattern="[0-9]{13,19}"
          title="Enter a valid card number with 13 to 19 digits"
          required
        />

        <div className="card-row">
          <div className="card-field">
            <label htmlFor="expiryDate">Expiry Date</label>
            <input
              id="expiryDate"
              name="expiryDate"
              type="month"
              autoComplete="cc-exp"
              required
            />
          </div>

          <div className="card-field">
            <label htmlFor="cvv">CVV</label>
            <input
              id="cvv"
              name="cvv"
              type="password"
              inputMode="numeric"
              autoComplete="cc-csc"
              pattern="[0-9]{3,4}"
              title="Enter a valid 3 or 4 digit CVV"
              required
            />
          </div>
        </div>

        <label className="terms-check">
          <input type="checkbox" name="termsAccepted" required />I agree to the
          Terms and Conditions.
        </label>

        <div className="checkout-actions">
          <button type="button" onClick={() => navigate("/booking")}>
            Back
          </button>
          <button type="submit">Confirm Booking</button>
        </div>
      </form>
    </section>
  );
}
