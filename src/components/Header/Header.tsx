import styles from './Header.module.scss';

export interface HeaderProps {
  name?: string;
  imageUrl?: string;
}

export function Header({ name, imageUrl }: HeaderProps) {
  return (
    <div className={styles.Header}>
      <img
        src={imageUrl}
        alt="profile picture"
        id="profile__img"
        className={styles.image}
      />
      <p className={styles.name} id="twitter">
        {name}
      </p>
    </div>
  );
}
