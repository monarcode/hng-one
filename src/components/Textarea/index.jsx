import styles from "./styles.module.scss";


export const Textarea = ({ label, id, placeholder }) => {
  return (
    <div className={styles.group}>
      <label id={id} htmlFor={id} className={styles.label}>
        {label}
      </label>
      <textarea
        name={id}
        className={styles.input}
        rows={7}
        id={id}
        placeholder={placeholder}
        required
      ></textarea>
    </div>
  );
};
