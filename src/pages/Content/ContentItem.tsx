import { Link } from "react-router-dom";
import styles from "./Content.module.scss";

interface ContentProps {
  label: string;
  href: string;
  uid: string;
  userouter?: boolean;
}

const ContentItem = ({ href, uid, label, userouter = false }: ContentProps) => {
  return (
    <>
      {userouter ? (
        <Link to={href} id="uid" className={styles.item}>
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
