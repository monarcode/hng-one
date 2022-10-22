import styles from "./Header.module.scss";

export interface HeaderProps {
  name?: string;
  imageUrl?: string;
}

export function Header({ name, imageUrl }: HeaderProps) {
  return (
    <div className={styles.Header}>
      <p className={styles.name}>{name}</p>
    </div>
  );
}
