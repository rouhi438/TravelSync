import { useLocation, useNavigate } from "react-router-dom";
import "./ConfirmationPage.css";

export function ConfirmationPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const confirmationData = location.state;

  if (!confirmationData) {
    return (
      <section className="confirmation-page">
        <h1>Booking Confirmation</h1>
        <p>No confirmation data found.</p>
        <button type="button" onClick={() => navigate("/booking")}>
          Start New Booking
        </button>
      </section>
    );
  }

  return (
    <section className="confirmation-page">
      <h1>Booking Confirmed</h1>
      <p>Your trip has been confirmed successfully.</p>

      <div className="confirmation-card">
        <p>
          <strong>Booking Reference</strong> {confirmationData.bookingReference}
        </p>
        <p>
          <strong>Adults</strong> {confirmationData.adultCount}
        </p>
        <p>
          <strong>Children</strong> {confirmationData.childCount}
        </p>
        <p>
          <strong>Total Travelers</strong>{" "}
          {confirmationData.travelers?.length || 0}
        </p>
        <p>
          <strong>Contact Email</strong> {confirmationData.email}
        </p>
        <p>
          <strong>Payment Method</strong> {confirmationData.paymentMethod}
        </p>

        <div className="confirmation-message-card">
          <h3>Confirmation Sent</h3>
          <p>
            Confirmation has been sent to your email. Check your email for
            details.
          </p>
        </div>

        <div className="confirmation-message-card">
          <h3>Flexible Booking Policy</h3>
          <p>
            You have 24 hours to cancel or modify your booking before penalties
            apply. Contact us or the help line if you need support.
          </p>
        </div>
      </div>

      <button type="button" onClick={() => navigate("/")}>
        Back To Home
      </button>
    </section>
  );
}
