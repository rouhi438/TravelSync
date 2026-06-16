import { useLocation } from "react-router-dom";
import styles from "./TravelerProfile.module.css";
import { FaUserCircle } from "react-icons/fa";

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
        <>
          <h2 className={styles.welcome}>Welcome back, {user?.name}!</h2>
          <div className={styles.profileCard}>
            <div className={styles.iconWrapper}>
              <FaUserCircle className={styles.profileIcon} />
            </div>
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
        </>
      )}

      <h3 className={styles.sectionTitle}>Booking History</h3>
      <p>No bookings yet.</p>
    </div>
  );
}
