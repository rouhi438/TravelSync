import styles from "./Button.module.css";
export default function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
  disabled = false,
  fullWidth = false,
  ...rest
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${styles.button} ${styles[variant]} ${
        fullWidth ? styles.fullWidth : ""
      }`}
      {...rest}
    >
      {children}
    </button>
  );
}
