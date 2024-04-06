import React from 'react';
import Text from '@douyinfe/semi-ui/lib/es/typography/text';
import { Cover } from '@/features/library-music/components/artwork/cover';
import styles from './album.module.scss';

interface AlbumProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'className'> {
  title: string;
  primaryArtist: string;
  imgSrc?: string;
}

export function Album({ title, primaryArtist, imgSrc, ...props }: AlbumProps) {

  return (
    <div className={styles.album} {...props}>
      <Cover imgSrc={imgSrc} size={160} interactive={true} />

      <Text className={styles.title}>{ title }</Text>
      <Text type="secondary">{ primaryArtist }</Text>
    </div>
  )
}
