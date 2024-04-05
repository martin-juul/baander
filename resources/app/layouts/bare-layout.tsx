import { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import styles from './bare-layout.module.scss';

export function BareLayout(_props?: { children?: ReactNode }) {
  return (
    <div className={styles.bareLayout}>
      <div className={styles.main}>
        <div className={styles.login}>
          <Outlet/>
        </div>
      </div>
    </div>
  );
}
