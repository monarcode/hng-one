import styles from './Content.module.scss';

interface ContentProps {
  label: string;
  href: string;
  uid: string;
}

const ContentItem = ({ href, uid, label }: ContentProps) => {
  return (
    <a href={href} id={uid} className={styles.item}>
      {label}
    </a>
  );
};
export default ContentItem;
