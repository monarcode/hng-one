import { Link, useNavigate } from "react-router-dom";
import styles from "./Content.module.scss";

const ContentItem = ({ href, uid, label, userouter = false }) => {
  const navigate = useNavigate();

  return (
    <>
      {userouter ? (
        <button
          onClick={() => navigate("/contact")}
          id={uid}
          className={styles.item}
        >
          {label}
        </button>
      ) : (
        <a href={href} id={uid} className={styles.item}>
          {label}
        </a>
      )}
    </>
  );
};
export default ContentItem;
