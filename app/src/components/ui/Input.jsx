import styles from "./Input.module.css";

export default function Input({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  required,
  ...rest
}) {
  return (
    <div className={styles.wrapper}>
      {label && (
        <label className={styles.label}>
          {label} {required && <span className={styles.required}>*</span>}
        </label>
      )}

      <input
        className={`${styles.input} ${error ? styles.errorInput : ""}`}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...rest}
      />

      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
}
