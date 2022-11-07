import { Link } from "react-router-dom";
import styles from "./Content.module.scss";

const ContentItem = ({ href, uid, label, userouter = false }) => {
  return (
    <>
      {userouter ? (
        <Link to={href} id={uid} className={styles.item}>
          {label}
        </Link>
      ) : (
        <a href={href} id={uid} className={styles.item}>
          {label}
        </a>
      )}
    </>
  );
};
export default ContentItem;
