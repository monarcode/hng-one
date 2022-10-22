import { listData } from '@constants/index';
import styles from './Content.module.scss';
import { ContentItem } from './ContentItem';

export function Content() {
  return (
    <div className={styles.Content}>
      {listData.map((item) => (
        <ContentItem
          key={item.id}
          href={item.href}
          uid={item.uid}
          label={item.label}
        />
      ))}
    </div>
  );
}
