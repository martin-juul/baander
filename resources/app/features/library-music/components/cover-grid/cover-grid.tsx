import React from 'react';

import styles from './cover-grid.module.scss';

interface CoverGridProps {
  children: React.ReactNode;
}

export function CoverGrid({ children }: CoverGridProps) {

  return (
    <div className={styles.coverGrid}>
      {children}
    </div>
  )
}
