import styles from './Content.module.scss';

interface ContentProps {
  label: string;
  href: string;
  uid: string;
}

export function ContentItem({ label, href, uid }: ContentProps): JSX.Element {
  return (
    <a href={href} id={uid} className={styles.item}>
      {label}
    </a>
  );
}
