import styles from "./Textinput.module.scss";

interface InputProps {
  placeholder: string;
  label: string;
  id: string;
}

export default function Textinput({ placeholder, label, id }: InputProps) {
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
