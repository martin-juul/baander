import { Artist } from '@/features/library-music/mock.ts';
import { Image, Typography } from '@douyinfe/semi-ui';

import styles from './artist-big-circle.module.scss';

interface ArtistBigCircleProps {
  artist: Artist;
}
export function ArtistBigCircle({ artist }: ArtistBigCircleProps) {
  const { Text } = Typography;


  return (
    <div className={styles.artistBigCircle}>
      <div className={styles.imageContainer}>
        <Image
          src={artist.imgSrc ?? 'https://place-hold.it/300'}
          alt={artist.name}
          className={styles.image}
          preview={false}
        />
      </div>
      <Text>{artist.name}</Text>
    </div>
  )
}
