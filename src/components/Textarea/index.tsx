import styles from "./styles.module.scss";

interface TextareaProps {
  label: string;
  id: string;
  placeholder: string;
}

export const Textarea = ({ label, id, placeholder }: TextareaProps) => {
  return (
    <div className={styles.group}>
      <label className={styles.label}>{label}</label>
      <textarea
        className={styles.input}
        rows={7}
        id={id}
        placeholder={placeholder}
      ></textarea>
    </div>
  );
};
