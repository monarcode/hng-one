import { SharePage } from "@components/SharePage";
import styles from "./Header.module.scss";

interface HeaderProps {
  name: string;
  imageUrl: string;
}

export function Header({ name, imageUrl }: HeaderProps): JSX.Element {
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

      <SharePage />
    </div>
  );
}
