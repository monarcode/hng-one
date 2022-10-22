import { listData } from '@constants/index';
import styles from './Content.module.scss';
import ContentItem from './ContentItem';

export function Content(): JSX.Element {
  return (
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
  );
}
