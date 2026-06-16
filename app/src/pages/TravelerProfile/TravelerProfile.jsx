import { useLocation, Link } from "react-router-dom";
import styles from "./TravelerProfile.module.css";
import {
  FaUserCircle,
  FaUser,
  FaEnvelope,
  FaIdBadge,
  FaSuitcaseRolling,
  FaClock,
  FaSearchLocation,
} from "react-icons/fa";

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
              <FaUser />
              <strong>Name:</strong> {user.name}
            </p>
            <p>
              <FaEnvelope />
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <FaIdBadge />
              <strong>Role:</strong> {user.role}
            </p>
          </div>
        </>
      )}
      <div className={styles.sectionDivider}></div>
      <h3 className={styles.sectionTitle}>
        <FaSuitcaseRolling /> Booking History
      </h3>
      <p className={styles.noBookings}>
        <FaClock /> No bookings yet.
      </p>

      <Link to="/explore" className={styles.browseBtn}>
        <FaSearchLocation /> Browse Trips
      </Link>
    </div>
  );
}
