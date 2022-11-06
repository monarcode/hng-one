import { SharePage } from "@components/SharePage";
import styles from "./Header.module.scss";

export function Header({ name, imageUrl }) {
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
