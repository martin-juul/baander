import React, { useEffect, useState } from 'react';
import { Virtuoso } from 'react-virtuoso';

import { Divider, Typography } from '@douyinfe/semi-ui';
import styles from './scroll-list.module.scss';

interface ScrollListProps {
  header?: string;
  listItems: string[];
  totalCount: number;
  style?: React.CSSProperties;
}
export function ScrollList({ header, listItems, totalCount, style }: ScrollListProps) {
  const { Text } = Typography;
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    listItems.splice(0, 0, 'Any');
  }, []);

  return (
    <div className={styles.scrollList}>
      {header && (
        <>
          <Text type="secondary" className={styles.title}>{header}</Text>
          <Divider />
        </>
      )}

      <Virtuoso
        totalCount={totalCount}
        itemContent={(index) => {
          return (
            <div
              className={styles.listItem}
              style={{ backgroundColor: activeIndex === index ? 'var(--semi-color-fill-2)' : 'unset' }}
              onClick={() => setActiveIndex(index)}
            >
              <Text className={styles.text}>{listItems[index]}</Text>
            </div>
          );
        }}
        style={style}
      />
    </div>
  )
}
