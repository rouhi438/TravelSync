import styles from "./Card.module.css";

export default function Card({ image, title, children, onClick }) {
  return (
    <div className={styles.card} onClick={onClick}>
      {image && <img src={image} alt={title} className={styles.image} />}
      <div className={styles.content}>
        {title && <h3 className={styles.title}>{title}</h3>}
        {children}
      </div>
    </div>
  );
}
