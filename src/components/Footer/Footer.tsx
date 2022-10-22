import styles from './Footer.module.scss';

export function Footer() {
  return (
    <div className={styles.Footer}>
      <img src="/zuri.svg" alt="zuri" className={styles.zuri} />
      <p className={styles.label}>HNG Internship 9 Frontend Task</p>
      <img src="/I4G.png" alt="i4g" className={styles.i4g} />
    </div>
  );
}
