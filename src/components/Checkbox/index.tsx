import styles from "./style.module.scss";

interface CheckboxProps {
  label: string;
}

export default function Checkbox({ label }: CheckboxProps) {
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
