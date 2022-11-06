import styles from "./style.module.scss";

export default function Checkbox({ label }) {
  return (
    <div className="flex">
      <input
        className={styles.checkbox}
        type="checkbox"
        name="confirm"
        id="confirm"
      />
      <label id="confirm" htmlFor="confirm" className={styles.label}>
        {label}
      </label>
    </div>
  );
}
