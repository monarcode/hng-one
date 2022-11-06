import styles from "./styles.module.scss";


export default function Textinput({ placeholder, label, id }) {
  return (
    <div className={styles.group}>
      <label id={id} htmlFor={id} className={styles.label}>
        {label}
      </label>
      <input
        className={styles.input}
        type="text"
        name={id}
        id={id}
        placeholder={placeholder}
        required
      />
    </div>
  );
}
