import { ReactNode } from "react";

import styles from "./Layout.module.scss";

export interface LayoutProps {
  children?: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.Layout}>
      <div className={styles.container}>{children}</div>
    </div>
  );
}
