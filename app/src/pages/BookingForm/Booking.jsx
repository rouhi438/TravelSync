import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Booking.css";

const buildTravelerForms = (travelerType, count) => {
  return Array.from({ length: count }, (_, index) => {
    const travelerNumber = index + 1;
    const fieldPrefix = `${travelerType}${travelerNumber}`;

    return (
      <fieldset className="traveler-card" key={fieldPrefix}>
        <legend>{`${travelerType} ${travelerNumber}`}</legend>

        <label htmlFor={`${fieldPrefix}-firstName`}>First Name:</label>
        <input
          id={`${fieldPrefix}-firstName`}
          type="text"
          name={`${fieldPrefix}-firstName`}
          required
        />

        <label htmlFor={`${fieldPrefix}-middleName`}>Middle Name:</label>
        <input
          id={`${fieldPrefix}-middleName`}
          type="text"
          name={`${fieldPrefix}-middleName`}
        />

        <label htmlFor={`${fieldPrefix}-lastName`}>Last Name:</label>
        <input
          id={`${fieldPrefix}-lastName`}
          type="text"
          name={`${fieldPrefix}-lastName`}
          required
        />

        <label htmlFor={`${fieldPrefix}-gender`}>Gender:</label>
        <select
          id={`${fieldPrefix}-gender`}
          name={`${fieldPrefix}-gender`}
          defaultValue=""
          required
        >
          <option value="" disabled>
            Select gender
          </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <label htmlFor={`${fieldPrefix}-dob`}>Date of Birth:</label>
        <input
          id={`${fieldPrefix}-dob`}
          type="date"
          name={`${fieldPrefix}-dob`}
          required
        />
      </fieldset>
    );
  });
};

const BookingForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [adultCount, setAdultCount] = useState(1);
  const [childCount, setChildCount] = useState(0);
  const selectedTravel = location.state || {};

  const adultForms = buildTravelerForms("Adult", adultCount);
  const childForms = buildTravelerForms("Child", childCount);

  const handleProceedToCheckout = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const adults = Array.from({ length: adultCount }, (_, index) => {
      const travelerNumber = index + 1;
      return {
        type: "adult",
        firstName: formData.get(`Adult${travelerNumber}-firstName`) || "",
        middleName: formData.get(`Adult${travelerNumber}-middleName`) || "",
        lastName: formData.get(`Adult${travelerNumber}-lastName`) || "",
        gender: formData.get(`Adult${travelerNumber}-gender`) || "",
        dob: formData.get(`Adult${travelerNumber}-dob`) || "",
      };
    });

    const children = Array.from({ length: childCount }, (_, index) => {
      const travelerNumber = index + 1;
      return {
        type: "child",
        firstName: formData.get(`Child${travelerNumber}-firstName`) || "",
        middleName: formData.get(`Child${travelerNumber}-middleName`) || "",
        lastName: formData.get(`Child${travelerNumber}-lastName`) || "",
        gender: formData.get(`Child${travelerNumber}-gender`) || "",
        dob: formData.get(`Child${travelerNumber}-dob`) || "",
      };
    });

    navigate("/checkout", {
      state: {
        adultCount,
        childCount,
        travelers: [...adults, ...children],
        travelDetails: {
          packageName: selectedTravel.packageName || selectedTravel.name || "",
          destination:
            selectedTravel.destination || selectedTravel.location || "",
          duration: selectedTravel.duration || "",
          price: selectedTravel.price || "",
        },
      },
    });
  };

  return (
    <section className="booking-page">
      <h1>Booking Form</h1>

      <form className="booking-form" onSubmit={handleProceedToCheckout}>
        <p>Required*</p>

        <div className="traveler-count-grid">
          <div className="count-field">
            <label htmlFor="adultCount">Adults:</label>
            <select
              id="adultCount"
              value={adultCount}
              onChange={(event) => setAdultCount(Number(event.target.value))}
            >
              {[1, 2, 3, 4, 5, 6].map((count) => (
                <option key={`adult-${count}`} value={count}>
                  {count}
                </option>
              ))}
            </select>
          </div>

          <div className="count-field">
            <label htmlFor="childCount">Children:</label>
            <select
              id="childCount"
              value={childCount}
              onChange={(event) => setChildCount(Number(event.target.value))}
            >
              {[0, 1, 2, 3, 4, 5, 6].map((count) => (
                <option key={`child-${count}`} value={count}>
                  {count}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="traveler-forms">{adultForms}</div>
        {childCount > 0 && <div className="traveler-forms">{childForms}</div>}

        <div className="booking-actions">
          <button type="submit">Proceed to Checkout</button>
        </div>
      </form>
    </section>
  );
};

export default BookingForm;
