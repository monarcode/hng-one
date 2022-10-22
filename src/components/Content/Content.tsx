import React from 'react';

import styles from './Content.module.scss';

export interface ContentProps {
  prop?: string;
}

export function Content({prop = 'default value'}: ContentProps) {
  return <div className={styles.Content}>Content {prop}</div>;
}
