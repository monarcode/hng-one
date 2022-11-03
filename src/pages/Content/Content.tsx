import { Header } from "@components/Header";
import { listData, user } from "@constants/index";
import styles from "./Content.module.scss";
import ContentItem from "./ContentItem";

export function Content(): JSX.Element {
  return (
    <>
      <Header name={user.handle} imageUrl={user.img_url} />
      <div className={styles.Content}>
        {listData.map((item) => (
          <ContentItem key={item.id} {...item} />
        ))}
        <div className={styles.socials}>
          <img
            id="slack"
            data-slack-name="MONARCODE"
            src="slack.svg"
            alt="slack"
          />
          <img src="git.svg" alt="git" />
        </div>
      </div>
    </>
  );
}
