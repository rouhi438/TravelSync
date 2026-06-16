import { useLocation } from "react-router-dom";
import styles from "./TravelerProfile.module.css";

export default function TravelerProfile() {
  const location = useLocation();
  const user = location.state?.user;

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Traveler Profile</h2>
      {!user && (
        <p style={{ color: "red" }}>No user data found. Please log in again.</p>
      )}

      {user && (
        <div className={styles.profileCard}>
          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Role:</strong> {user.role}
          </p>
        </div>
      )}

      <h3 className={styles.sectionTitle}>Booking History</h3>
      <p>No bookings yet.</p>
    </div>
  );
}
